import React from 'react'
import { Media } from '@/components/Media'
import type { Page } from '@/payload-types'
import { cn } from '@/utilities/cn'

type Props = Extract<Page['layout'][0], { blockType: 'mediaBlock' }>

export const MediaBlock: React.FC<Props> = (props) => {
  const { media, caption, aspectRatio } = props

  const aspectRatioClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-4/3',
    '1/1': 'aspect-square',
    'original': '',
  }

  return (
    <div className="container my-16">
      <div className="max-w-5xl mx-auto">
        <div className={cn(
          "relative overflow-hidden rounded-lg",
          aspectRatio !== 'original' && aspectRatioClasses[aspectRatio || '16/9']
        )}>
          <Media 
            resource={media} 
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
          />
        </div>
        {caption && (
          <p className="mt-2 text-sm text-muted-foreground text-center">{caption}</p>
        )}
      </div>
    </div>
  )
}
