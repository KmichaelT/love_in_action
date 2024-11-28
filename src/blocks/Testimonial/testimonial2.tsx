import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { TestimonialBlock } from '@/payload-types';
import { CMSLink } from '@/components/CMSLink';
import { Media } from '@/components/Media';
import { splitRichText } from '@/utilities/richtext';
import RichText from '@/components/RichText';

const Testimonial2: React.FC<TestimonialBlock> = ({ headline, link, tagline, testimonial }) => {
  const { firstNode, rest } = splitRichText(headline, {
    splitOn: ['p'],
    takeFirst: true
  });
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <div className="text-3xl font-bold md:text-5xl lg:text-7xl">
            <div className="flex flex-wrap items-center justify-center">
              {firstNode && (
                <RichText content={firstNode} withWrapper={false} overrideStyle={{ p: '' }} />
              )}
              <span className="mx-4 inline-flex items-center -space-x-4">
                {testimonial && testimonial.map((t) =>
                  t.author?.avatar && typeof t.author?.avatar === "object" && (
                    <Avatar key={t.id} className="size-9 rounded-full ring-1 ring-input">
                      <AvatarImage asChild src={t.author?.avatar.url!}>
                        <Media
                          imgClassName="h-9 w-full rounded-md object-cover lg:h-auto"
                          resource={t.author?.avatar}
                        />
                      </AvatarImage>
                    </Avatar>
                  )
                )}
              </span>
              {rest && (
                <RichText content={rest} withWrapper={false} overrideStyle={{ p: '' }} />
              )}
            </div>
          </div>
          {link && (
            <CMSLink {...link} className="mt-10" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial2;
