# Northernware

Marketing site and quote intake form for a local 3D printing business, built with Next.js and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=
QUOTE_TO_EMAIL=hello@example.com
QUOTE_FROM_EMAIL=Northernware <quotes@your-domain.com>
```

Notes:

- `RESEND_API_KEY` comes from your Resend account.
- `QUOTE_TO_EMAIL` is the inbox that should receive quote requests.
- `QUOTE_FROM_EMAIL` must use a sending domain verified in Resend.
- `NEXT_PUBLIC_SITE_URL` should be your production domain after deployment.

## Quote form behavior

The site submits quote requests to `POST /api/quote`.

- Client-side and server-side validation are both enabled.
- Requests are delivered by email through Resend.
- A hidden honeypot field is included to reduce basic spam.

## Vercel deployment

1. Push this project to GitHub.
2. Import the repo into Vercel.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Set `NEXT_PUBLIC_SITE_URL` to your final domain, for example `https://northernware.com`.
5. Deploy.
6. After deploy, update the placeholder business details in `lib/business-details.ts` with your real contact information.

## Before going live

- Verify your sending domain in Resend.
- Replace placeholder phone, email, Messenger link, service area, and social links in `lib/business-details.ts`.
- Add real gallery images if available.
- Connect a real shared storage flow later if you want direct file uploads instead of link-based file sharing.
