/*
  This template use of Tailwind Typography plugin

  Install the plugin from npm:
  npm install -D @tailwindcss/typography

  Then add the plugin to your tailwind.config.js file:

  module.exports = {
    theme: {
      // ...
    },
    plugins: [
      require('@tailwindcss/typography'),
      // ...
    ],
  }
 */

import { Button } from '@/components/ui/button';

const Blog9 = () => {
  return (
    <section className="py-32">
      <div className="container grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="order-last md:order-none md:col-span-4 lg:col-span-3">
          <aside className="top-32 md:sticky">
            <div className="space-y-5 border-b border-border py-5 md:space-y-6 md:py-6">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Products Used
              </span>
              <div className="grid gap-y-2 md:gap-y-3">
                <a href="#" className="group flex items-center space-x-2">
                  <div className="flex size-8 shrink-0 items-center justify-center md:size-10">
                    <img
                      src="https://www.shadcnblocks.com/images/block/block-1.svg"
                      alt="placeholder"
                      className="size-full object-contain"
                    />
                  </div>
                  <span className="text-14 group-hover:text-sea font-medium text-black transition-all duration-200">
                    Product Name
                  </span>
                </a>
              </div>
            </div>
            <div className="space-y-5 border-b border-border py-5 md:space-y-6 md:py-6">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Share this guide
              </span>
              <ul className="flex max-w-44 items-center justify-between space-x-1">
                <li>
                  <a
                    href="#"
                    className="flex aspect-square items-center justify-center"
                  >
                    <img
                      src="https://www.shadcnblocks.com/images/block/logos/instagram-icon.svg"
                      alt="Instagram"
                      className="size-5"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex aspect-square items-center justify-center"
                  >
                    <img
                      src="https://www.shadcnblocks.com/images/block/logos/linkedin-icon.svg"
                      alt="LinkedIn"
                      className="size-5"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex aspect-square items-center justify-center"
                  >
                    <img
                      src="https://www.shadcnblocks.com/images/block/logos/producthunt-icon.svg"
                      alt="Product Hunt"
                      className="size-5"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex aspect-square items-center justify-center"
                  >
                    <img
                      src="https://www.shadcnblocks.com/images/block/logos/twitter-icon.svg"
                      alt="Twitter"
                      className="size-5"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-5 py-5 md:space-y-6 md:py-6">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Enjoy reading this?
              </span>
              <div>
                <Button>Download PDF</Button>
              </div>
            </div>
          </aside>
        </div>
        <div className="md:col-span-7 md:col-start-5 lg:col-start-6">
          <article className="prose prose-sm pt-8">
            <h1>The Joke Tax Chronicles</h1>
            <p>
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
            <h2>The King&apos;s Plan</h2>
            <p>
              The king thought long and hard, and finally came up with{' '}
              <a href="#">a brilliant plan</a>: he would tax the jokes in the
              kingdom.
            </p>
            <blockquote>
              &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
              joke, so it&apos;s only fair that they should pay for the
              privilege.&rdquo;
            </blockquote>
            <h3>The Joke Tax</h3>
            <p>
              The king&apos;s subjects were not amused. They grumbled and
              complained, but the king was firm:
            </p>
            <ul>
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners : 20 gold coins</li>
            </ul>
            <p>
              As a result, people stopped telling jokes, and the kingdom fell
              into a gloom. But there was one person who refused to let the
              king&apos;s foolishness get him down: a court jester named
              Jokester.
            </p>
            <h3>Jokester&apos;s Revolt</h3>
            <p>
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king&apos;s
              pillow, in his soup, even in the royal toilet. The king was
              furious, but he couldn&apos;t seem to stop Jokester.
            </p>
            <p>
              And then, one day, the people of the kingdom discovered that the
              jokes left by Jokester were so funny that they couldn&apos;t help
              but laugh. And once they started laughing, they couldn&apos;t
              stop.
            </p>
            <h3>The People&apos;s Rebellion</h3>
            <p>
              The people of the kingdom, feeling uplifted by the laughter,
              started to tell jokes and puns again, and soon the entire kingdom
              was in on the joke.
            </p>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>King&apos;s Treasury</th>
                    <th>People&apos;s happiness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Empty</td>
                    <td>Overflowing</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td>Modest</td>
                    <td>Satisfied</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td>Full</td>
                    <td>Ecstatic</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The king, seeing how much happier his subjects were, realized the
              error of his ways and repealed the joke tax. Jokester was declared
              a hero, and the kingdom lived happily ever after.
            </p>
            <p>
              The moral of the story is: never underestimate the power of a good
              laugh and always be careful of bad ideas.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog9;
