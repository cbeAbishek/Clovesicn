'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    title: 'Autoclave Liners',
    id: 'autoclave',
<<<<<<< HEAD
    description: 'Leak-proof and heat-resistant liners for medical autoclaves.',
    types: ['Sterile Liners', 'Biohazard Bags', 'Steam Safe', 'Medical Waste'],
=======
    description: 'High-temperature atactic polypropylene liners - the only manufacturer with global supply capability for medical waste autoclave facilities.',
    types: ['High-Temp Plastic', 'Textile Liners', 'Jute/Hessian', 'Woven Plastic'],
>>>>>>> 588aeac076b34582da64bc0b8fd0d1ee46508d73
    image: "/Product/al/al1.jpg",
  },
  {
    title: 'Industrial Packaging',
    id: 'packaging',
    description: 'Durable packaging for transporting and storing bulk materials.',
    types: ['Bulk Bags', 'Woven Poly', 'Mesh Sacks', 'Multiwall Papers'],
    image: "/Product/ps/ps1.jpg",
  },
  {
    title: 'Natural & Synthetic Fabrics',
    id: 'fabrics',
    description: 'Textiles designed for industrial strength and resistance.',
    types: ['Polywoven', 'Calico', 'Thermal Weave', 'Chemical Resistant'],
    image: "/Product/nfs/nfs1.jpg",
  },
  {
    title: 'Commercial Textiles',
    id: 'textiles',
    description: 'Aesthetic and durable fabrics for commercial use.',
    types: ['Curtains', 'Bedding', 'Towels', 'Laundry Bags'],
    image: "/Product/ct/ct3.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div>
      <div className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#00B14F] mb-4">
            Featured Products
          </h1>
          <p className="text-gray-800 text-base md:text-lg font-medium mb-16">
<<<<<<< HEAD
            Explore premium-grade solutions tailored for durability and design
=======
            Explore premium-grade solutions tailored for design and performance
>>>>>>> 588aeac076b34582da64bc0b8fd0d1ee46508d73
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500 hover:scale-[1.03] bg-white hover:bg-[#00B14F] hover:shadow-2xl"
              style={{ width: '100%', minHeight: '460px' }}
            >
              {/* Top Image with Zoom on Hover */}
              <div className="h-48 w-full relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-5 text-left flex flex-col justify-between h-[calc(100%-192px)] transition-colors duration-500">
                <div>
                <h3 className="text-xl font-extrabold tracking-tight text-[#00B14F] mb-2 group-hover:text-white transition-colors duration-300">
  {product.title}
</h3>
<p className="text-sm text-gray-800 leading-relaxed font-medium mb-4 group-hover:text-white transition-colors duration-300">
  {product.description}
</p>


                  {/* Product Types */}
                  <ul className="text-sm space-y-1 mb-4">
  {product.types.map((type, i) => (
    <li
      key={i}
      className="before:content-['•'] before:mr-2 before:text-[#00B14F] font-medium text-gray-700 group-hover:text-white group-hover:before:text-white transition-all duration-300"
    >
      {type}
    </li>
  ))}
</ul>

                </div>

                {/* Learn More Button */}
                <Link href={`/products#${product.id}`} passHref legacyBehavior>
                  <a className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 shadow-md bg-[#00B14F] text-white group-hover:bg-white group-hover:text-[#00B14F]">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
