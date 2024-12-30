import React from 'react';

interface ProgressBarProps {
  progress: number;
  progressText: string;
}

export function ProgressBar({ progress, progressText }: ProgressBarProps) {
  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">Progress to deployment:</span>
        <span className="text-gray-700">{progress.toFixed(2)}% - 🦍 {progressText}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}