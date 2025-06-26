'use client';
import React, { useState } from 'react';
import {
  ChevronDown,
  Thermometer,
  Shield,
  Leaf,
  Package,
  Eye,
  ArrowRight,
  Zap,
  Award,
  CheckCircle,
} from 'lucide-react';

const AutoclaveLinersPage = () => {
  const [expandedSpecs, setExpandedSpecs] = useState(false);
<<<<<<< HEAD
  
  const highlights = [
    { icon: Thermometer, text: 'Heat Resistant', desc: 'Withstands up to 140°C for safe autoclave use' },
    { icon: Shield, text: 'Cart Protection', desc: 'Guards against heat damage and melting waste' },
    { icon: Leaf, text: 'Eco-Friendly Options', desc: 'Sustainable material choices available' },
    { icon: Package, text: 'Multiple Material Types', desc: 'Plastic, textile, jute & woven fabrics' },
  ];

  const specs = [
    { label: 'Temperature Resistance', value: 'Up to 140°C', icon: Thermometer },
    { label: 'Weight Capacity', value: 'Up to 30kg (Plastic)', icon: Package },
    { label: 'Material Options', value: 'Plastic, Textile, Jute, Woven', icon: Leaf },
    { label: 'Applications', value: 'Medical waste sterilization', icon: Shield },
    { label: 'Durability', value: 'Heavy-duty performance', icon: Award },
    { label: 'Sustainability', value: 'Eco-compliant options', icon: CheckCircle },
=======

  const highlights = [
    {
      icon: Thermometer,
      text: 'Heat Resistant',
      desc: 'Withstands up to 140°C for safe autoclave use',
    },
    {
      icon: Shield,
      text: 'Cart Protection',
      desc: 'Guards against heat damage and melting waste',
    },
    {
      icon: Leaf,
      text: 'Eco-Friendly Options',
      desc: 'Sustainable material choices available',
    },
    {
      icon: Package,
      text: 'Multiple Material Types',
      desc: 'Plastic, textile, jute & woven fabrics',
    },
  ];

  const specs = [
    {
      label: 'Temperature Resistance',
      value: 'Up to 140°C',
      icon: Thermometer,
    },
    { label: 'Weight Capacity', value: 'Up to 30kg (Plastic)', icon: Package },
    {
      label: 'Material Options',
      value: 'Plastic, Textile, Jute, Woven',
      icon: Leaf,
    },
    {
      label: 'Applications',
      value: 'Medical waste sterilization',
      icon: Shield,
    },
    { label: 'Durability', value: 'Heavy-duty performance', icon: Award },
    {
      label: 'Sustainability',
      value: 'Eco-compliant options',
      icon: CheckCircle,
    },
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
  ];

  const subProducts = [
    {
      title: 'High-Temp Plastic Liners',
<<<<<<< HEAD
      description: 'Engineered to withstand intense heat in autoclaves—ideal for medical waste.',
      image: '/product/al/p3.jpg', 
      features: ['140°C Heat Resistance', 'Medical Grade', 'Puncture Resistant']
    },
    {
      title: 'Textile Liners',
      description: 'Reusable and fabric-based liners with reliable heat resistance and reusability.',
      image: '/product/al/p5.jpg', 
      features: ['Reusable Design', 'Fabric Based', 'Cost Effective']
    },
    {
      title: 'Jute/Hessian Liners',
      description: 'Natural jute-based liners—strong, breathable and biodegradable.',
      image: '/product/al/p7.jpg', 
      features: ['100% Natural', 'Biodegradable', 'Breathable']
    },
    {
      title: 'Woven Plastic Liners',
      description: 'Durable woven liners that handle heavy-duty applications effectively.',
      image: '/product/al/p9.jpg', 
      features: ['Heavy Duty', 'Woven Strength', 'Industrial Grade']
=======
      description:
        'Engineered to withstand intense heat in autoclaves—ideal for medical waste.',
      image: '/Product/al/p3.jpg',
      features: [
        '140°C Heat Resistance',
        'Medical Grade',
        'Puncture Resistant',
      ],
    },
    {
      title: 'Textile Liners',
      description:
        'Reusable and fabric-based liners with reliable heat resistance and reusability.',
      image: '/Product/al/p5.jpg',
      features: ['Reusable Design', 'Fabric Based', 'Cost Effective'],
    },
    {
      title: 'Jute/Hessian Liners',
      description:
        'Natural jute-based liners—strong, breathable and biodegradable.',
      image: '/Product/al/p7.jpg',
      features: ['100% Natural', 'Biodegradable', 'Breathable'],
    },
    {
      title: 'Woven Plastic Liners',
      description:
        'Durable woven liners that handle heavy-duty applications effectively.',
      image: '/Product/al/p9.jpg',
      features: ['Heavy Duty', 'Woven Strength', 'Industrial Grade'],
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced Animated Background with Curved Graphics */}
      <div className="absolute inset-0 opacity-20">
        {/* Multiple overlapping gradients for spray effect */}
        <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-teal-400 via-teal-200 to-transparent rounded-full blur-3xl animate-pulse"></div>
<<<<<<< HEAD
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-300 via-cyan-100 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-300 via-blue-100 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-teal-300 via-cyan-200 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
=======
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-300 via-cyan-100 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-300 via-blue-100 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-teal-300 via-cyan-200 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '6s' }}
        ></div>
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
      </div>

      {/* Curved Graphics in Background */}
      <div className="absolute inset-0 opacity-10">
        {/* Large curved lines */}
<<<<<<< HEAD
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800">
=======
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
        >
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,500 Q400,300 800,500 T1200,300"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
<<<<<<< HEAD
            style={{animationDelay: '2s'}}
=======
            style={{ animationDelay: '2s' }}
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
          />
          <path
            d="M200,0 Q500,200 800,100 T1200,200"
            stroke="url(#gradient3)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
<<<<<<< HEAD
            style={{animationDelay: '4s'}}
=======
            style={{ animationDelay: '4s' }}
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
<<<<<<< HEAD

=======
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
        {/* Hero Section */}
        <div className="mb-16 text-center animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white mr-6 shadow-2xl relative animate-bounce">
              <Thermometer className="h-10 w-10" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-75 animate-ping"></div>
            </div>
<<<<<<< HEAD
            
=======

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Autoclave Liners
            </h1>
          </div>
<<<<<<< HEAD
          
          <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto">
            Safe, heat-resistant liners for sterilization processes
          </p>
          
          <p className="text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Built to handle extreme heat and safeguard your waste management systems—available in various materials tailored for medical, clinical and industrial needs.
=======

          <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto">
            Safe, heat-resistant liners for sterilization processes
          </p>

          <p className="text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Built to handle extreme heat and safeguard your waste management
            systems—available in various materials tailored for medical,
            clinical and industrial needs.
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
          </p>
        </div>

        {/* Combined Image and Specifications Card */}
<<<<<<< HEAD
        <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
=======
        <div
          className="mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
            {/* Enhanced spray effect overlay with white shapes */}
            <div className="absolute top-0 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-white/5 rounded-full blur-lg"></div>
<<<<<<< HEAD
            
=======

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
            {/* White graphic shapes */}
            <div className="absolute top-4 right-8 w-6 h-6 bg-white/20 rounded-full"></div>
            <div className="absolute top-12 right-16 w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-8 left-12 w-4 h-4 bg-white/25 rounded-full"></div>
            <div className="absolute top-1/2 right-4 w-2 h-2 bg-white/40 rounded-full"></div>
<<<<<<< HEAD
            
          
=======

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              {/* Left side - Image */}
              <div className="relative">
                <div className="aspect-video bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1000&q=80"
                    alt="Autoclave Showcase"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-center justify-center">
                    <div className="text-center text-white">
<<<<<<< HEAD
                      <Eye className="h-12 w-12 mx-auto mb-2 opacity-80 animate-spin" style={{animationDuration: '20s'}} />
=======
                      <Eye
                        className="h-12 w-12 mx-auto mb-2 opacity-80 animate-spin"
                        style={{ animationDuration: '20s' }}
                      />
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
                      <p className="text-lg font-semibold">Product Showcase</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Specifications */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 relative">
                {/* Small white shapes inside specs card */}
<<<<<<< HEAD
           
              
                
=======

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Technical Specifications
                  </h3>
                  <button
                    onClick={() => setExpandedSpecs(!expandedSpecs)}
                    className="p-2 rounded-full bg-white/20 text-white transition-all duration-300 shadow-lg hover:bg-white/30 hover:scale-110"
                  >
<<<<<<< HEAD
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-300 ${expandedSpecs ? 'rotate-180' : ''}`} 
                    />
                  </button>
                </div>
                
=======
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        expandedSpecs ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSpecs ? 'max-h-96' : 'max-h-48'
                  }`}
                >
                  <div className="space-y-1">
<<<<<<< HEAD
                    {specs.slice(0, expandedSpecs ? specs.length : 4).map((spec, index) => {
                      const SpecIcon = spec.icon;
                      return (
                        <div 
                          key={index}
                          className="flex justify-between items-center py-3 border-b border-white/20 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
                          style={{animationDelay: `${index * 0.1}s`}}
                        >
                          <div className="flex items-center space-x-3">
                            <SpecIcon className="h-4 w-4 text-white" />
                            <span className="font-medium text-white text-sm">{spec.label}</span>
                          </div>
                          <span className="text-white font-semibold bg-white/20 px-2 py-1 rounded-full text-xs">
                            {spec.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
=======
                    {specs
                      .slice(0, expandedSpecs ? specs.length : 4)
                      .map((spec, index) => {
                        const SpecIcon = spec.icon;
                        return (
                          <div
                            key={index}
                            className="flex justify-between items-center py-3 border-b border-white/20 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="flex items-center space-x-3">
                              <SpecIcon className="h-4 w-4 text-white" />
                              <span className="font-medium text-white text-sm">
                                {spec.label}
                              </span>
                            </div>
                            <span className="text-white font-semibold bg-white/20 px-2 py-1 rounded-full text-xs">
                              {spec.value}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </div>

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
                {!expandedSpecs && (
                  <div className="text-center mt-4">
                    <button
                      onClick={() => setExpandedSpecs(true)}
                      className="text-white text-sm font-medium hover:text-white/80 transition-colors"
                    >
                      View All Specifications →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
<<<<<<< HEAD
        <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent text-center mb-12">
            Key Features
          </h2>
          
=======
        <div
          className="mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent text-center mb-12">
            Key Features
          </h2>

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-6 shadow-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                >
                  {/* Enhanced spray effect overlay with white shapes */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<<<<<<< HEAD
                  
=======

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
                  {/* Random white shapes in each card */}
                  <div className="absolute top-2 right-3 w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="absolute top-6 right-1 w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="absolute bottom-4 left-2 w-3 h-3 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-8 right-4 w-1.5 h-1.5 bg-white/35 rounded-full"></div>
<<<<<<< HEAD
                  
                 
                  
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white mb-4 shadow-lg relative z-10 transition-transform duration-300 hover:rotate-12">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
=======

                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white mb-4 shadow-lg relative z-10 transition-transform duration-300 hover:rotate-12">
                    <IconComponent className="h-6 w-6" />
                  </div>

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
                  <h3 className="font-semibold text-white mb-2 relative z-10">
                    {item.text}
                  </h3>
                  <p className="text-white/90 text-sm relative z-10">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

<<<<<<< HEAD


















        {/* Product Variants */}
        <div className="mb-20 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
=======
        {/* Product Variants */}
        <div
          className="mb-20 animate-fade-in-up"
          style={{ animationDelay: '0.9s' }}
        >
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2 text-center">
            Explore Liner Types
          </h2>
          <div className="w-64 h-1 bg-gradient-to-r from-teal-300 to-cyan-300 mx-auto mb-12 rounded-full"></div>
<<<<<<< HEAD
          
=======

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {subProducts.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden text-white hover:scale-[1.02] group"
              >
<<<<<<< HEAD
               <div className="flex flex-col h-full">
          <div className="relative overflow-hidden">
=======
                <div className="flex flex-col h-full">
                  <div className="relative overflow-hidden">
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
<<<<<<< HEAD
                  
                  <div className="p-6 flex flex-col justify-between flex-grow relative">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-6 right-6 w-3 h-3 bg-white/25 rounded-full"></div>
            <div className="absolute top-10 right-4 w-2 h-2 bg-white/35 rounded-full"></div>
            <div className="absolute bottom-8 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-4 right-8 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            <div className="absolute top-1/2 right-2 w-2.5 h-2.5 bg-white/30 rounded-full"></div>
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-white/90 mb-6 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
            
=======

                  <div className="p-6 flex flex-col justify-between flex-grow relative">
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-6 right-6 w-3 h-3 bg-white/25 rounded-full"></div>
                    <div className="absolute top-10 right-4 w-2 h-2 bg-white/35 rounded-full"></div>
                    <div className="absolute bottom-8 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-4 right-8 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                    <div className="absolute top-1/2 right-2 w-2.5 h-2.5 bg-white/30 rounded-full"></div>

                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-white/90 mb-6 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
                    <div className="flex items-center text-white font-semibold hover:text-white/80 transition-colors duration-200 group-hover:translate-x-2 cursor-pointer relative z-10">
                      <span className="mr-2">View More</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

<<<<<<< HEAD














        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
            
=======
        {/* CTA Section */}
        <div
          className="text-center animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        >
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
            {/* White shapes in CTA */}
            <div className="absolute top-4 left-8 w-4 h-4 bg-white/25 rounded-full"></div>
            <div className="absolute top-8 right-12 w-2 h-2 bg-white/35 rounded-full"></div>
            <div className="absolute bottom-6 left-16 w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-12 right-8 w-2.5 h-2.5 bg-white/20 rounded-full"></div>
<<<<<<< HEAD
            
            
            
=======

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
            <div className="relative z-10">
              <div className="inline-block mb-4">
                <Zap className="h-12 w-12 mx-auto animate-pulse" />
              </div>
<<<<<<< HEAD
              
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Contact our team to discuss custom liner solutions tailored to your sterilization needs.
              </p>
              
=======

              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Contact our team to discuss custom liner solutions tailored to
                your sterilization needs.
              </p>

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-teal-600 py-4 px-8 rounded-xl font-bold transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-xl">
                  Request Quote
                </button>
<<<<<<< HEAD
                
=======

>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
                <button className="border-2 border-white/50 text-white py-4 px-8 rounded-xl font-bold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm hover:scale-105">
                  Download Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
=======
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
<<<<<<< HEAD
        `
      }}></style>
=======
        `,
        }}
      ></style>
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
    </div>
  );
};

<<<<<<< HEAD
export default AutoclaveLinersPage;
=======
export default AutoclaveLinersPage;
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
