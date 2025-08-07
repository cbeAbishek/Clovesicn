import ProductsPage from '@/components/Products/commonproduct';
import { Metadata } from 'next';

export const metadata = {
  title: 'Products | Industrial Packaging & Textiles',
  description: 'Explore Cloves Inc.’s full range of products including autoclave liners, bulk bags, jute/hessian fabrics, poly-woven materials, and commercial textiles for healthcare and industrial use.',
};

export default function Home() {
  return (
    <>

      <ProductsPage />
    </>
  );
}