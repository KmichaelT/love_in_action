const items = [
  {
    id: 'next',
    title: 'Next.js',
    image: 'https://www.shadcnblocks.com/images/block/logos/nextjs.svg',
  },
  {
    id: 'react',
    title: 'React',
    image: 'https://www.shadcnblocks.com/images/block/logos/react.png',
  },
  {
    id: 'shadcnui',
    title: 'Shadcn/ui',
    image: 'https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg',
  },
  {
    id: 'supabase',
    title: 'Supabase',
    image: 'https://www.shadcnblocks.com/images/block/logos/supabase.svg',
  },
  {
    id: 'tailwind',
    title: 'Tailwind',
    image: 'https://www.shadcnblocks.com/images/block/logos/tailwind.svg',
  },
  {
    id: 'vercel',
    title: 'Vercel',
    image: 'https://www.shadcnblocks.com/images/block/logos/vercel.svg',
  },
  {
    id: 'astro',
    title: 'Astro',
    image: 'https://www.shadcnblocks.com/images/block/logos/astro.svg',
  },
  {
    id: 'figma',
    title: 'Figma',
    image: 'https://www.shadcnblocks.com/images/block/logos/figma.svg',
  },
];

const Feature53 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.id}
              className="border-b border-l border-border py-4 even:border-r md:border-b-0 md:even:border-r-0 md:[&:nth-child(4n)]:border-r"
            >
              <div className="relative flex min-h-[150px] flex-col md:mx-4 lg:min-h-[280px] lg:pl-8">
                <p className="text-center font-mono text-xs md:text-left">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span className="ml-2">{item.title}</span>
                </p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 m-auto max-h-12 max-w-[60%] object-contain object-center pt-5 md:max-w-[70%]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature53;
