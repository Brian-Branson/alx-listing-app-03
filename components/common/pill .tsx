import React from 'react';
import { PillProps } from '@/interfaces'; 



const Pill: React.FC<PillProps> = ({ filters, selectedValue, onClick }) => {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`px-4 py-2 rounded-full border ${
            selectedValue === filter.value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => onClick(filter)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Pill;