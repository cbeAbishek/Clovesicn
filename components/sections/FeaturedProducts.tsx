'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Leaf, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('healthcare');

  const categories = [
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'industrial', name: 'Industrial', icon: Zap },
    { id: 'commercial', name: 'Commercial', icon: Globe },
    { id: 'sustainable', name: 'Eco-Friendly', icon: Leaf },
  ];

  const products = {
    healthcare: [
      {
        name: 'Medical Autoclave Liners',
        description: 'High-performance liners designed for medical sterilization equipment with superior heat resistance.',
        image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['FDA Approved', 'Heat Resistant up to 150°C', 'Antimicrobial Properties'],
        href: '/products/autoclave-liners',
      },
      {
        name: 'Surgical Textile Solutions',
        description: 'Premium medical-grade textiles for surgical applications with enhanced safety standards.',
        image: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Sterile Packaging', 'Biodegradable', 'Anti-Static Properties'],
        href: '/products/textile-liners',
      },
      {
        name: 'High-Temperature Barriers',
        description: 'Advanced thermal protection for critical healthcare equipment and processes.',
        image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Temperature Range: -40°C to 200°C', 'Chemical Resistant', 'Easy Installation'],
        href: '/products/high-temp-liners',
      },
    ],
    industrial: [
      {
        name: 'Heavy-Duty Industrial Packaging',
        description: 'Robust packaging solutions for demanding industrial applications and harsh environments.',
        image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Load Capacity: 50-500kg', 'Weather Resistant', 'Tear-Proof Design'],
        href: '/products/industrial-packaging',
      },
      {
        name: 'Woven Industrial Liners',
        description: 'High-strength woven materials for industrial containment and protective applications.',
        image: 'https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['High Tensile Strength', 'UV Stabilized', 'Custom Sizes Available'],
        href: '/products/woven-liners',
      },
      {
        name: 'Specialty Industrial Solutions',
        description: 'Custom-engineered solutions for unique industrial challenges and specialized applications.',
        image: 'https://images.pexels.com/photos/3735230/pexels-photo-3735230.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Custom Engineering', 'Multiple Material Options', 'Technical Support'],
        href: '/products/specialty-solutions',
      },
    ],
    commercial: [
      {
        name: 'Commercial Textile Products',
        description: 'Versatile textile solutions for office buildings, retail spaces, and commercial facilities.',
        image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Fire Retardant', 'Stain Resistant', 'Easy Maintenance'],
        href: '/products/commercial-textiles',
      },
      {
        name: 'Hospitality Liners',
        description: 'Premium liners designed for hotels, restaurants, and hospitality industry applications.',
        image: 'https://images.pexels.com/photos/3927386/pexels-photo-3927386.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Luxury Feel', 'Hypoallergenic', 'Machine Washable'],
        href: '/products/textile-liners',
      },
      {
        name: 'Retail Packaging Solutions',
        description: 'Attractive and functional packaging options for retail and consumer-facing applications.',
        image: 'https://images.pexels.com/photos/3735731/pexels-photo-3735731.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Brand Customization', 'Eco-Friendly Options', 'Cost-Effective'],
        href: '/products/industrial-packaging',
      },
    ],
    sustainable: [
      {
        name: 'Biodegradable Jute Liners',
        description: '100% natural jute-based liners offering excellent sustainability without compromising performance.',
        image: 'https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['100% Biodegradable', 'Natural Fiber', 'Carbon Neutral'],
        href: '/products/jute-liners',
      },
      {
        name: 'Recycled Material Solutions',
        description: 'Innovative products made from recycled materials, reducing environmental impact.',
        image: 'https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['95% Recycled Content', 'Energy Efficient Production', 'Circular Economy'],
        href: '/products/specialty-solutions',
      },
      {
        name: 'Sustainable Packaging',
        description: 'Eco-conscious packaging solutions designed for minimal environmental footprint.',
        image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Compostable Materials', 'Renewable Sources', 'Zero Waste Manufacturing'],
        href: '/products/industrial-packaging',
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-4">
            <Leaf className="h-4 w-4" />
            <span className="text-sm font-medium">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sustainable Solutions for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From healthcare to heavy industry, our comprehensive product range delivers 
            performance, sustainability, and reliability you can count on.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-brand'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[activeCategory as keyof typeof products].map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={product.href}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group/link transition-colors"
                >
                  View Product Details
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary-600 hover:bg-primary-700 px-8 py-4">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;