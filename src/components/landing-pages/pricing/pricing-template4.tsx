'use client';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { CheckIcon, ChevronRight, MinusIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface Plan {
  name: string;
  desc: string;
  price: string;
}

interface TableItem {
  name: string;
  basic: any; // Update this type according to the actual data type
  business: any; // Update this type according to the actual data type
  enterprise: any; // Update this type according to the actual data type
}

interface Table {
  label: string;
  label_icon: JSX.Element;
  items: TableItem[];
}

const plans: Plan[] = [
  {
    name: 'Basic',
    desc: 'Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.',
    price: '15'
  },
  {
    name: 'Business',
    desc: 'Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.',
    price: '20'
  },
  {
    name: 'Enterprise',
    desc: 'Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.',
    price: '50'
  }
];

const tables: Table[] = [
  {
    label: 'Features',
    label_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    items: [
      {
        name: 'Aliquam finibus',
        basic: CheckIcon,
        business: CheckIcon,
        enterprise: CheckIcon
      },
      {
        name: 'Vestibulum tristique',
        basic: MinusIcon,
        business: CheckIcon,
        enterprise: CheckIcon
      },
      {
        name: 'Aliquam finibus',
        basic: MinusIcon,
        business: MinusIcon,
        enterprise: CheckIcon
      },
      {
        name: 'Praesent aliquet',
        basic: MinusIcon,
        business: '150GB',
        enterprise: 'Unlimited'
      }
    ]
  },
  {
    label: 'Analytics',
    label_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    items: [
      {
        name: 'Aliquam finibus',
        basic: CheckIcon,
        business: CheckIcon,
        enterprise: CheckIcon
      },
      {
        name: 'Vestibulum tristique',
        basic: MinusIcon,
        business: CheckIcon,
        enterprise: CheckIcon
      },
      {
        name: 'Aliquam finibus',
        basic: MinusIcon,
        business: MinusIcon,
        enterprise: CheckIcon
      },
      {
        name: 'Lorinto dinor',
        basic: '30',
        business: '60',
        enterprise: 'Custom'
      },
      {
        name: 'Praesent aliquet',
        basic: 'Limited',
        business: 'Limited',
        enterprise: CheckIcon
      },
      {
        name: 'Praesent aliquet',
        basic: MinusIcon,
        business: '150GB',
        enterprise: 'Unlimited'
      }
    ]
  },
  {
    label: 'Support',
    label_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
    items: [
      {
        name: 'Aliquam finibus',
        basic: CheckIcon,
        business: CheckIcon,
        enterprise: CheckIcon
      },
      {
        name: 'Vestibulum tristique',
        basic: MinusIcon,
        business: CheckIcon,
        enterprise: CheckIcon
      },
      {
        name: 'Aliquam finibus',
        basic: MinusIcon,
        business: MinusIcon,
        enterprise: CheckIcon
      },
      {
        name: 'Praesent aliquet',
        basic: MinusIcon,
        business: '150GB',
        enterprise: 'Unlimited'
      }
    ]
  }
];

export default function PricingTemplate4() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[0]);

  const renderIcon = (Icon: any) => {
    if (typeof Icon === 'string') return Icon;
    return <Icon className="w-6 h-6" />;
  };

  const content = {
    pricing: 'Pricing',
    title: 'Compare our plans and find yours',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    signUp: 'Get Started'
  };

  return (
    <section className="py-14 max-w-screen-xl mx-auto dark:text-primary-97 text-primary-foreground relative">
      <Image
        src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
        className="absolute top-0 left-0 w-auto h-auto"
        width={0}
        height={0}
        alt="img"
      />
      <div>
        <div className="relative ml-6 max-w-xl mr-auto  space-y-3 px-4 sm:text-left md:px-0">
          <h3 className="font-semibold">{content.pricing}</h3>
          <p className="tracking-tighter font-geist text-3xl font-normal sm:text-6xl">
            {content.title}
          </p>
          <div className="max-w-xl">
            <p>{content.description}</p>
          </div>
        </div>
        <div className="mt-16">
          <div className="py-6 border-b bg-background border border-border dark:box-shadow dark:box-shadow-inset rounded-xl">
            <div className="max-w-screen-xl mx-auto">
              <ul className="ml-auto flex gap-x-6 px-4 md:px-8 lg:max-w-3xl">
                {plans.map((item, idx) => (
                  <li
                    key={idx}
                    className={cn(
                      'space-y-4 w-full lg:block',
                      item.name !== selectedPlan.name && 'hidden'
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-primary">
                        {item.name}
                      </span>
                      <div className="relative lg:hidden">
                        <Select
                          defaultValue={plans[0].name}
                          onValueChange={(value) => {
                            const selected = plans.find(
                              (plan) => plan.name === value
                            );
                            setSelectedPlan(selected as Plan);
                          }}
                          value={selectedPlan.name}
                        >
                          <SelectTrigger className="bg-transparent appearance-none outline-none px-8 cursor-pointer focus:ring-0">
                            <SelectValue placeholder="Select plan" />
                          </SelectTrigger>
                          <SelectContent>
                            {plans.map((plan) => (
                              <SelectItem key={plan.name} value={plan.name}>
                                {plan.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="text-gray-200 text-3xl font-semibold">
                      {item.price}{' '}
                      <span className="text-xl text-gray-100 font-normal">
                        /mo
                      </span>
                    </div>
                    <p className="text-sm">{item.desc}</p>
                    <Button className="mt-4 transition-all hover:scale-[1.02] bg-gradient-to-br from-primary to-primary-97 ring-offset-1 ring-primary ring-2 w-full">
                      {content.signUp}
                      <ChevronRight />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto mt-10 space-y-4 px-4 overflow-auto md:overflow-visible md:px-8">
            {tables.map((table, idx) => (
              <table key={idx} className="w-full table-auto text-sm text-left">
                <thead className="text-primary font-medium border-b">
                  <tr>
                    <th className="z-20 top-12 py-6">
                      <div className="flex items-center gap-x-3">
                        <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                          {table.label_icon}
                        </div>
                        <h4 className="text-xl font-medium">{table.label}</h4>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-100 divide-y">
                  {table.items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.name}
                      </td>

                      <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                        {renderIcon(item.basic)}
                      </td>
                      <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                        {renderIcon(item.business)}
                      </td>
                      <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                        {renderIcon(item.enterprise)}
                      </td>

                      <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap lg:hidden text-primary-80">
                        {renderIcon(
                          item[
                            selectedPlan.name.toLowerCase() as keyof TableItem
                          ]
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
