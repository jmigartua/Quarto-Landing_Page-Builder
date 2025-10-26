import React, { useState, ChangeEvent } from 'react';
import { Modal } from './Modal';
import { PageComponent, FeaturesProps, FeatureItem } from '../../types';

interface EditFeaturesModalProps {
    component: PageComponent & { type: 'features' };
    onSave: (component: PageComponent) => void;
    onClose: () => void;
}

const InputField = ({ label, value, onChange, placeholder }: { label: string, value: string, placeholder?: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
    </div>
);

const CheckboxField = ({ label, checked, onChange }: { label: string, checked: boolean, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="flex items-center">
        <input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <label className="ml-2 block text-sm text-gray-900">{label}</label>
    </div>
);


export const EditFeaturesModal: React.FC<EditFeaturesModalProps> = ({ component, onSave, onClose }) => {
    const [props, setProps] = useState<FeaturesProps>(component.props);

    const handleFeatureChange = (id: string, field: keyof FeatureItem, value: string) => {
        const newFeatures = props.features.map(f => f.id === id ? { ...f, [field]: value } : f);
        setProps({ ...props, features: newFeatures });
    };

    const handleGridColumnsChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setProps({ ...props, gridColumns: parseInt(e.target.value, 10) });
    };

    const handleHoverEffectChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProps({ ...props, hoverEffect: e.target.checked });
    }

    const handleAddFeature = () => {
        const newFeature: FeatureItem = {
            id: `feat-${Date.now()}`,
            title: 'New Feature',
            description: 'A description for the new feature.',
            imagePosition: 'top'
        };
        setProps({ ...props, features: [...props.features, newFeature] });
    };

    const handleRemoveFeature = (id: string) => {
        setProps({ ...props, features: props.features.filter(f => f.id !== id) });
    };

    const handleSave = () => {
        onSave({ ...component, props });
    };

    return (
        <Modal title="Edit Features Grid" onClose={onClose} onSave={handleSave}>
            <div className="space-y-6">
                <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Grid Options</h4>
                    <div className="flex items-center gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Columns</label>
                            <select value={props.gridColumns} onChange={handleGridColumnsChange} className="px-3 py-2 border border-gray-300 rounded-md">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <CheckboxField label="Enable Hover Effect" checked={props.hoverEffect} onChange={handleHoverEffectChange} />
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Features</h4>
                    <div className="space-y-4">
                        {props.features.map(feature => (
                            <div key={feature.id} className="p-4 border rounded-md bg-gray-50 relative">
                                <button
                                  onClick={() => handleRemoveFeature(feature.id)}
                                  className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-100 rounded-full font-bold text-lg leading-none"
                                  aria-label="Remove feature"
                                >
                                  &times;
                                </button>
                                <div className="grid grid-cols-2 gap-4 mb-2">
                                    <InputField label="Title" value={feature.title} onChange={(e) => handleFeatureChange(feature.id, 'title', e.target.value)} />
                                    <InputField label="Card Link (URL)" value={feature.href || ''} placeholder="https://example.com" onChange={(e) => handleFeatureChange(feature.id, 'href', e.target.value)} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        value={feature.description}
                                        rows={2}
                                        onChange={(e) => handleFeatureChange(feature.id, 'description', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <InputField label="Image URL" value={feature.imageUrl || ''} placeholder="https://example.com/image.png" onChange={(e) => handleFeatureChange(feature.id, 'imageUrl', e.target.value)} />
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Image Position</label>
                                        <select value={feature.imagePosition} onChange={(e) => handleFeatureChange(feature.id, 'imagePosition', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                            <option value="top">Top</option>
                                            <option value="left">Left</option>
                                            <option value="right">Right</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAddFeature} className="mt-4 text-sm px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">+ Add Feature</button>
                </div>
            </div>
        </Modal>
    );
};
