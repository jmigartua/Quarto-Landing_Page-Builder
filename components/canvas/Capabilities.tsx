import React from 'react';
import { CapabilitiesProps, CapabilityCardItem, PillCardItem } from '../../types';

const CapabilityCard: React.FC<{ item: CapabilityCardItem }> = ({ item }) => (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col">
        <div className="flex-1">
            <h3 className="font-bold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded text-xs text-gray-500 text-center">
            Illustration: {item.illustration}
        </div>
    </div>
);

const PillCard: React.FC<{ item: PillCardItem }> = ({ item }) => (
    <div className="border border-gray-200 rounded-lg p-4 whitespace-normal flex-shrink-0 w-64">
        <h3 className="font-bold text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
    </div>
);


export const Capabilities: React.FC<CapabilitiesProps> = ({ title, capabilities, moreTitle, pills }) => {
  return (
    <div>
        <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2 ml-1">Capabilities Section</h3>
        <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4 text-primary">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {capabilities.map(cap => <CapabilityCard key={cap.id} item={cap} />)}
            </div>

            <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-primary">{moreTitle}</h2>
            <div className="overflow-x-hidden">
                <div className="flex space-x-4">
                    {pills.map(pill => <PillCard key={pill.id} item={pill} />)}
                    {pills.map(pill => <PillCard key={pill.id + '-clone'} item={pill} />)}
                </div>
            </div>
        </div>
    </div>
  );
};
