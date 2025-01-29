# Authentication

PayBlocks comes with built-in authentication support, including Google OAuth integration.

## Google Authentication Setup

1. Create a Google Cloud Project:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select an existing one
   - Enable the Google OAuth2 API

2. Configure OAuth Consent Screen:
   - Go to "OAuth consent screen"
   - Choose "External" user type
   - Fill in the required information
   - Add necessary scopes (email, profile)

3. Create OAuth Credentials:
   - Go to "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - Development: `http://localhost:3000/api/auth/google/callback`
     - Production: `https://your-domain.com/api/auth/google/callback`

4. Set Environment Variables:
```env
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback
```

## Authentication Flow

1. **Login Process**:
   - User clicks "Login with Google"
   - Redirected to Google consent screen
   - After approval, redirected back to your app
   - Session created and user logged in

2. **User Creation**:
   - First-time users automatically get a new account
   - Email and basic profile info synced from Google
   - Additional user fields can be filled later

## Custom Authentication

PayBlocks uses PayloadCMS's authentication system. You can extend it with:

1. Additional OAuth providers
2. Email/password authentication
3. Custom authentication strategies

Refer to [PayloadCMS Authentication docs](https://payloadcms.com/docs/authentication/overview) for more details.

## Security Best Practices

1. **Environment Variables**:
   - Never commit credentials to version control
   - Use different credentials for development and production
   - Regularly rotate secrets

2. **OAuth Settings**:
   - Restrict authorized domains
   - Only request necessary scopes
   - Keep OAuth consent screen information up to date

3. **Session Management**:
   - Configure appropriate session timeouts
   - Implement secure session storage
   - Handle session expiration gracefully
