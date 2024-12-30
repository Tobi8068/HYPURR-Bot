import { CabalTableData } from '../types';

interface CabalTableProps {
  data: CabalTableData[];
}

export function CabalTable({ data }: CabalTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 mt-6">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left p-4 text-sm font-medium text-gray-600">Name</th>
            <th className="text-right p-4 text-sm font-medium text-gray-600">Total PnL</th>
            <th className="text-right p-4 text-sm font-medium text-gray-600">Spot PnL</th>
            <th className="text-right p-4 text-sm font-medium text-gray-600">Launch PnL</th>
            <th className="text-right p-4 text-sm font-medium text-gray-600">Perp PnL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.name} className={index !== data.length - 1 ? 'border-b border-gray-100' : ''}>
              <td className="p-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                {row.name}
              </td>
              <td className="p-4 text-right">{row.totalPnL}</td>
              <td className="p-4 text-right">{row.spotPnL}</td>
              <td className="p-4 text-right">{row.launchPnL}</td>
              <td className="p-4 text-right">{row.perpPnL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}