import React from 'react';
import { BannerProps } from '../../types';

export const Banner: React.FC<BannerProps> = ({ text }) => {
  return (
    <div className="p-4 bg-indigo-100 border border-indigo-200 text-indigo-800 rounded-lg">
        <h3 className="text-xs uppercase text-indigo-400 font-semibold mb-1 ml-1">Banner</h3>
        <p className="font-medium">
            {text}
        </p>
    </div>
  );
};
