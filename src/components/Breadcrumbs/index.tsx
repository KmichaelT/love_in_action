import * as React from 'react'
import type { Page } from '@/payload-types'
import { cn } from '@/utilities'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface BreadcrumbProps {
  items?:
    | {
        doc?: (string | null) | Page
        url?: string | null
        label?: string | null
        id?: string | null
      }[]
    | null
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbProps) {
  if (!items?.length) return null

  return (
    <div className="container my-12">
      <Breadcrumb>
        <BreadcrumbList className={cn('text-sm text-muted-foreground', className)}>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="hover:text-foreground transition-colors duration-200"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          {items.map((item, index) => (
            <React.Fragment key={item.id || item.url}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index === items.length - 1 ? (
                  <BreadcrumbPage className="font-medium">{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={item.url || '#'}
                    className="hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
