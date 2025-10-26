import React from 'react';
import { SeparatorProps } from '../../types';

export const Separator: React.FC<SeparatorProps> = () => {
  return (
    <div className="p-4 flex items-center justify-center">
        <div 
            className="w-full h-0.5 bg-gray-200"
        ></div>
    </div>
  );
};
