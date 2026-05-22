import { FiShoppingBag } from "react-icons/fi";

const FeatureCard = ({
  title,
  price,
  image,
  reverse = false,
}) => {
  return (
    <div
      className={`
        relative overflow-hidden
        flex flex-col lg:flex-row
        items-center justify-between
        gap-10
        rounded-[60px]
        border border-white/10
        bg-white/5
        backdrop-blur-md
        px-10 lg:px-16
        py-12
        min-h-[350px]
        ${reverse ? "lg:flex-row-reverse" : ""}
      `}
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-transparent"></div>

      {/* Plant Image */}
      <div className="relative z-10 flex-1 flex justify-center">

        <img
          src={image}
          alt="plant"
          className="w-[280px] lg:w-[340px] object-contain drop-shadow-2xl"
        />

      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">

        <h3 className="text-3xl lg:text-4xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-300 mt-5 leading-relaxed max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>

        <h4 className="text-4xl font-semibold mt-6">
          {price}
        </h4>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8">

          <button className="border border-white rounded-xl px-8 py-3 hover:bg-white hover:text-black transition">
            Explore
          </button>

          <button className="w-14 h-14 border border-white rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition">
            <FiShoppingBag />
          </button>

        </div>

      </div>

    </div>
  );
};

export default FeatureCard;