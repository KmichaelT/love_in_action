import { Zap } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Changelogblock } from '@/payload-types'
import RichText from '@/components/RichText'
import { PublicContextProps } from '@/utilities/publicContextProps'

const Changelog1: React.FC<Changelogblock & { publicContext: PublicContextProps }> = ({
  richText,
  publicContext,
  entries
}) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          {richText && (
            <RichText
              publicContext={publicContext}
              content={richText}
              withWrapper={false}
              overrideStyle={{
                h1: 'mb-4 text-3xl font-semibold md:text-5xl',
                p: 'mb-6 text-muted-foreground md:text-lg',
              }}
            />
          )}
          {/* <div className="mx-auto mb-9 flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="abc@example.com" />
            <Button type="submit">Subscribe</Button>
          </div> */}
          <div className="mx-auto flex w-fit items-center rounded-lg border px-3 py-2.5 text-xs">
            <span className="text-muted-foreground">New features and improvements!</span>
            <a className="ml-2 flex items-center font-semibold hover:underline" href="#">
              v1.2.1 <Zap className="h-3.5" />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-screen-lg space-y-20 md:mt-40 md:space-y-32">
          {entries && entries.map((entry) => (
          <div key={entry.id} className="relative flex flex-col gap-5 md:flex-row md:gap-20">
            <div className="top-28 flex h-min shrink-0 items-center gap-5 md:sticky">
              <Badge variant="secondary">Version {entry.version}</Badge>
              <span className="text-xs font-medium text-muted-foreground">{new Date(entry.date).toLocaleDateString()}</span>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold md:text-2xl md:leading-5">
                {entry.title}
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Here are the latest updates and improvements to our platform. We are always working
                to improve our platform and your experience.
              </p>
              <ul className="ml-4 mt-5 space-y-2 text-muted-foreground md:text-lg">
                <li className="list-disc">Added new feature to export data</li>
                <li className="list-disc">Improved performance and speed</li>
                <li className="list-disc">Fixed minor bugs and issues</li>
                <li className="list-disc">Added new feature to import data</li>
              </ul>
              <img
                src="https://shadcnblocks.com/images/block/placeholder-aspect-video-1.svg"
                alt="placeholder"
                className="mt-10 w-full rounded-lg object-cover"
              />
            </div>
          </div>))}

          {/* <div className="relative flex flex-col gap-5 md:flex-row md:gap-20">
            <div className="top-28 flex h-min shrink-0 items-center gap-5 md:sticky">
              <Badge variant="secondary">Version 1.0.0</Badge>
              <span className="text-xs font-medium text-muted-foreground">31 August 2024</span>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold md:text-2xl md:leading-5">
                First version of our platform
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Introducing a new platform to help you manage your projects and tasks. We are
                excited to launch our platform and help you get started. We are always working to
                improve our platform and your experience.
              </p>

              <img
                src="https://shadcnblocks.com/images/block/placeholder-aspect-video-1.svg"
                alt="placeholder"
                className="mt-10 w-full rounded-lg object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export { Changelog1 }
