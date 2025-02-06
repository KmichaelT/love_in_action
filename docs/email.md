# Email Configuration in PayBlocks

PayBlocks uses [Resend](https://resend.com) as its email service provider through the official `@payloadcms/email-resend` adapter. This is the recommended setup for projects deployed on Vercel due to its lightweight nature and excellent integration.

## Current Setup

The project is configured to use Resend for all email communications. This includes:
- User authentication emails (password reset, email verification)
- Form submission notifications
- System notifications

## Configuration

1. Get your Resend API key from the [Resend Dashboard](https://resend.com/dashboard)
2. Add it to your `.env` file:
   ```env
   RESEND_API_KEY=re_xxxx...
   EMAIL_FROM_ADDRESS=info@example.com
   ```



## Alternative Email Providers

While Resend is the default choice, PayloadCMS supports several other email options:

### 1. Nodemailer (SMTP)
For traditional SMTP setup, you can switch to the Nodemailer adapter:

```typescript
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

export default buildConfig({
  email: nodemailerAdapter({
    transportOptions: {
      host: 'smtp.example.com',
      auth: {
        user: 'username',
        pass: 'password'
      },
      port: 587,
      secure: false, // true for 465, false for other ports
    },
  }),
})
```

### 2. SendGrid
You can use SendGrid through Nodemailer's transport:

```typescript
import nodemailer from 'nodemailer'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

export default buildConfig({
  email: nodemailerAdapter({
    transport: nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: 'YOUR_SENDGRID_API_KEY'
      }
    })
  }),
})
```

## Sending Emails Programmatically

You can send emails from anywhere in your code using the PayloadCMS email API:

```typescript
await payload.sendEmail({
  to: 'recipient@example.com',
  subject: 'Hello from PayBlocks',
  html: '<h1>Welcome!</h1><p>Your email content here</p>'
})
```

## Development Testing

During development:
1. For Resend: Use test API keys from your Resend dashboard
2. For Nodemailer: If no configuration is provided, it will automatically use [Ethereal Email](https://ethereal.email) for testing

## Resources
- [PayloadCMS Email Documentation](https://payloadcms.com/docs/email/overview)
- [Resend Documentation](https://resend.com/docs)
- [Nodemailer Documentation](https://nodemailer.com/about/)
