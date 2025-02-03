import { Changelogblock } from '@/payload-types'
import payload from 'payload'

interface FetchGithubChangelogOptions {
  pageId: string
  blockPath: string
  repository: string
  githubToken?: string | null
}

export const fetchGithubChangelog = async ({
  pageId,
  blockPath,
  repository,
  githubToken,
}: FetchGithubChangelogOptions): Promise<void> => {
  try {
    // Get the page and block
    const page = await payload.findByID({
      collection: 'pages',
      id: pageId,
    })

    // Find the changelog block using the path
    const pathParts = blockPath.split('.')
    let block: any = page
    for (const part of pathParts) {
      block = block[part]
    }

    // Fetch releases from GitHub API
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
    }
    if (githubToken) {
      headers['Authorization'] = `Bearer ${githubToken}`
    }

    const response = await fetch(`https://api.github.com/repos/${repository}/releases`, { headers })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const releases = await response.json()

    // Get existing entries and their GitHub IDs
    const existingEntries = block.entries || []
    const existingGithubIds = new Set(
      existingEntries.map((entry: any) => entry.githubId).filter(Boolean),
    )

    // Convert GitHub releases to changelog entries
    const newEntries = releases
      .filter((release: any) => !existingGithubIds.has(release.id.toString()))
      .map((release: any) => ({
        title: release.name || `Release ${release.tag_name}`,
        version: release.tag_name.replace(/^v/, ''),
        date: release.published_at,
        description: [
          {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [{ text: release.body || '' }],
              },
            ],
          },
        ],
        githubId: release.id.toString(),
      }))

    if (newEntries.length > 0) {
      // Update only the entries field of the specific block
      const update = {
        [pathParts.slice(0, -1).join('.')]: {
          ...block,
          entries: [...newEntries, ...existingEntries],
        },
      }

      await payload.update({
        collection: 'pages',
        id: pageId,
        data: update,
      })
    }
  } catch (error) {
    console.error(`Error fetching GitHub changelog: ${error}`)
    throw error
  }
}
