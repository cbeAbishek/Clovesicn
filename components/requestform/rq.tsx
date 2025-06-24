"use client";
import React, { useState } from 'react';
import { 
  ChevronDown, 
  Check, 
  Upload, 
  Download, 
  Mail, 
  Building2,
  Leaf,
  Shield,
  Package,
  FileText,
  User,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  X
} from 'lucide-react';
import { downloadQuotePDF } from './pdfGenerator'; // Assuming you have a utility function for PDF generation

const ProductsPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    products: {} as Record<string, number | undefined>,
    customization: {
      industry: '',
      hospitalName: '',
      sustainability: false,
      specifications: null
    },
    contact: {
      name: '',
      company: '',
      email: '',
      phone: '',
      region: '',
      timeline: '',
      customDate: '',
      gdprConsent: false
    }
  });
  
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const productCategories = {
    'Autoclave Liners': {
      icon: Shield,
      items: [
        { id: 'al-1', name: 'Standard Autoclave Liners', price: '$25/pack' },
        { id: 'al-2', name: 'Heavy-Duty Sterilization Bags', price: '$35/pack' },
        { id: 'al-3', name: 'Biodegradable Autoclave Liners', price: '$40/pack', tags: ['Biodegradable'] }
      ]
    },
    'Packaging Solutions': {
      icon: Package,
      items: [
        { id: 'ps-1', name: 'Medical Waste Containers', price: '$15/unit', tags: ['Medical Waste Sterilization'] },
        { id: 'ps-2', name: 'Sustainable Packaging', price: '$20/unit', tags: ['Biodegradable'] },
        { id: 'ps-3', name: 'Industrial Storage Solutions', price: '$30/unit' }
      ]
    },
    'Specialized Equipment': {
      icon: FileText,
      items: [
        { id: 'se-1', name: 'Custom Sterilization Systems', price: 'Quote on request' },
        { id: 'se-2', name: 'Eco-Friendly Disposal Units', price: 'Quote on request', tags: ['Biodegradable'] }
      ]
    }
  };

  const filters = ['Medical Waste Sterilization', 'Biodegradable'];
  const industries = ['Healthcare', 'Agriculture', 'Manufacturing', 'Research', 'Other'];
  const timelines = ['ASAP', '1-2 weeks', '3-4 weeks', 'Custom date'];

interface ProductItem {
    id: string;
    name: string;
    price: string;
    tags?: string[];
}

interface ProductCategory {
    icon: React.ComponentType<{ className?: string; size?: number }>;
// Removed unused ProductCategory interface
    industry: string;
    hospitalName: string;
    sustainability: boolean;
    specifications: FileList | null;
}

interface ContactData {
    name: string;
    company: string;
    email: string;
    phone: string;
    region: string;
    timeline: string;
    customDate: string;
    gdprConsent: boolean;
}

interface CustomizationData {
    industry: string;
    hospitalName: string;
    sustainability: boolean;
    specifications: FileList | null;
}

interface FormData {
    products: Record<string, number | undefined>;
    customization: CustomizationData;
    contact: ContactData;
}

type ExpandedCategories = Record<string, boolean>;

const toggleCategory = (category: string) => {
    setExpandedCategories((prev: ExpandedCategories) => ({
        ...prev,
        [category]: !prev[category]
    }));
};

interface HandleProductSelection {
    (productId: string, quantity: number): void;
}

const handleProductSelection: HandleProductSelection = (productId, quantity) => {
    setFormData(prev => ({
        ...prev,
        products: {
            ...prev.products,
            [productId]: quantity > 0 ? quantity : undefined
        }
    }));
};

interface HandleFilterToggle {
    (filter: string): void;
}

const handleFilterToggle: HandleFilterToggle = (filter) => {
    setActiveFilters((prev: string[]) =>
        prev.includes(filter)
            ? prev.filter((f) => f !== filter)
            : [...prev, filter]
    );
};

interface GetFilteredItems {
    (items: ProductItem[]): ProductItem[];
}

const getFilteredItems: GetFilteredItems = (items) => {
    if (activeFilters.length === 0) return items;
    return items.filter(item =>
        item.tags && item.tags.some(tag => activeFilters.includes(tag))
    );
};

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Generate PDF and mailto link would go here
    console.log('Form submitted:', formData);
  };

  const getSelectedProductsCount = () => {
    return Object.keys(formData.products).filter(key => formData.products[key]).length;
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
            transition-all duration-500 transform
            ${currentStep >= step 
              ? 'bg-[#39b54b] text-white scale-110 shadow-lg' 
              : 'bg-gray-200 text-gray-600'
            }
          `}>
            {currentStep > step ? <Check size={16} /> : step}
          </div>
          {step < 4 && (
            <div className={`
              w-16 h-1 mx-2 transition-all duration-500
              ${currentStep > step ? 'bg-[#39b54b]' : 'bg-gray-200'}
            `} />
          )}
        </div>
      ))}
    </div>
  );

  const ProductCard = ({ item, category }: { item: ProductItem; category: string }) => {
    const isSelected = formData.products[item.id];
    const quantity = formData.products[item.id] || 0;

    return (
      <div
        className={`
          bg-white rounded-lg border p-4 transition-all duration-300
          ${isSelected
            ? 'border-[#39b54b] bg-green-50 shadow-md'
            : 'border-gray-200 hover:border-[#39b54b] hover:shadow-sm'
          }
        `}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">{item.name}</h4>
            <p className="text-[#39b54b] font-medium">{item.price}</p>
            {item.tags && (
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-[#39b54b] text-white text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={!!isSelected}
              onChange={(e) => handleProductSelection(item.id, e.target.checked ? 1 : 0)}
              className="sr-only"
            />
            <div className={`
              w-5 h-5 border-2 rounded transition-all duration-300
              ${isSelected
                ? 'bg-[#39b54b] border-[#39b54b]'
                : 'border-gray-300 hover:border-[#39b54b]'
              }
            `}>
              {isSelected && <Check size={12} className="text-white m-0.5" />}
            </div>
            <span className="ml-2 text-sm">Select</span>
          </label>
          {isSelected && (
            <div className="flex items-center gap-2">
              <label className="text-sm">Qty:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => handleProductSelection(item.id, parseInt(e.target.value) || 1)}
                className="w-16 px-2 py-1 border border-gray-300 rounded focus:border-[#39b54b] focus:outline-none"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const Step1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Products</h2>
        <p className="text-gray-600">Choose from our range of healthcare and industrial solutions</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Filter by:</h3>
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => handleFilterToggle(filter)}
              className={`
                px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 transform
                ${activeFilters.includes(filter)
                  ? 'bg-[#39b54b] text-white scale-105 shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
            >
              {filter}
              {activeFilters.includes(filter) && <X size={14} className="inline ml-1" />}
            </button>
          ))}
        </div>
      </div>

      {/* Product Categories */}
      <div className="space-y-4">
        {Object.entries(productCategories).map(([category, data]) => {
          const Icon = data.icon;
          const isExpanded = expandedCategories[category];
          const filteredItems = getFilteredItems(data.items);
          
          return (
            <div key={category} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-[#39b54b]" size={20} />
                  <h3 className="font-semibold text-gray-800">{category}</h3>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {filteredItems.length} items
                  </span>
                </div>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              {isExpanded && (
                <div className="p-4 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredItems.map(item => (
                      <ProductCard key={item.id} item={item} category={category} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {getSelectedProductsCount() > 0 && (
        <div className="fixed bottom-6 right-6">
          <div className="bg-[#39b54b] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <CheckCircle2 size={20} />
            <span>{getSelectedProductsCount()} product{getSelectedProductsCount() !== 1 ? 's' : ''} selected</span>
          </div>
        </div>
      )}
    </div>
  );

  const Step2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Customization & Industry Details</h2>
        <p className="text-gray-600">Help us tailor our solutions to your specific needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <Building2 className="inline mr-2 text-[#39b54b]" size={16} />
              Industry
            </label>
            <select
              value={formData.customization.industry}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                customization: { ...prev.customization, industry: e.target.value }
              }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#39b54b] focus:outline-none transition-colors duration-200"
            >
              <option value="">Select your industry</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>

          {formData.customization.industry === 'Healthcare' && (
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Hospital/Facility Name
              </label>
              <input
                type="text"
                value={formData.customization.hospitalName}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  customization: { ...prev.customization, hospitalName: e.target.value }
                }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#39b54b] focus:outline-none transition-colors duration-200"
                placeholder="Enter facility name"
              />
            </div>
          )}

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.customization.sustainability}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  customization: { ...prev.customization, sustainability: e.target.checked }
                }))}
                className="sr-only"
              />
              <div className={`
                w-5 h-5 border-2 rounded transition-all duration-300
                ${formData.customization.sustainability 
                  ? 'bg-[#39b54b] border-[#39b54b]' 
                  : 'border-gray-300 hover:border-[#39b54b]'
                }
              `}>
                {formData.customization.sustainability && <Check size={12} className="text-white m-0.5" />}
              </div>
              <span className="ml-3 flex items-center">
                <Leaf className="text-[#39b54b] mr-2" size={16} />
                <span className="font-semibold text-gray-700">Prioritize Eco-Friendly Materials</span>
              </span>
            </label>
            <p className="text-sm text-gray-600 mt-2 ml-8">
              Well recommend sustainable alternatives when available
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            <Upload className="inline mr-2 text-[#39b54b]" size={16} />
            Upload Specifications (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#39b54b] transition-colors duration-300">
            <Upload className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-600 mb-2">Drop your specification files here</p>
            <p className="text-sm text-gray-500">or click to browse</p>
            <input type="file" className="hidden" multiple />
          </div>
        </div>
      </div>
    </div>
  );

  const Step3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact & Delivery Information</h2>
        <p className="text-gray-600">Well use this information to prepare your customized quote</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <User className="inline mr-2 text-[#39b54b]" size={16} />
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.contact.name}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                contact: { ...prev.contact, name: e.target.value }
              }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#39b54b] focus:outline-none transition-colors duration-200"
              placeholder="Enter your full name"
            />
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <Building2 className="inline mr-2 text-[#39b54b]" size={16} />
              Company *
            </label>
            <input
              type="text"
              required
              value={formData.contact.company}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                contact: { ...prev.contact, company: e.target.value }
              }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#39b54b] focus:outline-none transition-colors duration-200"
              placeholder="Enter your company name"
            />
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <Mail className="inline mr-2 text-[#39b54b]" size={16} />
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.contact.email}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                contact: { ...prev.contact, email: e.target.value }
              }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#39b54b] focus:outline-none transition-colors duration-200"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <Phone className="inline mr-2 text-[#39b54b]" size={16} />
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.contact.phone}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                contact: { ...prev.contact, phone: e.target.value }
              }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#39b54b] focus:outline-none transition-colors duration-200"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <MapPin className="inline mr-2 text-[#39b54b]" size={16} />
              Region
            </label>
            <input
              type="text"
              value={formData.contact.region}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                contact: { ...prev.contact, region: e.target.value }
              }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#39b54b] focus:outline-none transition-colors duration-200"
              placeholder="Enter your region/location"
            />
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <Clock className="inline mr-2 text-[#39b54b]" size={16} />
              Preferred Timeline
            </label>
            <select
              value={formData.contact.timeline}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                contact: { ...prev.contact, timeline: e.target.value }
              }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#39b54b] focus:outline-none transition-colors duration-200"
            >
              <option value="">Select timeline</option>
              {timelines.map(timeline => (
                <option key={timeline} value={timeline}>{timeline}</option>
              ))}
            </select>
            
            {formData.contact.timeline === 'Custom date' && (
              <div className="mt-4">
                <input
                  type="date"
                  value={formData.contact.customDate}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    contact: { ...prev.contact, customDate: e.target.value }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#39b54b] focus:outline-none transition-colors duration-200"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <label className="flex items-start cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.contact.gdprConsent}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              contact: { ...prev.contact, gdprConsent: e.target.checked }
            }))}
            className="sr-only"
          />
          <div className={`
            w-5 h-5 border-2 rounded transition-all duration-300 mt-0.5
            ${formData.contact.gdprConsent 
              ? 'bg-[#39b54b] border-[#39b54b]' 
              : 'border-gray-300 hover:border-[#39b54b]'
            }
          `}>
            {formData.contact.gdprConsent && <Check size={12} className="text-white m-0.5" />}
          </div>
          <span className="ml-3 text-sm text-gray-600">
            I consent to the processing of my personal data in accordance with the 
            <a href="#" className="text-[#39b54b] hover:underline ml-1">Privacy Policy</a> 
            and agree to be contacted regarding my quote request. *
          </span>
        </label>
      </div>
    </div>
  );

  const Step4 = () => (
    <div className="text-center space-y-8">
      {!isSubmitted ? (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Review & Submit</h2>
            <p className="text-gray-600">Please review your request before submitting</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-left max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-800 mb-4">Request Summary</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Selected Products:</h4>
                <p className="text-gray-600">{getSelectedProductsCount()} product{getSelectedProductsCount() !== 1 ? 's' : ''} selected</p>
              </div>
              
              {formData.customization.industry && (
                <div>
                  <h4 className="font-medium text-gray-700">Industry:</h4>
                  <p className="text-gray-600">{formData.customization.industry}</p>
                </div>
              )}
              
              <div>
                <h4 className="font-medium text-gray-700">Contact:</h4>
                <p className="text-gray-600">{formData.contact.name} - {formData.contact.company}</p>
                <p className="text-gray-600">{formData.contact.email}</p>
              </div>
              
              {formData.customization.sustainability && (
                <div className="flex items-center text-[#39b54b]">
                  <Leaf size={16} className="mr-2" />
                  <span className="text-sm">Eco-friendly materials prioritized</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#39b54b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
          >
            Submit Request
            <ArrowRight size={20} />
          </button>
        </>
      ) : (
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 bg-[#39b54b] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="text-white" size={40} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Request Submitted Successfully!</h2>
            <p className="text-gray-600">Your quote request has been processed and a PDF has been generated.</p>
          </div>

          <div className="space-y-4">
            <button
              className="w-full bg-[#39b54b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() => {
                downloadQuotePDF(formData);
              }}
            >
              <Download size={20} />
              Download PDF Quote
            </button>
            
            
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Well contact you within 24 hours with your customized quote.
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#39b54b] to-green-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium animate-pulse">
          <Shield className="inline mr-2" size={16} />
          ISO 9001 Certified | Eco-Friendly Materials
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-top duration-700">
            Request a Quote
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-in fade-in slide-in-from-top duration-700 delay-200">
            Tailored Solutions for Healthcare, Industrial, and Commercial Needs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <StepIndicator />
        
        <div className="min-h-[600px]">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {currentStep === 4 && <Step4 />}
        </div>

        {/* Navigation */}
        {!isSubmitted && (
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
            <button
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2
                ${currentStep === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-[#39b54b] border-2 border-[#39b54b] hover:bg-[#39b54b] hover:text-white transform hover:scale-105'
                }
              `}
            >
              <ArrowLeft size={20} />
              Previous
            </button>

            <div className="text-sm text-gray-500">
              Step {currentStep} of 4
            </div>

            <button
              onClick={handleNextStep}
              disabled={currentStep === 4}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105
                ${currentStep === 4 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'bg-[#39b54b] text-white hover:bg-green-600 shadow-lg'
                }
              `}
            >
              Next
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;