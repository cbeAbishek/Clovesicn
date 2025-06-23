'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  Quote,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { name: 'Autoclave Liners', href: '/products/autoclave-liners' },
    { name: 'Commercial Textiles', href: '/products/commercial-textiles' },
    {
      name: 'Natural Synthetic Fabrics',
      href: '/products/natural-synthetic-fabrics',
    },
    { name: 'Packaging Solutions', href: '/products/packaging-solutions' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Why Us', href: '/whyus' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    { name: 'Autoclave Liners', href: '/products/autoclave-liners' },
    { name: 'High-Temp Liners', href: '/products/high-temp-liners' },
    { name: 'Textile Liners', href: '/products/textile-liners' },
    { name: 'Jute Liners', href: '/products/jute-liners' },
    { name: 'Woven Liners', href: '/products/woven-liners' },
    { name: 'Industrial Packaging', href: '/products/industrial-packaging' },
    { name: 'Commercial Textiles', href: '/products/commercial-textiles' },
    { name: 'Specialty Solutions', href: '/products/specialty-solutions' },
  ];

  const resourceLinks = [
    { name: 'Product Guides', href: '/resources/guides' },
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'Blog', href: '/resources/blog' },
    { name: 'FAQs', href: '/resources/faqs' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 73395 55309</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@clovesinc.org</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.15 4.15 0 001.82-2.3 8.3 8.3 0 01-2.63 1.01 4.14 4.14 0 00-7.06 3.77A11.75 11.75 0 013 5.15a4.14 4.14 0 001.28 5.52 4.1 4.1 0 01-1.88-.52v.05a4.14 4.14 0 003.32 4.06 4.14 4.14 0 01-1.87.07 4.14 4.14 0 003.87 2.88A8.3 8.3 0 012 19.54a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0022.46 6z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.379-.028-3.152-1.922-3.152-1.922 0-2.218 1.5-2.218 3.052v5.6h-3v-10h2.888v1.367h.041c.402-.761 1.384-1.563 2.85-1.563 3.045 0 3.607 2.005 3.607 4.614v5.582z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-black/5 border-b border-white/20'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
        style={{
          borderBottom: isScrolled
            ? '1px solid rgba(var(--primary-200), 0.3)'
            : 'none',
        }}
      >
        <div className="bg-primary text-white py-2 px-4 text-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 73395 55309</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@clovesinc.org</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.15 4.15 0 001.82-2.3 8.3 8.3 0 01-2.63 1.01 4.14 4.14 0 00-7.06 3.77A11.75 11.75 0 013 5.15a4.14 4.14 0 001.28 5.52 4.1 4.1 0 01-1.88-.52v.05a4.14 4.14 0 003.32 4.06 4.14 4.14 0 01-1.87.07 4.14 4.14 0 003.87 2.88A8.3 8.3 0 012 19.54a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0022.46 6z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.379-.028-3.152-1.922-3.152-1.922 0-2.218 1.5-2.218 3.052v5.6h-3v-10h2.888v1.367h.041c.402-.761 1.384-1.563 2.85-1.563 3.045 0 3.607 2.005 3.607 4.614v5.582z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with enhanced design */}
            <div className="flex items-center space-x-4 group cursor-pointer">
                 <Link href="/" className="relative">
                <Image
                  src="/logo.png"
                  alt="Cloves Inc Logo"
                  width={50}
                  height={50}
                  className="w-auto h-12 rounded-2xl transition-all duration-300 group-hover:scale-105"
                />
              </Link>
              <div>
                <div className="font-bold text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Cloves INC
                </div>
              </div>
            </div>

            {/* Desktop Navigation with modern styling */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-white font-medium rounded-xl transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl scale-0 group-hover:scale-100"
                    style={{
                      background: 'linear-gradient(135deg, #39b54b, #39b54b)',
                    }}
                  ></div>
                </a>
              ))}

              {/* Enhanced Products Dropdown */}
                <div className="relative">
                <button
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-white font-medium rounded-xl transition-all duration-300 group overflow-hidden"
                  onClick={() =>
                  setActiveDropdown(
                    activeDropdown === 'products' ? null : 'products'
                  )
                  }
                >
                  <span className="relative z-10">Products</span>
                  <ChevronDown
                  className={`h-4 w-4 relative z-10 transition-transform duration-300 ${
                    activeDropdown === 'products' ? 'rotate-180' : ''
                  }`}
                  />
                  <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl scale-0 group-hover:scale-100"
                  style={{
                    background: 'linear-gradient(135deg, #39b54b, #39b54b)',
                  }}
                  ></div>
                </button>

                {/* Modern Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-3 w-80 transition-all duration-300 ${
                  activeDropdown === 'products'
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30"></div>
                  {products.map((product, index) => (
                    <a
                    key={product.name}
                    href={product.href}
                    className="relative block px-6 py-4 text-gray-700 hover:text-white rounded-xl transition-all duration-300 group overflow-hidden"
                    style={{ animationDelay: `${index * 50}ms` }}
                    >
                    <div className="flex items-center justify-between">
                      <span className="relative z-10 font-medium">
                      {product.name}
                      </span>
                      <ArrowRight className="h-4 w-4 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
                    </div>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl scale-95 group-hover:scale-100"
                      style={{
                      background:
                        'linear-gradient(135deg, #39b54b, #39b54b)',
                      }}
                    ></div>
                    </a>
                  ))}
                  </div>
                </div>
                </div>
            </nav>

            {/* Enhanced CTA Button */}
            <div className="flex items-center space-x-4">
              <button
                className="hidden md:flex items-center space-x-2 px-6 py-3 font-semibold text-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #39b54b, #39b54b)',
                }}
              >
                <Quote className="h-4 w-4 relative z-10" />
                <span className="relative z-10">Request Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>

              {/* Modern Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-white rounded-xl transition-all duration-300 group overflow-hidden relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="relative z-10">
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl scale-0 group-hover:scale-100"
                  style={{
                    background: 'linear-gradient(135deg, #39b54b, #39b54b)',
                  }}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 m-4 rounded-2xl shadow-xl">
            <div className="p-6 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-white font-medium rounded-xl transition-all duration-300 group overflow-hidden relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl scale-95 group-hover:scale-100"
                    style={{
                      background: 'linear-gradient(135deg, #39b54b, #39b54b)',
                    }}
                  ></div>
                </a>
              ))}

              <div className="pt-2">
                <div className="font-semibold text-gray-900 mb-3 px-4">
                  Products
                </div>
                <div className="space-y-1 pl-4">
                  {products.map((product, index) => (
                    <a
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-white rounded-lg transition-all duration-300 group overflow-hidden relative"
                      style={{ animationDelay: `${(index + 4) * 100}ms` }}
                    >
                      <span className="relative z-10">{product.name}</span>
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg scale-95 group-hover:scale-100"
                        style={{
                          background:
                            'linear-gradient(135deg, #39b54b, #39b54b)',
                        }}
                      ></div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <button
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl group overflow-hidden relative"
                  style={{
                    background: 'linear-gradient(135deg, #39b54b, #39b54b)',
                  }}
                >
                  <Quote className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">Request Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>

                <div className="border-t border-gray-200 pt-4 space-y-1">
                  <a
                    href="/legal/terms-of-service"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="/legal/privacy-policy"
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
