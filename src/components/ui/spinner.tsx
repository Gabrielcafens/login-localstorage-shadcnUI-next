// src/components/ui/Spinner.tsx

import React from 'react';

export const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        <div className="absolute rounded-full h-6 w-6 border-t-4 border-gray-200"></div>
      </div>
    </div>
  );
};
