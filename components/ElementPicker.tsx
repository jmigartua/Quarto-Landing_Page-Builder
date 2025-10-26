import React, { DragEvent } from 'react';
import { ElementDefinition, ElementType } from '../types';

const elements: ElementDefinition[] = [
  {
    type: ElementType.NAVBAR,
    name: 'Navbar',
    description: 'Header navigation bar.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
  {
    type: ElementType.HERO,
    name: 'Hero Section',
    description: 'A large, prominent intro section.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l-3 3m6 0l-3 3m0 10l3 3m-6 0l3 3" />
      </svg>
    ),
  },
  {
    type: ElementType.ABOUT,
    name: 'About Section',
    description: 'A two-column section with an image.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    type: ElementType.FEATURES,
    name: 'Features Grid',
    description: 'A grid layout to showcase features.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    type: ElementType.CAPABILITIES,
    name: 'Capabilities',
    description: 'A grid of feature cards and a marquee.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
    ),
  },
  {
    type: ElementType.CAROUSEL,
    name: 'Carousel',
    description: 'A slideshow of images.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
  },
  {
    type: ElementType.BANNER,
    name: 'Banner',
    description: 'A colorful banner for announcements.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    )
  },
  {
    type: ElementType.CTA,
    name: 'Call to Action',
    description: 'A section to encourage user action.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.354A1.76 1.76 0 016.5 12H6a1.76 1.76 0 00-1.76 1.761l-1.096 4.847A1.76 1.76 0 011.25 20.25V12a1.76 1.76 0 011.76-1.76h2.76a1.76 1.76 0 001.76-1.76V5.882a1.76 1.76 0 013.417.592zM12 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.354A1.76 1.76 0 016.5 12H6a1.76 1.76 0 00-1.76 1.761l-1.096 4.847A1.76 1.76 0 011.25 20.25V12a1.76 1.76 0 011.76-1.76h2.76a1.76 1.76 0 001.76-1.76V5.882a1.76 1.76 0 013.417.592a1.76 1.76 0 013.417-.592z" />
      </svg>
    ),
  },
  {
    type: ElementType.SEPARATOR,
    name: 'Separator',
    description: 'A horizontal dividing line.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg>
    )
  },
  {
    type: ElementType.FOOTER,
    name: 'Footer',
    description: 'A standard page footer.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const Element: React.FC<{ element: ElementDefinition }> = ({ element }) => {
  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('elementType', element.type);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="flex items-center p-3 mb-2 bg-white rounded-lg shadow-sm border border-border-light cursor-grab active:cursor-grabbing transition-transform transform hover:scale-105"
    >
      <div className="text-primary mr-4">{element.icon}</div>
      <div>
        <p className="font-semibold text-gray-700">{element.name}</p>
        <p className="text-xs text-secondary">{element.description}</p>
      </div>
    </div>
  );
};

export const ElementPicker: React.FC = () => {
  return (
    <aside className="w-64 lg:w-72 bg-sidebar-bg p-4 overflow-y-auto border-r border-border-light shadow-md">
      <h2 className="text-xl font-bold mb-1 text-gray-800">Components</h2>
      <p className="text-sm text-secondary mb-6">Drag elements onto the canvas.</p>
      <div>
        {elements.map((el) => (
          <Element key={el.type} element={el} />
        ))}
      </div>
    </aside>
  );
};