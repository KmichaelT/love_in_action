import { cache } from "react";
import { draftMode } from "next/headers";
import { Config } from "@/payload-types";
import { LocalizationConfig } from "payload";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import configPromise from '@payload-config'


export const queryPageBySlug = cache(async ({ slug, locale }: { slug: string, locale: string }) => {
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
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})