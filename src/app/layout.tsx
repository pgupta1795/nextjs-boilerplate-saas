import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/sonner';
import { siteConfig, siteUrls } from '@/lib/config/site';
import { fontHeading, fontSans } from '@/lib/fonts';
import '@/styles/globals.css';
import { type Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name
  },
  description: siteConfig.description,
  metadataBase: new URL(siteUrls.publicUrl),
  keywords: ['Next.js', 'React', 'Next.js Starter kit', 'SaaS Starter Kit'],
  authors: [{ name: 'Pallav Gupta', url: 'https://twitter.com/8233476049' }],
  creator: 'Pallav Gupta',
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    card: 'summary_large_image',
    images: [siteConfig.orgImage],
    creator: '@8233476049'
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
    images: [{ url: siteConfig.orgImage, alt: siteConfig.name }],
    locale: siteConfig.locale,
    url: siteUrls.publicUrl,
    siteName: siteConfig.name
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} overflow-x-hidden font-sans`}
      >
        <Providers>
          {children}
          <Toaster richColors position='top-right' expand />
        </Providers>
      </body>
    </html>
  );
}
