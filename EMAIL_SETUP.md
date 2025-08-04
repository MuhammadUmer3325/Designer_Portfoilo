# Email Setup Guide

## Resend.com Configuration

### Step 1: Get Resend API Key
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the API key

### Step 2: Set Environment Variables
Create a `.env.local` file in your project root and add:

```env
RESEND_API_KEY=your_actual_resend_api_key_here
```

### Step 3: Verify Domain (Optional but Recommended)
1. In Resend dashboard, go to Domains
2. Add your domain (e.g., artathlete.com)
3. Follow the DNS setup instructions
4. This will allow you to send from your custom domain

### Step 4: Test Email Functionality
1. Start your development server: `npm run dev`
2. Go to Contact page
3. Fill out the contact form
4. Submit and check if email is received

## Features
- ✅ Professional email delivery
- ✅ Beautiful HTML email templates
- ✅ Reliable delivery (no spam folder)
- ✅ Free tier: 3,000 emails/month
- ✅ Real-time delivery status

## Troubleshooting
- Make sure RESEND_API_KEY is set correctly
- Check Resend dashboard for delivery status
- Verify your domain if using custom domain 