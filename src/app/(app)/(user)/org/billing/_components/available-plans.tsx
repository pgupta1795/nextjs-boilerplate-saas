'use client';

import { SwitchPlanModal } from '@/app/(app)/(user)/org/billing/_components/switch-plan-modal';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  pricingFeatures,
  pricingIds,
  pricingPlans
} from '@/lib/config/pricing';
import type { OrgSubscription } from '@/lib/types/org-subscription';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckIcon, XIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type AvailablePlansProps = {
  subscription: OrgSubscription;
};

const FormSchema = z.object({
  plan:
    pricingPlans.length > 0
      ? z.enum(pricingPlans.map((plan) => plan.id) as [string, ...string[]])
      : z.enum(['default']),
  billing: z.enum(['monthly', 'yearly'])
});

export const content = {
  availablePlans: {
    title: 'Available Plans',
    description: 'View available plans and change subscription'
  },
  billingCycle: {
    title: 'Billing Cycle',
    description: 'Choose your billing cycle',
    monthly: 'Monthly',
    yearly: 'Yearly'
  },
  plans: {
    title: 'Plans',
    description: 'Choose your plan'
  },
  currentPlan: 'Current Plan',
  monthly: 'Monthly',
  yearly: 'Yearly'
};

export function AvailablePlans({ subscription }: AvailablePlansProps) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      plan:
        pricingPlans.find(
          (plan) =>
            plan.variantId?.monthly === subscription?.variant_id ||
            plan.variantId?.yearly === subscription?.variant_id
        )?.id ?? pricingPlans[0]?.id,
      billing: pricingPlans.find(
        (plan) =>
          plan.variantId?.monthly === subscription?.variant_id ||
          plan.variantId?.yearly === subscription?.variant_id
      )
        ? 'monthly'
        : 'yearly'
    }
  });

  const selectedPlanId = form.watch('plan')!;
  const selectedBilling = form.watch('billing');

  const selectedPlan =
    pricingPlans.find((plan) => plan.id === selectedPlanId) ?? pricingPlans[0];
  const selectedVariantId =
    selectedBilling === 'monthly'
      ? selectedPlan?.variantId?.monthly
      : selectedPlan?.variantId?.yearly;

  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>{content.availablePlans.title}</CardTitle>
          <CardDescription>
            {content.availablePlans.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 lg:grid-cols-2 lg:gap-6'>
            <div>
              <div className='space-y-4'>
                <Card>
                  <CardHeader>
                    <CardTitle>{content.billingCycle.title}</CardTitle>
                    <CardDescription>
                      {content.billingCycle.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      defaultValue={
                        pricingPlans.find(
                          (plan) =>
                            plan.variantId?.monthly ===
                              subscription?.variant_id ||
                            plan.variantId?.yearly === subscription?.variant_id
                        )
                          ? 'monthly'
                          : 'yearly'
                      }
                      {...form.register('billing')}
                      className='grid grid-cols-2 gap-4'
                      onValueChange={(value: string) =>
                        form.setValue('billing', value)
                      }
                    >
                      <div>
                        <RadioGroupItem
                          className='peer sr-only'
                          id='monthly'
                          value='monthly'
                        />
                        <Label
                          className={buttonVariants({
                            variant: 'outline',
                            className:
                              'w-full cursor-pointer peer-data-[state=checked]:border-primary'
                          })}
                          htmlFor='monthly'
                        >
                          {content.billingCycle.monthly}
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          className='peer sr-only'
                          id='yearly'
                          value='yearly'
                        />
                        <Label
                          className={buttonVariants({
                            className:
                              'w-full cursor-pointer peer-data-[state=checked]:border-primary',
                            variant: 'outline'
                          })}
                          htmlFor='yearly'
                        >
                          {content.billingCycle.yearly}
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{content.plans.title}</CardTitle>
                    <CardDescription>
                      {content.plans.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      defaultValue={
                        pricingPlans.find(
                          (plan) =>
                            plan.variantId?.monthly ===
                              subscription?.variant_id ||
                            plan.variantId?.yearly === subscription?.variant_id
                        )?.id ?? pricingPlans[0]?.id
                      }
                      className='space-y-2'
                      {...form.register('plan')}
                      onValueChange={(value: string | undefined) =>
                        form.setValue('plan', value)
                      }
                    >
                      {pricingPlans.map((plan) => (
                        <div key={plan.id}>
                          <RadioGroupItem
                            className='peer sr-only'
                            id={plan.title}
                            value={plan.id}
                          />
                          <Label
                            className='flex cursor-pointer items-center justify-between rounded-lg border border-border p-4 shadow-sm transition-colors hover:bg-muted peer-data-[state=checked]:border-primary'
                            htmlFor={plan.title}
                          >
                            <div className='space-y-1'>
                              <p className='font-heading font-semibold'>
                                {plan.title}
                              </p>
                              <p className='pr-2 text-xs font-light text-muted-foreground'>
                                {plan.description}
                              </p>
                            </div>
                            <div className='font-heading text-lg font-medium'>
                              $
                              {selectedBilling === 'monthly'
                                ? plan.price.monthly
                                : plan.price.yearly}
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className='space-y-4'>
              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>
                    {selectedPlan?.title} Plan
                  </CardTitle>
                  <CardDescription>{selectedPlan?.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-1'>
                    {pricingFeatures.map((feature) => (
                      <li
                        key={feature.id}
                        className={cn(
                          'flex items-center text-sm font-light',
                          !feature.inludedIn.includes(selectedPlanId) &&
                            'text-muted-foreground/70'
                        )}
                      >
                        {feature.inludedIn.includes(selectedPlanId) ? (
                          <CheckIcon className='mr-1 h-4 w-4' />
                        ) : (
                          <XIcon className='mr-1 h-4 w-4 text-muted-foreground/70' />
                        )}
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              {selectedVariantId === subscription?.variant_id ? (
                <div
                  className={buttonVariants({
                    className: 'w-full cursor-not-allowed opacity-70',
                    variant: 'outline'
                  })}
                >
                  {content.currentPlan}
                </div>
              ) : selectedPlan?.id === pricingIds.free ? null : (
                <div className='flex w-full flex-col gap-2'>
                  <SwitchPlanModal
                    cardBrand={subscription?.card_brand ?? ''}
                    lastCardDigits={subscription?.card_last_four ?? ''}
                    currencyCode={selectedPlan?.currency.code ?? 'USD'}
                    currencySymbol={selectedPlan?.currency.symbol ?? '$'}
                    planName={selectedPlan?.title ?? ''}
                    price={
                      selectedBilling === 'monthly'
                        ? selectedPlan?.price.monthly ?? 0
                        : selectedPlan?.price.yearly ?? 0
                    }
                    variantId={selectedVariantId}
                    status={subscription?.status ?? ''}
                  />
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
