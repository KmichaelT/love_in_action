# payblocks

## 1.3.0

### Minor Changes

- f8617b1: Adding contact2 with real contact form data adding the support for newlines in lexical editor, fixing font issue for faq1
- 0e0bb7f: Move Seeding from Backups into own custom header
- b2e98c5: upgrading pacakges and adding resend email adapter

### Patch Changes

- de04d5f: Updating nextjs and packages
- 3187c97: Fix the redirect loop on 404 page by moving the not-found page to the root of the app.
- d5c644d: The redirects where not used as we did throw a notFound before that. Redirects got some more explanation to improve the user UX as well

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
