import React from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import type { TextBlock as TextBlockProps } from '@/payload-types'


export const TextBlock: React.FC<TextBlockProps> = (props) => {
  const { content, links } = props

  return (
    <div className="container my-16">
      <div className="max-w-3xl mx-auto">
        {content && <RichText content={content} />}
        {Array.isArray(links) && links.length > 0 && links.map(({ link }, i) => (
          <CMSLink key={i} {...link} />
        ))}
      </div>
    </div>
  )
}
