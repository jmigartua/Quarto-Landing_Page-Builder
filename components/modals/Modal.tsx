import React, { PropsWithChildren, MouseEvent } from 'react';

interface ModalProps {
  title: string;
  onClose: () => void;
  onSave: () => void;
  saveDisabled?: boolean;
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ title, onClose, onSave, children, saveDisabled }) => {
  
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" 
      aria-modal="true" 
      role="dialog"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white rounded-t-lg">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          {children}
        </div>
        <div className="flex justify-end items-center p-4 border-t bg-gray-50 sticky bottom-0 rounded-b-lg">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 mr-2">Cancel</button>
          <button onClick={onSave} disabled={saveDisabled} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover disabled:bg-gray-400 disabled:cursor-not-allowed">Save Changes</button>
        </div>
      </div>
    </div>
  );
};
