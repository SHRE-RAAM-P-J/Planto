import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-[900px] pt-10 overflow-hidden">

      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071407] via-[#102510] to-[#071407] z-0"></div>

      {/* Green Glow Texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#4ade80_0%,transparent_60%)]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT CONTENT */}
        <div className="max-w-[600px] pt-20 pt-6">

          <h1 className="text-6xl lg:text-[100px] leading-[1] font-semibold">
            Breath Natural
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-[700px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6 mt-10 z-20 relative">

            <button className="border border-white rounded-xl px-10 py-4 hover:bg-white hover:text-black transition">
              Explore
            </button>

            <div className="flex items-center gap-4 cursor-pointer">

              <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center">
                <FaPlay className="text-sm ml-1" />
              </div>

              <span className="text-gray-300">
                Live Demo...
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT FLOATING CARD */}
        <div className="relative mt-20 lg:mt-0">

          <div className="w-[360px] h-[460px] rounded-[60px] border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-2xl">

            <img
              src="https://png.pngtree.com/png-clipart/20231003/original/pngtree-potted-plant-decoration-png-image_13237035.png"
              alt="plant"
              className="w-[260px] mx-auto ml-6 -mt-10"
            />

            <div className="mt-8">

              <p className="text-gray-300 text-sm">
                Trendy House Plant
              </p>

              <div className="flex items-center justify-between mt-3">

                <h2 className="text-4xl font-medium">
                  Calathea plant
                </h2>

                <span className="text-3xl">
                  ›
                </span>

              </div>

              <button className="mt-8 border border-white rounded-xl px-8 py-3 hover:bg-white hover:text-black transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* CENTER BIG PLANT IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop"
        alt="background plant"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[720px] opacity-55"
      />

      {/* REVIEW CARD */}
      <div className="absolute bottom-24 left-0 w-[300px] rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-md p-6 z-20">

        <div className="flex items-center gap-4">

          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className="w-14 h-14 rounded-full"
          />

          <div>

            <h4 className="font-medium">
              Alena Patel
            </h4>

            <p className="text-yellow-400 text-sm">
              ★★★★★
            </p>

          </div>

        </div>

        <p className="text-gray-300 text-sm mt-5 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit incididunt...
        </p>

      </div>

    </section>
  );
};

export default Hero;