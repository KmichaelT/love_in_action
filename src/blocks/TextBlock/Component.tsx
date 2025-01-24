import React from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import type { TextBlock as TextBlockProps } from '@/payload-types'

interface Props extends TextBlockProps {
  disableContainer?: boolean
}

export const TextBlock: React.FC<Props> = (props) => {
  const { content, links, disableContainer } = props

  return (
    <div className={!disableContainer ? 'container py-32' : ''}>
      <div className="w-full">
        {content && <RichText content={content} />}
        <div className="flex flex-col gap-2 sm:flex-row">
          {Array.isArray(links) &&
            links.length > 0 &&
            links.map(({ link }, i) => <CMSLink key={i} {...link} />)}
        </div>
      </div>
    </div>
  )
}
