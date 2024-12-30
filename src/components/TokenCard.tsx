import clsx from 'clsx';
import { TokenData } from '../types';

export function TokenCard({
  pair,
  percentage,
  markPrice,
  volume24h,
  circulatingSupply,
  hlqBalance
}: TokenData) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{pair}</h3>
        <span className={clsx(
          'font-medium',
          percentage >= 0 ? 'text-emerald-600' : 'text-red-600'
        )}>
          {percentage >= 0 ? '+' : ''}{percentage.toFixed(2)}%
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">Mark Price</p>
          <p className="font-medium">{markPrice}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">24h Volume</p>
          <p className="font-medium">{volume24h}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Circulating Supply</p>
          <p className="font-medium">{circulatingSupply}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">HLQ Balance</p>
          <p className="font-medium">{hlqBalance}</p>
        </div>
      </div>
    </div>
  );
}