import localization, { locales, localeLabels } from "@/localization.config";
import { Check, LucideLanguages, Globe } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { PublicContextProps } from '@/utilities/publicContextProps'

export const LanguageSwitcher: React.FC<{ publicContext: PublicContextProps }> = ({ publicContext }) => {
  const { slug, locale: currentLocale } = publicContext;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="text-muted-foreground hover:bg-card hover:text-accent-foreground rounded-md">
          <NavigationMenuTrigger>
            <Globe className={"h-4"} />
            {currentLocale.toUpperCase()}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-3">
              {locales.map((locale) => {
                const langPrefix = locale === localization.defaultLocale ? "" : `/${locale}`;
                const href = (slug === "home" ? langPrefix : `${langPrefix}/${slug}`) || "/";
                if (currentLocale === locale) {
                  return (
                    <span key={locale} className="w-[85px] mb-1 p-2 text-accent-foreground bg-card rounded-md flex items-center justify-start">
                      {locale.toUpperCase()} <Check className="w-4 h-4 ml-2" />
                    </span>
                  )
                } else {
                  return (
                    <Link key={locale} href={href} lang={locale} className="w-[85px] mb-1 p-2 hover:text-accent-foreground hover:bg-card rounded-md flex items-center justify-start">
                      {locale.toUpperCase()}
                    </Link>
                  )
                }
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
