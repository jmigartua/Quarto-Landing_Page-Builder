import React, { useState, ChangeEvent } from 'react';
import { Modal } from './Modal';
import { PageComponent, FaqProps, FaqItem } from '../../types';

interface EditFaqModalProps {
    component: PageComponent & { type: 'faq' };
    onSave: (component: PageComponent) => void;
    onClose: () => void;
}

const InputField = ({ label, value, onChange, name }: { label: string, value: string, name: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" value={value} onChange={onChange} name={name} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);

const TextAreaField = ({ label, value, onChange }: { label: string, value: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea value={value} onChange={onChange} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);


export const EditFaqModal: React.FC<EditFaqModalProps> = ({ component, onSave, onClose }) => {
    const [props, setProps] = useState<FaqProps>(component.props);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProps(p => ({ ...p, title: e.target.value }));
    };

    const handleItemChange = (id: string, field: keyof FaqItem, value: string) => {
        const newItems = props.items.map(item => item.id === id ? { ...item, [field]: value } : item);
        setProps(p => ({ ...p, items: newItems }));
    };

    const handleAddItem = () => {
        const newItem: FaqItem = {
            id: `faq-${Date.now()}`,
            question: 'New Question',
            answer: 'The answer to the new question.'
        };
        setProps(p => ({ ...p, items: [...p.items, newItem] }));
    };

    const handleRemoveItem = (id: string) => {
        setProps(p => ({ ...p, items: p.items.filter(item => item.id !== id) }));
    };


    const handleSave = () => {
        onSave({ ...component, props });
    };

    return (
        <Modal title="Edit FAQ Section" onClose={onClose} onSave={handleSave}>
            <div className="space-y-6">
                <InputField label="Section Title" name="title" value={props.title} onChange={handleTitleChange} />

                <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Questions & Answers</h4>
                    <div className="space-y-4">
                        {props.items.map(item => (
                             <div key={item.id} className="p-4 border rounded-md bg-gray-50 relative">
                                <button 
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-100 rounded-full font-bold text-lg leading-none"
                                  aria-label="Remove item"
                                >
                                  &times;
                                </button>
                                <div className="space-y-2">
                                    <InputField 
                                        label="Question" 
                                        name="question" 
                                        value={item.question} 
                                        onChange={(e) => handleItemChange(item.id, 'question', e.target.value)} 
                                    />
                                    <TextAreaField 
                                        label="Answer"
                                        value={item.answer} 
                                        onChange={(e) => handleItemChange(item.id, 'answer', e.target.value)} 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                     <button onClick={handleAddItem} className="mt-4 text-sm px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">+ Add Item</button>
                </div>
            </div>
        </Modal>
    );
};