import { RiShoppingBagLine, RiArrowRightLine } from 'react-icons/ri'
import { PlantCard1, PlantCard2, PlantCard3, PlantCard4 } from '../assets/PlantIllustrations'
import { useInView } from '../hooks/useInView'

const PRODUCTS = [
  {
    id: 1,
    Plant: PlantCard1,
    badge: 'For Small Decs',
    name: 'AI Plat',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 'Rs. 599/-',
    bg: 'from-dark-300 to-dark-400',
    accent: '#4CAF50',
  },
  {
    id: 2,
    Plant: PlantCard2,
    badge: 'For Small Decs',
    name: 'Cactus Gem',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 'Rs. 499/-',
    bg: 'from-dark-300 to-dark-400',
    accent: '#FF8A65',
  },
]

export default function TrendyPlants() {
  const { ref, inView } = useInView()

  return (
    <section id="plant-types" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-1/2 h-3/4"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 0% 100%, rgba(76,175,80,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className={`mb-14 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-mono text-green-light tracking-widest uppercase mb-3">Collection</p>
          <h2 className="section-title">Our Trendy <span className="text-green-light">Plants</span></h2>
        </div>

        {/* Product cards — signature concave shape */}
        <div className="grid sm:grid-cols-2 gap-6">
          {PRODUCTS.map(({ id, Plant, badge, name, desc, price, accent }, i) => (
            <div
              key={id}
              className={`relative overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${i * 150}ms`,
                borderRadius: '56px',
                background: 'linear-gradient(135deg, #1A2B1C 0%, #132015 100%)',
                border: '1px solid rgba(76,175,80,0.15)',
              }}>

              {/* Top concave arch — signature design element */}
              <div className="relative h-52 sm:h-64 overflow-hidden flex items-end justify-center"
                style={{
                  background: `radial-gradient(ellipse 80% 90% at 50% 110%, rgba(76,175,80,0.15), transparent)`,
                  borderBottom: '1px solid rgba(76,175,80,0.1)',
                }}>
                {/* Concave cutout effect */}
                <div className="absolute top-0 left-0 right-0 h-16"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(13,27,14,0.8), transparent)',
                  }} />
                <Plant className="h-44 sm:h-56 w-auto relative z-10 drop-shadow-xl" />
              </div>

              {/* Content */}
              <div className="px-8 pb-8 pt-5">
                <p className="text-[10px] font-mono tracking-widest uppercase mb-1" style={{ color: accent }}>
                  {badge}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-5 max-w-xs">{desc}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-white">{price}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-white/60 hover:text-white cursor-pointer transition-colors flex items-center gap-1">
                      Explore <RiArrowRightLine size={14} />
                    </span>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:-translate-y-0.5"
                      style={{ background: accent }}>
                      <RiShoppingBagLine size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
