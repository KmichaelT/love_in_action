import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Hero34 = () => {
  return (
    <section>
      <div className="container flex flex-col items-center">
        <div className="w-full text-clip rounded-lg bg-accent/50 2xl:w-[calc(min(100vw-2*theme(container.padding),100%+8rem))]">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="container flex flex-col items-center px-16 py-32 text-center lg:mx-auto lg:items-start lg:px-16 lg:text-left">
              <p>New Release</p>
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                Welcome to Our Website
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Button className="w-full sm:w-auto">
                  <ArrowRight className="mr-2 size-4" />
                  Primary
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  Secondary
                </Button>
              </div>
            </div>
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
              alt="placeholder hero"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero34;
