import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ChevronRight,
  ChromeIcon,
  GithubIcon,
  TwitterIcon
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const content = {
  signUp: 'Get Started',
  loginIn: 'Sign in',
  title: 'Login to start growing your business',
  description: 'Don`t have an account?.',
  images: {
    logo: '/chess-horse.png'
  },
  forgotPass: 'Forgot password?'
};

export default function LoginFormTemplate1() {
  async function loginInAction(formData: FormData) {
    'use server';
    console.log(formData.keys());
  }

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden text-primary-97">
      <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,hsl(var(--primary)),rgba(255,255,255,0))]"></div>
      <div className="w-full  space-y-6 sm:max-w-md md:max-w-xl lg:max-w-xl px-5 py-10 rounded-2xl transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
        <div className="text-center">
          <Image
            src={content.images.logo}
            width={50}
            height={50}
            className="mx-auto rounded-full h-auto w-auto"
            alt="logo"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-2xl font-normal sm:text-3xl tracking-tighter font-geist">
              {content.title}
            </h3>
            <p className="text-primary-99">
              {content.description}{' '}
              <Link
                href="#"
                className="font-medium text-primary hover:text-primary/50"
              >
                {content.signUp}
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-transparent  shadow p-4 py-6 space-y-8 sm:p-6  sm:rounded-lg">
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

          <div className="relative">
            <span className="block w-full h-px bg-transparent"></span>
            <p className="inline-block w-fit text-sm text-gray-200 px-2 absolute -top-2 inset-x-0 mx-auto">
              Or continue with
            </p>
          </div>
          <form action={loginInAction} className="space-y-5">
            <div>
              <label className="font-medium text-primary">Email</label>
              <Input
                type="email"
                required
                className="w-full mt-2 px-3 py-5 bg-transparent outline-none border shadow-sm rounded-lg text-primary-97 border-primary/50"
              />
            </div>
            <div>
              <label className="font-medium text-primary">Password</label>
              <Input
                type="password"
                required
                className="w-full mt-2 px-3 py-5 bg-transparent outline-none border shadow-sm rounded-lg text-primary-97 border-primary/50"
              />
            </div>
            <Button className="transition-all hover:scale-[1.02] bg-gradient-to-br from-primary to-primary-97 ring-offset-1 ring-primary ring-2 w-full">
              {content.loginIn}
              <ChevronRight />
            </Button>
          </form>
        </div>
        <div className="text-center">
          <Link
            href="/forgot-password"
            className="hover:text-primary text-primary-97"
          >
            {content.forgotPass}
          </Link>
        </div>
      </div>
    </main>
  );
}
