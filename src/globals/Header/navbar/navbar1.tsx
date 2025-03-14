"use client";

import { MenuIcon } from "lucide-react";

import Link from 'next/link'
import { Media } from '@/components/Media'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Header as HeaderType } from '@/payload-types'

import { PublicContextProps } from '@/utilities/publicContextProps'
export const Navbar1: React.FC<{ header: HeaderType, publicContext: PublicContextProps }> = ({ header, publicContext }) => {
  
  // Transform header items into the format expected by the current navbar1 template
  const navs = header?.items?.map(item => {
    if (item.blockType === 'link') {
      // For regular links
      return {
        title: item.link.label,
        description: "", // Regular links don't have descriptions in the current data
        href: item.link.reference ? 
          `/${(item.link.reference.value as any).slug}` : 
          item.link.url || "#",
      };
    } else if (item.blockType === 'sub') {
      // For submenu items - we'll use the first subitem's description as a fallback
      return {
        title: item.label,
        description: item.subitems?.[0]?.Description || "Submenu",
        href: "#",
        isSubmenu: true,
        subitems: item.subitems?.map(subitem => ({
          title: subitem.link.label,
          description: subitem.Description || "",
          href: subitem.link.reference ? 
            `/${(subitem.link.reference.value as any).slug}` : 
            subitem.link.url || "#",
        }))
      };
    }
    return null;
  }).filter(Boolean) || [];

  // Fallback to features if header data is not available
  const features = [
    {
      title: "Dashboard",
      description: "Overview of your activity",
      href: "#",
    },
    {
      title: "Analytics",
      description: "Track your performance",
      href: "#",
    },
    {
      title: "Settings",
      description: "Configure your preferences",
      href: "#",
    },
    {
      title: "Integrations",
      description: "Connect with other tools",
      href: "#",
    },
    {
      title: "Storage",
      description: "Manage your files",
      href: "#",
    },
    {
      title: "Support",
      description: "Get help when needed",
      href: "#",
    },
  ];

  // Use navs if available, otherwise fall back to features
  const navigationItems = navs.length > 0 ? navs : features;

  return (
    <section className="py-4">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
<Link href="/">
              <Media resource={header.logo} priority className="h-16" imgClassName="h-full w-auto" />
            </Link>
          </div>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {navigationItems.map((item, index) => {
                if (item.isSubmenu && item.subitems) {
                  // Render submenu
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[600px] grid-cols-2 p-3">
                          {item.subitems.map((subitem, subIndex) => (
                            <NavigationMenuLink
                              href={subitem.href}
                              key={`${index}-${subIndex}`}
                              className="rounded-md p-3 transition-colors hover:bg-muted/70"
                            >
                              <div>
                                <p className="mb-1 font-semibold">{subitem.title}</p>
                                <p className="text-sm text-muted-foreground">
                                  {subitem.description}
                                </p>
                              </div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                } else {
                  // Render regular link
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        href={item.href}
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            {header?.buttons?.map((btn, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "outline" : "default"}
              >
                {btn.link.label}
              </Button>
            )) || (
              <>
                <Button variant="outline">Sign in</Button>
                <Button>Start for free</Button>
              </>
            )}
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-scroll">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center gap-4">
                  <Link href="/">
              <Media resource={header.logo} priority className="h-9" imgClassName="h-full w-auto" />
            </Link>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible className="mb-2 mt-4">
                  {navigationItems.map((item, index) => {
                    if (item.isSubmenu && item.subitems) {
                      // Render submenu in accordion
                      return (
                        <AccordionItem key={index} value={`item-${index}`} className="border-none">
                          <AccordionTrigger className="hover:no-underline">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid md:grid-cols-2">
                              {item.subitems.map((subitem, subIndex) => (
                                <a
                                  href={subitem.href}
                                  key={`${index}-${subIndex}`}
                                  className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                >
                                  <div>
                                    <p className="mb-1 font-semibold">
                                      {subitem.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {subitem.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    } else {
                      // Render regular link
                      return (
                        <a key={index} href={item.href} className="font-medium py-3 block">
                          {item.title}
                        </a>
                      );
                    }
                  })}
                </Accordion>
                <div className="mt-6 flex flex-col gap-4">
                  {header?.buttons?.map((btn, index) => (
                    <Button 
                      key={index} 
                      variant={index === 0 ? "outline" : "default"}
                    >
                      {btn.link.label}
                    </Button>
                  )) }
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar1