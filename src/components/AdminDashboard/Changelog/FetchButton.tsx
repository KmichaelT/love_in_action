'use client'

import React, { useState } from 'react'
import { Button, useFormFields, useWatchForm, toast, useDocumentInfo } from '@payloadcms/ui'
import './index.scss'
import { fetchGithubChangelogAction } from './actions'

type Props = {
  path: string
}

const FetchButton: React.FC<Props> = ({ path }) => {
  const [loading, setLoading] = useState(false)
  const { getDataByPath, dispatchFields } = useWatchForm()
  const { id: pageId } = useDocumentInfo()

  // Get paths for data access
  const parentPath = path.split('.').slice(0, -1).join('.')
  const blockPath = parentPath.split('.').slice(0, -1).join('.')
  const entriesPath = `${blockPath}.entries`

  const githubSettings: {
    repository?: string
    githubToken?: string
  } = getDataByPath(parentPath)

  const entries: any[] = getDataByPath(entriesPath) || []

  const entriesFields = useFormFields(([fields, dispatch]) => fields)

  // Get the block id to hand it to the server action.
  const blockId = (getDataByPath(blockPath) as any)?.id

  const handleFetch = async () => {
    if (!githubSettings?.repository) {
      toast.error('Please configure a GitHub repository first')
      return
    }

    try {
      setLoading(true)

      if (!pageId || !blockId || typeof pageId !== 'string' || typeof blockId !== 'string') {
        throw new Error('Page or block not found')
      }

      // call the server action
      const { success, status } = await fetchGithubChangelogAction(pageId, blockId)

      if (status === 'No new releases found') {
        toast.info('No new releases found')
        return
      }

      // TODO: make sure to rerender the block after server action succeeded (dont know how)
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
