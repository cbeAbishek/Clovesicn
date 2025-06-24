'use client';
import React, { useState } from 'react';
import { Shield, Package, Layers, Shirt, ChevronRight, Sparkles, Leaf } from 'lucide-react';

const FeaturedProducts = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      category: "Autoclave Liners",
      title: "High-Temperature Safety Solutions",
      description: "Premium autoclave liners crafted from high-temp plastics, textiles, jute, and woven materials for secure medical waste management.",
      icon: Shield,
      features: ["High-temp resistant", "Medical grade", "Eco-friendly options", "Custom sizing"],
      gradient: "from-emerald-400 to-teal-500",
      bgPattern: "bg-gradient-to-br from-green-50 to-emerald-100",
      link:"/products/autoclave-liners"
    },
    {
      id: 2,
      category: "Industrial Packaging",
      title: "Robust Bulk Solutions",
      description: "Comprehensive range of bulk bags, poly-woven bags, mesh bags, and multiwall paper sacks for industrial applications.",
      icon: Package,
      features: ["Heavy-duty construction", "Moisture resistant", "Bulk capacity", "Reusable designs"],
      gradient: "from-green-400 to-emerald-600",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-green-100",
      link:"/products/industrial-packaging"
    },
    {
      id: 3,
      category: "Industrial Fabrics",
      title: "Natural & Synthetic Materials",
      description: "Quality hessian, calico, and poly-woven fabrics engineered for demanding industrial environments and applications.",
      icon: Layers,
      features: ["Natural & synthetic", "Industrial strength", "Weather resistant", "Versatile applications"],
      gradient: "from-teal-400 to-green-500",
      bgPattern: "bg-gradient-to-br from-teal-50 to-emerald-100",
      link:"/products/industrial-fabrics"
    },
    {
      id: 4,
      category: "Commercial Textiles",
      title: "Hospitality & Healthcare",
      description: "Professional-grade bedding, towels, laundry bags, and shower curtains designed for commercial use.",
      icon: Shirt,
      features: ["Commercial grade", "Easy maintenance", "Hygienic materials", "Bulk quantities"],
      gradient: "from-emerald-500 to-green-600",
      bgPattern: "bg-gradient-to-br from-green-50 to-teal-100",
      link:"/products/commercial-textiles"
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-100 to-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-100 to-emerald-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-10 animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200 mb-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Sparkles className="w-4 h-4 text-[#39b54b]" />
            <span className="text-sm font-medium text-gray-600">Featured Products</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-800 bg-clip-text text-transparent">
            Sustainable Solutions for
            <span className="block text-[#39b54b] mt-2">Global Industries</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From medical waste management to industrial packaging, discover our comprehensive range of 
            eco-friendly products designed for durability and performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const isHovered = hoveredCard === product.id;
            
            return (
              <div
                key={product.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${product.bgPattern} border border-white/50 shadow-lg hover:shadow-2xl`}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon with animation */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg transform transition-all duration-300 ${isHovered ? 'rotate-6 scale-110' : ''}`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Floating leaf icon */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 bg-[#39b54b] rounded-full flex items-center justify-center shadow-md transform transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : 'scale-90'}`}>
                      <Leaf className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#39b54b] mb-4 self-start border border-emerald-200">
                    <span>{product.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#39b54b] transition-colors duration-300">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className={`flex items-center gap-2 text-sm text-gray-700 transform transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39b54b]"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                    <a 
                    href={product.link} 
                    className={`flex items-center gap-2 text-[#39b54b] font-medium text-sm group-hover:gap-3 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                    >
                    <span>Learn More</span>
                    <ChevronRight className={`w-4 h-4 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                    </a>
                </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-[#39b54b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-2 text-gray-600">
              <Leaf className="w-5 h-5 text-[#39b54b]" />
              <span className="text-sm font-medium">Sustainable • Customizable • Global B2B</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <a 
              href="/products" 
              className="flex items-center gap-2 bg-[#39b54b] text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-600 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <span>View All Products</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;