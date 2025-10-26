import React, { useState, ChangeEvent } from 'react';
import { Modal } from './Modal';
import { PageComponent, CtaProps } from '../../types';

interface EditCtaModalProps {
    component: PageComponent & { type: 'cta' };
    onSave: (component: PageComponent) => void;
    onClose: () => void;
}

const InputField = ({ label, value, onChange, name }: { label: string, value: string, name: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" value={value} onChange={onChange} name={name} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);

const TextAreaField = ({ label, value, onChange, name }: { label: string, value: string, name: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea value={value} onChange={onChange} name={name} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);

export const EditCtaModal: React.FC<EditCtaModalProps> = ({ component, onSave, onClose }) => {
    const [props, setProps] = useState<CtaProps>(component.props);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProps(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave({ ...component, props });
    };

    return (
        <Modal title="Edit Call to Action" onClose={onClose} onSave={handleSave}>
            <InputField label="Title" name="title" value={props.title} onChange={handleChange} />
            <TextAreaField label="Subtitle" name="subtitle" value={props.subtitle} onChange={handleChange} />
            <div className="grid grid-cols-2 gap-4">
                <InputField label="Button Text" name="buttonText" value={props.buttonText} onChange={handleChange} />
                <InputField label="Button Link" name="buttonLink" value={props.buttonLink} onChange={handleChange} />
            </div>
        </Modal>
    );
};
