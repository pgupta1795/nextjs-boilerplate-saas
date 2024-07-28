import Features from '@/components/landing-pages/features/features-template2';
import Hero from '@/components/landing-pages/hero/hero-template6';
import Pricing from '@/components/landing-pages/pricing/pricing-template3';
import Promotion from '@/components/landing-pages/promotion/promotion-template1';
import Testimonials from '@/components/landing-pages/testimony/testimony-template3';
import { WebPageWrapper } from '@/components/ui-extends/webpage-components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build Your MVP in Days, not weeks. Next.js Starter Kit'
};

export const dynamic = 'force-static';

export default async function HomePage() {
  return (
    <WebPageWrapper>
      <Hero />
      <Promotion />
      <Features />
      <Testimonials />
      <Pricing />
    </WebPageWrapper>
  );
}
