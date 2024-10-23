'use client';

import { Check, X } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const plans = [
  {
    title: 'Free',
    description: 'For open source projects',
    price: { monthly: '$9', annually: '$9' },
    href: '#',
    recommended: false,
    image: 'https://www.shadcnblocks.com/images/block/block-1.svg',
    featureGroups: [
      {
        title: 'Overview',
        features: [
          {
            title: '3 users',
            icon: Check,
          },
        ],
      },
      {
        title: 'Highlights',
        features: [
          {
            title: 'Included feature',
            icon: Check,
          },
          {
            title: 'Not included feature',
            icon: X,
          },
        ],
      },
    ],
  },
  {
    title: 'Basic',
    description: 'For open source projects',
    price: {
      monthly: '$50',
      annually: (
        <span className="flex items-center">
          $45<Badge className="ml-1">-10%</Badge>
        </span>
      ),
    },
    href: '#',
    recommended: false,
    image: 'https://www.shadcnblocks.com/images/block/block-2.svg',
    featureGroups: [
      {
        title: 'Overview',
        features: [
          {
            title: '10 users',
            icon: Check,
          },
        ],
      },
      {
        title: 'Highlights',
        features: [
          {
            title: 'Included feature',
            icon: Check,
          },
          {
            title: 'Not included feature',
            icon: X,
          },
        ],
      },
    ],
  },
  {
    title: 'Team',
    description: 'For open source projects',
    price: {
      monthly: '$100',
      annually: (
        <span className="flex items-center">
          $90<Badge className="ml-1">-10%</Badge>
        </span>
      ),
    },
    href: '#',
    recommended: true,
    image: 'https://www.shadcnblocks.com/images/block/block-3.svg',
    featureGroups: [
      {
        title: 'Overview',
        features: [
          {
            title: '50 users',
            icon: Check,
          },
        ],
      },
      {
        title: 'Highlights',
        features: [
          {
            title: 'Included feature',
            icon: Check,
          },
          {
            title: 'Not included feature',
            icon: X,
          },
        ],
      },
    ],
  },
  {
    title: 'Enterprise',
    description: 'For open source projects',
    price: {
      monthly: '$200',
      annually: (
        <span className="flex items-center">
          $160<Badge className="ml-1">-20%</Badge>
        </span>
      ),
    },
    href: '#',
    recommended: false,
    image: 'https://www.shadcnblocks.com/images/block/block-4.svg',
    featureGroups: [
      {
        title: 'Overview',
        features: [
          {
            title: 'Unlimited users',
            icon: Check,
          },
        ],
      },
      {
        title: 'Highlights',
        features: [
          {
            title: 'Included feature',
            icon: Check,
          },
          {
            title: 'Not included feature',
            icon: X,
          },
        ],
      },
    ],
  },
];

const Pricing10 = () => {
  const [annualBilling, setAnnualBilling] = useState(false);
  return (
    <section className="py-32">
      <div className="container mb-8 lg:mb-0">
        <div className="flex flex-col gap-y-12 md:gap-y-16">
          <div className="flex flex-col">
            <h1 className="my-6 text-pretty text-3xl font-bold md:text-4xl xl:text-5xl">
              Pricing Plans
            </h1>
            <p className="text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="lg:mb-8">
            <div className="flex h-full flex-col justify-end">
              <div className="flex items-center space-x-2">
                <Switch
                  id="annual-billing"
                  checked={annualBilling}
                  onCheckedChange={setAnnualBilling}
                />
                <Label htmlFor="annual-billing">Annual billing</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-6 gap-y-8 xl:grid xl:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`rounded-xl border ${plan.recommended ? 'border-primary' : 'border-border lg:mt-7'} text-clip`}
          >
            {plan.recommended && (
              <div className="flex h-7 items-center justify-center bg-primary text-center text-xs font-semibold text-primary-foreground">
                Recommended
              </div>
            )}
            <header className="p-4 sm:p-6 xl:pt-12">
              <div className="mb-6 md:flex md:items-center xl:block">
                <div className="mb-1 flex md:flex-1 md:flex-row-reverse md:items-center xl:mb-6 xl:flex-col-reverse xl:items-start xl:gap-y-4">
                  <div className="flex-1 md:ml-6 xl:ml-0">
                    <p className="mb-1 text-xl font-medium sm:text-2xl">
                      {plan.title}
                    </p>
                    <p className="text-xs text-muted-foreground sm:text-sm 2xl:min-h-10">
                      {plan.description}
                    </p>
                  </div>
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="size-16 sm:size-20"
                  />
                </div>
                <div>
                  <h2 className="mb-1 flex items-start text-2xl font-medium md:text-3xl 2xl:text-4xl">
                    {annualBilling ? plan.price.annually : plan.price.monthly}
                  </h2>
                  <p className="text-xs font-medium text-muted-foreground">
                    / monthly
                  </p>
                </div>
              </div>
              <div>
                <Button
                  variant={plan.recommended ? 'default' : 'outline'}
                  className="w-full"
                >
                  Get started for free
                </Button>
              </div>
            </header>
            <main className="space-y-6 border-t border-border p-4 sm:p-6 md:grid md:grid-cols-2 md:space-y-0 xl:block xl:space-y-6">
              {plan.featureGroups.map((group) => (
                <div key={group.title}>
                  <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.title}
                  </h2>
                  <ul className="space-y-3">
                    {group.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="flex items-center gap-x-2 text-xs font-medium text-muted-foreground"
                      >
                        <feature.icon className="size-4" />
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </main>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing10;
