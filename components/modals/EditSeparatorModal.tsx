import React, { useState, ChangeEvent } from 'react';
import { Modal } from './Modal';
import { PageComponent, SeparatorProps } from '../../types';

interface EditSeparatorModalProps {
    component: PageComponent & { type: 'separator' };
    onSave: (component: PageComponent) => void;
    onClose: () => void;
}

export const EditSeparatorModal: React.FC<EditSeparatorModalProps> = ({ component, onSave, onClose }) => {
    const [props, setProps] = useState<SeparatorProps>(component.props);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setProps(prev => ({ ...prev, [name]: type === 'number' ? parseInt(value, 10) : value }));
    };

    const handleSave = () => {
        onSave({ ...component, props });
    };

    return (
        <Modal title="Edit Separator" onClose={onClose} onSave={handleSave}>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height (Thickness in pixels)</label>
                    <div className="flex items-center gap-4">
                        <input 
                            type="range" 
                            min="1" 
                            max="20" 
                            value={props.height} 
                            name="height"
                            onChange={handleChange}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="font-semibold text-gray-700 w-8">{props.height}px</span>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                    <div className="relative">
                        <input 
                            type="color" 
                            value={props.color}
                            name="color"
                            onChange={handleChange}
                            className="p-1 h-10 w-full block bg-white border border-gray-300 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                        />
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 font-mono">{props.color}</span>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
