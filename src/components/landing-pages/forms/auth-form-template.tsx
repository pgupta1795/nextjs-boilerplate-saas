'use client';

import SocialLogins from '@/components/landing-pages/forms/social-logins-template';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Icons } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { siteUrls } from '@/lib/config/site';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const content = {
  createAccount: 'Create an account',
  loginAccount: 'Login to your account',
  alreadyHaveAccount: 'Already have an account? Login',
  dontHaveAccount: "Don't have an account? SignUp",
  emailPlaceholder: 'hey@example.com',
  emailLabel: 'Email',
  emailDescription: "We'll never share your email with anyone else.",
  continueWithEmail: 'Continue with Email',
  orText: 'OR',
  checkEmail: 'Check your email for the magic link',
  checkSpam: "also check your spam folder if you don't see it.",
  errorOccurred: 'An error occurred. Please try again later.'
};

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address')
});

type formSchemaType = z.infer<typeof formSchema>;

type AuthFormProps = { type: 'signup' | 'login' };

export default function AuthForm({ type }: AuthFormProps) {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' }
  });
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data: formSchemaType) => {
    setIsLoading(true);
    try {
      await signIn('email', {
        email: data.email,
        callbackUrl: siteUrls.dashboard.home,
        redirect: false
      });
      toast.success(content.checkEmail, {
        description: content.checkSpam
      });
    } catch (error) {
      toast.error(content.errorOccurred);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='bg w-full max-w-sm space-y-6'
      >
        <div className='flex flex-col items-center space-y-4'>
          <Link
            href={siteUrls.home}
            className='flex w-fit items-center transition-transform hover:scale-90'
          >
            <Icons.logoIcon className='h-10 w-10 fill-primary' />
          </Link>
          <div className='flex flex-col items-center space-y-1'>
            <h1 className='text-center text-2xl font-medium'>
              {type === 'signup' ? content.createAccount : content.loginAccount}
            </h1>
            <Link
              href={
                type === 'signup' ? siteUrls.auth.login : siteUrls.auth.signup
              }
              className='text-center text-sm text-muted-foreground underline underline-offset-4'
            >
              {type === 'signup'
                ? content.alreadyHaveAccount
                : content.dontHaveAccount}
            </Link>
          </div>
        </div>

        <div className='space-y-3'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{content.emailLabel}</FormLabel>
                <FormControl>
                  <Input
                    className='bg-background'
                    placeholder={content.emailPlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormDescription>{content.emailDescription}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading}
            aria-disabled={isLoading}
            type='submit'
            className='w-full gap-2'
          >
            {isLoading && <Icons.loader className='h-4 w-4' />}
            <span>{content.continueWithEmail}</span>
          </Button>
        </div>

        <div className='relative flex items-center justify-center'>
          <Separator className='w-full' />
          <p className='absolute bg-background px-2 text-sm font-medium text-muted-foreground'>
            {content.orText}
          </p>
        </div>

        <SocialLogins />
      </form>
    </Form>
  );
}
