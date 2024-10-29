import React from 'react'
import { Badge } from '@/components/ui/badge';

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'


export const Hero1: React.FC<Page['hero']> = ({ links, media, badge, richText }) => {
  console.log(richText)

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && <Badge variant="outline">
              {badge}
            </Badge>}
            {richText && <RichText className="mb-6" content={richText} enableGutter={false} overrideStyle={{
              h1: "my-6 text-pretty text-4xl font-bold lg:text-6xl",
              p: "mb-8 max-w-xl text-muted-foreground lg:text-xl"
            }} />}
            {Array.isArray(links) && links.length > 0 && (
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                {links.map(({ link }, i) => {
                  return (
                    <CMSLink className="w-full sm:w-auto" key={i} {...link} />
                  )
                })}
              </div>
            )}
          </div>
          {media && typeof media === 'object' && (
            <Media imgClassName="max-h-96 w-full rounded-md object-cover" priority resource={media} />
          )}
        </div>
      </div>
    </section>
  );
};