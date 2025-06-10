import React from 'react';
import { 
  ArrowLeft, 
  TrendingUp, 
  Package, 
  CheckCircle, 
  BarChart3,
  Leaf,
  Users,
  Globe,
  Award
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import type { Page } from '../App';
import { mockAnalytics, mockProducts } from '../utils/mockData';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const stats = [
    {
      title: 'Total Products',
      value: mockAnalytics.totalProducts,
      icon: Package,
      color: 'text-blue-600 bg-blue-100',
      change: '+12%'
    },
    {
      title: 'Verified Products',
      value: mockAnalytics.verifiedProducts,
      icon: CheckCircle,
      color: 'text-green-600 bg-green-100',
      change: '+8%'
    },
    {
      title: 'Average Score',
      value: `${mockAnalytics.averageScore}%`,
      icon: BarChart3,
      color: 'text-purple-600 bg-purple-100',
      change: '+2.1%'
    },
    {
      title: 'Active Agents',
      value: mockAnalytics.agentActivity.length,
      icon: Users,
      color: 'text-orange-600 bg-orange-100',
      change: '+1'
    }
  ];

  const COLORS = ['#16a34a', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];

  const categoryData = mockAnalytics.topCategories.map((cat, index) => ({
    ...cat,
    fill: COLORS[index % COLORS.length]
  }));

  const recentProducts = mockProducts.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-4"
        >
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Monitor supply chain verification and sustainability metrics</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                    <span className="text-sm text-gray-500 ml-1">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Sustainability Trends */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
            Sustainability Score Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockAnalytics.sustainabilityTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#16a34a" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Product Categories */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
            Product Categories
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="count"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Agent Activity and Recent Products */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Agent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Users className="h-5 w-5 text-purple-600 mr-2" />
            Autonomous Agent Activity
          </h3>
          <div className="space-y-4">
            {mockAnalytics.agentActivity.map((agent, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{agent.agent}</p>
                    <p className="text-sm text-gray-500">{agent.verifications} verifications</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-600 font-medium">Active</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Products */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Package className="h-5 w-5 text-green-600 mr-2" />
            Recently Verified Products
          </h3>
          <div className="space-y-4">
            {recentProducts.map((product) => (
              <div 
                key={product.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => onNavigate('product', product.id)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${
                    product.sustainabilityRating === 'A+' || product.sustainabilityRating === 'A'
                      ? 'text-green-800 bg-green-100 border-green-200'
                      : 'text-yellow-800 bg-yellow-100 border-yellow-200'
                  }`}>
                    Score: {product.verificationScore}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Impact Section */}
      <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Global Impact</h3>
            </div>
            <p className="text-green-100 mb-6">
              EcoTracker is making supply chains more transparent and sustainable worldwide. 
              Every verified product contributes to a more accountable marketplace.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold">2.1M</div>
                <div className="text-green-100 text-sm">kg CO2 Saved</div>
              </div>
              <div>
                <div className="text-2xl font-bold">450K</div>
                <div className="text-green-100 text-sm">Products Verified</div>
              </div>
              <div>
                <div className="text-2xl font-bold">89%</div>
                <div className="text-green-100 text-sm">Consumer Trust Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-green-100 text-sm">Countries Covered</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">ICP Blockchain</div>
              <div className="text-green-100 mb-4">Powered by autonomous agents</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>Real-time verification</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Immutable records</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                  <span>Decentralized trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}