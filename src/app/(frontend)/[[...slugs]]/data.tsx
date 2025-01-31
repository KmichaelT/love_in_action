import { cache } from "react";
import { draftMode } from "next/headers";
import { Config } from "@/payload-types";
import { LocalizationConfig } from "payload";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import configPromise from '@payload-config'


export const queryPageBySlug = cache(async ({ cleanSlugs, locale }: { cleanSlugs: string[], locale: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  // Check if locale is supported
  const { locales } = payload.config.localization as LocalizationConfig;
  if (!locales.map((locale) => locale.code).includes(locale)) {
    console.log("locale is not supported", locale, locales)
    notFound();
  }

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    overrideAccess: draft,
    locale: locale as Config["locale"],
    where: {
      slug: {
        // We query the page by the last slug as this is always unique. 
        // Even for different parent routes it would be unique
        equals: cleanSlugs[cleanSlugs.length - 1],
      },
    },
  })

  const parentPath = result.docs?.[0]?.breadcrumbs?.map((item) => item.url?.split('/').pop()) || [];

  // Check if URL path matches the actual parent structure
  // We remove the last item from cleanSlugs as it's the current page slug
  if (JSON.stringify(parentPath) !== JSON.stringify(cleanSlugs)) {
    console.log("parent path does not match", parentPath, cleanSlugs);
    notFound();
  }

  return result.docs?.[0] || null
})