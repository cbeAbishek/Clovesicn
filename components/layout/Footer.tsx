import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Autoclave Liners', href: '/products/autoclave-liners' },
    { name: 'High-Temp Liners', href: '/products/high-temp-liners' },
    { name: 'Textile Liners', href: '/products/textile-liners' },
    { name: 'Industrial Packaging', href: '/products/industrial-packaging' },
    { name: 'Commercial Textiles', href: '/products/commercial-textiles' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about#story' },
    { name: 'Leadership Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press & Media', href: '/press' },
  ];

  const resourceLinks = [
    { name: 'Product Guides', href: '/resources/guides' },
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'Industry Blog', href: '/resources/blog' },
    { name: 'Sustainability Report', href: '/resources/sustainability' },
    { name: 'Certifications', href: '/b2b/certifications' },
  ];

  const supportLinks = [
    { name: 'Contact Support', href: '/contact' },
    { name: 'Request Quote', href: '/contact/request-quote' },
    { name: 'Distributor Portal', href: '/b2b/distributors' },
    { name: 'Bulk Orders', href: '/b2b/bulk-portal' },
    { name: 'Technical Support', href: '/support' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <div className="font-bold text-2xl">EcoTech Solutions</div>
                <div className="text-primary-400 font-medium">Sustainable Innovation</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of high-quality, sustainable products for healthcare, industrial, 
              and commercial sectors worldwide. We continuously innovate to meet the evolving 
              needs of our customers while protecting our planet.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">info@ecotechsolutions.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <span className="text-gray-300">
                  123 Innovation Drive<br />
                  Sustainability City, SC 12345<br />
                  United States
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest industry insights, product updates, and sustainability news delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>© {currentYear} EcoTech Solutions. All rights reserved.</span>
              <div className="flex space-x-6">
                <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-primary-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;