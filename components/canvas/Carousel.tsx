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
            <img src={firstImage.src} alt={firstImage.title} className="w-full h-auto rounded-md shadow-lg" style={{ maxHeight: '250px', objectFit: 'cover' }} />
            {firstImage.title && (
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black bg-opacity-70 text-white text-left text-sm rounded-lg">
                <p className="font-bold">{firstImage.title}</p>
                <p className="text-xs mt-1">{firstImage.description}</p>
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