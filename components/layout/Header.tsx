'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Phone, Mail } from 'lucide-react';
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
      <div className="bg-primary-600 text-white py-2 px-4 text-sm">
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
            <Link href="/b2b/distributors" className="hover:text-primary-200 transition-colors">
              Distributors
            </Link>
            <Link href="/contact/request-quote" className="hover:text-primary-200 transition-colors">
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">Cloves INC</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Home
              </Link>
              
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors font-medium">
                  <span>Products</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="block px-6 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/industries" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Industries
              </Link>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors font-medium">
                  <span>Resources</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-6 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Search className="h-4 w-4" />
              </Button>
              <Button className="hidden md:flex bg-primary-600 hover:bg-primary-700">
                Request Quote
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
              <div>
                <div className="font-medium text-gray-900 mb-2">Products</div>
                <div className="pl-4 space-y-2">
                  {productCategories.slice(0, 4).map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block text-sm text-gray-600 hover:text-primary-600"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/industries" className="block text-gray-700 hover:text-primary-600 font-medium">
                Industries
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-primary-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-primary-600 font-medium">
                Contact
              </Link>
              <Button className="w-full bg-primary-600 hover:bg-primary-700">
                Request Quote
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;