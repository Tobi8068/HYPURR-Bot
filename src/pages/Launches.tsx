import { LaunchCard } from '../components/LaunchCard';
import { SearchInput } from '../components/SearchInput';
import { launches } from '../data/launches';

export function Launches() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Current Leaders</h1>
      <div className='flex items-center gap-2'>
        <SearchInput />
        <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white">
          <option>Latest Activity</option>
        </select>
      </div>
      <div className='flex flex-wrap gap-2'>
        {launches.map(launch => (
          <LaunchCard key={launch.title} {...launch} />
        ))}
      </div>
    </div>
  );
}