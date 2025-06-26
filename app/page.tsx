import HeroBanner from '@/components/sections/HeroBanner';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ClovesAdModal from '@/components/sections/popup';


export default function Home() {
  return (
    <>
        {/* <ClovesAdModal /> */}
        <HeroBanner />
        <FeaturedProducts />
        <WhyChooseUs />
    </>
  );
}