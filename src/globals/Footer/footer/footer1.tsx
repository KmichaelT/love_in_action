import {
  FaApple,
  FaDiscord,
  FaGooglePlay,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';

import { Separator } from '@/components/ui/separator';
import { Footer } from '@/payload-types';
import { Media } from '@/components/Media';
import { CMSLink } from '@/components/Link';
import { PublicContextProps } from '@/utilities/publicContextProps'

const Footer1: React.FC<{ footer: Footer, publicContext: PublicContextProps }> = ({ footer, publicContext }) => {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            {footer.logo && <Media
              resource={footer.logo}
              alt="logo"
              className="mb-8 mr-auto h-7 md:mb-0"
            />}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <p className="text-lg font-medium">
                Copy the code and make it yours.
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-primary p-2.5"
                >
                  <FaApple className="size-7 text-background" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-primary p-2.5"
                >
                  <FaGooglePlay className="size-6 text-background" />
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-14" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {footer.navItems && footer.navItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.subNavItems && section.subNavItems.map((subitem) => (
                    <li
                      key={subitem.id}
                      className="font-medium hover:text-primary"
                    >
                      <CMSLink publicContext={publicContext} {...subitem.link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-4 font-bold">Legal</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">Term of Services</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <h3 className="mb-4 mt-8 font-bold">Social</h3>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaDiscord className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaRedditAlien className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaTelegramPlane className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-14" />
          <p className="text-sm text-muted-foreground">
            {footer.copyright && `© ${new Date().getFullYear()} ${footer.copyright}`}
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Footer1;
