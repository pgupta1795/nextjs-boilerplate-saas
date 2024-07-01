import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import RadialGradient from '../background/gradient-radial';

const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$49',
    description:
      'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time'
    ]
  },
  {
    name: 'Team',
    id: 'tier-team',
    href: '#',
    priceMonthly: '$79',
    description:
      'Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations'
    ]
  }
];

const content = {
  pricing: 'Pricing',
  rightPriceTitle: 'The right price for you, whoever you are',
  rightPriceDescription:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.',
  discountedTitle: 'Discounted',
  discountedDescription:
    'Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis non voluptatem sunt eos nostrum.',
  discountedLinkText: 'Buy discounted license',
  getStartedText: 'Get started today'
};

export default function PricingTemplate1() {
  return (
    <div className="isolate relative overflow-hidden bg-transparent text-primary-foreground dark:text-primary-97">
      <div className="absolute -z-1 inset-0 h-[600px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-black dark:text-primary/90">
            {content.pricing}
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl font-geist md:leading-4">
            {content.rightPriceTitle}
            <br className="hidden sm:inline lg:hidden" />
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8">
            {content.rightPriceDescription}
          </p>
          <RadialGradient />
        </div>
      </div>
      <div className="flow-root z-20 bg-transparent pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex z-10 flex-col justify-between rounded-3xl bg-transparent/10 p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-black dark:text-primary/90"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-base font-semibold leading-7">
                        /month
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-primary/90"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 shadow-sm border border-solid border-primary/90 hover:border-primary-80/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/90"
                  >
                    {content.getStartedText}
                  </Link>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center  dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-primary/90">
                    {content.discountedTitle}
                  </h3>
                  <p className="mt-1 text-base leading-7">
                    {content.discountedDescription}
                  </p>
                </div>
                <Link
                  href="#"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-primary/90 ring-1 ring-inset ring-primary-90/90 hover:ring-primary-70/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/90"
                >
                  {content.discountedLinkText}{' '}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
