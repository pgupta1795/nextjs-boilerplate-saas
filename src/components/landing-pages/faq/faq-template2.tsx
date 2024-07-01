import Image from 'next/image';
import { Separator } from '../../ui/separator';

const faqsList = [
  {
    q: 'What are some random questions to ask?',
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
  },
  {
    q: 'Do you include common questions?',
    a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
  },
  {
    q: 'Can I use this for 21 questions?',
    a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
  },
  {
    q: 'Are these questions for girls or for boys?',
    a: 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).'
  },
  {
    q: 'What do you wish you had more talent doing?',
    a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
  }
];

const content = {
  contact: 'Contact Us',
  readMore: 'Read More',
  title: 'Frequently asked questions',
  description: 'All information you need to know',
  images: {
    background: '/abstract-design-2.svg'
  }
};

export default function FAQTemplate2() {
  return (
    <section className="relative text-primary-97">
      <Image
        className="absolute inset-x-0 -top-20 opacity-20 bg-cover bg-center bg-no-repeat"
        src={content.images.background}
        width={1000}
        priority
        height={1000}
        alt="back bg"
      />

      <div className="py-14 relative max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1 ">
          <div className="max-w-lg">
            <h3 className="font-semibold">{content.title}</h3>
            <p className="mt-3 text-3xl font-extrabold sm:text-4xl text-primary-80">
              {content.description}
            </p>
            <Separator className="h-[1px] mt-5 bg-primary/10" />
          </div>
        </div>
        <div className="flex-1 mt-12 md:mt-0">
          <ul className="space-y-4 divide-y">
            {faqsList.map((item, idx) => (
              <li className="py-5" key={idx}>
                <summary className="flex items-center justify-between font-semibold">
                  {item.q}
                </summary>
                <p className="mt-3 text-gray-300 leading-relaxed">{item.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
