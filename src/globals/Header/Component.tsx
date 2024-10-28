import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'
import { DataFromGlobalSlug } from 'payload'

export async function Header() {
  const header = (await getCachedGlobal('header', 1)() as DataFromGlobalSlug<"header">)

  return <HeaderClient header={header} />
}
