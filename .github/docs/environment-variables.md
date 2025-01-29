# Environment Variables

This document lists all the environment variables required to run PayBlocks.

## Required Variables

### Database
```
MONGODB_URI=            # Your MongoDB connection string
```

### Authentication
```
# Google OAuth (optional)
GOOGLE_CLIENT_ID=       # Google OAuth Client ID
GOOGLE_CLIENT_SECRET=   # Google OAuth Client Secret
GOOGLE_CALLBACK_URL=    # OAuth callback URL (e.g., http://localhost:3000/api/auth/google/callback)

# JWT
PAYLOAD_SECRET=         # Random string for JWT encryption
```

### Email (Optional)
```
SMTP_HOST=             # SMTP server host
SMTP_PORT=             # SMTP server port
SMTP_USER=             # SMTP username
SMTP_PASS=             # SMTP password
```

### Storage
```
# For Vercel Blob Storage (Default)
BLOB_READ_WRITE_TOKEN= # Vercel Blob storage token
```

## Development Variables
Both variables are optional. They will work automatically on localhost and use the VERCEL_URL if deployed on Vercel.
```
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000    # Local development URL
NEXT_PUBLIC_SERVER_URL=http://localhost:3000       # Next.js public URL
```

## Production Variables
Both variables are optional. They will work automatically on localhost and use the VERCEL_URL if deployed on Vercel.
```
PAYLOAD_PUBLIC_SERVER_URL=https://your-domain.com  # Production URL
NEXT_PUBLIC_SERVER_URL=https://your-domain.com     # Production Next.js URL
```

## Alternative Storage Adapters

If you're not deploying to Vercel, you'll need to implement a different storage adapter. PayloadCMS supports various storage solutions including:

- AWS S3
- Google Cloud Storage
- Local filesystem

Refer to the [PayloadCMS documentation](https://payloadcms.com/docs/upload/overview) for implementing alternative storage adapters.
