
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
        <aside className={`bg-obsidian/95 backdrop-blur-lg border-r border-cyan/20 p-6 shadow-2xl sticky top-24 transition-transform duration-500 ease-in-out lg:transform-none ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative w-80 lg:w-auto z-30 lg:z-auto ${isOpen ? 'h-screen overflow-y-auto' : 'h-fit'} lg:h-auto lg:overflow-visible`}>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-cyan/20">
                <div className="w-2 h-2 bg-cyan animate-pulse rounded-full"></div>
                <h3 className="text-[10px] mono font-bold text-cyan uppercase tracking-[0.3em]">Directorio de Datos</h3>
            </div>
            <nav>
                <ul className="space-y-2">
                    {sections.map(section => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onSectionChange(section.id);
                                }}
                                className={`flex items-center gap-4 px-4 py-3 rounded-sm text-xs font-bold mono uppercase tracking-tighter transition-all duration-300 relative group overflow-hidden ${
                                    activeSectionId === section.id
                                        ? 'bg-cyan text-obsidian shadow-[0_0_20px_rgba(0,229,255,0.3)]'
                                        : 'text-cyan/60 hover:text-cyan hover:bg-cyan/5'
                                }`}
                            >
                                <span className={`text-xl transition-transform duration-300 group-hover:scale-125 ${activeSectionId === section.id ? '' : 'opacity-50'}`}>{section.icon}</span>
                                <span className="flex-grow">{section.title}</span>
                                {activeSectionId === section.id && (
                                    <div className="w-1.5 h-full bg-thermal absolute left-0 top-0"></div>
                                )}
                                {section.badge && (
                                    <span className={`text-[8px] px-1.5 py-0.5 font-black ${
                                        activeSectionId === section.id ? 'bg-obsidian text-cyan' : 'bg-thermal text-white'
                                    }`}>{section.badge}</span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-12 pt-6 border-t border-cyan/10">
                <div className="text-[9px] mono text-cyan/30 uppercase leading-relaxed italic">
                    {" >> "} USER_AUTH: GRANTED<br/>
                    {" >> "} SYSTEM_READY<br/>
                    {" >> "} TO_BE_STABLE_IS_TO_BE_DEAD
                </div>
            </div>
        </aside>
    );
};
