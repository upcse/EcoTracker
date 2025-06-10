import React from 'react';
import { 
  ArrowLeft, 
  Shield, 
  Leaf, 
  Factory, 
  Truck,
  Award,
  CheckCircle,
  AlertCircle,
  Calendar,
  MapPin,
  BarChart3,
  ExternalLink,
  Download
} from 'lucide-react';
import type { Page } from '../App';
import { mockProducts } from '../utils/mockData';

interface ProductDetailProps {
  productId?: string;
  onNavigate: (page: Page) => void;
}

export function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const product = mockProducts.find(p => p.id === productId) || mockProducts[0];

  const sustainabilityMetrics = [
    { label: 'Carbon Footprint', value: `${product.environmentalImpact.co2Emissions} kg CO2`, icon: Leaf, color: 'text-green-600' },
    { label: 'Water Usage', value: `${product.environmentalImpact.waterFootprint} L`, icon: Factory, color: 'text-blue-600' },
    { label: 'Renewable Energy', value: `${product.environmentalImpact.renewableEnergyUsed}%`, icon: Shield, color: 'text-yellow-600' },
    { label: 'Recycled Materials', value: `${product.environmentalImpact.recycledMaterials}%`, icon: Award, color: 'text-purple-600' }
  ];

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'A+':
      case 'A':
        return 'text-green-800 bg-green-100 border-green-200';
      case 'B+':
      case 'B':
        return 'text-yellow-800 bg-yellow-100 border-yellow-200';
      case 'C+':
      case 'C':
        return 'text-orange-800 bg-orange-100 border-orange-200';
      default:
        return 'text-red-800 bg-red-100 border-red-200';
    }
  };

  const getVerificationStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'text-green-800 bg-green-100 border-green-200';
      case 'pending':
        return 'text-yellow-800 bg-yellow-100 border-yellow-200';
      case 'failed':
        return 'text-red-800 bg-red-100 border-red-200';
      default:
        return 'text-gray-800 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => onNavigate('lookup')}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-4"
        >
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600">{product.brand} • {product.category}</p>
        </div>
        <div className={`px-4 py-2 rounded-full text-lg font-bold border-2 ${getRatingColor(product.sustainabilityRating)}`}>
          {product.sustainabilityRating}
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Product Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Registered: {new Date(product.registrationDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>Last verified: {new Date(product.lastVerified).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Origin: {product.supplyChain.origin}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <BarChart3 className="h-4 w-4 mr-2" />
                <span>Verification Score: {product.verificationScore}%</span>
              </div>
            </div>
          </div>

          {/* Sustainability Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Leaf className="h-5 w-5 text-green-600 mr-2" />
              Environmental Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {sustainabilityMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-lg bg-white ${metric.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">{metric.label}</p>
                      <p className="font-semibold text-gray-900">{metric.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  product.environmentalImpact.biodegradable ? 'text-green-800 bg-green-100' : 'text-gray-800 bg-gray-100'
                }`}>
                  {product.environmentalImpact.biodegradable ? 'Biodegradable' : 'Not Biodegradable'}
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Package Waste</p>
                <p className="font-semibold text-gray-900">{product.environmentalImpact.packageWaste} kg</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  product.supplyChain.fairTrade ? 'text-green-800 bg-green-100' : 'text-gray-800 bg-gray-100'
                }`}>
                  {product.supplyChain.fairTrade ? 'Fair Trade' : 'Standard Trade'}
                </div>
              </div>
            </div>
          </div>

          {/* Supply Chain */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Truck className="h-5 w-5 text-blue-600 mr-2" />
              Supply Chain Transparency
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <MapPin className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Origin</p>
                  <p className="text-gray-600">{product.supplyChain.origin}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Factory className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Manufacturer</p>
                  <p className="text-gray-600">{product.supplyChain.manufacturer}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Truck className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Transportation</p>
                  <p className="text-gray-600">{product.supplyChain.transportMethods.join(', ')}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-3">Key Suppliers</h4>
              <div className="space-y-2">
                {product.supplyChain.suppliers.map((supplier, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>{supplier}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* QR Code */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product QR Code</h3>
            <img 
              src={product.qrCode} 
              alt="Product QR Code" 
              className="mx-auto mb-4 rounded-lg border"
            />
            <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Download QR Code
            </button>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="h-5 w-5 text-yellow-600 mr-2" />
              Certifications
            </h3>
            <div className="space-y-2">
              {product.certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-3 bg-yellow-50 rounded-lg">
                  <Award className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm font-medium text-gray-900">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Status */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="h-5 w-5 text-green-600 mr-2" />
              Verification Status
            </h3>
            <div className="space-y-3">
              {product.agentVerifications.map((verification, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{verification.agentName}</span>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getVerificationStatusColor(verification.status)}`}>
                      {verification.status}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{verification.details}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{new Date(verification.verificationDate).toLocaleDateString()}</span>
                    <span>Confidence: {Math.round(verification.confidence * 100)}%</span>
                  </div>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    <span className="truncate">TX: {verification.blockchainTxId}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}