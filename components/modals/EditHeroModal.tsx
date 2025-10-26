import React, { useState, ChangeEvent } from 'react';
import { Modal } from './Modal';
import { PageComponent, HeroProps } from '../../types';

interface EditHeroModalProps {
    component: PageComponent & { type: 'hero' };
    onSave: (component: PageComponent) => void;
    onClose: () => void;
}

const InputField = ({ label, value, onChange, name, placeholder }: { label: string, value: string, name: string, placeholder?: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" value={value} onChange={onChange} name={name} placeholder={placeholder} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);

const TextAreaField = ({ label, value, onChange, name }: { label: string, value: string, name: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea value={value} onChange={onChange} name={name} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);

export const EditHeroModal: React.FC<EditHeroModalProps> = ({ component, onSave, onClose }) => {
    const [props, setProps] = useState<HeroProps>(component.props);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProps(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave({ ...component, props });
    };

    return (
        <Modal title="Edit Hero Section" onClose={onClose} onSave={handleSave}>
            <InputField label="Title" name="title" value={props.title} onChange={handleChange} />
            <TextAreaField label="Subtitle" name="subtitle" value={props.subtitle} onChange={handleChange} />
            <div className="grid grid-cols-2 gap-4">
                <InputField label="Primary Button Text" name="primaryButtonText" value={props.primaryButtonText} onChange={handleChange} />
                <InputField label="Primary Button Link" name="primaryButtonLink" value={props.primaryButtonLink} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <InputField label="Secondary Button Text" name="secondaryButtonText" value={props.secondaryButtonText} onChange={handleChange} />
                <InputField label="Secondary Button Link" name="secondaryButtonLink" value={props.secondaryButtonLink} onChange={handleChange} />
            </div>
            <hr className="my-4"/>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Optional Image</h4>
            <div className="grid grid-cols-2 gap-4">
                <InputField label="Image URL" name="imageUrl" value={props.imageUrl || ''} onChange={handleChange} placeholder="https://example.com/image.png"/>
                <InputField label="Image Alt Text" name="imageAlt" value={props.imageAlt || ''} onChange={handleChange} />
            </div>
        </Modal>
    );
};
