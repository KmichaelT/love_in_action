import { ArrowRight, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Cta1 = () => {
  return (
    <section className="py-32">
      <div className="container max-w-5xl">
        <Card className="flex flex-col justify-between md:flex-row">
          <div className="p-6 md:max-w-96">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-muted">
                <Sparkles className="size-4" strokeWidth={1.5} />
              </span>
              <h4 className="text-2xl font-bold">Integrations</h4>
            </div>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <Button className="mt-8">
              Get Started <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder"
            className="aspect-video object-cover md:max-w-96"
          />
        </Card>
      </div>
    </section>
  );
};

export default Cta1;
