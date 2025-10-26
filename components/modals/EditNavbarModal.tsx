import React, { useState, ChangeEvent } from 'react';
import { Modal } from './Modal';
import { PageComponent, NavbarProps, NavbarItem } from '../../types';

interface EditNavbarModalProps {
    component: PageComponent & { type: 'navbar' };
    onSave: (component: PageComponent) => void;
    onClose: () => void;
}

const InputField = ({ label, value, onChange, name }: { label: string, value: string, name: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" value={value} onChange={onChange} name={name} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
    </div>
);

// Fix: Use React.FC to correctly type the component with children.
// The `children` prop is now implicitly handled by React.FC.
interface SelectFieldProps {
    label: string;
    value: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, value, onChange, name, children }) => (
    <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select value={value} onChange={onChange} name={name} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary">
            {children}
        </select>
    </div>
);

const CheckboxField = ({ label, checked, onChange, name }: { label: string, checked: boolean, name: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="flex items-center">
        <input type="checkbox" checked={checked} onChange={onChange} name={name} className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <label className="ml-2 block text-sm text-gray-900">{label}</label>
    </div>
);

const NavItemsEditor = ({ items, onItemsChange }: { items: NavbarItem[], onItemsChange: (newItems: NavbarItem[]) => void }) => {

    const handleItemChange = (id: string, field: keyof NavbarItem, value: string) => {
        const newItems = items.map(item => item.id === id ? { ...item, [field]: value } : item);
        onItemsChange(newItems);
    };

    const handleAddItem = () => {
        const newItem: NavbarItem = { id: `nav-item-${Date.now()}`, type: 'link', text: 'New Link', href: '#' };
        onItemsChange([...items, newItem]);
    };

    const handleRemoveItem = (id: string) => {
        onItemsChange(items.filter(item => item.id !== id));
    };

    return (
        <div>
            {items.map(item => (
                <div key={item.id} className="p-3 mb-2 border rounded-md bg-gray-50 flex items-center gap-2">
                    <SelectField label="Type" name="type" value={item.type} onChange={e => handleItemChange(item.id, 'type', e.target.value)}>
                        <option value="link">Link</option>
                        <option value="icon">Icon</option>
                    </SelectField>
                    
                    {item.type === 'link' ? (
                        <InputField label="Text" name="text" value={item.text || ''} onChange={e => handleItemChange(item.id, 'text', e.target.value)} />
                    ) : (
                        <SelectField label="Icon" name="icon" value={item.icon || 'github'} onChange={e => handleItemChange(item.id, 'icon', e.target.value)}>
                            <option value="github">GitHub</option>
                            <option value="twitter">Twitter</option>
                            <option value="linkedin">LinkedIn</option>
                        </SelectField>
                    )}
                    
                    <InputField label="URL" name="href" value={item.href} onChange={e => handleItemChange(item.id, 'href', e.target.value)} />

                    <button onClick={() => handleRemoveItem(item.id)} className="p-2 text-red-500 hover:bg-red-100 rounded-full mt-6" aria-label="Remove item">&times;</button>
                </div>
            ))}
            <button onClick={handleAddItem} className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">+ Add Item</button>
        </div>
    );
};


export const EditNavbarModal: React.FC<EditNavbarModalProps> = ({ component, onSave, onClose }) => {
    const [props, setProps] = useState<NavbarProps>(component.props);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setProps(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSave = () => {
        onSave({ ...component, props });
    };

    return (
        <Modal title="Edit Navbar" onClose={onClose} onSave={handleSave}>
            <div className="space-y-6">
                <div>
                    <InputField label="Site Title" name="title" value={props.title} onChange={handleInputChange} />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Left Items</h4>
                    <NavItemsEditor items={props.leftItems} onItemsChange={(newItems) => setProps(p => ({ ...p, leftItems: newItems }))} />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Right Items</h4>
                    <NavItemsEditor items={props.rightItems} onItemsChange={(newItems) => setProps(p => ({ ...p, rightItems: newItems }))} />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Options</h4>
                    <div className="flex gap-4">
                        <CheckboxField label="Enable Theme Switcher (Light/Dark)" name="themeSwitcher" checked={props.themeSwitcher} onChange={handleInputChange} />
                        <CheckboxField label="Enable Language Switcher (Placeholder)" name="languageSwitcher" checked={props.languageSwitcher} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
        </Modal>
    );
};