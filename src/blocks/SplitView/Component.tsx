import { cn } from 'src/utilities/cn'
import React from 'react'
import type { SplitViewBlock as SplitViewBlockProps } from '@/payload-types'
import { RenderBlocks } from '../RenderBlocks'

type Props = SplitViewBlockProps

const colsSpanClasses = {
  half: 'lg:col-span-6',
  oneThird: 'lg:col-span-4',
  twoThirds: 'lg:col-span-8',
}

/**
 * Enable columns for a split view with subcomponent blocks
 */
export const SplitViewBlock: React.FC<Props> = (props) => {
  const { columns } = props

  if (!columns?.length) return null

  return (
    <div className="container my-16">
      <div className="grid grid-cols-12 gap-x-8 gap-y-8">
        {columns.map((column, index) => {
          /**
           * This is just a small typescript hack, as do enhance all block types by the "size" property 
           * using the appendSizeFieldToBlock function
           */
          const size = (column as any).size || 'half'
          return (
            <div
              key={index}
              className={cn(
                'col-span-12',
                colsSpanClasses[size],
              )}
            >
              <RenderBlocks blocks={[column]} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
