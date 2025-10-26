import React, { DragEvent } from 'react';
import { PageComponent, ElementType } from '../types';
import * as CanvasComponents from './canvas/index';

interface CanvasProps {
  components: PageComponent[];
  onComponentDragStart: (index: number) => void;
  onComponentDrop: (dropIndex: number) => void;
  onRemoveComponent: (id: string) => void;
  onClearCanvas: () => void;
  onEditComponent: (component: PageComponent) => void;
}

const renderComponent = (
    component: PageComponent, 
    index: number, 
    onDragStart: (index: number) => void, 
    onDrop: (index: number) => void,
    onRemove: (id: string) => void,
    onEdit: (component: PageComponent) => void
) => {
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  
  const isDraggable = component.type !== ElementType.NAVBAR && component.type !== ElementType.FOOTER;
  const canBeEdited = true; // All components are now editable

  const commonProps = {
    key: component.id,
    id: component.id,
    draggable: isDraggable,
    onDragStart: () => onDragStart(index),
    onDrop: () => onDrop(index),
    onDragOver: handleDragOver,
    className: `relative bg-white p-4 rounded-lg shadow-lifted border border-border-light mb-4 transition-shadow hover:shadow-lg ${isDraggable ? 'cursor-move' : ''}`,
  };
  
  const editButton = canBeEdited && (
    <button 
      onClick={() => onEdit(component)} 
      className="absolute top-2 right-10 p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
      aria-label="Edit component"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
    </button>
  );

  const removeButton = (
    <button 
      onClick={() => onRemove(component.id)} 
      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
      aria-label="Remove component"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );

  const wrapWithContainer = (content: React.ReactNode) => (
    <div {...commonProps}>
      {content}
      {editButton}
      {removeButton}
    </div>
  );

  const renderVisualComponent = () => {
    switch (component.type) {
      case ElementType.NAVBAR:
        return <CanvasComponents.Navbar {...component.props} />;
      case ElementType.HERO:
        return <CanvasComponents.Hero {...component.props} />;
      case ElementType.FEATURES:
        return <CanvasComponents.Features {...component.props} />;
      case ElementType.CTA:
        return <CanvasComponents.CTA {...component.props} />;
      case ElementType.FOOTER:
        return <CanvasComponents.Footer {...component.props} />;
      case ElementType.BANNER:
        return <CanvasComponents.Banner {...component.props} />;
      case ElementType.ABOUT:
        return <CanvasComponents.About {...component.props} />;
      case ElementType.SEPARATOR:
        return <CanvasComponents.Separator {...component.props} />;
      case ElementType.CAROUSEL:
        return <CanvasComponents.Carousel {...component.props} />;
      case ElementType.CAPABILITIES:
        return <CanvasComponents.Capabilities {...component.props} />;
      case ElementType.FAQ:
        return <CanvasComponents.Faq {...component.props} />;
      default:
        return null;
    }
  }

  return wrapWithContainer(renderVisualComponent());
};

export const Canvas: React.FC<CanvasProps> = ({ components, onComponentDragStart, onComponentDrop, onRemoveComponent, onClearCanvas, onEditComponent }) => {
  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Landing Page Canvas</h1>
        {components.length > 0 && (
          <button 
            onClick={onClearCanvas}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Clear Canvas
          </button>
        )}
      </div>
      <div className="bg-white min-h-full p-6 rounded-lg border border-dashed border-gray-300">
        {components.length === 0 ? (
          <CanvasComponents.Placeholder />
        ) : (
          components.map((comp, index) => renderComponent(comp, index, onComponentDragStart, onComponentDrop, onRemoveComponent, onEditComponent))
        )}
      </div>
    </div>
  );
};