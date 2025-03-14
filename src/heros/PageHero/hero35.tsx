import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Hero35 = () => {
  return (
    <section>
      <div className="lg:container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="container flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
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
          <div className="grid aspect-[3/4] grid-cols-[1fr_10fr_1fr] grid-rows-[2fr_10fr_2fr] bg-accent">
            <div className="border-b border-r border-border"></div>
            <div className="border-b border-border"></div>
            <div className="relative border-b border-l border-border">
              <div className="absolute -bottom-[6px] -left-[6px] size-[12px] rounded-full border-[3px] border-[theme(colors.accent-foreground))] bg-accent-foreground ring-8 ring-accent"></div>
            </div>
            <div className="border-r"></div>
            <div className="relative">
              <div className="absolute left-[12%] top-[8%] flex aspect-[3/4] w-3/5 justify-center rounded-lg border border-border bg-background"></div>
              <div className="absolute right-[10%] top-[20%] flex aspect-square w-[30%] justify-center rounded-lg border border-border bg-background"></div>
              <div className="absolute bottom-[8%] left-[36%] flex aspect-[4/3] w-[50%] justify-center rounded-lg border border-border bg-background"></div>
            </div>
            <div className="border-l"></div>
            <div className="relative border-r border-t border-border">
              <div className="absolute -right-[6px] -top-[6px] size-[12px] rounded-full border-[3px] border-[theme(colors.accent-foreground))] bg-accent-foreground ring-8 ring-accent"></div>
            </div>
            <div className="border-t border-border"></div>
            <div className="border-l border-t border-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero35;
