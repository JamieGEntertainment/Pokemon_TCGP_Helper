import React, { useState } from 'react';
import CardGrid from '../components/cards/CardGrid';
import CardFilters from '../components/cards/CardFilters';
import CardSearch from '../components/cards/CardSearch';

export default function CardLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    stage: 'all'
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Card Library</h1>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-64">
          <CardFilters filters={filters} setFilters={setFilters} />
        </div>
        
        <div className="flex-1">
          <CardSearch value={searchTerm} onChange={setSearchTerm} />
          <CardGrid searchTerm={searchTerm} filters={filters} />
        </div>
      </div>
    </div>
  );
}