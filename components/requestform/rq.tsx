// app/request-quote/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Check,
  Download,
  Mail,
  Upload,
  Leaf,
  Shield,
  Award,
  Building2,
  Phone,
  MapPin,
  Calendar,
  User,
  FileText,
  Package,
  Recycle,
  Heart,
  Star,
} from 'lucide-react';
import { generateQuotePDF} from './pdfGenerator';

const RequestQuotePage = () => {
  const [openAccordions, setOpenAccordions] = useState<{
    [category: string]: boolean;
  }>({});
  const [selectedProducts, setSelectedProducts] = useState<{
    [productId: string]: boolean;
  }>({});
  const [quantities, setQuantities] = useState<{ [productId: string]: number }>(
    {},
  );
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStatus, setGenerationStatus] = useState('');
  const [formData, setFormData] = useState({
    industry: '',
    hospitalName: '',
    facilityType: '',
    sustainability: false,
    name: '',
    company: '',
    email: '',
    phone: '',
    region: '',
    deliveryTimeline: '',
    customDate: '',
    gdprConsent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  const productCategories = {
    'Autoclave Liners': [
      { id: 'al-1', name: 'High-Temperature Sterilization Bags', price: '$89' },
      { id: 'al-2', name: 'Medical Waste Disposal Liners', price: '$156' },
      { id: 'al-3', name: 'Steam Sterilization Pouches', price: '$234' },
      { id: 'al-4', name: 'Indicator Strip Bags', price: '$67' },
    ],
    'Packaging Solutions': [
      { id: 'ps-1', name: 'Biodegradable Food Containers', price: '$45' },
      { id: 'ps-2', name: 'Compostable Packaging Films', price: '$78' },
      { id: 'ps-3', name: 'Sustainable Clamshell Boxes', price: '$92' },
      { id: 'ps-4', name: 'Eco-Friendly Wrap Materials', price: '$123' },
    ],
    'Industrial Solutions': [
      { id: 'is-1', name: 'Heavy-Duty Containment Bags', price: '$189' },
      { id: 'is-2', name: 'Chemical-Resistant Liners', price: '$267' },
      { id: 'is-3', name: 'Anti-Static Packaging', price: '$134' },
      { id: 'is-4', name: 'Temperature-Controlled Bags', price: '$198' },
    ],
    'Specialty Products': [
      { id: 'sp-1', name: 'Custom Printed Solutions', price: '$345' },
      { id: 'sp-2', name: 'Barrier Protection Films', price: '$456' },
      { id: 'sp-3', name: 'Vacuum Seal Pouches', price: '$167' },
      { id: 'sp-4', name: 'Multi-Layer Composites', price: '$289' },
    ],
  };

  const filters = [
    'Medical Waste Sterilization',
    'Biodegradable',
    'High Temperature',
    'Chemical Resistant',
    'Food Grade',
    'Anti-Static',
  ];

  const industries = [
    'Healthcare',
    'Agriculture',
    'Hospitality',
    'Manufacturing',
    'Food Service',
    'Laboratory',
    'Pharmaceutical',
    'Veterinary',
  ];

  interface Product {
    id: string;
    name: string;
    price: string;
  }

  interface ProductCategories {
    [category: string]: Product[];
  }

  interface AccordionState {
    [category: string]: boolean;
  }

  interface SelectedProductsState {
    [productId: string]: boolean;
  }

  interface QuantitiesState {
    [productId: string]: number;
  }

  interface FormData {
    industry: string;
    hospitalName: string;
    facilityType: string;
    sustainability: boolean;
    name: string;
    company: string;
    email: string;
    phone: string;
    region: string;
    deliveryTimeline: string;
    customDate: string;
    gdprConsent: boolean;
  }

  const toggleAccordion = (category: string) => {
    setOpenAccordions((prev: AccordionState) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  interface ToggleProductFn {
    (productId: string): void;
  }

  const toggleProduct: ToggleProductFn = (productId) => {
    setSelectedProducts((prev: SelectedProductsState) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  interface UpdateQuantityFn {
    (productId: string, quantity: number): void;
  }

  const updateQuantity: UpdateQuantityFn = (productId, quantity) => {
    setQuantities((prev: QuantitiesState) => ({
      ...prev,
      [productId]: quantity,
    }));
  };

  interface ToggleFilterFn {
    (filter: string): void;
  }

  const toggleFilter: ToggleFilterFn = (filter) => {
    setActiveFilters((prev: string[]) =>
      prev.includes(filter)
        ? prev.filter((f: string) => f !== filter)
        : [...prev, filter],
    );
  };

  interface HandleInputChangeFn {
    (field: keyof FormData, value: string | boolean): void;
  }

  const handleInputChange: HandleInputChangeFn = (field, value) => {
    setFormData((prev: FormData) => ({
      ...prev,
      [field]: value,
    }));
  };

  const generateQuote = async () => {
    // Validate form
    const selectedItems = Object.keys(selectedProducts).filter(
      (id) => selectedProducts[id],
    );
    if (selectedItems.length === 0) {
      alert('Please select at least one product');
      return;
    }

    if (!formData.name || !formData.email || !formData.company) {
      alert('Please fill in required fields (Name, Email, Company)');
      return;
    }

    if (!formData.gdprConsent) {
      alert('Please accept the GDPR compliance terms');
      return;
    }

    setIsGenerating(true);
    setGenerationStatus('Generating PDF quote...');

    try {
      // Generate PDF
      const pdfResult = generateQuotePDF(
        formData,
        selectedProducts,
        quantities,
        productCategories,
      );

      if (!pdfResult.success) {
        throw new Error(pdfResult.error);
      }

      setGenerationStatus('Creating email...');


      setGenerationStatus('Opening email client...');

      // Small delay for UX
      setTimeout(() => {
        //window.location.href = mailtoLink;
        setIsSubmitted(true);
        setGenerationStatus('Complete!');
        setIsGenerating(false);
      }, 1000);
    } catch (error) {
      console.error('Error generating quote:', error);
      alert('There was an error generating your quote. Please try again.');
      setIsGenerating(false);
    }
  };

  const selectedCount = Object.values(selectedProducts).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/ceo.jpg')] opacity-20"></div>

        <div
          className={`relative z-10 container mx-auto px-6 py-20 transition-all duration-1000 ${
            animateHeader
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 animate-pulse">
                <Award className="h-5 w-5" />
                <span className="text-sm font-medium">
                  ISO 9001 Certified | Eco-Friendly Materials
                </span>
                <Leaf className="h-5 w-5" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Request a Quote
            </h1>

            <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
              Tailored Solutions for Healthcare, Industrial, and Commercial
              Needs
            </p>

            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Medical Grade</span>
              </div>
              <div className="flex items-center space-x-2">
                <Recycle className="h-5 w-5" />
                <span>Sustainable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Filter Section */}
          <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-[#39b54b]" />
              Filter Products
            </h3>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilters.includes(filter)
                      ? 'bg-[#39b54b] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                  {activeFilters.includes(filter) && (
                    <Check className="h-4 w-4 ml-2 inline" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Selection */}
          <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Package className="h-5 w-5 mr-2 text-[#39b54b]" />
                Select Products
              </h3>
              {selectedCount > 0 && (
                <div className="bg-[#39b54b] text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                  {selectedCount} selected
                </div>
              )}
            </div>

            <div className="space-y-4">
              {Object.entries(productCategories).map(([category, products]) => (
                <div
                  key={category}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(category)}
                    className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span className="font-medium text-gray-800">
                      {category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        {products.length} products
                      </span>
                      {openAccordions[category] ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openAccordions[category]
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 space-y-4">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              checked={selectedProducts[product.id] || false}
                              onChange={() => toggleProduct(product.id)}
                              className="h-5 w-5 text-[#39b54b] rounded focus:ring-[#39b54b]"
                            />
                            <div>
                              <span className="font-medium text-gray-800">
                                {product.name}
                              </span>
                              <span className="text-[#39b54b] font-semibold ml-2">
                                {product.price}
                              </span>
                            </div>
                          </div>

                          {selectedProducts[product.id] && (
                            <div className="flex items-center space-x-2 animate-slide-in">
                              <label className="text-sm text-gray-600">
                                Qty:
                              </label>
                              <input
                                type="number"
                                min="1"
                                value={quantities[product.id] || 1}
                                onChange={(e) =>
                                  updateQuantity(
                                    product.id,
                                    Number(e.target.value),
                                  )
                                }
                                className="w-20 px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#39b54b] focus:border-transparent"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry & Custom Fields */}
          <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
              <Building2 className="h-5 w-5 mr-2 text-[#39b54b]" />
              Industry Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    handleInputChange('industry', e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              {formData.industry === 'Healthcare' && (
                <div className="animate-slide-in">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hospital/Facility Name
                  </label>
                  <input
                    type="text"
                    value={formData.hospitalName}
                    onChange={(e) =>
                      handleInputChange('hospitalName', e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                    placeholder="Enter facility name"
                  />
                </div>
              )}

              {formData.industry && formData.industry !== 'Healthcare' && (
                <div className="animate-slide-in">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Facility Type
                  </label>
                  <input
                    type="text"
                    value={formData.facilityType}
                    onChange={(e) =>
                      handleInputChange('facilityType', e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                    placeholder="e.g., Manufacturing plant, Restaurant, Lab"
                  />
                </div>
              )}
            </div>

            <div className="mt-6">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.sustainability}
                  onChange={(e) =>
                    handleInputChange('sustainability', e.target.checked)
                  }
                  className="h-5 w-5 text-[#39b54b] rounded focus:ring-[#39b54b]"
                />
                <span className="text-gray-700 flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-[#39b54b]" />I prefer
                  eco-friendly and sustainable materials
                </span>
              </label>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
              <User className="h-5 w-5 mr-2 text-[#39b54b]" />
              Contact Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region
                </label>
                <input
                  type="text"
                  value={formData.region}
                  onChange={(e) => handleInputChange('region', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your region/location"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Timeline
                </label>
                <select
                  value={formData.deliveryTimeline}
                  onChange={(e) =>
                    handleInputChange('deliveryTimeline', e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="custom">Custom date</option>
                </select>
              </div>
            </div>

            {formData.deliveryTimeline === 'custom' && (
              <div className="mt-6 animate-slide-in">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Delivery Date
                </label>
                <input
                  type="date"
                  value={formData.customDate}
                  onChange={(e) =>
                    handleInputChange('customDate', e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                />
              </div>
            )}
          </div>

          {/* File Upload */}
          {/* <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Upload className="h-5 w-5 mr-2 text-[#39b54b]" />
              Upload Specifications (Optional)
            </h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#39b54b] transition-colors duration-200">
              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">
                Upload specification sheets, drawings, or requirements
              </p>
              <p className="text-sm text-gray-500">
                PDF, DOC, or image files up to 10MB
              </p>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.png"
              />
              <button className="mt-4 px-6 py-2 bg-[#39b54b] text-white rounded-lg hover:bg-[#2d8f3a] transition-colors duration-200">
                Choose Files
              </button>
            </div>
          </div> */}

          {/* GDPR Compliance */}
          <div className="mb-8 p-6 bg-gray-50 rounded-2xl">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.gdprConsent}
                onChange={(e) =>
                  handleInputChange('gdprConsent', e.target.checked)
                }
                className="h-5 w-5 text-[#39b54b] rounded focus:ring-[#39b54b] mt-1"
              />
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">GDPR Compliance *</p>
                <p>
                  I consent to Cloves Inc. processing my personal data for the
                  purpose of providing a quote. I understand I can withdraw
                  consent at any time by contacting privacy@clovesinc.com
                </p>
              </div>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={generateQuote}
              disabled={isSubmitted || isGenerating}
              className={`px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#39b54b] focus:ring-opacity-50 ${
                isSubmitted || isGenerating
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  : 'bg-[#39b54b] text-white hover:bg-[#2d8f3a] shadow-lg hover:shadow-xl'
              }`}
            >
              {isGenerating ? (
                <div className="flex items-center space-x-2">
                  <Check className="h-6 w-6" />
                  <span>Quote Generated!</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Download className="h-6 w-6" />
                  <span>Generate Quote & Email Me</span>
                  <Mail className="h-6 w-6" />
                </div>
              )}
            </button>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl animate-slide-in">
              <div className="flex items-center space-x-3 text-green-800">
                <div className="bg-green-500 rounded-full p-2">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Quote Request Submitted Successfully!
                  </h4>
                  <p className="text-green-700 mt-1">
                    Your PDF quote has been downloaded and your email client has
                    opened with a pre-filled message. Please send the email to
                    complete your quote request.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default RequestQuotePage;
