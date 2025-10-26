import React, { useState, ChangeEvent } from 'react';
import { Modal } from './Modal';
import { PageComponent, AboutProps, AboutButton } from '../../types';

interface EditAboutModalProps {
    component: PageComponent & { type: 'about' };
    onSave: (component: PageComponent) => void;
    onClose: () => void;
}

const InputField = ({ label, value, onChange, name }: { label: string, value: string, name: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" value={value} onChange={onChange} name={name} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);

const TextAreaField = ({ label, value, onChange, name }: { label: string, value: string, name: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea value={value} onChange={onChange} name={name} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);

export const EditAboutModal: React.FC<EditAboutModalProps> = ({ component, onSave, onClose }) => {
    const [props, setProps] = useState<AboutProps>(component.props);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProps(prev => ({ ...prev, [name]: value }));
    };

    const handleButtonChange = (id: string, field: keyof AboutButton, value: string) => {
        const newButtons = props.buttons.map(b => b.id === id ? { ...b, [field]: value } : b);
        setProps({ ...props, buttons: newButtons });
    };

    const handleAddButton = () => {
        const newButton: AboutButton = {
            id: `about-btn-${Date.now()}`,
            text: 'New Button',
            link: '#',
            type: 'primary'
        };
        setProps({ ...props, buttons: [...props.buttons, newButton] });
    };

    const handleRemoveButton = (id: string) => {
        setProps({ ...props, buttons: props.buttons.filter(b => b.id !== id) });
    };

    const handleSave = () => {
        onSave({ ...component, props });
    };

    return (
        <Modal title="Edit About Section" onClose={onClose} onSave={handleSave}>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Title" name="title" value={props.title} onChange={handleChange} />
                    <InputField label="Subtitle" name="subtitle" value={props.subtitle} onChange={handleChange} />
                </div>
                <TextAreaField label="Main Text" name="text" value={props.text} onChange={handleChange} />
                 <div className="grid grid-cols-2 gap-4">
                    <InputField label="Image URL" name="imageUrl" value={props.imageUrl} onChange={handleChange} />
                    <InputField label="Image Alt Text" name="imageAlt" value={props.imageAlt} onChange={handleChange} />
                </div>

                <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Buttons</h4>
                    {props.buttons.map(button => (
                        <div key={button.id} className="p-3 mb-2 border rounded-md bg-gray-50 flex items-center gap-2">
                            <InputField label="Text" name="text" value={button.text} onChange={e => handleButtonChange(button.id, 'text', e.target.value)} />
                            <InputField label="Link" name="link" value={button.link} onChange={e => handleButtonChange(button.id, 'link', e.target.value)} />
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                                <select value={button.type} onChange={e => handleButtonChange(button.id, 'type', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                    <option value="primary">Primary</option>
                                    <option value="secondary">Secondary</option>
                                </select>
                            </div>
                             <button onClick={() => handleRemoveButton(button.id)} className="p-2 text-red-500 hover:bg-red-100 rounded-full mt-6" aria-label="Remove button">&times;</button>
                        </div>
                    ))}
                    <button onClick={handleAddButton} className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">+ Add Button</button>
                </div>
            </div>
        </Modal>
    );
};
