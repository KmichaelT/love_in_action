/**
 * RichText component for rendering Lexical editor content
 * 
 * @example
 * // With wrapper div (for standalone content sections)
 * <RichText
 *   withWrapper={true}
 *   content={content}
 *   className="my-4"
 *   enableGutter={true}
 *   enableProse={true}
 * />
 * 
 * // Without wrapper (for nested content inside other components)
 * <RichText
 *   withWrapper={false}
 *   content={content}
 * />
 */

import { cn } from '@/utilities/cn'
import React from 'react'

import { OverrideStyle, serializeLexical } from './serialize'

type BaseRichTextProps = {
  /** Raw content object from Lexical editor */
  content: Record<string, any>
  /** Optional style overrides for specific elements */
  overrideStyle?: OverrideStyle
}

type WithWrapperProps = BaseRichTextProps & {
  /** Set to true to wrap content in a div with styling options */
  withWrapper: true
  /** Optional className for the wrapper div */
  className?: string
  /** Enables container padding/margin. Default: true */
  enableGutter?: boolean
  /** Enables Tailwind prose styling. Default: true */
  enableProse?: boolean
}

type WithoutWrapperProps = BaseRichTextProps & {
  /** Set to false to render content without a wrapper div */
  withWrapper?: false
}

type RichTextProps = WithWrapperProps | WithoutWrapperProps

const RichText: React.FC<RichTextProps> = (props) => {
  if (!props.content) {
    return null
  }

  const content = props.content &&
    !Array.isArray(props.content) &&
    typeof props.content === 'object' &&
    'root' in props.content &&
    serializeLexical({ 
      nodes: props.content?.root?.children, 
      overrideStyle: props.overrideStyle 
    })

  if (!props.withWrapper) {
    return <>{content}</>
  }

  return (
    <div
      className={cn(
        {
          'container': props.enableGutter,
          'max-w-none': !props.enableGutter,
          'mx-auto prose dark:prose-invert': props.enableProse,
        },
        props.className,
      )}
    >
      {content}
    </div>
  )
}

export default RichText
