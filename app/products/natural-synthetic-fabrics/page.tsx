'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Leaf,
  Shield,
  Package,
  Eye,
  Recycle,
  ArrowRight,
} from 'lucide-react';

const NaturalSyntheticFabricsPage = () => {
  const [expandedSpecs, setExpandedSpecs] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const highlights = [
    { icon: Leaf, text: 'Eco-Friendly Materials', desc: 'Biodegradable and sustainable options' },
    { icon: Shield, text: 'High Tensile Strength', desc: 'Built for demanding applications' },
    { icon: Package, text: 'Custom Solutions', desc: 'Tailored sizes and designs' },
    { icon: Recycle, text: 'Versatile Use', desc: 'Packaging, protection, and reinforcement' },
  ];

  const specs = [
    { label: 'Material Types', value: 'Natural & Synthetic' },
    { label: 'Strength Rating', value: 'Heavy-duty grade' },
    { label: 'Applications', value: 'Industrial packaging' },
    { label: 'Customization', value: 'Available in various sizes' },
    { label: 'Durability', value: 'Tear-resistant design' },
    { label: 'Sustainability', value: 'Eco-friendly options' },
  ];

  const subProducts = [
    {
      title: 'Hessian (Jute)',
      description: 'Natural, breathable fabric perfect for sustainable packaging needs.',
      image: 'https://images.unsplash.com/photo-1606820175121-45c2a1e1627b?auto=format&fit=crop&w=600&q=80',
      link: '/products/natural-synthetic-fabrics/hessian-jute',
    },
    {
      title: 'Calico',
      description: 'Unbleached cotton fabric ideal for eco-conscious applications.',
      image: 'https://images.unsplash.com/photo-1581873372795-fd4f63e380c2?auto=format&fit=crop&w=600&q=80',
      link: '/products/natural-synthetic-fabrics/calico',
    },
    {
      title: 'Poly-Woven Fabrics',
      description: 'Durable synthetic fabrics used for heavy packaging and reinforcement.',
      image: 'https://images.unsplash.com/photo-1622817277017-40cd58644d7f?auto=format&fit=crop&w=600&q=80',
      link: '/products/natural-synthetic-fabrics/poly-woven',
    },
    {
      title: 'Woven & Knitted Fabrics',
      description: 'Flexible solutions for industrial and commercial textile applications.',
      image: 'https://images.unsplash.com/photo-1608566948890-5e3cd292c60c?auto=format&fit=crop&w=600&q=80',
      link: '/products/natural-synthetic-fabrics/woven-knitted',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 shadow-2xl">
            <Leaf className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Natural & Synthetic Fabrics</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sustainable fabrics for industrial-grade packaging, protection & reinforcement
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Premium fabrics designed for demanding environments, combining durability, eco-friendliness, and flexibility for various industries.
          </p>
        </div>

        {/* Showcase Image */}
        <div className="mb-16 relative">
          <div className="aspect-video bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000"
              alt="Natural & Synthetic Fabrics"
              className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:scale-105`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="text-center text-white">
                <Eye className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <p className="text-2xl font-semibold">Product Showcase</p>
                <p className="text-lg opacity-90">Natural & Synthetic Fabrics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border transition-all duration-500 hover:shadow-xl hover:scale-105 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.text}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Technical Specifications</h3>
              <button
                onClick={() => setExpandedSpecs(!expandedSpecs)}
                className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-transform duration-300"
              >
                <ChevronDown className={`h-5 w-5 ${expandedSpecs ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {expandedSpecs && (
              <div className="space-y-1">
                {specs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-pink-600 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Variants */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Explore Fabric Types</h2>
        <hr className="border-gray-200 w-64 mx-auto mb-8" />
        <div className="space-y-10 mb-20">
          {subProducts.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''} bg-white rounded-xl border shadow-md hover:shadow-lg transition duration-300 overflow-hidden`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full sm:w-1/2 h-52 object-cover"
              />
              <div className="p-6 flex flex-col justify-center sm:w-1/2 text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <Link
                  href={item.link}
                  className="text-sm text-purple-600 font-semibold hover:underline w-max"
                >
                  View More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us to discuss custom sizes, materials, and eco-alternatives for your packaging needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                Request Quote
              </button>
              <button className="border-2 border-gray-300 text-gray-700 py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:border-gray-800 hover:bg-gray-800 hover:text-white">
                Download Catalog
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NaturalSyntheticFabricsPage;
