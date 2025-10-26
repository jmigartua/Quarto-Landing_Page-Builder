import React from 'react';
import { HeroProps } from '../../types';

export const Hero: React.FC<HeroProps> = ({ title, subtitle, primaryButtonText, secondaryButtonText, imageUrl, imageAlt }) => {
  if (imageUrl) {
    return (
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 bg-gray-100 rounded-lg">
            <div>
                <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{subtitle}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                    <div className="px-6 py-2 bg-primary text-white rounded-md shadow">{primaryButtonText}</div>
                    <div className="px-6 py-2 bg-white text-secondary border border-gray-300 rounded-md">{secondaryButtonText}</div>
                </div>
            </div>
            <div className="mt-4 md:mt-0">
                <img src={imageUrl} alt={imageAlt || title} className="rounded-lg shadow-md w-full h-auto object-cover" />
            </div>
        </div>
    )
  }
  
  return (
    <div className="text-center p-8 bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <div className="px-6 py-2 bg-primary text-white rounded-md shadow">{primaryButtonText}</div>
        <div className="px-6 py-2 bg-white text-secondary border border-gray-300 rounded-md">{secondaryButtonText}</div>
      </div>
    </div>
  );
};
