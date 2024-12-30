import React from 'react';

interface CreatorInfoProps {
  creator: string;
  marketCap: string;
  trustFactor: 'red' | 'yellow' | 'green';
}

export function CreatorInfo({ creator, marketCap, trustFactor }: CreatorInfoProps) {
  return (
    <div className="flex items-center gap-2 mt-1">
      <span className="text-sm text-gray-500">Created by:</span>
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <img src={`/creators/${creator}.png`} alt={creator} className="w-full h-full object-cover" />
        </div>
        <span className="text-sm text-gray-700">{creator}</span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="text-sm text-emerald-600">{marketCap}</span>
        <div className={`w-2 h-2 rounded-full ${
          trustFactor === 'green' ? 'bg-emerald-500' : 
          trustFactor === 'yellow' ? 'bg-yellow-500' : 
          'bg-red-500'
        }`} />
      </div>
    </div>
  );
}