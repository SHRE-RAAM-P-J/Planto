import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import FeatureCard from "./components/FeatureCard";
import ProductCard from "./components/ProductCard";
import ReviewCard from "./components/ReviewCard";
import BestO2 from "./components/BestO2";
import Footer from "./components/Footer";

import plantLeft from "./assets/images/plant-left.png";
import plantRight from "./assets/images/plant-right.png";

import heroPlant from "./assets/images/heroPlant.png";
import cactusPlant from "./assets/images/cactus-plant.png";
import monsteraPlant from "./assets/images/monstera-plant.png";
import leafPlant from "./assets/images/leaf-plant.png";
import aloePlant from "./assets/images/aloe-plant.png";

function App() {
  return (
    <div className="min-h-screen bg-[#081207] overflow-hidden">

      {/* Main Container */}
      <div className="max-w-[1350px] mx-auto px-6">

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Trending Plants */}
        <section className="py-28">

          <SectionTitle title="Our Trendy plants" />

          <div className="flex flex-col gap-20 mt-16">

            <FeatureCard
              title="For Small Decs Ai Plat"
              price="Rs. 599/-"
              image={plantLeft}
            />

            <FeatureCard
              title="For Fresh Decs Ai Plat"
              price="Rs. 579/-"
              image={plantRight}
              reverse
            />

          </div>

        </section>

        {/* Top Selling */}
        <section className="py-32">

          <SectionTitle title="Our Top Selling" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            <ProductCard
              image={heroPlant}
              title="Calathea plant"
              price="Rs. 359/-"
            />

            <ProductCard
              image={plantLeft}
              title="Calathea plant"
              price="Rs. 359/-"
            />

            <ProductCard
              image={cactusPlant}
              title="Cactus plant"
              price="Rs. 359/-"
            />

            <ProductCard
              image={monsteraPlant}
              title="Indoor plant"
              price="Rs. 359/-"
            />

            <ProductCard
              image={leafPlant}
              title="Small plant"
              price="Rs. 359/-"
            />

            <ProductCard
              image={aloePlant}
              title="Leaf plant"
              price="Rs. 359/-"
            />

          </div>

        </section>

        {/* Customer Review */}
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

        {/* Best O2 */}
        <SectionTitle title="Our Best O2" />

        <BestO2 />

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;