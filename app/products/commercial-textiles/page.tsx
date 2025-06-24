'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Thermometer,
  Shield,
  Leaf,
  Package,
  Eye,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

const CommercialTextilesPage = () => {
  const [expandedSpecs, setExpandedSpecs] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const highlights = [
    { icon: Thermometer, text: 'Withstands Industrial Washing', desc: 'High-temp laundry cycles supported' },
    { icon: Shield, text: 'Durable Build', desc: 'Lasts through repeated use' },
    { icon: Leaf, text: 'Hygienic & Soft', desc: 'Skin-safe and breathable' },
    { icon: Package, text: 'Multiple Options', desc: 'Bedding, Towels, Curtains, and more' },
  ];

  const specs = [
    { label: 'Quality Grade', value: 'Hospital & Commercial' },
    { label: 'Washability', value: 'High-temp resistant' },
    { label: 'Durability', value: 'Long-lasting performance' },
    { label: 'Applications', value: 'Healthcare & Hospitality' },
    { label: 'Customization', value: 'Various sizes available' },
    { label: 'Maintenance', value: 'Easy care & cleaning' },
  ];

  const subProducts = [
    {
      title: 'Bedding',
      description: 'Soft, durable, and hygienic for hospital and hotel use.',
      image: 'https://images.unsplash.com/photo-1601933470928-c06b2d6e574d?auto=format&fit=crop&w=600&q=80',
      link: '/products/commercial-textiles/bedding',
    },
    {
      title: 'Towels',
      description: 'Highly absorbent and designed for repeated industrial washing.',
      image: 'https://images.unsplash.com/photo-1620876182846-6cf004a6d2ee?auto=format&fit=crop&w=600&q=80',
      link: '/products/commercial-textiles/towels',
    },
    {
      title: 'Laundry Bags',
      description: 'Durable textile bags for hygienic laundry handling.',
      image: 'https://images.unsplash.com/photo-1571602962053-1adcf7d0705d?auto=format&fit=crop&w=600&q=80',
      link: '/products/commercial-textiles/laundry-bags',
    },
    {
      title: 'Shower Curtains',
      description: 'Water-resistant and easy-to-clean curtains for hospitals.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e17e?auto=format&fit=crop&w=600&q=80',
      link: '/products/commercial-textiles/shower-curtains',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white mb-6 shadow-2xl">
            <Thermometer className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Commercial Textiles</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bedding, towels, laundry bags, and shower curtains for hospitals and hotels
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            High-performance textiles engineered for healthcare, hospitality, and industrial use with optimal durability and care standards.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 relative">
          <div className="aspect-video bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000"
              alt="Commercial Textiles"
              className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:scale-105`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="text-center text-white">
                <Eye className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <p className="text-2xl font-semibold">Product Showcase</p>
                <p className="text-lg opacity-90">Commercial Textiles</p>
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white mb-4">
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
                className="p-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white transition-transform duration-300"
              >
                <ChevronDown className={`h-5 w-5 ${expandedSpecs ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {expandedSpecs && (
              <div className="space-y-1">
                {specs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-red-500 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Variants */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Explore Textile Types</h2>
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
                  className="text-sm text-orange-600 font-semibold hover:underline w-max"
                >
                  View More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Reach out to customize your textile supply and get hospital-grade solutions tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
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

export default CommercialTextilesPage;
