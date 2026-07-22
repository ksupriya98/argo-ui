import Hero from "../components/Hero";
import FeatureStrip from "../components/FeatureStrip";
import ProductCarousel from "../components/ProductCarousel";
import PromoBanner from "../components/PromoBanner";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import { products } from "../data/products";

export default function Home() {
  const bestSellers = products.slice(0, 8);
  const allProducts = products.slice(4);

  return (
    <>
      <Hero />
      <FeatureStrip />
      <ProductCarousel
        id="shop"
        eyebrow="Feed Your Soil Right"
        title="Shop Organic Essentials"
        subtitle="Grow stronger with organic power — our most-loved blends."
        products={bestSellers}
      />
      <PromoBanner />
      <Categories />
      <ProductCarousel
        eyebrow="Best of the Garden"
        title="Our Organic Fertilizers"
        subtitle="Natural solutions for every garden and farm space."
        products={allProducts}
      />
      <Testimonials />
      <Newsletter />
    </>
  );
}
