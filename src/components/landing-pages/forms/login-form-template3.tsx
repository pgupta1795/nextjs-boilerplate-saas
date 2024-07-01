'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  ChevronRight,
  ChromeIcon,
  GithubIcon,
  TwitterIcon
} from 'lucide-react';
import Link from 'next/link';

const content = {
  signUp: 'Get Started',
  signUpDescription: 'Don`t have an account?.',
  loginIn: 'Sign in',
  title: 'Welcome back',
  description: 'Sign in to your account to continue',
  images: {
    logo: '/chess-horse.png'
  },
  forgotPass: 'Forgot password?',
  resetPass: 'Reset password'
};

export default function LoginFormTemplate3() {
  return (
    <div className="flex min-h-[100dvh] relative items-center justify-center bg-background px-4 overflow-x-hidden text-primary-97">
      <div className="absolute inset-0 z-0 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#191919_1px,transparent_1px),linear-gradient(to_bottom,#191919,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,hsl(var(--primary)),transparent)]"></div>
      </div>
      <div className="absolute top-0 z-[-1] h-screen w-screen bg-background bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="mx-auto z-10 w-full max-w-[500px]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-normal font-geist tracking-tighter">
            {content.title}
          </h1>
          <p className="font-geist font-normal">{content.description}</p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              required
              type="password"
            />
          </div>
          <Button className="transition-all hover:scale-[1.02] bg-gradient-to-br from-primary to-primary-97 ring-offset-1 ring-primary ring-2 w-full">
            {content.loginIn}
            <ChevronRight />
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p>
            {content.signUpDescription}
            <Link
              className="font-medium text-primary underline-offset-4 hover:underline dark:text-primary ml-2"
              href="#"
            >
              {content.signUp}
            </Link>
          </p>
          <p className="mt-4">
            {content.forgotPass}
            <Link
              className="font-medium underline-offset-4 hover:underline text-primary ml-2"
              href="#"
            >
              {content.resetPass}
            </Link>
          </p>
        </div>
        <div className="mt-6 border-t pt-6">
          <div className="grid grid-cols-3 gap-x-3">
            <Button
              variant="link"
              className="group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50"
            >
              <ChromeIcon className="w-5 h-5 group-hover:-translate-y-1 duration-300 transition-all group-hover:tranistion-transform translate-y-0" />
            </Button>

            <Button
              variant="link"
              className="group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50"
            >
              <TwitterIcon className="w-5 h-5 group-hover:-translate-y-1 duration-300 transition-all group-hover:tranistion-transform translate-y-0" />
            </Button>
            <Button
              variant="link"
              className="group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50"
            >
              <GithubIcon className="w-5 h-5 group-hover:-translate-y-1 duration-300 transition-all group-hover:tranistion-transform translate-y-0" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
