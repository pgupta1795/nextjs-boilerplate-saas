import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRightIcon, Mail, SendHorizonalIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '../../ui/separator';

const content = {
  contact: 'Contact Us',
  readMore: 'Read More',
  title: 'How can we help?',
  description:
    'Everything you need to know about the product. Can’t find the answer you’re looking for? feel free to',
  images: {
    background: '/abstract-design-2.svg'
  }
};

const faqsList = [
  {
    q: 'What are some random questions to ask?',
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    href: '#'
  },
  {
    q: 'Do you include common questions?',
    a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    href: '#'
  },
  {
    q: 'Can I use this for 21 questions?',
    a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    href: '#'
  },
  {
    q: 'Are these questions for girls or for boys?',
    a: 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).',
    href: '#'
  },
  {
    q: 'What do you wish you had more talent doing?',
    a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    href: '#'
  }
];

export default function FAQTemplate1() {
  async function contactAction(formData: FormData) {
    'use server';
    console.log(formData.keys());
  }

  return (
    <section className="w-full h-full relative text-primary-97">
      <Image
        className="absolute inset-x-0 -top-20 opacity-25 bg-center bg-cover bg-no-repeat object-cover -z-10"
        src={content.images.background}
        width={1000}
        height={1000}
        alt="back bg"
      />

      <div className="pt-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-left sm:max-w-md sm:mr-auto">
          <h3 className="font-geist text-3xl font-extrabold sm:text-4xl">
            {content.title}
          </h3>
          <div>
            <p className="text-primary-80">{content.description}</p>
          </div>
          <p className="text-primary-80">
            <Link
              className="text-primary font-semibold whitespace-nowrap"
              href="#contact"
            >
              {content.contact}
            </Link>
          </p>
          <form
            action={contactAction}
            className="mx-auto sm:mx-auto flex space-x-2"
          >
            <div className="relative">
              <Mail className="w-6 h-6 text-primary absolute left-3 inset-y-0 my-auto" />
              <Input
                type="text"
                placeholder="Enter your email"
                className="rounded-lg pl-12 pr-3 py-2 border"
              />
            </div>
            <Button
              size="icon"
              title="Contact"
              variant="linkHover2"
              type="submit"
              className="space-x-2 space-y-4"
            >
              <SendHorizonalIcon />
            </Button>
          </form>
        </div>
        <Separator className="h-[1px] bg-primary/10 mt-4" />
        <div className="mt-12">
          <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
            {faqsList.map((item, idx) => (
              <li key={idx} className="space-y-3 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-primary-90">
                  {item.q}
                </summary>
                <p className="text-gray-200 leading-relaxed">{item.a}</p>
                <Link
                  href={item.href}
                  className="flex items-center gap-x-1 text-sm text-primary hover:text-primary-80 duration-150 font-medium"
                >
                  {content.readMore}
                  <ArrowRightIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
