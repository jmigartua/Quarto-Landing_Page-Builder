import React from 'react';
import { AboutProps } from '../../types';

export const About: React.FC<AboutProps> = ({ title, subtitle, text, imageUrl, imageAlt, buttons, showVerticalSeparator }) => {
  return (
    <div>
        <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2 ml-1">About Section</h3>
        <div className="grid md:grid-cols-2 gap-8 items-center p-4 bg-gray-50 rounded-lg relative">
            <div className="flex justify-center">
                <img src={imageUrl} alt={imageAlt || title} className="rounded-lg shadow-md max-h-64 object-contain" />
            </div>
             {showVerticalSeparator && <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 hidden md:block"></div>}
            <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <h4 className="text-md font-semibold text-gray-500 mb-2">{subtitle}</h4>
                <p className="text-gray-600 mt-2 text-sm">
                    {text}
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                    {buttons.map(button => (
                        <div 
                            key={button.id}
                            className={`px-4 py-2 text-sm rounded-md shadow ${button.type === 'primary' ? 'bg-primary text-white' : 'bg-white text-secondary border border-gray-300'}`}
                        >
                            {button.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};
