'use client';

import { Slot } from '@radix-ui/react-slot';
import { signOut } from 'next-auth/react';

type Props = {
  callbackUrl?: string;
  redirect?: boolean;
  asChild?: boolean;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function SignoutTrigger({
  callbackUrl,
  redirect = true,
  asChild,
  children,
  ...props
}: Props) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      onClick={async () => await signOut({ callbackUrl, redirect })}
      {...props}
    >
      {children}
    </Comp>
  );
}
