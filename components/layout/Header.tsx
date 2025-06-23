'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Users,
  Award,
  Package,
  Phone,
  FileText,
  Zap,
} from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productSubmenu = [
    { name: 'Autoclave Liners', href: '/products/autoclave-liners', icon: Zap },
    {
      name: 'Commercial Textiles',
      href: '/products/commercial-textiles',
      icon: Package,
    },
    {
      name: 'Natural Synthetic Fabrics',
      href: '/products/natural-synthetic-fabrics',
      icon: Award,
    },
    {
      name: 'Packaging Solutions',
      href: '/products/packaging-solutions',
      icon: Package,
    },
  ];

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Why Us', href: '/whyus', icon: Award },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#39b54b] to-[#2d8f3a] rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <Link href="/" className="relative">
                    <Image
                      src="/icon.png"
                      alt="Cloves Inc Logo"
                      width={50}
                      height={50}
                      className="w-auto h-12 rounded-2xl transition-all duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>
              </div>
              {/* <div className="font-bold text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Cloves INC
              </div> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 text-gray-700 hover:text-[#39b54b] transition-all duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>{item.name}</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] transition-all duration-300 group-hover:w-full"></div>
                </a>
              ))}

              {/* Products Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#39b54b] transition-all duration-300 font-medium group">
                  <Package className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-all duration-300 ${
                      isProductsOpen ? 'rotate-180' : ''
                    }`}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] transition-all duration-300 group-hover:w-full"></div>
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform ${
                    isProductsOpen
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                  }`}
                >
                  <div className="p-2">
                    {productSubmenu.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#39b54b]/10 hover:to-[#2d8f3a]/10 transition-all duration-300 group/item"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#39b54b]/20 to-[#2d8f3a]/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          <item.icon className="w-5 h-5 text-[#39b54b]" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover/item:text-[#39b54b] transition-colors duration-300">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Request Quote Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Request Quote Button */}
              <a
                href="/request-quote"
                className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-[#2d8f3a] hover:to-[#39b54b]"
              >
                <FileText className="w-4 h-4" />
                <span>Request Quote</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#39b54b]/10 hover:to-[#2d8f3a]/10 transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-[#39b54b]" />
                  <span className="text-gray-700 font-medium">{item.name}</span>
                </a>
              ))}

              {/* Mobile Products Section */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-3 text-gray-800 font-semibold">
                  <Package className="w-5 h-5 text-[#39b54b]" />
                  <span>Products</span>
                </div>
                {productSubmenu.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 pl-12 rounded-xl hover:bg-gradient-to-r hover:from-[#39b54b]/10 hover:to-[#2d8f3a]/10 transition-all duration-300 transform hover:translate-x-2"
                    style={{
                      animationDelay: `${(index + navItems.length) * 50}ms`,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4 text-[#39b54b]" />
                    <span className="text-gray-600 text-sm">{item.name}</span>
                  </a>
                ))}
              </div>

              {/* Mobile Request Quote */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="/request-quote"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] text-white p-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FileText className="w-5 h-5" />
                  <span>Request Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
