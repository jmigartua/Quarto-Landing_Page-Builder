import React from 'react';
import { FaqProps, FaqItem } from '../../types';

const FaqItemPreview: React.FC<{ item: FaqItem }> = ({ item }) => (
  <details className="border-b last:border-b-0">
    <summary className="py-3 font-semibold cursor-pointer list-none flex justify-between items-center hover:bg-gray-50 p-2 rounded">
      {item.question}
      <span className="text-primary">+</span>
    </summary>
    <p className="p-2 text-gray-600 bg-gray-50">{item.answer}</p>
  </details>
);

export const Faq: React.FC<FaqProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2 ml-1">FAQ Section</h3>
      <div className="p-4 bg-white rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4 text-primary">{title}</h2>
          <div className="max-w-2xl mx-auto border rounded-md">
              {items.map(item => <FaqItemPreview key={item.id} item={item} />)}
          </div>
      </div>
    </div>
  );
};
