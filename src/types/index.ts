export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  qrCode: string;
  registrationDate: string;
  lastVerified: string;
  verificationScore: number;
  sustainabilityRating: 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D';
  supplyChain: SupplyChainData;
  certifications: string[];
  environmentalImpact: EnvironmentalImpact;
  agentVerifications: AgentVerification[];
}

export interface SupplyChainData {
  origin: string;
  manufacturer: string;
  suppliers: string[];
  transportMethods: string[];
  carbonFootprint: number;
  waterUsage: number;
  renewableEnergy: number;
  wasteReduction: number;
  fairTrade: boolean;
  organicCertified: boolean;
}

export interface EnvironmentalImpact {
  co2Emissions: number;
  waterFootprint: number;
  renewableEnergyUsed: number;
  recycledMaterials: number;
  biodegradable: boolean;
  packageWaste: number;
}

export interface AgentVerification {
  agentId: string;
  agentName: string;
  verificationDate: string;
  status: 'verified' | 'pending' | 'failed';
  confidence: number;
  details: string;
  blockchainTxId: string;
}

export interface AnalyticsData {
  totalProducts: number;
  verifiedProducts: number;
  averageScore: number;
  topCategories: { name: string; count: number }[];
  sustainabilityTrends: { month: string; score: number }[];
  agentActivity: { agent: string; verifications: number }[];
}