# Email Setup Instructions

The contact form is configured to send emails to `tidballmicah@gmail.com` using the Resend email service.

## Setup Steps

1. **Sign up for Resend** (if you haven't already):
   - Go to [https://resend.com/signup](https://resend.com/signup)
   - Create a free account

2. **Get your API key**:
   - Navigate to [https://resend.com/api-keys](https://resend.com/api-keys)
   - Click "Create API Key"
   - Give it a name (e.g., "Portfolio Contact Form")
   - Copy the API key

3. **Configure environment variables**:
   - Create a `.env.local` file in the root of your project
   - Add your Resend API key:
     ```
     RESEND_API_KEY=re_your_api_key_here
     ```
   - The `.env.local` file is already in `.gitignore` so your key will not be committed

4. **Verify your domain** (optional but recommended):
   - By default, emails are sent from `onboarding@resend.dev`
   - To use your own domain:
     - Go to [https://resend.com/domains](https://resend.com/domains)
     - Add and verify your domain
     - Update the `from` field in `app/api/contact/route.ts` to use your verified domain

5. **Test the contact form**:
   - Start your development server: `npm run dev`
   - Navigate to the contact page
   - Fill out and submit the form
   - Check that the email arrives at tidballmicah@gmail.com

## Important Notes

- The free tier of Resend includes 100 emails per day, which should be sufficient for a portfolio site
- Emails sent from the default `onboarding@resend.dev` address will work immediately
- For production, verify your own domain for better deliverability and branding
- The API route is protected against missing fields and invalid email addresses

## Troubleshooting

If emails are not sending:
1. Check that your `RESEND_API_KEY` is correctly set in `.env.local`
2. Restart your development server after adding the environment variable
3. Check the browser console and terminal for error messages
4. Verify your API key is valid in the Resend dashboard
