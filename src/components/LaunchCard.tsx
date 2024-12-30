import { LaunchData } from '../types';
import clsx from 'clsx';
import imageI from '../assets/Cat.png'

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
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex flex-col h-[240px]">
      <div className="flex gap-4 h-[128px]">
        <img
          src={imageI}
          alt={title}
          width={128}
          height={128}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-500">Created by:</span>
                <div className="flex items-center gap-1">
                  <img src={imageI} alt={creator} className="w-4 h-4 rounded-full" />
                  <span className="text-sm">{creator}</span>
                </div>
              </div>
              <span className="text-sm text-emerald-600">Market Cap: {marketCap}</span>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
      <div>
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
  );
}