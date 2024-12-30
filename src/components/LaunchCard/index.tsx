import React from 'react';
import { LaunchData } from '../../types';
import { CreatorInfo } from './CreatorInfo';
import { ProgressBar } from './ProgressBar';

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
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="space-y-1">
            <h3 className="font-medium text-gray-900 truncate">{title}</h3>
            <CreatorInfo 
              creator={creator}
              marketCap={marketCap}
              trustFactor={trustFactor}
            />
            <p className="text-sm text-gray-600 line-clamp-1">{description}</p>
          </div>

          <ProgressBar progress={progress} progressText={progressText} />

          {achievements && achievements.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                Achievements [{achievements.length}]
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}