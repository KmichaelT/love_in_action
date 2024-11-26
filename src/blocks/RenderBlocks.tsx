// import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
// import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
// import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { FeatureBlock } from '@/blocks/Feature/Component'
import { CtaBlock } from '@/blocks/Cta/Component'
import { LogosBlock } from '@/blocks/Logos/Component'

const blockComponents: Record<Page['layout'][0]['blockType'], React.FC<any>> = {
  archive: ArchiveBlock,
  // content: ContentBlock,
  formBlock: FormBlock,
  // mediaBlock: MediaBlock,
  feature: FeatureBlock,
  cta: CtaBlock,
  logos: LogosBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          console.log("blockType", blockType)

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            console.log("Block", Block)

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
