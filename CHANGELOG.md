# payblocks

## 1.2.0

### Minor Changes

- b2edb25: Adding support for the form builder to be added to a splitview (changing withoutWrapper to existing property disableContainer).
  Adding asterisks to required fields in form fields.
- c3f3770: Adding multi-slug routing like /a/b/c with nested doc support.

  In detail this adds the following features & fixes:
  Feat: multi-slug app routing
  Feat: multi-slug support in CMSLink
  Feat: multi-slug support in Breadcrumb Link
  Feat: multi-slug support in revalidatePage
  Fix: locales in revalidatePage
  Fix: breadcrumb locale
  Fix: breadcrumb next/link usage
  Feat: multi-slug support in lang switcher
  Feat: multi-slug support in generate static props
  Feat: multi-slug support in preview mode

### Patch Changes

- 0555e7a: moving the NEXT_PUBLIC_SERVER_URL generation out of next conf as this is not working reliably on vercel and is not so clean.
  Making sure, that the URL works both client and server side. Moving form submission to relative path.

## 1.1.0

### Minor Changes

- acd1f7e: Adding the nested docs plugin to pages collection + breadcrumb component + automatic breadcrumb generation + enable or disable breadcrumb on page level
