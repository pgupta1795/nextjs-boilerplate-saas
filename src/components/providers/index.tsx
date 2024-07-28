'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootProvider as FumaRootProvider } from 'fumadocs-ui/provider';
import { SessionProvider } from 'next-auth/react';
import { PosthogProvider } from './posthog-provider';
import { ThemeProvider } from './theme-provider';

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const queryClient = new QueryClient();

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <PosthogProvider>
          <FumaRootProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </FumaRootProvider>
        </PosthogProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
