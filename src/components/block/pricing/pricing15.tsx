import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';

const features = [
  'Unlimited projects and tasks',
  'Unlimited users and collaborators',
  '100GB of storage',
  'Priority support and assistance',
  'Custom domain and branding',
  'Advanced analytics and reporting',
  'Customization options and flexibility',
  'Unlimited integrations and connections',
  'Free setup and onboarding',
  'Free updates and upgrades',
  'Custom design and layout',
];

const Pricing15 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="w-auto md:w-1/2 lg:w-2/3">
            <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
              Subsribe to our premium plan
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ad eveniet esse id ipsa. Tempore voluptatum magni magnam vitae
              aperiam, explicabo hic asperiores enim quibusdam, tenetur
              repellendus.
            </p>
            <Button variant="outline" size="lg">
              Contact us
            </Button>
          </div>
          <div className="w-auth rounded-md border p-11 md:w-1/2 lg:w-1/3">
            <p className="text-5xl font-bold">
              $199 <span className="text-lg">/mo</span>
            </p>
            <ul className="space-y-4 pt-5 font-medium">
              {features.map((feature, index) => (
                <li key={index} className="flex">
                  <Check className="mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing15;
