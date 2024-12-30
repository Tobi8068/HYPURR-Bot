import { LaunchData } from '../types';
import clsx from 'clsx';

export function LaunchCard({
  image,
  title,
  creator,
  marketCap,
  description,
  progress,
  progressText,
  trustFactor,
  achievements
}: LaunchData) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <div className="flex gap-4">
        <img 
          src={image} 
          alt={title}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-500">Created by:</span>
                <div className="flex items-center gap-1">
                  <img src="/creator-avatar.png" alt={creator} className="w-4 h-4 rounded-full" />
                  <span className="text-sm">{creator}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-emerald-600">{marketCap}</span>
              <div className={clsx(
                'w-2 h-2 rounded-full',
                trustFactor === 'green' && 'bg-emerald-500',
                trustFactor === 'yellow' && 'bg-yellow-500',
                trustFactor === 'red' && 'bg-red-500'
              )} />
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-2">{description}</p>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress to deployment:</span>
              <span>{progress}% - 🦍 {progressText}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {achievements && achievements.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">Achievements [{achievements.length}]</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}