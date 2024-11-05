import RichText from "@/components/RichText";
import { FeatureBlock } from "@/payload-types";

const Feature99: React.FC<FeatureBlock> = ({ richText, image, links, icon, tagline }) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <div className="flex h-fit items-center gap-2.5 whitespace-nowrap text-lg">
            <span className="size-3 shrink-0 rounded-full bg-green-500"></span>
            {tagline}
          </div>
          <div>
            {richText && <RichText content={richText} withWrapper={false} overrideStyle={{h2: "mb-11 text-3xl lg:text-5xl"}} />}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-1 border-l px-4 md:pl-8">
                <span className="font-mono text-4xl lg:text-7xl">1</span>
                <h3 className="text-xl font-medium">
                  Integrate your HR platform effortlessly
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our platform supports 38 HR systems, ensuring a smooth
                  connection in just two minutes.
                </p>
              </div>
              <div className="flex flex-col gap-1 border-l px-4 md:pl-8">
                <span className="font-mono text-4xl lg:text-7xl">2</span>
                <h3 className="text-xl font-medium">
                  Sync employees with ease{' '}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Automatically import your team into our system, enabling you
                  to start analyzing the data instantly.
                </p>
              </div>
              <div className="flex flex-col gap-1 border-l px-4 md:pl-8">
                <span className="font-mono text-4xl lg:text-7xl">3</span>
                <h3 className="text-xl font-medium">
                  Dive into insights and manage your team
                </h3>
                <p className="text-sm text-muted-foreground">
                  Whether you work solo or with a team, explore benchmarks,
                  review offers, and streamline leveling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature99;
