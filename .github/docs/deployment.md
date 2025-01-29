# Deployment

PayBlocks is optimized for deployment on Vercel, but can be deployed to other platforms with some additional configuration.

## Vercel Deployment (Recommended)

### Prerequisites
- A Vercel account
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Steps

1. Connect your repository to Vercel:
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Select the PayBlocks repository

2. Configure environment variables:
   - Copy all variables from your `.env` file
   - Add them to your Vercel project settings
   - Update URLs to match your production domain

3. Deploy:
   - Click "Deploy"
   - Vercel will automatically build and deploy your project
   - Your site will be live at a Vercel-provided URL

### Vercel Blob Storage

PayBlocks uses Vercel Blob Storage by default for media uploads. Make sure to:

1. Enable Vercel Blob in your project settings
2. Add the `BLOB_READ_WRITE_TOKEN` to your environment variables

## Alternative Deployments

For deployments to other platforms, you'll need to modify the storage adapter.

### Required Changes

1. **Storage Adapter**:
   Replace the Vercel Blob storage adapter in `src/config/plugins/upload.ts`:

```typescript
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'

const storageAdapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: process.env.S3_REGION,
    bucket: process.env.S3_BUCKET,
  },
})
```

2. **Environment Variables**:
   Update your environment variables according to your chosen storage solution.

### Platform-Specific Guidelines

#### AWS Elastic Beanstalk

1. Create an Elastic Beanstalk environment
2. Configure environment variables
3. Set up S3 for file storage
4. Deploy using the AWS CLI or console

#### Digital Ocean App Platform

1. Create a new app from your repository
2. Configure environment variables
3. Set up Spaces for file storage
4. Deploy directly from your repository

#### Self-Hosted

1. Set up a Node.js environment
2. Configure your web server (nginx recommended)
3. Set up PM2 or similar process manager
4. Configure environment variables
5. Set up local or cloud storage solution

## Production Considerations

1. **Database**:
   - Use a production MongoDB instance
   - Configure proper authentication
   - Set up database backups

2. **Environment**:
   - Use production-grade environment variables
   - Configure proper security headers
   - Set up SSL/TLS

3. **Monitoring**:
   - Set up error tracking (e.g., Sentry)
   - Configure performance monitoring
   - Set up uptime monitoring

4. **Backups**:
   - Regular database backups
   - Media files backup strategy
   - Environment configuration backup

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Database connection tested
- [ ] Storage adapter properly configured
- [ ] SSL/TLS certificates set up
- [ ] Domain configuration updated
- [ ] Backups configured
- [ ] Monitoring tools set up
- [ ] Security headers configured
- [ ] Build process verified
- [ ] Performance tested
