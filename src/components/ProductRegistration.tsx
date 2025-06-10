import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Upload, 
  Check, 
  AlertCircle, 
  Leaf,
  Shield,
  Factory,
  Truck,
  Award
} from 'lucide-react';
import type { Page } from '../App';
import { generateQRCode, generateProductId } from '../utils/qrCode';
import { productCategories, certificationTypes } from '../utils/mockData';

interface ProductRegistrationProps {
  onNavigate: (page: Page, productId?: string) => void;
}

interface FormData {
  name: string;
  brand: string;
  description: string;
  category: string;
  origin: string;
  manufacturer: string;
  suppliers: string;
  carbonFootprint: string;
  waterUsage: string;
  renewableEnergy: string;
  wasteReduction: string;
  fairTrade: boolean;
  organicCertified: boolean;
  certifications: string[];
  recycledMaterials: string;
  biodegradable: boolean;
}

export function ProductRegistration({ onNavigate }: ProductRegistrationProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [qrCode, setQrCode] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    brand: '',
    description: '',
    category: '',
    origin: '',
    manufacturer: '',
    suppliers: '',
    carbonFootprint: '',
    waterUsage: '',
    renewableEnergy: '',
    wasteReduction: '',
    fairTrade: false,
    organicCertified: false,
    certifications: [],
    recycledMaterials: '',
    biodegradable: false
  });

  const steps = [
    { title: 'Product Info', icon: Leaf },
    { title: 'Supply Chain', icon: Factory },
    { title: 'Sustainability', icon: Shield },
    { title: 'Verification', icon: Award }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleCertificationToggle = (cert: string) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter(c => c !== cert)
        : [...prev.certifications, cert]
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate blockchain registration and agent verification
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const productId = generateProductId();
    const qrCodeData = await generateQRCode(productId);
    setQrCode(qrCodeData);
    
    setIsSubmitting(false);
    setCurrentStep(5); // Success step
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter product name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter brand name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                {productCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Describe your product and its key features"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Origin Location</label>
              <input
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., California, USA"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturer</label>
              <input
                type="text"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Manufacturing company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Key Suppliers</label>
              <textarea
                name="suppliers"
                value={formData.suppliers}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="List main suppliers (one per line)"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Carbon Footprint (kg CO2)</label>
                <input
                  type="number"
                  name="carbonFootprint"
                  value={formData.carbonFootprint}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="0.0"
                  step="0.1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Water Usage (L)</label>
                <input
                  type="number"
                  name="waterUsage"
                  value={formData.waterUsage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Renewable Energy (%)</label>
                <input
                  type="number"
                  name="renewableEnergy"
                  value={formData.renewableEnergy}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                  max="100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Recycled Materials (%)</label>
                <input
                  type="number"
                  name="recycledMaterials"
                  value={formData.recycledMaterials}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                  max="100"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="fairTrade"
                  checked={formData.fairTrade}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">Fair Trade Certified</label>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="organicCertified"
                  checked={formData.organicCertified}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">Organic Certified</label>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="biodegradable"
                  checked={formData.biodegradable}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">Biodegradable</label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Additional Certifications</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {certificationTypes.map(cert => (
                  <button
                    key={cert}
                    type="button"
                    onClick={() => handleCertificationToggle(cert)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      formData.certifications.includes(cert)
                        ? 'bg-green-100 text-green-800 border-2 border-green-300'
                        : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200'
                    }`}
                  >
                    {cert}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center py-8">
            {isSubmitting ? (
              <div className="space-y-6">
                <div className="animate-spin mx-auto h-16 w-16 border-4 border-green-500 border-t-transparent rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Registration</h3>
                  <p className="text-gray-600 mb-4">Our autonomous agents are verifying your product data...</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Validating supply chain data</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Storing on ICP blockchain</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span>Generating verification records</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready for Verification</h3>
                  <p className="text-gray-600 mb-6">Review your information and submit for blockchain registration</p>
                  
                  <div className="bg-gray-50 rounded-xl p-6 text-left space-y-4">
                    <div><strong>Product:</strong> {formData.name}</div>
                    <div><strong>Brand:</strong> {formData.brand}</div>
                    <div><strong>Category:</strong> {formData.category}</div>
                    <div><strong>Origin:</strong> {formData.origin}</div>
                    <div><strong>Certifications:</strong> {formData.certifications.join(', ') || 'None'}</div>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="mt-6 inline-flex items-center px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Submit for Verification
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="text-center py-8">
            <div className="space-y-6">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Successfully Registered!</h3>
                <p className="text-gray-600 mb-6">Your product has been verified and registered on the blockchain</p>
                
                {qrCode && (
                  <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                    <img src={qrCode} alt="Product QR Code" className="mx-auto mb-4" />
                    <p className="text-sm text-gray-600">Product QR Code</p>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <button
                    onClick={() => onNavigate('dashboard')}
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    View Analytics
                  </button>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center px-6 py-3 bg-white text-green-600 border-2 border-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors"
                  >
                    Register Another Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (currentStep === 5) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {renderStepContent()}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-4"
        >
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Product Registration</h1>
          <p className="text-gray-600">Register your product for blockchain verification</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const stepNumber = index + 1;
            const isActive = currentStep === stepNumber;
            const isCompleted = currentStep > stepNumber;
            
            return (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  isCompleted ? 'bg-green-600 text-white' :
                  isActive ? 'bg-green-100 text-green-600 border-2 border-green-600' :
                  'bg-gray-100 text-gray-400'
                }`}>
                  {isCompleted ? <Check className="h-6 w-6" /> : <StepIcon className="h-6 w-6" />}
                </div>
                <span className={`text-sm font-medium ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`h-0.5 w-full mt-6 ${isCompleted ? 'bg-green-600' : 'bg-gray-200'}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {renderStepContent()}
        
        {currentStep < 4 && (
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}