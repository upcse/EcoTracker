import type { Product, AnalyticsData } from '../types';

export const mockProducts: Product[] = [
  {
    id: 'prod-001',
    name: 'Organic Cotton T-Shirt',
    brand: 'EcoWear',
    description: 'Premium organic cotton t-shirt made with sustainable practices',
    category: 'Clothing',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://ecotracker.app/product/prod-001',
    registrationDate: '2024-01-15',
    lastVerified: '2024-01-20',
    verificationScore: 94,
    sustainabilityRating: 'A+',
    supplyChain: {
      origin: 'Tamil Nadu, India',
      manufacturer: 'Green Textiles Co.',
      suppliers: ['Organic Cotton Farm Co-op', 'Natural Dye Works'],
      transportMethods: ['Electric Truck', 'Solar-Powered Ship'],
      carbonFootprint: 2.1,
      waterUsage: 1200,
      renewableEnergy: 85,
      wasteReduction: 70,
      fairTrade: true,
      organicCertified: true
    },
    certifications: ['GOTS Certified', 'Fair Trade', 'Carbon Neutral'],
    environmentalImpact: {
      co2Emissions: 2.1,
      waterFootprint: 1200,
      renewableEnergyUsed: 85,
      recycledMaterials: 15,
      biodegradable: true,
      packageWaste: 0.2
    },
    agentVerifications: [
      {
        agentId: 'agent-001',
        agentName: 'Sustainability Verifier Alpha',
        verificationDate: '2024-01-20',
        status: 'verified',
        confidence: 0.94,
        details: 'All sustainability claims verified through blockchain records',
        blockchainTxId: '0x1a2b3c4d5e6f...'
      }
    ]
  },
  {
    id: 'prod-002',
    name: 'Bamboo Phone Case',
    brand: 'GreenTech',
    description: 'Biodegradable phone case made from sustainable bamboo',
    category: 'Electronics',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://ecotracker.app/product/prod-002',
    registrationDate: '2024-01-10',
    lastVerified: '2024-01-19',
    verificationScore: 87,
    sustainabilityRating: 'A',
    supplyChain: {
      origin: 'Fujian, China',
      manufacturer: 'Bamboo Tech Solutions',
      suppliers: ['Sustainable Bamboo Farms', 'Eco-Packaging Ltd'],
      transportMethods: ['Electric Vehicle', 'Bio-fuel Ship'],
      carbonFootprint: 1.5,
      waterUsage: 800,
      renewableEnergy: 90,
      wasteReduction: 95,
      fairTrade: true,
      organicCertified: false
    },
    certifications: ['FSC Certified', 'Biodegradable', 'Zero Waste'],
    environmentalImpact: {
      co2Emissions: 1.5,
      waterFootprint: 800,
      renewableEnergyUsed: 90,
      recycledMaterials: 0,
      biodegradable: true,
      packageWaste: 0.1
    },
    agentVerifications: [
      {
        agentId: 'agent-002',
        agentName: 'Materials Verification Bot',
        verificationDate: '2024-01-19',
        status: 'verified',
        confidence: 0.87,
        details: 'Bamboo sourcing and manufacturing process verified',
        blockchainTxId: '0x2b3c4d5e6f1a...'
      }
    ]
  },
  {
    id: 'prod-003',
    name: 'Solar Power Bank',
    brand: 'SolarTech',
    description: 'Portable solar-powered charging device with recyclable components',
    category: 'Electronics',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://ecotracker.app/product/prod-003',
    registrationDate: '2024-01-05',
    lastVerified: '2024-01-18',
    verificationScore: 91,
    sustainabilityRating: 'A+',
    supplyChain: {
      origin: 'Shenzhen, China',
      manufacturer: 'Solar Innovation Corp',
      suppliers: ['Recycled Metals Co.', 'Solar Panel Specialists'],
      transportMethods: ['Electric Truck', 'Carbon-Neutral Shipping'],
      carbonFootprint: 3.2,
      waterUsage: 450,
      renewableEnergy: 100,
      wasteReduction: 80,
      fairTrade: false,
      organicCertified: false
    },
    certifications: ['Energy Star', 'RoHS Compliant', 'Recyclable Design'],
    environmentalImpact: {
      co2Emissions: 3.2,
      waterFootprint: 450,
      renewableEnergyUsed: 100,
      recycledMaterials: 60,
      biodegradable: false,
      packageWaste: 0.3
    },
    agentVerifications: [
      {
        agentId: 'agent-003',
        agentName: 'Energy Efficiency Validator',
        verificationDate: '2024-01-18',
        status: 'verified',
        confidence: 0.91,
        details: 'Solar efficiency and recyclable materials confirmed',
        blockchainTxId: '0x3c4d5e6f1a2b...'
      }
    ]
  }
];

export const mockAnalytics: AnalyticsData = {
  totalProducts: 156,
  verifiedProducts: 142,
  averageScore: 89.2,
  topCategories: [
    { name: 'Clothing', count: 45 },
    { name: 'Electronics', count: 38 },
    { name: 'Food & Beverage', count: 32 },
    { name: 'Home & Garden', count: 25 },
    { name: 'Personal Care', count: 16 }
  ],
  sustainabilityTrends: [
    { month: 'Jul', score: 85.2 },
    { month: 'Aug', score: 86.8 },
    { month: 'Sep', score: 87.5 },
    { month: 'Oct', score: 88.1 },
    { month: 'Nov', score: 88.9 },
    { month: 'Dec', score: 89.2 }
  ],
  agentActivity: [
    { agent: 'Sustainability Verifier Alpha', verifications: 45 },
    { agent: 'Materials Verification Bot', verifications: 38 },
    { agent: 'Energy Efficiency Validator', verifications: 32 },
    { agent: 'Supply Chain Tracker', verifications: 27 }
  ]
};

export const productCategories = [
  'Clothing',
  'Electronics',
  'Food & Beverage',
  'Home & Garden',
  'Personal Care',
  'Automotive',
  'Sports & Outdoors',
  'Toys & Games'
];

export const certificationTypes = [
  'GOTS Certified',
  'Fair Trade',
  'Carbon Neutral',
  'FSC Certified',
  'Biodegradable',
  'Zero Waste',
  'Energy Star',
  'RoHS Compliant',
  'Recyclable Design',
  'Organic Certified',
  'B-Corp Certified',
  'Rainforest Alliance'
];