import { CabalData } from '../types';
import clsx from 'clsx';

export function CabalCard({
  rank,
  name,
  image,
  totalValue,
  userCount,
  spotPnL,
  perpPnL,
  launchPnL
}: CabalData) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm">
            {rank}
          </div>
          <img src={image} alt={name} className="w-12 h-12 rounded-full" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{name}</h3>
          <div className="text-emerald-600 font-medium">{totalValue}</div>
          
          <div className="grid grid-cols-4 gap-8 mt-4">
            <div>
              <p className="text-sm text-gray-600">User Count</p>
              <p className="font-medium">{userCount}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Spot PnL</p>
              <p className={clsx(
                'font-medium',
                spotPnL.startsWith('-') ? 'text-red-600' : 'text-emerald-600'
              )}>{spotPnL}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Perp PnL</p>
              <p className={clsx(
                'font-medium',
                perpPnL.startsWith('-') ? 'text-red-600' : 'text-emerald-600'
              )}>{perpPnL}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Launch PnL</p>
              <p className={clsx(
                'font-medium',
                launchPnL.startsWith('-') ? 'text-red-600' : 'text-emerald-600'
              )}>{launchPnL}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}