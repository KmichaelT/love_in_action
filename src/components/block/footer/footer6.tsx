import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Footer } from '@/payload-types';
import { Media } from "@/components/Media";
import { CMSLink } from '@/components/Link';


const sitemap = [
  {
    title: 'Product',
    links: [
      {
        title: 'Product 1',
        href: '#',
      },
      {
        title: 'Product 2',
        href: '#',
      },
      {
        title: 'Product 3',
        href: '#',
      },
      {
        title: 'Product 4',
        href: '#',
      },
      {
        title: 'Product 5',
        href: '#',
      },
      {
        title: 'Product 6',
        href: '#',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Blog',
        href: '#',
      },
      {
        title: 'Knowledge Base',
        href: '#',
      },
      {
        title: 'Documentation',
        href: '#',
      },
      {
        title: 'Partner Directory',
        href: '#',
      },
    ],
  },
];

const Footer6: React.FC<{ footer: Footer }> = ({ footer }) => {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0">
          <div className="max-w-96">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg border border-border bg-accent p-2">
                {footer.logo && <Media
                  resource={footer.logo}
                  alt="placeholder logo"
                  className="size-full object-contain object-center"
                />}
              </div>
              <h3 className="text-xl font-bold">Company Name</h3>
            </div>
            <p className="text-base font-medium text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
            <div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2">
              {footer.navItems && footer.navItems.map((section) => (
                <div key={section.title} className="h-fit w-min">
                  <h4 className="mb-6 whitespace-nowrap text-base font-semibold">
                    {section.title}
                  </h4>
                  <ul className="space-y-2 text-base font-medium text-muted-foreground">
                    {section.subNavItems && section.subNavItems.map((link) => (
                      <li key={link.link.label}>
                        <CMSLink {...link.link} className="whitespace-nowrap text-base hover:text-accent-foreground" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="w-full shrink-0 sm:w-fit">
              <div className="mb-6 text-base font-semibold">
                Stay up to date
              </div>
              <form className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  className="lg:min-w-72"
                />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-baseline justify-between gap-8 border-t border-border pt-8 md:flex-row md:gap-16">
          <div className="text-xs text-muted-foreground sm:text-sm">
            &copy; Company Name 2024
          </div>
          <div className="flex flex-col items-start gap-4 text-xs text-muted-foreground sm:text-sm md:flex-row lg:items-center">
            <a href="#" className="hover:text-accent-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-accent-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-foreground">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer6;
