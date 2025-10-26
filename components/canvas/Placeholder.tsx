import React from 'react';

export const Placeholder: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
      <h3 className="text-xl font-semibold text-gray-500">Your canvas is empty.</h3>
      <p className="mt-1">Drag and drop components from the left panel to begin.</p>
    </div>
  );
};
