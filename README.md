# Payblocks

Payblocks is a powerful website builder that combines the best of two worlds: PayloadCMS's robust content management capabilities and shadcnblocks' extensive UI component library. The name "Payblocks" reflects this fusion - "Pay" from PayloadCMS and "Blocks" from shadcnblocks.

This project transforms the traditional PayloadCMS starter into a feature-rich website builder with a beautiful, modern UI and an extensive collection of pre-built components. Whether you're building a corporate website, a portfolio, or a complex web application, Payblocks provides all the building blocks you need.

## ✨ Key Features

- 🎨 **Rich Component Library**
  - Extensive collection of pre-built blocks from shadcnblocks
  - Multiple variants for each component type:
    - 5+ FAQ layouts
    - 15+ CTA designs
    - 6+ Gallery layouts
    - Various form components
  - All components are fully customizable and responsive

- 🔒 **Enhanced Security**
  - Cloudflare Turnstile integration for form protection
  - Secure authentication system
  - Login with Google
  - Role-based access control

- 🚀 **Advanced Features**
  - Layout Builder with drag-and-drop functionality
  - Live Preview for real-time content editing
  - Draft Preview system
  - SEO optimization tools
  - Redirects management
  - Advanced form builder with various field types

- 💻 **Developer Experience**
  - Built with Next.js and TypeScript
  - Shadcn/ui integration for consistent UI components
  - MongoDB/PostgreSQL database support
  - Email integration with Nodemailer
  - Cloud storage with Vercel Blob

## Quick Start

To spin up this project locally, follow these steps:

### Development

1. First clone the repo or download the zip file if you have not done so already
1. `cd payload-starter && cp .env.example .env` to copy the example environment variables
1. Create a local or [cloud mongodb database/cluster](https://www.mongodb.com/de-de/cloud/atlas/register) and fill in the `MONGODB_URI` in the `.env` file. Make sure to also include the database name in the connection URL (For example `payload-template-website` as in .env.example)
1. `pnpm install && pnpm dev` to install dependencies and start the dev server
1. Visit `http://localhost:3000` to open the app in your browser. If your DB was empty you should see a not found page.
1. Visit `http://localhost:3000/admin` to open the admin panel in your browser. On first login, you will be asked to create an admin user.
1. Optional: Seed the database with a few pages by clicking on the "Seed DB" button in the Admin panel home page.

That's it! Changes made in `./src` will be reflected in your app. Check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/beta/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel and unpublished content. See [Access Control](#access-control) for more details.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/beta/examples/auth) or the [Authentication](https://payloadcms.com/docs/beta/authentication/overview#authentication-overview) docs.

- #### Posts

  Posts are used to generated blog posts, news articles, or any other type of content that is published over time. All posts are layout builder enabled so you can generate unique layouts for each post using layout-building blocks, see [Layout Builder](#layout-builder) for more details. Posts are also draft-enabled so you can preview them before publishing them to your website, see [Draft Preview](#draft-preview) for more details.

- #### Pages

  All pages are layout builder enabled so you can generate unique layouts for each page using layout-building blocks, see [Layout Builder](#layout-builder) for more details. Pages are also draft-enabled so you can preview them before publishing them to your website, see [Draft Preview](#draft-preview) for more details.

- #### Media

  This is the uploads enabled collection used by pages, posts, and projects to contain media like images, videos, downloads, and other assets.

- #### Categories

  A taxonomy used to group posts together. Categories can be nested inside of one another, for example "News > Technology". See the official [Payload Nested Docs Plugin](https://payloadcms.com/docs/beta/plugins/nested-docs) for more details.

### Globals

See the [Globals](https://payloadcms.com/docs/configuration/globals) docs for details on how to extend this functionality.

- `Header`

  The data required by the header on your front-end like nav links.

- `Footer`

  Same as above but for the footer of your site.

## Access control

Basic access control is setup to limit access to various content based based on publishing status.

- `users`: Users can access the admin panel and create or edit content.
- `posts`: Everyone can access published posts, but only users can create, update, or delete them.
- `pages`: Everyone can access published pages, but only users can create, update, or delete them.

For more details on how to extend this functionality, see the [Payload Access Control](https://payloadcms.com/docs/beta/access-control/overview#access-control) docs.

## Layout Builder

Create unique page layouts for any type of content using a powerful layout builder. This template comes pre-configured with the following layout building blocks:

- Hero
- Content
- Media
- Call To Action
- Archive

Each block is fully designed and built into the front-end website that comes with this template. See [Website](#website) for more details.

## Lexical editor

A deep editorial experience that allows complete freedom to focus just on writing content without breaking out of the flow with support for Payload blocks, media, links and other features provided out of the box. See [Lexical](https://payloadcms.com/docs/beta/lexical/overview) docs.

## Draft Preview

All posts and pages are draft-enabled so you can preview them before publishing them to your website. To do this, these collections use [Versions](https://payloadcms.com/docs/beta/configuration/collections#versions) with `drafts` set to `true`. This means that when you create a new post, project, or page, it will be saved as a draft and will not be visible on your website until you publish it. This also means that you can preview your draft before publishing it to your website. To do this, we automatically format a custom URL which redirects to your front-end to securely fetch the draft version of your content.

Since the front-end of this template is statically generated, this also means that pages, posts, and projects will need to be regenerated as changes are made to published documents. To do this, we use an `afterChange` hook to regenerate the front-end when a document has changed and its `_status` is `published`.

For more details on how to extend this functionality, see the official [Draft Preview Example](https://github.com/payloadcms/payload/tree/beta/examples/draft-preview).

## Live preview

In addition to draft previews you can also enable live preview to view your end resulting page as you're editing content with full support for SSR rendering. See [Live preview docs](https://payloadcms.com/docs/beta/live-preview/overview) for more details.

## SEO

This template comes pre-configured with the official [Payload SEO Plugin](https://payloadcms.com/docs/beta/plugins/seo) for complete SEO control from the admin panel. All SEO data is fully integrated into the front-end website that comes with this template. See [Website](#website) for more details.

## Redirects

If you are migrating an existing site or moving content to a new URL, you can use the `redirects` collection to create a proper redirect from old URLs to new ones. This will ensure that proper request status codes are returned to search engines and that your users are not left with a broken link. This template comes pre-configured with the official [Payload Redirects Plugin](https://payloadcms.com/docs/beta/plugins/redirects) for complete redirect control from the admin panel. All redirects are fully integrated into the front-end website that comes with this template. See [Website](#website) for more details.

## Website

This template includes a beautifully designed, production-ready front-end built with the [Next.js App Router](https://nextjs.org), served right alongside your Payload app in a instance. This makes it so that you can deploy both your backend and website where you need it.

Core features:

- [Next.js App Router](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [React Hook Form](https://react-hook-form.com)
- [Payload Admin Bar](https://github.com/payloadcms/payload-admin-bar)
- [TailwindCSS styling](https://tailwindcss.com/)
- [shadcn/ui components](https://ui.shadcn.com/)
- Authentication
- Fully featured blog
- Publication workflow
- User accounts
- Dark mode
- Pre-made layout building blocks
- SEO
- Redirects
- Live preview

### Cache

Although Next.js includes a robust set of caching strategies out of the box, Payload Cloud proxies and caches all files through Cloudflare using the [Official Cloud Plugin](https://github.com/payloadcms/plugin-cloud). This means that Next.js caching is not needed and is disabled by default. If you are hosting your app outside of Payload Cloud, you can easily reenable the Next.js caching mechanisms by removing the `no-store` directive from all fetch requests in `./src/app/_api` and then removing all instances of `export const dynamic = 'force-dynamic'` from pages files, such as `./src/app/(pages)/[slug]/page.tsx`. For more details, see the official [Next.js Caching Docs](https://nextjs.org/docs/app/building-your-application/caching).

## Development

To spin up this example locally, follow the [Quick Start](#quick-start). Then [Seed](#seed) the database with a few pages, posts, and projects.

### Customizing Fonts

Payblocks uses the Geist font family by default, but you can easily customize the fonts to match your brand. The fonts are configured in two places:

1. **Frontend Layout (`src/app/(frontend)/layout.tsx`):**
   - Import your desired fonts from `next/font/google` or any other font source
   - Replace the font assignments for `mono` and `sans`:
   ```typescript
   const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })
   const sans = Geist({ subsets: ['latin'], variable: '--font-sans' })
   ```
   - The `variable` names (`--font-mono` and `--font-sans`) should remain unchanged as they are used by Tailwind

2. **Tailwind Config (`tailwind.config.mjs`):**
   - The font variables are already configured in the Tailwind theme
   - No changes are needed in the Tailwind config as long as you keep the variable names consistent

Example of changing to a different font:
```typescript
import { Inter, Roboto_Mono } from 'next/font/google'

const mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
```

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

### Seed

To seed the database with a few pages, posts, and projects you can click on the "Seed DB" button in the Admin panel home page.

> NOTICE: The Backup section and Seed DB button is only available if you are logged in as an admin and if you have the `MONGODB_URI` environment variable set and configured.

> WARNING: seeding the database is destructive because it drops your current database to populate a fresh one from the seed template. Only run this command if you are starting a new project or can afford to lose your current data.

## Production

To run Payload in production, you need to build and start the Admin panel. To do so, follow these steps:

1. Invoke the `next build` script by running `pnpm build` or `npm run build` in your project root. This creates a `.next` directory with a production-ready admin bundle.
1. Finally run `pnpm start` or `npm run start` to run Node in production and serve Payload from the `.build` directory.
1. When you're ready to go live, see [Deployment](#deployment) for more details.

### Deploying to Payload Cloud

The easiest way to deploy your project is to use [Payload Cloud](https://payloadcms.com/new/import), a one-click hosting solution to deploy production-ready instances of your Payload apps directly from your GitHub repo.

### Deploying to Vercel

Coming soon.

### Self-hosting

Before deploying your app, you need to:

1. Ensure your app builds and serves in production. See [Production](#production) for more details.
2. Serve it from a

You can also deploy your app manually, check out the [deployment documentation](https://payloadcms.com/docs/beta/production/deployment) for full details.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
