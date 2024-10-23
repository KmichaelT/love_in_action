import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Hero6 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-8 text-center">
            <div className="max-w-screen-md">
              <h1 className="mb-4 text-pretty text-4xl font-semibold lg:text-6xl">
                Build your next project with Blocks
              </h1>
              <p className="text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
            </div>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
              <Button>
                Get started now
                <ChevronRight className="ml-2 h-4" />
              </Button>
              <Button variant="ghost">
                Learn more
                <ChevronRight className="ml-2 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-7xl grid-cols-5 md:grid">
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder"
            className="col-span-3 size-full max-h-[500px] object-cover"
          />
          <div className="relative col-span-2">
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder-2.svg"
              alt="placeholder"
              className="size-full max-h-[500px] border-t object-cover md:border-l lg:border-t-0"
            />
            <Button variant="outline" className="absolute bottom-5 right-5">
              Learn more
              <ChevronRight className="ml-2 h-4" />
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <img
            src="https://www.shadcnblocks.com
/images/block/logos/shadcn-ui.svg"
            alt="logo"
            className="h-6 sm:h-8"
          />
          <img
            src="https://www.shadcnblocks.com
/images/block/logos/nextjs.svg"
            alt="logo"
            className="h-8 sm:h-10"
          />
          <img
            src="https://www.shadcnblocks.com
/images/block/logos/tailwind.svg"
            alt="logo"
            className="h-4 sm:h-6"
          />
          <img
            src="https://www.shadcnblocks.com
/images/block/logos/vercel.svg"
            alt="logo"
            className="h-8 sm:h-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero6;
