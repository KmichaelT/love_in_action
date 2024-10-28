import { HandHelping, Users, Zap } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Hero45 = () => {
  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <Badge variant="outline">Easy to use</Badge>
          <div>
            <h1 className="text-4xl font-semibold lg:text-6xl">
              Where Scale
              <br /> meets Performance
            </h1>
          </div>
        </div>
        <div className="relative mx-auto max-w-screen-lg">
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder"
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-screen-lg flex-col md:flex-row">
          <div className="flex grow basis-0 flex-col rounded-md bg-background p-4">
            <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
              <HandHelping className="h-auto w-5" />
            </div>
            <h3 className="mb-2 font-semibold">Flexible Support</h3>
            <p className="text-sm text-muted-foreground">
              Benefit from around-the-clock assistance to keep your business
              running smoothly.
            </p>
          </div>
          <Separator
            orientation="vertical"
            className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
          />
          <div className="flex grow basis-0 flex-col rounded-md bg-background p-4">
            <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
              <Users className="h-auto w-5" />
            </div>
            <h3 className="mb-2 font-semibold">Collaborative Tools</h3>
            <p className="text-sm text-muted-foreground">
              Enhance teamwork with tools designed to simplify project
              management and communication.
            </p>
          </div>
          <Separator
            orientation="vertical"
            className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
          />
          <div className="flex grow basis-0 flex-col rounded-md bg-background p-4">
            <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
              <Zap className="h-auto w-5" />
            </div>
            <h3 className="mb-2 font-semibold">Lightning Fast Speed</h3>
            <p className="text-sm text-muted-foreground">
              Experience the fastest load times with our high performance
              servers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero45;
