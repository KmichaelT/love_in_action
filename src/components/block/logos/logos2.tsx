import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const logos = [
  {
    id: 'logo-1',
    description: 'Logo 1',
    image: 'https://www.shadcnblocks.com/images/block/block-1.svg',
  },
  {
    id: 'logo-2',
    description: 'Logo 2',
    image: 'https://www.shadcnblocks.com/images/block/block-2.svg',
  },
  {
    id: 'logo-3',
    description: 'Logo 3',
    image: 'https://www.shadcnblocks.com/images/block/block-3.svg',
  },
  {
    id: 'logo-4',
    description: 'Logo 4',
    image: 'https://www.shadcnblocks.com/images/block/block-4.svg',
  },
  {
    id: 'logo-5',
    description: 'Logo 5',
    image: 'https://www.shadcnblocks.com/images/block/block-5.svg',
  },
  {
    id: 'logo-6',
    description: 'Logo 6',
    image: 'https://www.shadcnblocks.com/images/block/block-6.svg',
  },
];

const Logos2 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid overflow-hidden rounded-xl border border-border md:grid-cols-2">
          <div className="my-auto px-6 py-10 sm:px-10 sm:py-12 lg:p-16">
            <div className="w-full md:max-w-md">
              <h2 className="mb-4 text-2xl font-semibold lg:text-3xl">
                Our certifications say it all.
              </h2>
              <p className="mb-6 text-lg">
                In non libero bibendum odio pellentesque ullamcorper. Aenean
                condimentum, dolor commodo pulvinar bibendum.
              </p>
              <Button className="w-full md:w-fit">
                <ArrowRight className="mr-2 size-5" />
                Get in touch
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-border md:border-l md:border-t-0">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="-mb-px flex items-center justify-center border-b border-r border-border p-5 sm:p-6 [&:nth-child(3n)]:border-r-0"
              >
                <img
                  src={logo.image}
                  alt={logo.description}
                  className="size-12 object-cover object-center sm:size-16 lg:size-24"
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos2;
