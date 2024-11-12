import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from 'src/utilities/cn'
import Link from 'next/link'
import React from 'react'

import type { Page, Post } from '@/payload-types'
import { Icon, IconType } from '@/components/Icon'

type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  iconBefore?: IconType | null
  iconAfter?: IconType | null
  iconClassName?: string
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
    iconBefore,
    iconAfter,
    iconClassName,
  } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${reference.value.slug}`
      : url

  if (!href) return null

  const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {iconBefore && <Icon className={cn("mr-2 h-6", iconClassName)} icon={iconBefore} />}
        {label && label}
        {children && children}
        {iconAfter && <Icon className={cn("ml-2 h-6", iconClassName)} icon={iconAfter} />}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size as typeof sizeFromProps} variant={appearance}>
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {iconBefore && <Icon className={cn("mr-2 h-6", iconClassName)} icon={iconBefore} />}
        {label && label}
        {children && children}
        {iconAfter && <Icon className={cn("ml-2 h-6", iconClassName)} icon={iconAfter} />}
      </Link>
    </Button>
  )
}
