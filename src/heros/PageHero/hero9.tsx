import { ChevronRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Page } from '@/payload-types';

const codeSample = `
curl 'https://api.example.com/v1/endpoint' \\
    -X POST \\
    -u username:password \\
    -d param_1=1001 \\
    -d param_3=true \\
    -d param_2="Donec quis lorem ligula."
`.trim();

export const Hero9: React.FC<Page['hero']> = ({ }) => {
  return (
    <section className="relative py-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute -inset-y-20 inset-x-0 bg-[radial-gradient(ellipse_60%_60%_at_65%_50%,hsl(from_var(--accent)_h_s_l)_0%,transparent_80%)]"></div>
      {/* Background pattern */}
      <div className="pointer-events-none absolute -inset-y-20 inset-x-0 bg-[radial-gradient(hsl(from_var(--accent-foreground)_h_s_l/0.1)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)]"></div>
      {/* Content */}
      <div className="container relative">
        <div className="flex flex-col items-start text-left">
          <Badge variant="outline">New Release</Badge>
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Welcome to Our Website
          </h1>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis! Porro facilis quo animi
            consequatur. Explicabo.
          </p>
          <div className="flex w-full flex-col justify-start gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto">
              Primary
              <ChevronRight className="ml-2 size-4" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Secondary
            </Button>
          </div>
        </div>
        <div className="relative mt-12 grid grid-cols-12 md:gap-12">
          <div className="col-span-12 md:col-span-10">
            <div className="aspect-video text-clip rounded-lg border border-border bg-white shadow-md">
              {/* Hero Image */}
            </div>
          </div>
          <div className="absolute inset-0">
            <div className="grid h-full grid-cols-12 md:gap-12">
              <div className="col-span-10 col-start-2 -mt-6 grid translate-y-0 items-start justify-center sm:translate-y-0 sm:items-center md:col-span-6 md:col-end-12 lg:-mt-12 lg:items-start">
                <div className="absolute h-[140px] w-full rounded-lg bg-primary p-4 shadow-lg">
                  <pre className="font-mono text-xs leading-normal text-accent [mask-image:linear-gradient(to_right,#000_80%,transparent_100%)]">
                    <code>{codeSample}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero9;
