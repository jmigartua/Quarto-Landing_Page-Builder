import React, { useState, useEffect, DragEvent } from 'react';
import { ElementPicker } from './components/ElementPicker';
import { Canvas } from './components/Canvas';
import { CodePreview } from './components/CodePreview';
import { PageComponent, ElementType } from './types';
import { generateProjectFiles } from './services/projectGenerator';
import { createNewComponent } from './services/componentFactory';
import { EditModal } from './components/modals';

const App: React.FC = () => {
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([]);
  const [projectFiles, setProjectFiles] = useState<Record<string, string>>({});
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
  const [editingComponent, setEditingComponent] = useState<PageComponent | null>(null);

  useEffect(() => {
    const newProjectFiles = generateProjectFiles(pageComponents);
    setProjectFiles(newProjectFiles);
  }, [pageComponents]);

  const addComponent = (type: ElementType) => {
    const newComponent = createNewComponent(type);
    // Ensure navbar is always at the top and footer is always at the bottom
    if (newComponent.type === ElementType.NAVBAR) {
       setPageComponents((prev) => [newComponent, ...prev.filter(c => c.type !== ElementType.NAVBAR)]);
    } else if (newComponent.type === ElementType.FOOTER) {
       setPageComponents((prev) => [...prev.filter(c => c.type !== ElementType.FOOTER), newComponent]);
    }
    else {
      const footerIndex = pageComponents.findIndex(c => c.type === ElementType.FOOTER);
      if (footerIndex > -1) {
        const newComps = [...pageComponents];
        newComps.splice(footerIndex, 0, newComponent);
        setPageComponents(newComps);
      } else {
        setPageComponents((prev) => [...prev, newComponent]);
      }
    }
  };

  const clearCanvas = () => {
    setPageComponents([]);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('elementType') as ElementType;
    if (type) {
      addComponent(type);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleComponentDragStart = (index: number) => {
    setDraggedItemIndex(index);
  };

  const handleComponentDrop = (dropIndex: number) => {
    if (draggedItemIndex === null || draggedItemIndex === dropIndex) return;

    const newComponents = [...pageComponents];
    const draggedItem = newComponents[draggedItemIndex];

    // Prevent reordering navbar from top or footer from bottom
    if (draggedItem.type === ElementType.NAVBAR || draggedItem.type === ElementType.FOOTER) {
        setDraggedItemIndex(null);
        return;
    }
    if (newComponents[dropIndex].type === ElementType.NAVBAR || newComponents[dropIndex].type === ElementType.FOOTER) {
        setDraggedItemIndex(null);
        return;
    }

    newComponents.splice(draggedItemIndex, 1);
    newComponents.splice(dropIndex, 0, draggedItem);

    setPageComponents(newComponents);
    setDraggedItemIndex(null);
  };
  
  const removeComponent = (id: string) => {
    setPageComponents(prev => prev.filter(c => c.id !== id));
  };

  const handleUpdateComponent = (updatedComponent: PageComponent) => {
    setPageComponents(prev => 
        prev.map(c => c.id === updatedComponent.id ? updatedComponent : c)
    );
    setEditingComponent(null);
  };

  return (
    <div className="flex h-screen bg-canvas-bg font-sans text-gray-800 overflow-hidden">
      <ElementPicker />
      <main 
        className="flex-1 p-4 lg:p-6 overflow-y-auto"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Canvas 
          components={pageComponents}
          onComponentDragStart={handleComponentDragStart}
          onComponentDrop={handleComponentDrop}
          onRemoveComponent={removeComponent}
          onClearCanvas={clearCanvas}
          onEditComponent={setEditingComponent}
        />
      </main>
      <CodePreview files={projectFiles} />
      {editingComponent && (
        <EditModal 
          component={editingComponent}
          onSave={handleUpdateComponent}
          onClose={() => setEditingComponent(null)}
        />
      )}
    </div>
  );
};

export default App;