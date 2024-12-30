import React from 'react';
import { LaunchCard } from '../components/LaunchCard';
import { launches } from '../data/launches';

export function Launches() {
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {launches.map(launch => (
        <LaunchCard key={launch.title} {...launch} />
      ))}
    </div>
  );
}