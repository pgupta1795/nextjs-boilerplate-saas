'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { siteUrls } from '@/lib/config/site';
import { useMutation } from '@tanstack/react-query';
import type { User } from 'next-auth';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';

const content = {
  cardTitle: 'Verify your email',
  cardDescription: 'Verify your email to enable all features',
  verifyEmailButton: 'Verify Email',
  verificationSuccess: 'Verification email sent! Check your inbox.',
  verificationError: 'Failed to send verification email'
};

export function UserVerifyForm({ user }: { user: User }) {
  const { isPending, mutate } = useMutation({
    mutationFn: () =>
      signIn('email', {
        email: user.email,
        redirect: false,
        callbackUrl: siteUrls.profile.settings
      }),
    onSuccess: () => {
      toast.success(content.verificationSuccess);
    },
    onError: (error) => {
      toast.error(error.message || content.verificationError);
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{content.cardTitle}</CardTitle>
        <CardDescription>{content.cardDescription}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button disabled={isPending} onClick={() => mutate()} className='gap-2'>
          {isPending ? <Icons.loader className='h-4 w-4' /> : null}
          <span>{content.verifyEmailButton}</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
