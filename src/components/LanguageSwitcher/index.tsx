"use client"

import { locales, localeLabels, localization } from "@/localization.config";
import { resolveParams } from "@/utilities/resolveParams";
import { ChevronDown, LucideLanguages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { useParams, useSearchParams, usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

export const LanguageSwitcher: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  console.log("pathname", pathname)


  if (locales.length < 2) return null;
  const sp = searchParams.toString();
  // const fullPath = typeof window === "undefined" ? pathname + (sp ? `?${sp}` : "") : window.location.href.replace(window.location.origin, "");
  const fullPath = pathname + (sp ? `?${sp}` : "");
  const localeRegex = new RegExp(`^\/${localization.locales.join("|")}`);
  const normalizedPath = fullPath.replace(localeRegex, "").replace("//", "/");
  const prefixedPath = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  console.log("prefixedPath", fullPath, normalizedPath, prefixedPath)




  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="text-muted-foreground hover:bg-card hover:text-accent-foreground rounded-md">
          <NavigationMenuTrigger>
            <LucideLanguages className={"mr-2 h-6"} />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-3">
              {locales.map((locale) => {
                const href = locale === localization.defaultLocale ? prefixedPath : `/${locale}${prefixedPath}`;
                return (
                  // <NavigationMenuLink asChild key={locale} >
                  <Link key={locale} href={href} lang={locale} className="w-16 p-2 hover:text-accent-foreground hover:bg-card rounded-md flex">
                    {localeLabels[locale]} {locale.toUpperCase()}
                  </Link>
                  // </NavigationMenuLink>
                )
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
