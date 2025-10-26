import React, { useState, ChangeEvent } from 'react';
import { Modal } from './Modal';
import { PageComponent, FooterProps, FooterLink } from '../../types';

interface EditFooterModalProps {
    component: PageComponent & { type: 'footer' };
    onSave: (component: PageComponent) => void;
    onClose: () => void;
}

const InputField = ({ label, value, onChange, name }: { label: string, value: string, name: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" value={value} onChange={onChange} name={name} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);

const LinkEditor = ({ links, onLinksChange }: { links: FooterLink[], onLinksChange: (newLinks: FooterLink[]) => void }) => {

    const handleLinkChange = (id: string, field: keyof FooterLink, value: string) => {
        const newLinks = links.map(link => link.id === id ? { ...link, [field]: value } : link);
        onLinksChange(newLinks);
    };

    const handleAddLink = () => {
        const newLink: FooterLink = { id: `footer-link-${Date.now()}`, text: 'New Link', href: '#' };
        onLinksChange([...links, newLink]);
    };

    const handleRemoveLink = (id: string) => {
        onLinksChange(links.filter(link => link.id !== id));
    };

    return (
        <div>
            <h4 className="font-semibold text-gray-800 mb-2">Footer Links</h4>
            {links.map(link => (
                <div key={link.id} className="p-3 mb-2 border rounded-md bg-gray-50 flex items-center gap-2">
                    <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-600">Text</label>
                        <input type="text" value={link.text} onChange={e => handleLinkChange(link.id, 'text', e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded-md" />
                    </div>
                     <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-600">URL</label>
                        <input type="text" value={link.href} onChange={e => handleLinkChange(link.id, 'href', e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded-md" />
                    </div>
                    <button onClick={() => handleRemoveLink(link.id)} className="p-2 text-red-500 hover:bg-red-100 rounded-full mt-4" aria-label="Remove link">&times;</button>
                </div>
            ))}
            <button onClick={handleAddLink} className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">+ Add Link</button>
        </div>
    );
};

export const EditFooterModal: React.FC<EditFooterModalProps> = ({ component, onSave, onClose }) => {
    const [props, setProps] = useState<FooterProps>(component.props);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProps(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave({ ...component, props });
    };

    return (
        <Modal title="Edit Footer" onClose={onClose} onSave={handleSave}>
            <InputField label="Copyright Text" name="copyrightText" value={props.copyrightText} onChange={handleChange} />
            <hr className="my-4"/>
            <LinkEditor links={props.links} onLinksChange={(newLinks) => setProps(p => ({ ...p, links: newLinks }))} />
        </Modal>
    );
};
