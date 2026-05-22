import { FiShoppingBag } from "react-icons/fi";

const ProductCard = ({
  image,
  title,
  price,
}) => {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-md
        p-8
        min-h-[420px]
        hover:-translate-y-2
        transition duration-300
      "
    >

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent"></div>

      {/* Plant */}
      <div className="relative z-10 flex justify-center">
        <img
          src={image}
          alt="plant"
          className="w-[220px] h-[220px] object-contain drop-shadow-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-6">

        <h3 className="text-3xl font-medium">
          {title}
        </h3>

        <p className="text-gray-300 mt-4 leading-relaxed text-sm">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-8">

          <h4 className="text-3xl font-semibold">
            {price}
          </h4>

          <button className="w-12 h-12 rounded-xl border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
            <FiShoppingBag />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;