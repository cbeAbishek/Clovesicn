import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <FeaturedProducts />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}