import React, { useState, ChangeEvent } from 'react';
import { Modal } from './Modal';
import { PageComponent, CarouselProps, CarouselImage } from '../../types';

interface EditCarouselModalProps {
    component: PageComponent & { type: 'carousel' };
    onSave: (component: PageComponent) => void;
    onClose: () => void;
}

export const EditCarouselModal: React.FC<EditCarouselModalProps> = ({ component, onSave, onClose }) => {
    const [props, setProps] = useState<CarouselProps>(component.props);

    const handleImageChange = (id: string, field: keyof CarouselImage, value: string) => {
        const newImages = props.images.map(img => img.id === id ? { ...img, [field]: value } : img);
        setProps({ ...props, images: newImages });
    };

    const handleAddImage = () => {
        const newImage: CarouselImage = {
            id: `carousel-img-${Date.now()}`,
            src: 'https://via.placeholder.com/800x400',
            title: 'New Slide Title',
            description: 'A great description for the new slide.'
        };
        setProps({ ...props, images: [...props.images, newImage] });
    };

    const handleRemoveImage = (id: string) => {
        setProps({ ...props, images: props.images.filter(img => img.id !== id) });
    };

    const handleSave = () => {
        onSave({ ...component, props });
    };

    return (
        <Modal title="Edit Carousel" onClose={onClose} onSave={handleSave}>
            <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 mb-2">Carousel Slides</h4>
                {props.images.map(image => (
                    <div key={image.id} className="p-4 border rounded-md bg-gray-50 relative">
                        <button 
                          onClick={() => handleRemoveImage(image.id)}
                          className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-100 rounded-full font-bold text-lg leading-none"
                          aria-label="Remove image"
                        >
                          &times;
                        </button>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input 
                                type="text" 
                                value={image.src} 
                                onChange={(e) => handleImageChange(image.id, 'src', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Caption Title</label>
                                <input 
                                    type="text" 
                                    value={image.title} 
                                    onChange={(e) => handleImageChange(image.id, 'title', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Caption Description</label>
                                <input 
                                    type="text" 
                                    value={image.description}
                                    onChange={(e) => handleImageChange(image.id, 'description', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleAddImage} className="mt-4 text-sm px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">+ Add Image</button>
        </Modal>
    );
};