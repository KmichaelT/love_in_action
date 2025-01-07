'use client'

import { MenuIcon } from 'lucide-react'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { Icon } from '@/components/Icon'
import { cn } from '@/utilities/cn'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import type { Header as HeaderType } from '@/payload-types'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const Navbar5: React.FC<{ header: HeaderType }> = ({ header }) => {
  return (
    <section className="py-4">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Media resource={header.logo} priority className="h-9" imgClassName="h-full w-auto" />
          </div>
          <NavigationMenu className="hidden lg:block z-50">
            <NavigationMenuList>
              {header.items?.map((item) => {
                if (item.blockType === "link") {
                  return (
                    <CMSLink 
                      key={item.id} 
                      {...item.link}
                      className={cn(
                        'text-muted-foreground',
                        navigationMenuTriggerStyle,
                        buttonVariants({
                          variant: 'ghost',
                        }),
                      )}
                    />
                  )
                } else if (item.blockType === "sub") {
                  return (
                    <NavigationMenuItem key={item.id} className="text-muted-foreground">
                      <NavigationMenuTrigger>
                        {item.icon && <Icon className="mr-2 h-6" icon={item.icon} />}
                        <span>{item.label}</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-80 p-3">
                          <NavigationMenuLink>
                            {item.subitems.map((subitem) => (
                              <li key={subitem.id}>
                                <CMSLink
                                  className={cn(
                                    'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                  )}
                                  {...subitem.link}
                                  label=""
                                  iconBefore={undefined}
                                  iconAfter={undefined}
                                >
                                  {subitem.link.iconBefore && <Icon icon={subitem.link.iconBefore} />}
                                  <div>
                                    <div className="text-sm font-semibold">{subitem.link.label}</div>
                                    <p className="text-sm leading-snug text-muted-foreground">
                                      {subitem.Description}
                                    </p>
                                  </div>
                                </CMSLink>
                              </li>
                            ))}
                          </NavigationMenuLink>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Right Button Group */}
          <div className="hidden lg:flex gap-2">
            {header?.buttons?.map((btn) => <CMSLink key={btn.id} {...btn.link} />)}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="max-h-screen overflow-scroll">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center">
                      <Media resource={header.logo} priority className="h-9" imgClassName="h-full w-auto" />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                {/* Mobile Navigation Links */}
                <div className="my-8 flex flex-col gap-4">
                  <Accordion type="single" collapsible>
                    {header.items?.map((item) => {
                      if (item.blockType === "link") {
                        return (
                          <CMSLink 
                            key={item.id} 
                            {...item.link}
                            className="font-semibold"
                          />
                        )
                      } else if (item.blockType === "sub") {
                        return (
                          <AccordionItem key={item.id} value={item.id || item.label} className="border-b-0">
                            <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                              <span className='inline-flex'>
                                {item.icon && <Icon className="mr-2 h-6" icon={item.icon} />}
                                {item.label}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="mt-2">
                              {item.subitems.map((subitem) => (
                                <CMSLink
                                  key={subitem.id}
                                  className={cn(
                                    'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                  )}
                                  {...subitem.link}
                                  label=""
                                  iconBefore={undefined}
                                  iconAfter={undefined}
                                >
                                  {subitem.link.iconBefore && <Icon icon={subitem.link.iconBefore} />}
                                  <div>
                                    <div className="text-sm font-semibold">{subitem.link.label}</div>
                                    <p className="text-sm leading-snug text-muted-foreground">
                                      {subitem.Description}
                                    </p>
                                  </div>
                                </CMSLink>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        )
                      }
                    })}
                  </Accordion>
                </div>
                {/* Mobile Buttons */}
                <div className="flex flex-col gap-2">
                  {header?.buttons?.map((btn) => <CMSLink key={btn.id} {...btn.link} />)}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar5
