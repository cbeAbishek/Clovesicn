'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronRight,
  Package,
  Shield,
  Factory,
  Recycle,
  Eye,
  ArrowRight,
} from 'lucide-react';

const IndustrialPackagingPage = () => {
  const [expandedSpecs, setExpandedSpecs] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const highlights = [
    { icon: Package, text: 'Heavy-Duty Capacity', desc: 'Handles up to 1 metric ton' },
    { icon: Shield, text: 'Tear & Moisture Resistant', desc: 'Superior protection' },
    { icon: Recycle, text: 'Environmentally Friendly', desc: 'Sustainable packaging options' },
    { icon: Factory, text: 'Industrial Applications', desc: 'Multi-industry compatibility' },
  ];

  const specs = [
    { label: 'Load Capacity', value: 'Up to 1 metric ton' },
    { label: 'Material Types', value: 'Multiple options' },
    { label: 'Applications', value: 'Multi-industry use' },
    { label: 'Customization', value: 'Various sizes & designs' },
    { label: 'Durability', value: 'Tear & moisture resistant' },
    { label: 'Sustainability', value: 'Eco-friendly materials' },
  ];

  const subProducts = [
    {
      title: 'Bulk Bags',
      description: 'Large-capacity bags ideal for handling heavy materials like grains, sand, or chemicals.',
      image: 'https://images.unsplash.com/photo-1601134467661-bc909b56e90b?auto=format&fit=crop&w=600&q=80',
      link: '/products/industrial-packaging/bulk-bags',
    },
    {
      title: 'Poly-Woven Bags',
      description: 'Durable woven polypropylene bags suitable for agriculture and construction use.',
      image: 'https://images.unsplash.com/photo-1616937145204-c1be34b3a1d6?auto=format&fit=crop&w=600&q=80',
      link: '/products/industrial-packaging/poly-woven',
    },
    {
      title: 'Mesh Bags',
      description: 'Breathable bags perfect for storing vegetables or lightweight industrial components.',
      image: 'https://images.unsplash.com/photo-1598188304584-ec865b1a67cb?auto=format&fit=crop&w=600&q=80',
      link: '/products/industrial-packaging/mesh-bags',
    },
    {
      title: 'Multiwall Paper Sacks',
      description: 'Eco-conscious sacks for dry materials such as powders or animal feed.',
      image: 'https://images.unsplash.com/photo-1579484566782-8b06f2fa2f3f?auto=format&fit=crop&w=600&q=80',
      link: '/products/industrial-packaging/multiwall-paper',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white mb-6 shadow-2xl">
            <Package className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Industrial Packaging</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Robust packaging options for bulk materials across industries</p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive industrial packaging solutions designed to handle bulk materials safely and efficiently, from chemicals and grains to industrial products.
          </p>
        </div>

        {/* Showcase Image */}
        <div className="mb-16 relative">
          <div className="aspect-video bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl shadow-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1000&q=80"
              alt="Industrial Packaging"
              className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:scale-105`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="text-center text-white">
                <Eye className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <p className="text-2xl font-semibold">Product Showcase</p>
                <p className="text-lg opacity-90">Industrial Packaging</p>
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.text}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specification Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Technical Specifications</h3>
              <button
                onClick={() => setExpandedSpecs(!expandedSpecs)}
                className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white transition-transform duration-300"
              >
                <ChevronDown className={`h-5 w-5 ${expandedSpecs ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {expandedSpecs && (
              <div className="space-y-1">
                {specs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-cyan-600 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Variants */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Explore Packaging Types</h2>
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
                  className="text-sm text-cyan-600 font-semibold hover:underline w-max"
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
              Contact our team to discuss your specific requirements and get a customized solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
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

export default IndustrialPackagingPage;
