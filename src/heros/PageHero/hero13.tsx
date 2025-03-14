"use client";

import React, { useState } from 'react';
import { PlayIcon, MoveRight} from "lucide-react";
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import type { Page } from '@/payload-types';
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import { Media } from '@/components/Media';
import { PublicContextProps } from '@/utilities/publicContextProps';

export const Hero13: React.FC<Page['hero'] & { publicContext: PublicContextProps }> = ({ 
  links,
  richText, 
  publicContext,
  primaryLink,
  videoLink,
  images
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  
  // Get the video URL from videoLink if available
  const videoUrl = videoLink?.url || '#';
  
  return (
    <>
      <section className="shadow-[inset_0_-4px_10px_rgba(49,101,176,0.3)] relative overflow-hidden border border-b pt-40 pb-40 font-sans before:absolute before:-top-[88%] before:left-1/2 before:block before:h-[200%] before:w-[200%] before:-translate-x-1/2 before:bg-[radial-gradient(theme(colors.indigo.200)_15%,_theme(colors.transparent)_20%,_theme(colors.orange.200)_30%,_theme(colors.transparent)_50%,_theme(colors.blue.200)_60%)] before:bg-cover before:bg-no-repeat before:opacity-55 before:content-['']">

        <div className="container max-w-[87.5rem] relative z-20 ">
          <div className="grid grid-cols-1 gap-[5.625rem] lg:grid-cols-2">
            <div>
              <div className="flex flex-col gap-12 ">
                {richText && <RichText 
                  publicContext={publicContext} 
                  content={richText} 
                  enableGutter={false} 
                  overrideStyle={{
                    h1: "mb-3 text-4xl font-bold md:text-5xl lg:text-6xl",
                    p: "text-lg text-muted-foreground"
                  }} 
                />}

                <div className="flex flex-col items-center gap-3 pt-4 md:flex-row">
                  {primaryLink && (
                    <Button
                      asChild
                      className="group flex h-fit w-fit items-center gap-2 rounded-full px-8 py-3 bg-primary text-white"
                    >
                      <CMSLink publicContext={publicContext} {...primaryLink}> 
                        <div className="relative h-6 w-7 overflow-hidden">
                          <div className="absolute left-0 top-0 flex -translate-x-1/2 items-center transition-all duration-500 group-hover:translate-x-0">
                            <MoveRight className="!h-6 !w-6 fill-white px-1" />
                            <MoveRight className="!h-6 !w-6 fill-white px-1" />
                          </div>
                        </div>
                      </CMSLink>
                    </Button>
                  )}
                  
                  {videoLink && (
                    <Button
                      variant="ghost"
                      onClick={() => setIsVideoOpen(true)}
                      className="flex w-fit items-center gap-3 hover:bg-transparent"
                    >
                      <div className="relative h-7 w-7 rounded-full p-[3px] before:absolute before:top-0 before:left-0 before:block before:h-full before:w-full before:animate-[spin_5s_ease-in-out_infinite] before:rounded-full before:bg-gradient-to-r before:from-primary before:to-transparent before:content-['']">
                        <div className="relative z-20 flex h-full w-full rounded-full bg-white">
                          <PlayIcon className="m-auto !h-3 !w-3 fill-primary stroke-primary" />
                        </div>
                      </div>
                      <p className="text-sm/5 font-medium text-primary">
                        {videoLink.label || "Watch Demo"}
  
                      </p>
                    </Button>
                  )}
                  
                  {/* Support for traditional links array if primary/video links aren't provided */}
                  {!primaryLink && !videoLink && Array.isArray(links) && links.length > 0 && (
                    <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                      {links.map(({ link }, i) => (
                        <CMSLink 
                          publicContext={publicContext} 
                          className="w-full sm:w-auto" 
                          key={i} 
                          {...link} 
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[31.25rem]">
              <div className="relative mx-auto w-full max-w-full lg:mx-0">
                <div className="w-full overflow-hidden rounded-3xl">
                  {images && images.length > 0 ? (
                    <Media
                      imgClassName="size-full object-cover"
                      priority
                      resource={images[0]} 
                    />
                  ) : (
                    <AspectRatio ratio={1}>
                      <img
                        src="https://shadcnblocks.com/images/block/placeholder-dark-1.svg"
                        alt="Placeholder image"
                        className="size-full object-cover"
                      />
                    </AspectRatio>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-6 border-y py-14 text-center md:py-20">
              <q className="block max-w-4xl text-2xl font-medium lg:text-3xl">
                &ldquo;Dear children, let&apos;s not merely say that we <span className="font-extrabold text-primary bg-blue-100 px-1 rounded">love each other</span>; let us show the truth <span className="font-extrabold text-primary bg-blue-100 px-1 rounded">by our actions</span>.&rdquo;
              </q>
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <p className="font-medium">1 John 3:18</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-6 border-y py-14 text-center md:py-20">
            <q className="block max-w-4xl text-2xl font-medium lg:text-3xl">
              &ldquo;Dear children, let&apos;s not merely say that we <span className="font-extrabold text-primary bg-blue-100 px-1 rounded">love each other</span>; let us show the truth <span className="font-extrabold text-primary bg-blue-100 px-1 rounded">by our actions</span>.&rdquo;
            </q>
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <p className="font-medium">1 John 3:18</p>
            </div>
          </div>
        </div>
      </section>
      
      {videoUrl && (
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="sm:max-w-[50rem]">
            <DialogHeader>
              <DialogTitle>Presentation Video</DialogTitle>
            </DialogHeader>
            <AspectRatio ratio={16 / 9}>
                <iframe
                className="h-full w-full"
                src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                title="Presentation Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </AspectRatio>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Hero13;
