import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Pricing6 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-3xl font-semibold md:text-5xl">
          Very affordable pricing
        </h2>
        <p className="mx-auto max-w-sm text-center text-muted-foreground md:text-lg">
          Our pricing is very affordable and we offer a 30-day money back
          guarantee.
        </p>
        <div className="mx-auto mt-8 w-full rounded-lg border p-6 sm:w-fit sm:min-w-80 md:mt-12">
          <div className="flex justify-center">
            <span className="text-lg font-semibold">$</span>
            <span className="text-6xl font-semibold">29</span>
            <span className="self-end text-muted-foreground">/mo</span>
          </div>
          <div className="mt-10 flex flex-col gap-8">
            <ul className="flex flex-col gap-3">
              <li className="flex justify-between gap-2 font-medium">
                Unlimited <Check className="inline h-6 shrink-0" />
              </li>
              <li className="flex justify-between gap-2 font-medium">
                Integrations <Check className="inline h-6 shrink-0" />
              </li>
              <li className="flex justify-between gap-2 font-medium">
                24/7 support <Check className="inline h-6 shrink-0" />
              </li>
            </ul>
            <Separator />
            <ul className="flex flex-col gap-3">
              <li className="flex justify-between gap-2 font-medium">
                Live collaborations
                <Check className="inline h-6 shrink-0" />
              </li>
              <li className="flex justify-between gap-2 font-medium">
                Unlimited storage
                <Check className="inline h-6 shrink-0" />
              </li>
              <li className="flex justify-between gap-2 font-medium">
                30-day money back
                <Check className="inline h-6 shrink-0" />
              </li>
            </ul>
            <Separator />
            <ul className="flex flex-col gap-3">
              <li className="flex justify-between gap-2 font-medium">
                Unlimited members
                <Check className="inline h-6 shrink-0" />
              </li>
              <li className="flex justify-between gap-2 font-medium">
                Customization
                <Check className="inline h-6 shrink-0" />
              </li>
              <li className="flex justify-between gap-2 font-medium">
                Unlimited users
                <Check className="inline h-6 shrink-0" />
              </li>
            </ul>
            <Separator />
            <Button>Start free trial</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing6;
