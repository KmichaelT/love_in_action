import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { FeatureBlock } from '@/payload-types';
import RichText from '@/components/RichText';

/**
 * https://www.shadcnblocks.com/block/feature103/
 * @returns 
 */
const Feature103: React.FC<FeatureBlock> = ({ tagline, USPs, richText }) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-3">
          <Badge variant="outline" className="w-fit">
            {tagline}
          </Badge>
          { richText && <RichText content={richText} withWrapper={false} overrideStyle={{h2: "text-2xl md:text-4xl"}} />}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {USPs?.map((usp, index) => (
            <a
              key={index}
              href="#"
              className="flex flex-col rounded-xl border p-6 hover:border-primary"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {usp.richText && (
                    <RichText 
                      content={usp.richText} 
                      withWrapper={false}
                      overrideStyle={{
                        h3: "text-lg font-medium mb-4",
                        p: "text-muted-foreground"
                      }}
                    />
                  )}
                </div>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border">
                  <ArrowRight className="h-auto w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature103;
