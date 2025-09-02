import React from 'react';
import type { Section } from '../types';

interface SidebarProps {
    sections: Section[];
    activeSectionId: string;
    onSectionChange: (id: string) => void;
    isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId, onSectionChange, isOpen }) => {
    return (
        <aside className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg h-fit sticky top-24 transition-transform duration-300 ease-in-out lg:transform-none ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative w-72 lg:w-auto z-30 lg:z-auto h-screen lg:h-fit overflow-y-auto`}>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Navegación</h3>
            <nav>
                <ul className="space-y-1">
                    {sections.map(section => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onSectionChange(section.id);
                                }}
                                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 relative overflow-hidden group ${
                                    activeSectionId === section.id
                                        ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-md'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600 hover:translate-x-1'
                                }`}
                            >
                                <span className={`transition-transform duration-300 group-hover:scale-110 ${activeSectionId === section.id ? '' : 'text-slate-400 group-hover:text-blue-500'}`}>{section.icon}</span>
                                <span>{section.title}</span>
                                {section.badge && (
                                    <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${
                                        activeSectionId === section.id ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-700'
                                    }`}>{section.badge}</span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};