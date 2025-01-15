import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import RichText from '@/components/RichText';
import { FeatureBlock } from '@/payload-types';

const Feature25: React.FC<FeatureBlock & { tagline?: string }> = ({ richText, USPs, tagline }) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6">
          {tagline && (
            <Badge variant="outline">{tagline}</Badge>
          )}
          {richText && (
            <RichText
              content={richText}
              overrideStyle={{
                h2: 'mb-2 text-center text-3xl font-semibold lg:text-4xl',
                p: 'text-center text-muted-foreground lg:text-lg',
              }}
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          {USPs?.map((usp, idx) => (
            <div key={idx} className="w-full max-w-96 lg:max-w-none">
              <Separator className="my-16 w-full" />
              <div className="mx-auto inline-block w-full gap-x-10 lg:grid lg:grid-cols-4">
                {usp.richText && (
                  <h3 className="mb-4 text-2xl font-semibold lg:text-3xl">
                    <RichText content={usp.richText} withWrapper={false} />
                  </h3>
                )}
                <ul className="col-span-3 grid gap-x-10 gap-y-4 lg:grid-cols-3">
                  {usp.USPFeatures?.map((feature, idx) => (
                    <li key={idx} className="flex gap-1 text-muted-foreground">
                      <Check className="mr-2 inline-block w-4" />
                      {feature.richText && (
                        <RichText content={feature.richText} withWrapper={false} />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature25;
