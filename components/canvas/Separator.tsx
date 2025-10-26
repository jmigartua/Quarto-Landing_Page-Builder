import React from 'react';
import { SeparatorProps } from '../../types';

export const Separator: React.FC<SeparatorProps> = ({ height, color }) => {
  return (
    <div className="p-4 flex items-center justify-center">
        <div 
            className="w-full"
            style={{
                height: `${height}px`,
                backgroundColor: color,
            }}
        ></div>
    </div>
  );
};
