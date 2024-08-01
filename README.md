# SAAS STARTER

## Features

Created using Create T3 App

- Nextjs
- NextAuth V4 - Social logins + Magic Link login
- Shadcn
- Drizzle ORM
- Database : Postgres
- [Enhanced Button](https://enhanced-button.vercel.app/)
- Blogs/Docs : [Fumdocs](https://fumadocs.vercel.app/docs/mdx)
- Admin Dashboard
- Invite Users support
- File Upload : UploadThing
- Payments : Lemonsqueezy
- Mails Support : Resend
- Charts : recharts
- Store : Zustand
- i18n for localization and internationalization

  ````tsx
   interface Stock {
   symbol: string;
   shortName: string;
   }

   // In async components
   const t = await getTranslations();
   const tickers: Stock[] = t.raw('stocks');

   // In client components
   const t = useTranslations();
   const tickers: Stock[] = t.raw('stocks');
   ```
  ````
