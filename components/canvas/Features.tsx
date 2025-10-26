import React from 'react';
import { FeaturesProps, FeatureItem } from '../../types';

const FeatureCard: React.FC<{ feature: FeatureItem, hoverEffect: boolean }> = ({ feature, hoverEffect }) => {
  const hoverClass = hoverEffect ? 'transition-transform transform hover:-translate-y-1 hover:shadow-xl' : '';
  const image = feature.imageUrl ? <img src={feature.imageUrl} alt={feature.title} className="rounded-md mb-2 w-full object-cover" /> : null;

  const content = (
    <>
      <h3 className="font-semibold text-lg text-gray-700">{feature.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
    </>
  );

  let layoutClasses = "flex flex-col";
  if (feature.imageUrl && feature.imagePosition === 'left') layoutClasses = "flex flex-row items-center gap-4";
  if (feature.imageUrl && feature.imagePosition === 'right') layoutClasses = "flex flex-row-reverse items-center gap-4";
  
  const imageContainerClass = feature.imagePosition === 'left' || feature.imagePosition === 'right' ? 'w-1/3' : 'w-full';
  const textContainerClass = feature.imagePosition === 'left' || feature.imagePosition === 'right' ? 'w-2/3' : 'w-full';

  return (
    <div className={`bg-gray-50 p-4 rounded-lg h-full ${hoverClass} ${layoutClasses}`}>
      {feature.imageUrl && (feature.imagePosition === 'left' || feature.imagePosition === 'right' || feature.imagePosition === 'top') && (
        <div className={imageContainerClass}>
          {image}
        </div>
      )}
      <div className={textContainerClass}>
        {content}
      </div>
    </div>
  );
};


export const Features: React.FC<FeaturesProps> = ({ features, gridColumns, hoverEffect }) => {
  const gridClass = `grid grid-cols-1 md:grid-cols-${gridColumns} gap-4`;
  return (
    <div>
        <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2 ml-1">Features Grid</h3>
        <div className={gridClass}>
            {features.map(feature => (
                <FeatureCard key={feature.id} feature={feature} hoverEffect={hoverEffect} />
            ))}
        </div>
    </div>
  );
};
