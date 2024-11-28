const Testimonial3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-6 border-y py-14 text-center md:py-20">
          <q className="block max-w-4xl text-2xl font-medium lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            nesciunt iste distinctio corporis, alias illum.
          </q>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <img
              src="https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg"
              alt="shadcn"
              className="h-7"
            />
            <p className="font-medium">John Doe, Founder & CEO of Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial3;
