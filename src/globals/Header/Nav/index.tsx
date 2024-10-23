'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

// export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
//   const navItems = header?.navItems || []

//   return (
//     <nav className="flex gap-3 items-center">
//       {navItems.map(({ link }, i) => {
//         return <CMSLink key={i} {...link} appearance="link" />
//       })}
//       <Link href="/search">
//         <span className="sr-only">Search</span>
//         <SearchIcon className="w-5 text-primary" />
//       </Link>
//     </nav>
//   )
// }


import { Navbar1 } from '@/components/block/navbar1'
import { Navbar3 } from '@/components/block/navbar3'
import { Navbar4 } from '@/components/block/navbar4'

// New version for blocks
export const HeaderNavBlocks: React.FC<{ header: HeaderType }> = ({ header }) => {

  switch (header.designVersion) {
    case '1':
      return <Navbar1 header={header} />
    case '3':
      return <Navbar3 header={header} />
    case '4':
      return <Navbar4 header={header} />
  }

  const navItems = header?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
