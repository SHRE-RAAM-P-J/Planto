import { RiShoppingBagLine, RiHeartLine, RiStarFill } from 'react-icons/ri'
import { PlantCard1, PlantCard2, PlantCard3, PlantCard4 } from '../assets/PlantIllustrations'
import { useInView } from '../hooks/useInView'

const TOP_PRODUCTS = [
  { id: 1, Plant: PlantCard1, name: 'Calathea plant', price: 'Rs. 359/-', rating: 4.8, tag: 'Bestseller', tagColor: '#4CAF50' },
  { id: 2, Plant: PlantCard3, name: 'Calathea plant', price: 'Rs. 359/-', rating: 4.5, tag: 'New', tagColor: '#66BB6A' },
  { id: 3, Plant: PlantCard2, name: 'Cactus plant',   price: 'Rs. 359/-', rating: 4.6, tag: 'Popular', tagColor: '#FF8A65' },
  { id: 4, Plant: PlantCard4, name: 'Aloe Vera',      price: 'Rs. 359/-', rating: 4.7, tag: 'Trending', tagColor: '#CE93D8' },
  { id: 5, Plant: PlantCard1, name: 'Calathea plant', price: 'Rs. 359/-', rating: 4.4, tag: null, tagColor: '' },
  { id: 6, Plant: PlantCard3, name: 'Big Leaf plant', price: 'Rs. 359/-', rating: 4.9, tag: 'Premium', tagColor: '#81C784' },
]

export default function TopSelling() {
  const { ref, inView } = useInView()

  return (
    <section id="more" ref={ref} className="py-20 bg-dark-200/40">
      <div className="container-main">
        {/* Header */}
        <div className={`mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="text-xs font-mono text-green-light tracking-widest uppercase mb-3">Our Products</p>
            <h2 className="section-title">Top <span className="text-green-light">Selling</span></h2>
          </div>
          <button className="btn-outline text-sm self-start sm:self-auto">
            View All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {TOP_PRODUCTS.map(({ id, Plant, name, price, rating, tag, tagColor }, i) => (
            <div
              key={id}
              className={`group relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${i * 80 + 150}ms`,
                borderRadius: '32px',
                background: 'linear-gradient(145deg, #1A2B1C, #0D1B0E)',
                border: '1px solid rgba(76,175,80,0.12)',
                overflow: 'hidden',
              }}>

              {/* Plant area */}
              <div className="relative pt-6 px-4 pb-0 flex justify-center"
                style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 80%, rgba(76,175,80,0.1), transparent)' }}>
                {tag && (
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] font-semibold text-dark-100"
                    style={{ background: tagColor }}>
                    {tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-dark-400/60 flex items-center justify-center text-white/40 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                  <RiHeartLine size={13} />
                </button>
                <Plant className="h-32 sm:h-40 w-auto relative z-10 group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Info */}
              <div className="px-4 pb-5 pt-3">
                <div className="flex items-center gap-1 mb-1.5">
                  <RiStarFill className="text-yellow-400" size={11} />
                  <span className="text-[10px] text-white/50">{rating}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 leading-tight">{name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-green-light">{price}</span>
                  <button className="w-7 h-7 rounded-full bg-green-primary flex items-center justify-center text-white hover:bg-green-light transition-colors hover:-translate-y-0.5 transform">
                    <RiShoppingBagLine size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
