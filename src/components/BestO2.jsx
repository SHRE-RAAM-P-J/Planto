const BestO2 = () => {
  return (
    <section className="py-32">

      <div
        className="
          relative overflow-hidden
          rounded-[60px]
          border border-white/10
          bg-white/5
          backdrop-blur-md
          px-10 lg:px-20
          py-20
        "
      >

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Plant */}
          <div className="flex-1 flex justify-center">

            <img
              src="https://pngimg.com/d/house_plant_PNG25.png"
              alt="plant"
              className="w-[350px] lg:w-[450px] object-contain"
            />

          </div>

          {/* Content */}
          <div className="flex-1">

            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
              We Have Small And Best O2 Plants Collection’s
            </h2>

            <p className="text-gray-300 mt-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <p className="text-gray-300 mt-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ut enim ad minim veniam.
            </p>

            <button className="mt-10 border border-white rounded-xl px-8 py-3 hover:bg-white hover:text-black transition">
              Explore
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BestO2;