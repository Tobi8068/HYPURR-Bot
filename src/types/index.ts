export interface TokenData {
  pair: string;
  percentage: number;
  markPrice: number;
  volume24h: string;
  circulatingSupply: string;
  hlqBalance: string;
}

export interface TokenTableData {
  token: string;
  price: string;
  change24h: string;
  volume24h: string;
  marketCap: string;
}

export interface LaunchData {
  image: string;
  title: string;
  creator: string;
  marketCap: string;
  description: string;
  progress: number;
  progressText: string;
  trustFactor: 'red' | 'yellow' | 'green';
  achievements: string[];
}

export interface CabalData {
  rank: number;
  name: string;
  image: string;
  totalValue: string;
  userCount: number;
  spotPnL: string;
  perpPnL: string;
  launchPnL: string;
}

export interface CabalTableData {
  name: string;
  totalPnL: string;
  spotPnL: string;
  launchPnL: string;
  perpPnL: string;
}