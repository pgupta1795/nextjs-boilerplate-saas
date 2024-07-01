import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const content = {
  title: 'Subscribe to our newsletter',
  description:
    'Stay up to date with the roadmap progress, announcements and more',
  button: 'Subscribe',
  privacyPolicy:
    'No spam ever, we are care about the protection of your data. Read our',
  privacyPolicyLink: 'Privacy Policy'
};

export default function Newsletter() {
  async function newsLetterAction(formData: FormData) {
    'use server';
    const email = formData.get('email');
    console.log({ email });
  }

  return (
    <section className="py-14 max-w-screen-xl mx-auto text-primary-foreground dark:text-primary-97">
      <div className="relative overflow-hidden mx-4 px-4 py-14 bg-transparent rounded-2xl border border-border bg-page-gradient md:px-8 md:mx-8">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center">
          <div className="space-y-3">
            <h3 className="text-3xl font-bold tracking-tighter font-geist">
              {content.title}
            </h3>
            <hr className="w-1/2 h-[1px] mx-auto mb-5" />
            <p className="leading-relaxed">{content.description}</p>
          </div>
          <div className="mt-6">
            <form
              action={newsLetterAction}
              className="flex items-center justify-center space-x-2 bg-background rounded-lg p-1 sm:max-w-md sm:mx-auto"
            >
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">{content.button}</Button>
            </form>
            <p className="mt-5 max-w-lg text-[15px] sm:mx-auto">
              {content.privacyPolicy}{' '}
              <Link className="underline" href="#">
                {' '}
                {content.privacyPolicyLink}{' '}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
