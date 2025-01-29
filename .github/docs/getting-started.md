# Getting Started with PayBlocks

## Prerequisites

- Node.js 18+ and pnpm
- MongoDB database
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/trieb-work/payblocks.git or download the zip after your purchase
cd payblocks
```

2. Install dependencies:
```bash
corepack enable
pnpm install
```

3. Copy the environment variables:
```bash
cp .env.example .env
```

4. Configure your environment variables (see [Environment Configuration](./environment-variables.md))

5. Start the development server:
```bash
pnpm dev
```

Your application will be available at `http://localhost:3000`.

## MongoDB Setup

1. Create a MongoDB database (either locally or using MongoDB Atlas)
2. Copy your MongoDB connection string
3. Update your `.env` file with the connection string:
```
MONGODB_URI=your_connection_string
```

## Project Structure

```
payblocks/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── blocks/       # Custom block components
│   ├── collections/  # PayloadCMS collections
│   ├── components/   # React components
│   └── config/       # PayloadCMS configuration
├── public/           # Static assets
└── .github/         # Documentation and GitHub workflows
```

## Development Workflow

1. Start the development server with `pnpm dev`
2. Access the admin panel at `http://localhost:3000/admin`
3. Create your first admin user
4. Start building your website using the block builder

## Next Steps

- Learn about [Custom Blocks](./custom-blocks.md)
- Set up [Authentication](./authentication.md)
- Configure [Deployment](./deployment.md)
