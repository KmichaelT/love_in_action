'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { Navbar1 } from './navbar/navbar1'
// import { Navbar3 } from './navbar/navbar3'
// import { Navbar4 } from './navbar/navbar4'

import type { Header } from '@/payload-types'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  switch (header.designVersion) {
    case '1':
      return <Navbar1 header={header} />
    // case '3':
    //   return <Navbar3 header={header} />
    // case '4':
    //   return <Navbar4 header={header} />
  }
}