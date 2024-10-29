import { Button } from '@/components/ui/button';

const About3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">Our Background</h1>
          <p className="text-muted-foreground">
            Cyber risks, such as phishing, are growing challenges for
            organizations today. These tactics aim to mislead individuals into
            giving away private data or installing malware on their devices.
          </p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder"
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <img
                src="https://www.shadcnblocks.com/images/block/block-1.svg"
                alt="logo"
                className="mr-auto h-12"
              />
              <div>
                <p className="mb-2 text-lg font-semibold">
                  Who We Are and What We Offer
                </p>
                <p className="text-muted-foreground">
                  Providing businesses with effective tools to improve
                  workflows, boost efficiency, and encourage growth.
                </p>
              </div>
              <Button variant="outline" className="mr-auto">
                Discover more
              </Button>
            </div>
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder-2.svg"
              alt="placeholder"
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        <div className="py-32">
          <p className="text-center">Valued by clients worldwide</p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src="https://www.shadcnblocks.com/images/block/block-1.svg"
                alt="logo"
                className="h-8 w-auto md:h-12"
              />
              <p className="text-xl font-semibold md:text-2xl">Acme</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://www.shadcnblocks.com/images/block/block-2.svg"
                alt="logo"
                className="h-8 w-auto md:h-12"
              />
              <p className="text-xl font-semibold md:text-2xl">Creative</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://www.shadcnblocks.com/images/block/block-3.svg"
                alt="logo"
                className="h-8 w-auto md:h-12"
              />
              <p className="text-xl font-semibold md:text-2xl">Octan</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://www.shadcnblocks.com/images/block/block-4.svg"
                alt="logo"
                className="h-8 w-auto md:h-12"
              />
              <p className="text-xl font-semibold md:text-2xl">Newco</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://www.shadcnblocks.com/images/block/block-5.svg"
                alt="logo"
                className="h-8 w-auto md:h-12"
              />
              <p className="text-xl font-semibold md:text-2xl">Fabrikam</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://www.shadcnblocks.com/images/block/block-6.svg"
                alt="logo"
                className="h-8 w-auto md:h-12"
              />
              <p className="text-xl font-semibold md:text-2xl">Litware</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">
              Our Achievements in Numbers
            </h2>
            <p className="max-w-screen-sm text-muted-foreground">
              Providing businesses with effective tools to improve workflows,
              boost efficiency, and encourage growth.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            <div className="flex flex-col gap-4">
              <p>Companies Supported</p>
              <span className="text-4xl font-semibold md:text-5xl">300+</span>
            </div>
            <div className="flex flex-col gap-4">
              <p>Projects Finalized</p>
              <span className="text-4xl font-semibold md:text-5xl">800+</span>
            </div>
            <div className="flex flex-col gap-4">
              <p>Happy Customers</p>
              <span className="text-4xl font-semibold md:text-5xl">99%</span>
            </div>
            <div className="flex flex-col gap-4">
              <p>Recognized Awards</p>
              <span className="text-4xl font-semibold md:text-5xl">10+</span>
            </div>
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden size-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default About3;
