import { Media } from '@/components/Media';
import RichText from '@/components/RichText';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { TestimonialBlock } from '@/payload-types';

const Testimonial4: React.FC<TestimonialBlock> = ({ headline, link, tagline, testimonial }) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
            {Array.isArray(testimonial) && testimonial.length > 0 && testimonial[0] && (
              <>
                {testimonial[0].author?.avatar && <Media
                  imgClassName="h-72 w-full rounded-md object-cover lg:h-auto"
                  resource={testimonial[0].author?.avatar}
                />}
                <Card className="col-span-2 flex items-center justify-center p-6">
                  <div className="flex flex-col gap-4">
                    {testimonial[0].text && (
                      <RichText
                        content={testimonial[0].text}
                        withWrapper={false}
                        overrideStyle={{
                          p: 'text-xl font-medium lg:text-3xl'
                        }}
                      />
                    )}
                    <div className="flex flex-col items-start">
                      <p>{testimonial[0].author?.name ?? ""}</p>
                      <p className="text-muted-foreground">{testimonial[0].author?.description ?? ""}</p>
                    </div>
                  </div>
                </Card>
              </>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {Array.isArray(testimonial) && testimonial.length > 1 && testimonial[1] && (
              <Card>
                <CardContent className="px-6 pt-6 leading-7 text-foreground/70">
                  {testimonial[1].text && (
                    <RichText
                      content={testimonial[1].text}
                      withWrapper={false}
                      overrideStyle={{ p: '' }}
                    />
                  )}
                </CardContent>
                <CardFooter>
                  <div className="flex gap-4 leading-5">
                    {testimonial[0].author?.avatar && typeof testimonial[0].author?.avatar === "object" && (<Avatar className="size-9 rounded-full ring-1 ring-input">
                      <AvatarImage asChild src={testimonial[0].author?.avatar.url!}>
                        <Media
                          imgClassName="h-9 w-full rounded-md object-cover lg:h-auto"
                          resource={testimonial[0].author?.avatar}
                        />
                      </AvatarImage>
                    </Avatar>)}
                    <div className="text-sm">
                      <p className="font-medium">{testimonial[1].author?.name ?? ""}</p>
                      <p className="text-muted-foreground">{testimonial[1].author?.description ?? ""}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            )}
            {Array.isArray(testimonial) && testimonial.length > 2 && testimonial[2] && (
              <Card>
                <CardContent className="px-6 pt-6 leading-7 text-foreground/70">
                  {testimonial[2].text && (
                    <RichText
                      content={testimonial[2].text}
                      withWrapper={false}
                      overrideStyle={{ p: '' }}
                    />
                  )}
                </CardContent>
                <CardFooter>
                  <div className="flex gap-4 leading-5">
                    {testimonial[2].author?.avatar && typeof testimonial[2].author?.avatar === "object" && (
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage asChild src={testimonial[2].author?.avatar.url!}>
                          <Media
                            imgClassName="h-9 w-full rounded-md object-cover lg:h-auto"
                            resource={testimonial[2].author?.avatar}
                          />
                        </AvatarImage>
                      </Avatar>
                    )}
                    <div className="text-sm">
                      <p className="font-medium">{testimonial[2].author?.name ?? ""}</p>
                      <p className="text-muted-foreground">{testimonial[2].author?.description ?? ""}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            )}
            {Array.isArray(testimonial) && testimonial.length > 3 && testimonial[3] && (
              <Card>
                <CardContent className="px-6 pt-6 leading-7 text-foreground/70">
                  {testimonial[3].text && (
                    <RichText
                      content={testimonial[3].text}
                      withWrapper={false}
                      overrideStyle={{ p: '' }}
                    />
                  )}
                </CardContent>
                <CardFooter>
                  <div className="flex gap-4 leading-5">
                    {testimonial[3].author?.avatar && typeof testimonial[3].author?.avatar === "object" && (
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage asChild src={testimonial[3].author?.avatar.url!}>
                          <Media
                            imgClassName="h-9 w-full rounded-md object-cover lg:h-auto"
                            resource={testimonial[3].author?.avatar}
                          />
                        </AvatarImage>
                      </Avatar>
                    )}
                    <div className="text-sm">
                      <p className="font-medium">{testimonial[3].author?.name ?? ""}</p>
                      <p className="text-muted-foreground">{testimonial[3].author?.description ?? ""}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial4;
