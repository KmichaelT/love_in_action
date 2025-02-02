'use client'

import React, { useState } from 'react'
import { Button, useFormFields, useWatchForm, toast } from '@payloadcms/ui'
import './index.scss'

type Props = {
  path: string
}

const FetchButton: React.FC<Props> = ({ path }) => {
  const [loading, setLoading] = useState(false)
  const { getDataByPath } = useWatchForm()
  
  // Get paths for data access
  const parentPath = path.split('.').slice(0, -1).join('.')
  const blockPath = parentPath.split('.').slice(0, -1).join('.')
  const entriesPath = `${blockPath}.entries`
  
  // Get form fields
  const [{ fields }, dispatchFields] = useFormFields(state => ({
    fields: state.fields,
  }))

  const githubSettings: {
    repository?: string
    githubToken?: string
  } = getDataByPath(parentPath)

  const entries = getDataByPath(entriesPath) || []

  const handleFetch = async () => {
    if (!githubSettings?.repository) {
      toast.error('Please configure a GitHub repository first')
      return
    }

    try {
      setLoading(true)

      // Fetch releases from GitHub API
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
      }
      if (githubSettings.githubToken) {
        headers['Authorization'] = `Bearer ${githubSettings.githubToken}`
      }

      const response = await fetch(
        `https://api.github.com/repos/${githubSettings.repository}/releases`,
        { headers }
      )

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`)
      }

      const releases = await response.json()

      // Get existing GitHub IDs to avoid duplicates
      const existingGithubIds = new Set(
        entries.map((entry: any) => entry.githubId).filter(Boolean)
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
        // Update entries using dispatchFields
        dispatchFields({
          type: 'UPDATE',
          path: entriesPath,
          value: [...newEntries, ...entries],
        })
        toast.success(`Added ${newEntries.length} new releases`)
      } else {
        toast.success('No new releases found')
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to fetch changelog')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      className="changelog-fetch__button"
      onClick={handleFetch}
      disabled={loading || !githubSettings?.repository}
      buttonStyle="secondary"
    >
      {loading ? 'Fetching...' : 'Fetch from GitHub'}
    </Button>
  )
}

export default FetchButton
