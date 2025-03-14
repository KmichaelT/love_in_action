import { ArrowRight, Heart, Timer, ZoomIn, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FeatureBlock } from '@/payload-types';
import RichText from '@/components/RichText';
import { CMSLink } from '@/components/Link';
import { Icon } from '@/components/Icon';
import { PublicContextProps } from '@/utilities/publicContextProps';

const Feature170: React.FC<FeatureBlock & { publicContext: PublicContextProps }> = ({ 
  richText, 
  USPs, 
  links,
  publicContext 
}) => {
  // Define fallback icons for cases when USP doesn't have an icon
  const fallbackIcons = [Timer, ZoomIn, Zap];
  
  return (
    <section className="py-32">
      <div className="container">
        {richText && (
          <div className="mb-10">
            <RichText 
              publicContext={publicContext}
              content={richText}
              withWrapper={false}
              overrideStyle={{
                h2: "text-3xl font-medium lg:text-4xl",
                p: "mb-4 text-sm text-muted-foreground lg:text-base"
              }}
            />
          </div>
        )}

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {USPs?.map((usp, index) => {
            // Select a fallback icon based on index if usp.uspIcon is not present
            const FallbackIconComponent = fallbackIcons[index % fallbackIcons.length];
            
            return (
              <div className="rounded-lg bg-accent p-5" key={usp.id || index}>
                <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
                  {usp.uspIcon ? 
                    <Icon icon={usp.uspIcon} className="size-6" /> : 
                    <FallbackIconComponent className="size-6" />
                  }
                </span>
                
                {usp.richText && (
                  <RichText
                    publicContext={publicContext}
                    content={usp.richText}
                    withWrapper={false}
                    overrideStyle={{
                      h3: "mb-2 text-xl font-medium",
                      p: "leading-7 text-muted-foreground"
                    }}
                  />
                )}
              </div>
            );
          })}
          
          {/* Render fallback cards if there are no USPs or less than 3 */}
          {(!USPs || USPs.length < 3) && Array(Math.max(0, 3 - (USPs?.length || 0))).fill(0).map((_, i) => {
            const index = (USPs?.length || 0) + i;
            const FallbackIconComponent = fallbackIcons[index % fallbackIcons.length];
            const titles = ["Performance", "Quality", "Innovation"];
            
            return (
              <div className="rounded-lg bg-accent p-5" key={`fallback-${i}`}>
                <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
                  <FallbackIconComponent className="size-6" />
                </span>
                <h3 className="mb-2 text-xl font-medium">{titles[index % titles.length]}</h3>
                <p className="leading-7 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
                  doloremque! Eligendi.
                </p>
              </div>
            );
          })}
        </div>
        
        {Array.isArray(links) && links.length > 0 && links[0]?.link && (
          <div className="mt-10 flex justify-center">
            <CMSLink
              publicContext={publicContext}
              {...links[0].link}
              className="inline-flex items-center gap-2 text-primary"
            >
              <span className="underline">{links[0].link.label}</span>
              <ArrowRight className="size-4" />
            </CMSLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default Feature170;
