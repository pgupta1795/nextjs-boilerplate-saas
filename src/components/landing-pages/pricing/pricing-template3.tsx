import {
  WebPageHeader,
  WebPageWrapper
} from '@/components/ui-extends/webpage-components';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  type PrincingPlan,
  pricingFeatures,
  pricingPlans
} from '@/lib/config/pricing';
import { siteUrls } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import { CheckIcon, XIcon } from 'lucide-react';
import { redirect } from 'next/navigation';

const content = {
  headerTitle: 'Flexible Pricing Plans for You',
  headerBadge: 'Beta Pricing',
  noHiddenFees: 'No hidden Fees',
  cancelAnytime: '- Cancel at any time',
  getStarted: 'Get Started',
  whatsIncluded: 'What’s included in'
};

export default function PricingTemplate3() {
  return (
    <WebPageWrapper>
      <WebPageHeader title={content.headerTitle} badge={content.headerBadge}>
        <p className='text-center text-base'>
          <span>{content.noHiddenFees} </span>
          <span className='font-light italic text-muted-foreground'>
            {content.cancelAnytime}
          </span>
        </p>
      </WebPageHeader>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {pricingPlans.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} />
        ))}
      </div>
    </WebPageWrapper>
  );
}

function PricingCard({ pricing }: { pricing: PrincingPlan }) {
  return (
    <Card
      className={cn(
        'relative px-6 py-20',
        pricing.buttonHighlighted && 'border-2 border-primary'
      )}
    >
      {pricing.badge && (
        <Badge
          variant='secondary'
          className='absolute inset-x-10 bottom-auto top-12 w-fit'
        >
          {pricing.badge}
        </Badge>
      )}

      <CardHeader>
        <CardTitle className='font-heading text-2xl font-bold'>
          {pricing.title}
        </CardTitle>
        <CardDescription>{pricing.description}</CardDescription>
      </CardHeader>

      <CardContent className='flex flex-col gap-5'>
        <p className='flex items-end gap-2'>
          <span className='font-heading text-4xl font-medium'>
            {pricing.currency.symbol}
            {pricing.price.monthly}
          </span>
          <span className='font-light text-muted-foreground'>
            {pricing.currency.code} {pricing.duration}
          </span>
        </p>
        <CardDescription className='font-light'>
          {pricing.highlight}
        </CardDescription>

        <form
          action={async () => {
            'use server';
            redirect(siteUrls.dashboard.home);
          }}
        >
          <Button
            size='lg'
            className='w-full'
            type='submit'
            variant={pricing.buttonHighlighted ? 'default' : 'secondary'}
          >
            {content.getStarted}
          </Button>
        </form>

        <div className='flex flex-col gap-4 pt-10'>
          <p className='text-sm font-medium'>
            {content.whatsIncluded} {pricing.title}:
          </p>
          <ul className='flex flex-col gap-2'>
            {pricing.uniqueFeatures?.map((feature, index) => (
              <li
                key={feature + ' ' + index}
                className='flex items-start gap-3'
              >
                <CheckIcon className='h-5 w-5 flex-shrink-0' />
                <span className='text-sm'>{feature}</span>
              </li>
            ))}

            {pricingFeatures.map((feature) => (
              <li key={feature.id} className='flex items-start gap-3'>
                {feature.inludedIn.includes(pricing.id) ? (
                  <CheckIcon className='h-5 w-5 flex-shrink-0' />
                ) : (
                  <XIcon className='h-5 w-5 flex-shrink-0 text-muted-foreground/60' />
                )}
                <span
                  className={cn(
                    'text-sm',
                    !feature.inludedIn.includes(pricing.id)
                      ? 'text-muted-foreground/60'
                      : ''
                  )}
                >
                  {feature.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
