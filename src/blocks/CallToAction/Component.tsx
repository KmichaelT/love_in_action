import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

type Props = Extract<Page['layout'][0], { blockType: 'cta' }>

/**
 * Call to Action Block was part of the standard payload, but is no longer used.
 * This is a placeholder for now.
 */
export const CallToActionBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        {richText && <RichText className="max-w-[48rem] flex items-center" content={richText} enableGutter={false} />}
        <div className="flex flex-col gap-8">
          {/* {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })} */}
        </div>
      </div>
    </div>
  )
}
