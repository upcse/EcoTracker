import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Scan, 
  Search, 
  QrCode,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Camera
} from 'lucide-react';
import type { Page } from '../App';
import { mockProducts } from '../utils/mockData';

interface ProductLookupProps {
  onNavigate: (page: Page, productId?: string) => void;
}

export function ProductLookup({ onNavigate }: ProductLookupProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [searchResults, setSearchResults] = useState(mockProducts);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults(mockProducts);
    } else {
      const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };

  const simulateQRScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      // Simulate finding a product
      onNavigate('product', mockProducts[0].id);
    }, 2000);
  };

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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-4"
        >
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Product Verification</h1>
          <p className="text-gray-600">Scan QR codes or search for verified sustainable products</p>
        </div>
      </div>

      {/* Search and Scan Options */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* QR Scanner */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <QrCode className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">QR Code Scanner</h3>
            <p className="text-gray-600 mb-6">Scan product QR codes for instant verification</p>
            
            {isScanning ? (
              <div className="space-y-4">
                <div className="mx-auto w-32 h-32 border-4 border-blue-500 rounded-lg animate-pulse bg-blue-50 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-blue-500 animate-bounce" />
                </div>
                <p className="text-sm text-gray-500">Scanning for QR code...</p>
              </div>
            ) : (
              <button
                onClick={simulateQRScan}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Scan className="mr-2 h-5 w-5" />
                Start Scanning
              </button>
            )}
          </div>
        </div>

        {/* Product Search */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Search</h3>
            <p className="text-gray-600">Search our database of verified products</p>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search by product name, brand, or category..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {searchQuery ? `Search Results (${searchResults.length})` : 'Recently Verified Products'}
          </h3>
          {searchResults.length > 0 && (
            <span className="text-sm text-gray-500">
              Showing {searchResults.length} products
            </span>
          )}
        </div>

        {searchResults.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">No products found</h4>
            <p className="text-gray-600">Try adjusting your search terms or scan a QR code</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => onNavigate('product', product.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getRatingColor(product.sustainabilityRating)}`}>
                    {product.sustainabilityRating}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500 w-20">Score:</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 ml-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${product.verificationScore}%` }}
                      />
                    </div>
                    <span className="ml-2 text-sm font-medium">{product.verificationScore}%</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span>Last verified: {new Date(product.lastVerified).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <div className="flex items-center text-sm text-green-600 group-hover:text-green-700">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* How to Use */}
      <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">How to Verify Products</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <QrCode className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">1. Find QR Code</h4>
            <p className="text-sm text-gray-600">Look for the EcoTracker QR code on product packaging</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <Scan className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">2. Scan or Search</h4>
            <p className="text-sm text-gray-600">Use our scanner or search for the product directly</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">3. View Results</h4>
            <p className="text-sm text-gray-600">Access verified sustainability and supply chain data</p>
          </div>
        </div>
      </div>
    </div>
  );
}