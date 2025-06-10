import React from 'react';
import { 
  Shield, 
  Scan, 
  BarChart3, 
  Leaf, 
  ArrowRight, 
  CheckCircle, 
  Globe,
  Cpu,
  Link
} from 'lucide-react';
import type { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Verification',
      description: 'Immutable supply chain records stored on-chain with autonomous verification agents',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Scan,
      title: 'QR Code Traceability',
      description: 'Instant product verification through scannable codes linking to blockchain data',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: BarChart3,
      title: 'Impact Analytics',
      description: 'Real-time sustainability metrics and environmental impact tracking',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Cpu,
      title: 'Autonomous Agents',
      description: 'AI-powered verification agents that continuously monitor and update product data',
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const benefits = [
    'Transparent supply chain verification',
    'Real-time sustainability tracking',
    'Immutable blockchain records',
    'Consumer trust and confidence',
    'Regulatory compliance support',
    'Brand authenticity protection'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-full">
            <Leaf className="h-16 w-16 text-green-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          EcoTracker
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Autonomous agents with on-chain capabilities for transparent supply chain verification
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Bridge the gap between real-world supply chain data and blockchain transparency. 
          Help consumers make informed decisions based on verified sustainability criteria.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('register')}
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors group"
          >
            Register Product
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('lookup')}
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-medium rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors group"
          >
            <Scan className="mr-2 h-5 w-5" />
            Verify Product
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
            <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How EcoTracker Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <span className="text-xl font-bold text-green-600">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Product Registration</h3>
            <p className="text-gray-600">Manufacturers register products with detailed supply chain and sustainability data</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <span className="text-xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Autonomous Verification</h3>
            <p className="text-gray-600">AI agents verify data and store immutable records on blockchain</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <span className="text-xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Consumer Access</h3>
            <p className="text-gray-600">Consumers scan QR codes to access verified sustainability information</p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose EcoTracker?</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white">
          <Globe className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-4">Global Impact</h3>
          <p className="text-green-100 mb-6">
            Join the movement towards transparent, sustainable commerce. Every verified product 
            brings us closer to a more accountable supply chain ecosystem.
          </p>
          <div className="flex items-center space-x-2 text-green-100">
            <Link className="h-4 w-4" />
            <span className="text-sm">Powered by ICP Blockchain</span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the future of supply chain transparency. Register your first product 
          or explore verified products in our ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('dashboard')}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            <BarChart3 className="mr-2 h-5 w-5" />
            View Analytics
          </button>
          <button
            onClick={() => onNavigate('lookup')}
            className="inline-flex items-center px-6 py-3 bg-transparent text-white border-2 border-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
          >
            <Scan className="mr-2 h-5 w-5" />
            Scan Product
          </button>
        </div>
      </div>
    </div>
  );
}