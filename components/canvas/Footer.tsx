import React from 'react';
import { FooterProps } from '../../types';

export const Footer: React.FC<FooterProps> = ({ copyrightText, links }) => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
        <div className="text-center mb-2">
            {links.map((link, index) => (
                <span key={link.id} className="text-sm text-gray-700 hover:text-primary">
                    {link.text}
                    {index < links.length - 1 && <span className="mx-2">|</span>}
                </span>
            ))}
        </div>
      <p className="text-sm text-center text-gray-600">
        {copyrightText}
      </p>
    </div>
  );
};
