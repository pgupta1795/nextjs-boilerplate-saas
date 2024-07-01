import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ChromeIcon, GithubIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const content = {
  signUp: 'Get Started',
  signUpTitle: 'Sign up - Start journey',
  signUpSubtitle: 'Already have an account?',
  loginIn: 'Log in',
  title: 'Start growing your business quickly',
  description:
    'Create an account and get access to all features for 30-days, No credit card required.',
  subtitle: 'Join 5.000+ users',
  images: {
    logo: '/chess-horse.png',
    background: '/abstract-design-rounded.svg',
    'background-left': '/chess.png'
  },
  users: ['/chess.png', '/chess-horse.png', '/chess.png']
};

export default function SignupFormTemplate() {
  async function signUpAction(formData: FormData) {
    'use server';
    console.log(formData.keys());
  }

  return (
    <main className="w-full min-h-screen flex overflow-y-hidden text-primary-97">
      <div className="relative flex-1 hidden items-center justify-center min-h-screen bg-transparent lg:flex">
        <div className="relative z-10 w-full max-w-lg">
          <Image
            src={content.images.logo}
            width={50}
            height={50}
            className="mr-auto rounded-full h-auto w-auto"
            alt="logo"
          />
          <div className=" mt-10 space-y-3">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal font-geist tracking-tighter">
              {content.title}
            </h3>

            <Separator className="h-px bg-primary/20 w-[100px] mr-auto" />
            <p className="text-primary-80 text-md md:text-xl font-geist tracking-tight">
              {content.description}
            </p>
            <div className="flex items-center -space-x-2 overflow-hidden">
              {content.users.map((user, index) => (
                <Image
                  key={index}
                  alt="user"
                  src={user}
                  width={0}
                  height={0}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
              <p className="text-sm font-medium translate-x-5">
                {content.subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 my-auto h-full">
          <div className="absolute inset-0 opacity-15 w-full bg-transparent  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <Image
            className="absolute inset-x-0 -top-20 opacity-25 "
            src={content.images['background-left']}
            width={1000}
            height={1000}
            alt="back bg"
          />
        </div>
      </div>
      <div className="flex-1 relative flex items-center justify-center min-h-full">
        <Image
          className="absolute inset-x-0 -z-1 -top-20 opacity-75 content-cover bg-cover bg-center bg-no-repeat w-full h-full"
          src={content.images.background}
          width={1000}
          height={1000}
          alt="back bg"
        />
        <div className="w-full max-w-md md:max-w-lg space-y-8 px-4 text-gray-600 sm:px-0 z-20">
          <div className="relative">
            <Image
              src={content.images.logo}
              width={50}
              height={50}
              className="rounded-full h-auto w-auto bg-blend-screen"
              alt="logo"
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-primary text-3xl font-semibold tracking-tighter sm:text-4xl">
                {content.signUpTitle}
              </h3>
              <p className="text-primary-97">
                {content.signUpSubtitle}{' '}
                <Link
                  href="#"
                  className="font-medium hover:text-primary-97 text-primary"
                >
                  {content.loginIn}
                </Link>
              </p>
            </div>
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
          <Separator className="h-px bg-primary/20" />
          <form className="space-y-5 z-20" action={signUpAction}>
            <div>
              <label className="font-medium text-primary">Name</label>
              <Input
                type="text"
                required
                className="w-full mt-2 px-3 py-5 bg-transparent outline-none border shadow-sm rounded-lg text-primary-97 border-primary/50"
              />
            </div>
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
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
