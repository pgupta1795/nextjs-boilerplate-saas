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
  title: 'Log in to your account',
  description: 'Don`t have an account?.',
  continueWith: 'Or continue with',
  images: {
    logo: '/chess-horse.png'
  },
  forgotPass: 'Forgot password?'
};

export default function LoginFormTemplate2() {
  async function loginInAction(formData: FormData) {
    'use server';
    console.log(formData.keys());
  }
  return (
    <main
      style={{
        background:
          'linear-gradient(0.0deg, rgba(192, 132, 252, 0) 20.79%, hsl(var(--primary)/40) 40.92%, rgba(204, 171, 238, 0) 70.35%)'
      }}
      className="w-full min-h-screen flex flex-col items-center justify-center relative text-primary-97"
    >
      <div className="max-w-sm w-full space-y-8">
        <div className="text-left">
          <Image
            src={content.images.logo}
            width={50}
            height={50}
            className="mr-auto rounded-full h-auto w-auto"
            alt="logo"
          />
          <div className="mt-5 space-y-2 mr-auto">
            <h3 className="text-2xl font-normal sm:text-3xl tracking-tighter font-geist">
              {content.title}
            </h3>
            <p className="text-primary-80">
              {content.description}
              <Link
                href="#"
                className="font-medium text-primary hover:text-primary/50"
              >
                {content.signUp}
              </Link>
            </p>
          </div>
        </div>
        <form action={loginInAction}>
          <div>
            <label className="font-medium">Email</label>
            <Input
              type="email"
              required
              className="w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none  focus:border-pink-600/50 shadow-sm rounded-lg border-white/20 border-[1px]"
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
          <Button className="w-full mt-2 group px-4 py-4 tracking-tighter text-xl font-medium dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] hover:bg-transparent/10 active:bg-primary-90 rounded-lg duration-150 text-primary-97 hover:text-primary-95">
            {content.loginIn}
            <ChevronRight className="inline-flex justify-center items-center w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
          </Button>
        </form>
        <div className="relative">
          <span className="block w-full h-px "></span>
          <p className="inline-block w-fit text-sm px-2 absolute -top-2 inset-x-0 mx-auto">
            {content.continueWith}
          </p>
        </div>
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
