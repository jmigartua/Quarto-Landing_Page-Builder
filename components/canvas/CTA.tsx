import React from 'react';
import { CtaProps } from '../../types';

export const CTA: React.FC<CtaProps> = ({ title, subtitle, buttonText }) => {
  return (
    <div className="bg-blue-50 p-8 rounded-lg">
      <h3 className="text-xs uppercase text-blue-400 font-semibold mb-2 ml-1">Call To Action</h3>
      <h2 className="text-2xl font-bold text-blue-900">{title}</h2>
      <p className="text-blue-800 mt-2">
        {subtitle}
      </p>
      <div className="mt-4 px-6 py-2 inline-block bg-primary text-white rounded-md shadow">
        {buttonText}
      </div>
    </div>
  );
};
