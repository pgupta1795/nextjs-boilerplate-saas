'use client';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { siteUrls } from '@/lib/config/site';
import { type OAuthProviderType } from 'next-auth/providers/oauth-types';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'sonner';

/**  
    For additional social logins:
    - Create a new button for each additional social login. Ensure to use the `variant="outline"` property and set the icon to represent the respective social platform.
    - Add the corresponding configuration for each new social login in the `next-auth` configuration file located at /server/auth.ts
    For more information on providers, refer to the `next-auth` documentation: @see https://next-auth.js.org/providers
*/
export default function SocialLogins() {
  const [isLoading, setIsLoading] = useState(false);

  const authLogin = async (type: OAuthProviderType) => {
    setIsLoading(true);
    try {
      await signIn(type, {
        callbackUrl: siteUrls.dashboard.home,
        redirect: true
      });
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col space-y-2'>
      <Button
        onClick={() => authLogin('github')}
        variant='outline'
        className='w-full gap-2'
        disabled={isLoading}
      >
        <Icons.gitHub className='h-3.5 w-3.5 fill-foreground' />
        <span>Continue with Github</span>
      </Button>
      <Button
        onClick={() => authLogin('google')}
        variant='outline'
        className='w-full gap-2'
        disabled={isLoading}
      >
        <Icons.google className='h-3.5 w-3.5 fill-foreground' />
        <span>Continue with Google</span>
      </Button>
    </div>
  );
}
