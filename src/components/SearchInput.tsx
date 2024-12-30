import React from 'react';

export const SearchInput: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
    />
  );
}