import { BarChart, Heart, Monitor, Plus, TrendingUp } from 'lucide-react';

import { FeatureBlock } from '@/payload-types';
import RichText from '@/components/RichText';
import { CMSLink } from '@/components/Link';

const Feature97: React.FC<FeatureBlock> = ({ richText, image, links, icon, tagline, USPs }) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col gap-6 text-center">
          {richText && <RichText content={richText} withWrapper={false} overrideStyle={{h2: "text-4xl font-semibold", p: "text-lg"}} />}
          <div className="flex flex-col justify-center gap-2 sm:flex-row">
            {Array.isArray(links) && links.length > 0 && links.map(({ link }, i) => (
              <CMSLink key={i} {...link} size={'lg'} />
            ))}
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-screen-lg gap-20 md:grid-cols-2">
          <div className="text-center">
            <Heart className="mx-auto h-auto w-7" />
            <h3 className="mb-2 mt-4 text-xl font-semibold">Health Overview</h3>
            <p>
              Discover key health insights tailored to your lifestyle, delivered
              in a clear and actionable format.
            </p>
          </div>
          <div className="text-center">
            <BarChart className="mx-auto h-auto w-7" />
            <h3 className="mb-2 mt-4 text-xl font-semibold">
              Personalized Insights
            </h3>
            <p>
              Gain tailored health insights based on your unique data, helping
              you make informed decisions.
            </p>
          </div>
          <div className="text-center">
            <TrendingUp className="mx-auto h-auto w-7" />
            <h3 className="mb-2 mt-4 text-xl font-semibold">
              Comprehensive Analytics
            </h3>
            <p>
              Deep dive into your health data with comprehensive analytics
              designed to offer actionable outcomes.
            </p>
          </div>
          <div className="text-center">
            <Monitor className="mx-auto h-auto w-7" />
            <h3 className="mb-2 mt-4 text-xl font-semibold">
              Continuous Monitoring
            </h3>
            <p>
              Stay updated on your health with continuous monitoring that tracks
              progress in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature97;
