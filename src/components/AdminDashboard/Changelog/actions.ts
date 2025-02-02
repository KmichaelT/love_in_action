'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function fetchGithubChangelogAction(blockId: string) {
  try {
    const payload = await getPayload({ config: configPromise })

    console.log("block", blockId)
    // Find the changelog block
    const pages = await payload.find({
      collection: 'pages',
      where: {
        
        'layout.id': {
          equals: blockId,
        },
      },
      depth: 1,
    })

    if (pages.docs.length === 0) {
      throw new Error('Changelog block not found')
    }

    const page = pages.docs[0]
    const block = page.layout.find((block: any) => block.id === blockId)

    if (!block?.githubSettings?.repository) {
      throw new Error('GitHub repository not configured')
    }

    payload.logger.info(`Fetching release data from Github for repository ${block.githubSettings.repository}..`)

    // Fetch releases from GitHub API
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    }
    if (block.githubSettings.githubToken) {
      headers['Authorization'] = `Bearer ${block.githubSettings.githubToken}`
    }

    const response = await fetch(
      `https://api.github.com/repos/${block.githubSettings.repository}/releases`,
      { headers }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const releases = await response.json()

    // Get existing GitHub IDs to avoid duplicates
    const existingEntries = block.entries || []
    const existingGithubIds = new Set(
      existingEntries.map((entry: any) => entry.githubId).filter(Boolean)
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
      payload.logger.info(`Found ${newEntries.length} new releases to add`)
      
      // Update the block with new entries
      await payload.update({
        collection: 'pages',
        id: page.id,
        data: {
          layout: page.layout.map((layoutBlock: any) => {
            if (layoutBlock.id === blockId) {
              return {
                ...layoutBlock,
                entries: [...newEntries, ...existingEntries],
              }
            }
            return layoutBlock
          }),
        },
      })
    } else {
      payload.logger.info('No new releases found')
    }

    return { success: true }
  } catch (error) {
    console.error(`Error fetching GitHub changelog: ${error}`)
    throw error
  }
}
