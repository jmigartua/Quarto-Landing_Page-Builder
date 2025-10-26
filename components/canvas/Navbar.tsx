import React from 'react';
import { NavbarProps, NavbarItem } from '../../types';

const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.665.18-1.37.228-2.083.135.616 1.92 2.396 3.256 4.491 3.296-1.789 1.407-4.069 2.24-6.516 2.24-.42 0-.833-.025-1.245-.073 2.305 1.476 5.048 2.338 8.001 2.338 9.457 0 14.65-7.83 14.61-14.658v-.643c1.002-.72 1.848-1.62 2.534-2.625z"/></svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;


const renderIcon = (iconName: NavbarItem['icon']) => {
    switch(iconName) {
        case 'github': return <GitHubIcon />;
        case 'twitter': return <TwitterIcon />;
        case 'linkedin': return <LinkedInIcon />;
        default: return null;
    }
}
const NavItem: React.FC<{ item: NavbarItem }> = ({ item }) => {
    if (item.type === 'icon') {
        return <div className="h-6 w-6">{renderIcon(item.icon)}</div>
    }
    return <span>{item.text}</span>
}


export const Navbar: React.FC<NavbarProps> = ({ title, leftItems, rightItems }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg text-white">
      <div className="flex justify-between items-center">
        <span className="font-bold">{title}</span>
        <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-4">
                {leftItems.map(item => <NavItem key={item.id} item={item} />)}
            </div>
            <div className="w-px h-5 bg-gray-600"></div>
            <div className="flex items-center gap-4">
                {rightItems.map(item => <NavItem key={item.id} item={item} />)}
            </div>
        </div>
      </div>
       <p className="text-xs text-gray-400 mt-2">Note: This is a visual representation. The actual Navbar is configured in the YAML frontmatter.</p>
    </div>
  );
};
