import React, { useState, ChangeEvent } from 'react';
import { Modal } from './Modal';
import { PageComponent, CapabilitiesProps, CapabilityCardItem, PillCardItem, CapabilityIllustration } from '../../types';

const InputField = ({ label, value, onChange, name }: { label: string, value: string; name?: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" value={value} name={name} onChange={onChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);

const TextAreaField = ({ label, value, onChange }: { label: string, value: string; onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) => (
    <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea value={value} onChange={onChange} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);

const illustrationTypes: CapabilityIllustration[] = ['logs', 'menu', 'form', 'secrets', 'links', 'select', 'domains', 'avatars', 'oss'];

export const EditCapabilitiesModal: React.FC<{ component: PageComponent & { type: 'capabilities' }, onSave: (p: PageComponent) => void, onClose: () => void }> = ({ component, onSave, onClose }) => {
    const [props, setProps] = useState<CapabilitiesProps>(component.props);

    const handlePropChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProps(p => ({ ...p, [e.target.name]: e.target.value }));
    };

    const handleCapabilityChange = (id: string, field: keyof CapabilityCardItem, value: string) => {
        const newCapabilities = props.capabilities.map(c => c.id === id ? { ...c, [field]: value } : c);
        setProps(p => ({ ...p, capabilities: newCapabilities }));
    };

    const handleAddCapability = () => {
        const newCap: CapabilityCardItem = {
            id: `cap-${Date.now()}`,
            title: 'New Capability',
            description: 'A great new feature for your users.',
            illustration: 'logs'
        };
        setProps(p => ({...p, capabilities: [...p.capabilities, newCap]}));
    };

    const handleRemoveCapability = (id: string) => {
        setProps(p => ({...p, capabilities: p.capabilities.filter(c => c.id !== id)}));
    };
    
    const handlePillChange = (id: string, field: keyof PillCardItem, value: string) => {
        const newPills = props.pills.map(p => p.id === id ? { ...p, [field]: value } : p);
        setProps(pr => ({ ...pr, pills: newPills }));
    };

    const handleAddPill = () => {
        const newPill: PillCardItem = {
            id: `pill-${Date.now()}`,
            title: 'New Item',
            description: 'Something new and exciting is coming.'
        };
        setProps(p => ({...p, pills: [...p.pills, newPill]}));
    };

    const handleRemovePill = (id: string) => {
        setProps(p => ({...p, pills: p.pills.filter(pi => pi.id !== id)}));
    };


    const handleSave = () => {
        onSave({ ...component, props });
    };

    return (
        <Modal title="Edit Capabilities Section" onSave={handleSave} onClose={onClose}>
            <div className="space-y-6">
                <div>
                    <h4 className="font-semibold text-gray-800 mb-2 border-b pb-2">Main Section</h4>
                    <InputField label="Title" name="title" value={props.title} onChange={handlePropChange} />
                    <div className="mt-4 space-y-4">
                        {props.capabilities.map(cap => (
                             <div key={cap.id} className="p-4 border rounded-md bg-gray-50 relative">
                                <button onClick={() => handleRemoveCapability(cap.id)} className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-100 rounded-full font-bold text-lg leading-none" aria-label="Remove capability">&times;</button>
                                <InputField label="Card Title" value={cap.title} onChange={e => handleCapabilityChange(cap.id, 'title', e.target.value)} />
                                <div className="mt-2">
                                    <TextAreaField label="Card Description" value={cap.description} onChange={e => handleCapabilityChange(cap.id, 'description', e.target.value)} />
                                </div>
                                <div className="mt-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Illustration Style</label>
                                    <select value={cap.illustration} onChange={e => handleCapabilityChange(cap.id, 'illustration', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                        {illustrationTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAddCapability} className="mt-4 text-sm px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">+ Add Capability Card</button>
                </div>
                 <div>
                    <h4 className="font-semibold text-gray-800 mb-2 border-b pb-2">Marquee Section</h4>
                    <InputField label="Marquee Title" name="moreTitle" value={props.moreTitle} onChange={handlePropChange} />
                    <div className="mt-4 space-y-4">
                        {props.pills.map(pill => (
                            <div key={pill.id} className="p-4 border rounded-md bg-gray-50 relative">
                                <button onClick={() => handleRemovePill(pill.id)} className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-100 rounded-full font-bold text-lg leading-none" aria-label="Remove pill">&times;</button>
                                <InputField label="Pill Title" value={pill.title} onChange={e => handlePillChange(pill.id, 'title', e.target.value)} />
                                <div className="mt-2">
                                     <TextAreaField label="Pill Description" value={pill.description} onChange={e => handlePillChange(pill.id, 'description', e.target.value)} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAddPill} className="mt-4 text-sm px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">+ Add Pill Card</button>
                </div>
            </div>
        </Modal>
    );
}