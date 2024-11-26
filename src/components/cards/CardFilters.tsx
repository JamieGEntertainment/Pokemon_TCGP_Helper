import React from 'react';

interface CardFiltersProps {
  filters: {
    type: string;
    stage: string;
  };
  setFilters: (filters: { type: string; stage: string }) => void;
}

export default function CardFilters({ filters, setFilters }: CardFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold mb-4">Filters</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            {/* Add more types */}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Stage
          </label>
          <select
            value={filters.stage}
            onChange={(e) => setFilters({ ...filters, stage: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Stages</option>
            <option value="basic">Basic</option>
            <option value="stage1">Stage 1</option>
            <option value="stage2">Stage 2</option>
          </select>
        </div>
      </div>
    </div>
  );
}