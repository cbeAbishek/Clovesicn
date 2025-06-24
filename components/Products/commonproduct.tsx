'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FlaskConical,
  Package,
  Shirt,
  Bed,
  Thermometer,
  Recycle,
  Shield,
  Truck,
  Award,
  Leaf,
  ChevronRight,
  Globe,
  Star,
  CheckCircle,
} from 'lucide-react';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const productCategories = [
    {
      id: 'autoclave',
      title: 'Autoclave Liners',
      icon: FlaskConical,
      color: 'from-emerald-400 to-teal-600',
      description:
        'Protect autoclave carts during high-temperature sterilization processes',
      products: [
        {
          name: 'High-Temp Plastic Liners',
          features: [
            'Withstand up to 140°C',
            'Lightweight (30 kg rolls)',
            'Ideal for hazardous medical waste',
          ],
          icon: Thermometer,
          image: '/images/products/high-temp-plastic-liners.jpg',
        },
        {
          name: 'Textile Liners',
          features: [
            'Polyester & cotton blends',
            'Reusable & eco-friendly',
            'Heat-resistant and easy to handle',
          ],
          icon: Shirt,
          image: '/images/products/textile-liners.jpg',
        },
        {
          name: 'Jute/Hessian Liners',
          features: [
            'Popular in Australia',
            'Biodegradable & heavy-duty',
            'Suitable for unshredded medical waste',
          ],
          icon: Leaf,
          image: '/images/products/jute-hessian-liners.jpg',
        },
        {
          name: 'Woven Plastic Liners',
          features: [
            'Durable and tear-resistant',
            'Cost-effective alternative',
            'Lightweight yet strong',
          ],
          icon: Shield,
          image: '/images/products/woven-plastic-liners.jpg',
        },
      ],
    },
    {
      id: 'packaging',
      title: 'Industrial Packaging',
      icon: Package,
      color: 'from-blue-400 to-cyan-600',
      description:
        'Robust packaging options for bulk materials across industries',
      products: [
        {
          name: 'Bulk Bags',
          features: [
            'Carry loads up to 1 metric ton',
            'Used for chemicals, grains, minerals',
            'Heavy-duty construction',
          ],
          icon: Package,
          image: '/images/products/bulk-bags.jpg',
        },
        {
          name: 'Poly-Woven Bags',
          features: [
            'Tear-resistant & moisture-proof',
            'Custom sizes & designs',
            'Versatile for cement, fertilizers',
          ],
          icon: Shield,
          image: '/images/products/poly-woven-bags.jpg',
        },
        {
          name: 'Mesh Bags',
          features: [
            'Breathable & lightweight',
            'Perfect for fruits, vegetables',
            'Eco-friendly design',
          ],
          icon: Globe,
          image: '/images/products/mesh-bags.jpg',
        },
        {
          name: 'Multiwall Paper Sacks',
          features: [
            'Multi-layered for strength',
            'Environmentally friendly',
            'Protects from moisture',
          ],
          icon: Leaf,
          image: '/images/products/multiwall-paper-sacks.jpg',
        },
      ],
    },
    {
      id: 'fabrics',
      title: 'Natural & Synthetic Fabrics',
      icon: Shirt,
      color: 'from-purple-400 to-pink-600',
      description:
        'Durable fabrics for packaging, protection, and reinforcement',
      products: [
        {
          name: 'Hessian (Jute)',
          features: [
            'Eco-friendly and biodegradable',
            'High tensile strength',
            'Industrial packaging use',
          ],
          icon: Leaf,
          image: '/images/products/hessian-jute.jpg',
        },
        {
          name: 'Calico',
          features: [
            'Soft, breathable fabric',
            'Medical and commercial applications',
            'Customizable for different needs',
          ],
          icon: Shirt,
          image: '/images/products/calico.jpg',
        },
        {
          name: 'Poly-Woven Fabrics',
          features: [
            'Tear-resistant and long-lasting',
            'Heavy-duty packaging',
            'Industrial grade',
          ],
          icon: Shield,
          image: '/images/products/poly-woven-fabrics.jpg',
        },
        {
          name: 'Woven & Knitted Fabrics',
          features: [
            'Reinforced for industrial use',
            'Custom sizes & designs',
            'Versatile applications',
          ],
          icon: Globe,
          image: '/images/products/woven-knitted-fabrics.jpg',
        },
      ],
    },
    {
      id: 'textiles',
      title: 'Commercial Textiles',
      icon: Bed,
      color: 'from-orange-400 to-red-600',
      description:
        'Designed for demanding healthcare and hospitality environments',
      products: [
        {
          name: 'Bedding',
          features: [
            'Hospital-grade comfort',
            'High-temperature washable',
            'Durable construction',
          ],
          icon: Bed,
          image: '/images/products/bedding.jpg',
        },
        {
          name: 'Towels',
          features: [
            'Highly absorbent',
            'Industrial-grade quality',
            'Long-lasting performance',
          ],
          icon: Shirt,
          image: '/images/products/towels.jpg',
        },
        {
          name: 'Laundry Bags',
          features: [
            'Tear-resistant material',
            'Customizable for volume',
            'Commercial grade',
          ],
          icon: Package,
          image: '/images/products/laundry-bags.jpg',
        },
        {
          name: 'Shower Curtains',
          features: [
            'Waterproof & durable',
            'Healthcare and hotel use',
            'Easy maintenance',
          ],
          icon: Shield,
          image: '/images/products/shower-curtains.jpg',
        },
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: Leaf,
      title: 'Sustainable Materials',
      description: 'Eco-friendly & biodegradable options',
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'ISO, FDA, REACH/RoHS certified',
    },
    {
      icon: Globe,
      title: 'Global Markets',
      description: 'Tailored for worldwide distribution',
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Supporting sustainable practices',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('/images/hero/b1.jpg')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Premium
              </span>
              <span className="bg-gradient-to-r from-[#39b54b] to-emerald-400 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              High-quality, sustainable solutions for healthcare, industrial
              packaging, and commercial textile sectors worldwide
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white transform transition-all duration-500 hover:bg-[#39b54b]/20 hover:scale-105 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
      

      {/* Product Categories */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {productCategories.map((category, categoryIndex) => (
        <div
          key={category.id}
          className={`mb-24 transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ transitionDelay: `${categoryIndex * 150}ms` }}
        >
          {/* Category Header */}
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${category.color} mb-6 transform transition-all duration-500 hover:scale-110 hover:rotate-12`}
            >
              <category.icon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {category.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.products.map((product, productIndex) => (
              <div
                key={productIndex}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 overflow-hidden
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${categoryIndex * 150 + productIndex * 80}ms` }}
                onMouseEnter={() =>
                  setHoveredProduct(`${categoryIndex}-${productIndex}`)
                }
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Card Background Animation */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Product Image */}
                <div className="relative w-full h-36 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    //src={product.image || '/images/hero/b1.jpg'}
                    src='/images/hero/b1.jpg'
                    alt={product.name}
                    className="object-cover w-full h-full"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}
                    >
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#39b54b] transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-start gap-3 transform transition-all duration-300 ${
                          hoveredProduct ===
                          `${categoryIndex}-${productIndex}`
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-2 opacity-70'
                        }`}
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#39b54b] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Action */}
                  <div
                    className={`mt-6 flex items-center gap-2 text-[#39b54b] font-medium text-sm transform transition-all duration-300 ${
                      hoveredProduct === `${categoryIndex}-${productIndex}`
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-4 opacity-0'
                    }`}
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#39b54b]/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#39b54b] to-emerald-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Discover how our sustainable, high-quality products can meet your
            specific industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#39b54b] font-bold rounded-full hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#39b54b] transform transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
