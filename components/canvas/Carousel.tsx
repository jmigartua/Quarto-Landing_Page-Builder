import React from 'react';
import { CarouselProps } from '../../types';

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const firstImage = images[0];

  return (
    <div>
      <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2 ml-1">Carousel</h3>
      <div className="relative p-4 bg-gray-200 rounded-lg">
        {firstImage ? (
          <div className="relative">
            <img src={firstImage.src} alt={firstImage.alt} className="w-full h-auto rounded-md shadow-lg" />
            {firstImage.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-center text-sm">
                {firstImage.caption}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-500">No images in carousel.</div>
        )}
        <div className="flex justify-center mt-2 space-x-2">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
