import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import FeatureCard from "./components/FeatureCard";
import ProductCard from "./components/ProductCard";
import ReviewCard from "./components/ReviewCard";
import BestO2 from "./components/BestO2";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#081207] overflow-hidden">

      {/* Main Container */}
      <div className="max-w-[1350px] mx-auto px-6">

        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Trending Plants Section */}
        <section className="py-28">

          <SectionTitle title="Our Trendy plants" />

          <div className="flex flex-col gap-20 mt-16">

            <FeatureCard
              title="For Small Decs Ai Plat"
              price="Rs. 599/-"
              image="https://pngimg.com/d/house_plant_PNG27.png"
            />

            <FeatureCard
              title="For Fresh Decs Ai Plat"
              price="Rs. 579/-"
              image="https://pngimg.com/d/small_plant_PNG69.png"
              reverse
            />

          </div>

        </section>

        {/* Top Selling Section */}
        <section className="py-32">

          <SectionTitle title="Our Top Selling" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            <ProductCard
              image="https://pngimg.com/d/house_plant_PNG25.png"
              title="Calathea plant"
              price="Rs. 359/-"
            />

            <ProductCard
              image="https://pngimg.com/d/house_plant_PNG27.png"
              title="Calathea plant"
              price="Rs. 359/-"
            />

            <ProductCard
              image="https://pngimg.com/d/cactus_PNG23680.png"
              title="Calathea plant"
              price="Rs. 359/-"
            />

            <ProductCard
              image="https://pngimg.com/d/house_plant_PNG33.png"
              title="Calathea plant"
              price="Rs. 359/-"
            />

            <ProductCard
              image="https://pngimg.com/d/small_plant_PNG69.png"
              title="Calathea plant"
              price="Rs. 359/-"
            />

            <ProductCard
              image="https://pngimg.com/d/house_plant_PNG40.png"
              title="Calathea plant"
              price="Rs. 359/-"
            />

          </div>

        </section>

        {/* Customer Review Section */}
        <section className="py-32">

          <SectionTitle title="Customer Review" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            <ReviewCard
              name="Maxn Raval"
              image="https://randomuser.me/api/portraits/men/32.jpg"
            />

            <ReviewCard
              name="Venely K"
              image="https://randomuser.me/api/portraits/women/44.jpg"
            />

            <ReviewCard
              name="Lii Thakur"
              image="https://randomuser.me/api/portraits/women/68.jpg"
            />

          </div>

        </section>
        <SectionTitle title="Our Best O2" />
        <BestO2 />


      </div>
      <Footer />
    </div>
    
  );
}


export default App;