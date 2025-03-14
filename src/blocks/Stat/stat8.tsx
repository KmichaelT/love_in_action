import { ArrowRight } from 'lucide-react';
import RichText from "@/components/RichText";
import { StatBlock } from "@/payload-types";
import { PublicContextProps } from '@/utilities/publicContextProps';
import { CMSLink } from '@/components/Link';

// Simplify to match how stat1.tsx defines its props
type Stat8Props = StatBlock & { publicContext: PublicContextProps };

const Stats8: React.FC<Stat8Props> = ({ 
  headline, 
  stats, 
  links, 
  publicContext 
}) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          {headline && (
            <RichText 
              publicContext={publicContext}
              content={headline}
              withWrapper={false}
              overrideStyle={{
                h2: "text-2xl font-bold md:text-4xl",
                p: "text-sm font-medium max-w-4xl text-muted-foreground",
              }}
            />
          )} 
          {links && links.length > 0 && links[0]?.link && (
            <div className="flex items-center gap-1 font-bold hover:underline">
              <CMSLink 
                publicContext={publicContext}
                {...links[0].link}
                className="flex items-center gap-1"
              > 
                <ArrowRight className="h-auto w-4" />
              </CMSLink>

            </div>
          )}
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats?.map((stat, index) => (
            <div key={stat.id || index} className="flex flex-col gap-5">
              <div className="text-6xl font-bold">{stat.counter}</div>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats8;
