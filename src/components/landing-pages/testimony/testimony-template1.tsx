import {
  Blockquote,
  BlockquoteAuthor
} from '@/components/ui-extends/block-quote';
import Image from 'next/image';

const content = {
  title: 'Hear from our customers',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.',
  testimonials: [
    {
      avatar:
        'https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif',
      name: 'Martin Escobar',
      title: 'Founder of Meta',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.'
    },
    {
      avatar:
        'https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif',
      name: 'Simon Andrew',
      title: 'Software Engineer',
      quote:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
    },
    {
      avatar:
        'https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif',
      name: 'Micheal Worin',
      title: 'Product Designer',
      quote:
        'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.'
    }
  ]
};

export default function TestimonialsTemplate1() {
  return (
    <section className="relative min-h-screen text-primary-foreground dark:text-primary-90">
      <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Image
        src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
        alt="Background"
        className="absolute z-2 -top-0 left-10 opacity-30 object-cover h-full w-full"
        fill
        priority
      />
      <div className="relative py-14 z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className=" text-3xl font-semibold sm:text-4xl text-primary/90 tracking-tighter">
            {content.title}
          </h3>
          <p className="mt-3 ">{content.description}</p>
        </div>
        <div className="mt-12">
          <ul className="grid items-stretch justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.testimonials.map((item, idx) => (
              <li
                key={idx}
                className="bg-transparent bg-glass-gradient rounded-xl border shadow-md flex-1"
              >
                <Blockquote>
                  <p className="tracking-tighter font-geist text-lg font-normal px-4 py-1">
                    {item.quote}
                  </p>
                  <BlockquoteAuthor>
                    <div className="inline-flex items-center justify-center gap-x-4 p-4 mt-6 bg-page-gradient">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        className="w-16 h-16 rounded-full border-2 border-border"
                        width={64}
                        height={64}
                      />
                      <div>
                        <span className="block font-semibold">{item.name}</span>
                        <span className="block text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </BlockquoteAuthor>
                </Blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
