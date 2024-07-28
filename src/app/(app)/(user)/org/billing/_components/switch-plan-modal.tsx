'use client';

import { SubscribeBtn } from '@/app/(app)/(user)/org/billing/_components/subscribe-btn';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type SwitchPlanModalProps = {
  variantId: number | undefined;
  lastCardDigits: string;
  cardBrand: string;
  currencySymbol: string;
  price: number;
  currencyCode: string;
  planName: string;
  status: string;
};

const content = {
  switchButton: (
    currencySymbol: string,
    price: number,
    currencyCode: string
  ): string => `Switch to ${currencySymbol}${price} ${currencyCode} per month`,
  subscribeButton: (
    currencySymbol: string,
    price: number,
    currencyCode: string
  ): string =>
    `Subscribe to ${currencySymbol}${price} ${currencyCode} per month`,
  confirmSwitch: (planName: string): string =>
    `Are you sure you want to switch to the ${planName} plan?`,
  confirmSubscribe: (planName: string): string =>
    `Are you sure you want to subscribe to the ${planName} plan?`,
  switchDescription: (
    planName: string,
    cardBrand: string,
    lastCardDigits: string,
    price: number,
    currencyCode: string
  ): string =>
    `You are currently subscribed to a different plan. By switching to the <strong>${planName} plan</strong>, your ${cardBrand} card ending in ${lastCardDigits} will be charged <strong>${price} ${currencyCode}</strong> upon confirmation.`,
  subscribeDescription: (
    planName: string,
    price: number,
    currencyCode: string
  ): string =>
    `By subscribing to the <strong>${planName} plan</strong>, you will be charged <strong>${price} ${currencyCode}</strong> upon confirmation. This will be a recurring charge until you cancel your subscription.`,
  cancelButton: 'Cancel',
  actionButtonSwitch: 'Switch',
  actionButtonSubscribe: 'Subscribe'
};

export function SwitchPlanModal({
  cardBrand,
  currencyCode,
  currencySymbol,
  lastCardDigits,
  planName,
  price,
  variantId,
  status
}: SwitchPlanModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const buttonText =
    status === 'active'
      ? content.switchButton(currencySymbol, price, currencyCode)
      : content.subscribeButton(currencySymbol, price, currencyCode);

  const dialogTitle =
    status === 'active'
      ? content.confirmSwitch(planName)
      : content.confirmSubscribe(planName);

  const dialogDescription =
    status === 'active'
      ? content.switchDescription(
          planName,
          cardBrand,
          lastCardDigits,
          price,
          currencyCode
        )
      : content.subscribeDescription(planName, price, currencyCode);

  return (
    <AlertDialog open={isOpen} onOpenChange={(o) => setIsOpen(o)}>
      <AlertDialogTrigger asChild>
        <Button variant='outline' className='w-full'>
          {buttonText}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>
            <p dangerouslySetInnerHTML={{ __html: dialogDescription }} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{content.cancelButton}</AlertDialogCancel>
          <SubscribeBtn variantId={variantId}>
            {status === 'active'
              ? content.actionButtonSwitch
              : content.actionButtonSubscribe}
          </SubscribeBtn>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
