import { Star } from 'lucide-react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Page } from '@/payload-types';
import RichText from '@/components/RichText';
import { CMSLink } from '@/components/Link';
import { Media } from '@/components/Media';

export const Hero4: React.FC<Page['hero']> = ({ links, media, badge, richText }) => {
  return (
    <section className="py-32">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex justify-end bg-muted">
          {media && typeof media === 'object' && (
            <Media
              imgClassName="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
              priority
              resource={media}
            />
          )}
        </div>
        <div className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left">
          {richText && <RichText
            className="mb-6"
            content={richText}
            enableGutter={false}
            overrideStyle={{
              h1: "my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl",
              p: "mb-8 max-w-xl text-muted-foreground lg:text-xl"
            }}
          />}
          <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="inline-flex items-center -space-x-4">
              <Avatar className="size-12 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                  alt="placeholder"
                />
              </Avatar>
              <Avatar className="size-12 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-2.webp"
                  alt="placeholder"
                />
              </Avatar>
              <Avatar className="size-12 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-3.webp"
                  alt="placeholder"
                />
              </Avatar>
              <Avatar className="size-12 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-4.webp"
                  alt="placeholder"
                />
              </Avatar>
              <Avatar className="size-12 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-5.webp"
                  alt="placeholder"
                />
              </Avatar>
            </span>
            <div>
              <div className="flex items-center gap-1">
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5.0</span>
              </div>
              <p className="text-left font-medium text-muted-foreground">
                from 200+ reviews
              </p>
            </div>
          </div>
          {Array.isArray(links) && links.length > 0 && (
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {links.map(({ link }, i) => {
                return (
                  <CMSLink className="w-full sm:w-auto" key={i} {...link} />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};