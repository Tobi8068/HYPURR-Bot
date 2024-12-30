import { TokenTableData } from '../types';
import clsx from 'clsx';

interface TokenTableProps {
  data: TokenTableData[];
}

export function TokenTable({ data }: TokenTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 mt-6 min-h-[300px] overflow-x-auto overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left p-4 text-sm font-medium text-gray-600">Token</th>
            <th className="text-right p-4 text-sm font-medium text-gray-600">
              <div className="flex items-center justify-end gap-1">
                Price
              </div>
            </th>
            <th className="text-right p-4 text-sm font-medium text-gray-600">24h Change</th>
            <th className="text-right p-4 text-sm font-medium text-gray-600">
              <div className="flex items-center justify-end gap-1">
                24h Volume
              </div>
            </th>
            <th className="text-right p-4 text-sm font-medium text-gray-600">
              <div className="flex items-center justify-end gap-1">
                Market Cap
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.token} className={clsx(index !== data.length - 1 && 'border-b border-gray-100')}>
              <td className="p-4">{row.token}</td>
              <td className="p-4 text-right">{row.price}</td>
              <td className={clsx(
                'p-4 text-right',
                row.change24h.startsWith('-') ? 'text-red-600' : 'text-emerald-600'
              )}>{row.change24h}</td>
              <td className="p-4 text-right">{row.volume24h}</td>
              <td className="p-4 text-right">{row.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}