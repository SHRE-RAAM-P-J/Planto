import { RiShoppingBagLine } from "react-icons/ri";
import { useInView } from "../hooks/useInView";

const PRODUCTS = [
  {
    id: 1,
    image: "/plant-left.png",
    badge: "For Small Decs",
    name: "AI Plant",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 599/-",
    accent: "#4CAF50",
  },
  {
    id: 2,
    image: "/plant-right.png",
    badge: "For Fresh Decs",
    name: "Cactus Gem",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 579/-",
    accent: "#66BB6A",
  },
];

export default function TrendyPlants() {
  const { ref, inView } = useInView();

  return (
    <section
      id="plant-types"
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      <div className="container-main relative z-10">

        {/* TITLE */}
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Our Trendy <span className="text-green-400">plants</span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="flex flex-col gap-10">

          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className={`relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-10 transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${i * 150}ms`,
                borderRadius: "56px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >

              {/* IMAGE */}
              <div className="flex-1 flex justify-center">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[260px] sm:w-[320px] object-contain"
                />

              </div>

              {/* CONTENT */}
              <div className="flex-1 text-center md:text-left mt-8 md:mt-0">

                <p
                  className="text-sm uppercase tracking-widest mb-2"
                  style={{ color: product.accent }}
                >
                  {product.badge}
                </p>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {product.name}
                </h3>

                <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                  {product.desc}
                </p>

                <h4 className="text-4xl font-bold text-white mb-6">
                  {product.price}
                </h4>

                <div className="flex items-center gap-4 justify-center md:justify-start">

                  <button className="px-6 py-3 border border-white rounded-xl text-white hover:bg-white hover:text-black transition-all">
                    Explore
                  </button>

                  <button
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ background: product.accent }}
                  >
                    <RiShoppingBagLine size={18} />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}