import React, { useState, ChangeEvent } from 'react';
import { Modal } from './Modal';
import { PageComponent, BannerProps } from '../../types';

interface EditBannerModalProps {
    component: PageComponent & { type: 'banner' };
    onSave: (component: PageComponent) => void;
    onClose: () => void;
}

const TextAreaField = ({ label, value, onChange, name }: { label: string, value: string, name: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea value={value} onChange={onChange} name={name} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);


export const EditBannerModal: React.FC<EditBannerModalProps> = ({ component, onSave, onClose }) => {
    const [props, setProps] = useState<BannerProps>(component.props);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProps(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave({ ...component, props });
    };

    return (
        <Modal title="Edit Banner" onClose={onClose} onSave={handleSave}>
            <TextAreaField label="Banner Text" name="text" value={props.text} onChange={handleChange} />
        </Modal>
    );
};
