
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
        <>
            {/* Backdrop for Mobile */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
                    onClick={() => onSectionChange(activeSectionId)}
                />
            )}

            <aside className={`
                fixed lg:sticky top-0 lg:top-32 left-0 z-50 lg:z-auto
                w-72 sm:w-80 lg:w-full h-full lg:h-fit
                bg-obsidian lg:bg-transparent
                border-r lg:border-r-0 border-cyan/20
                p-6 transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                overflow-y-auto lg:overflow-visible
            `}>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-cyan/20">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan animate-pulse rounded-full"></div>
                        <h3 className="text-[10px] mono font-bold text-cyan uppercase tracking-[0.2em]">Data_Nexus</h3>
                    </div>
                    {/* Close button only for mobile */}
                    <button onClick={() => onSectionChange(activeSectionId)} className="lg:hidden text-cyan/50 hover:text-cyan">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </button>
                </div>

                <nav>
                    <ul className="space-y-1.5">
                        {sections.map(section => (
                            <li key={section.id}>
                                <button
                                    onClick={() => onSectionChange(section.id)}
                                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-sm text-[11px] font-bold mono uppercase tracking-tighter transition-all duration-300 relative group overflow-hidden ${
                                        activeSectionId === section.id
                                            ? 'bg-cyan text-obsidian shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                                            : 'text-cyan/60 hover:text-cyan hover:bg-cyan/5 border border-transparent hover:border-cyan/10'
                                    }`}
                                >
                                    <span className={`text-lg transition-transform duration-300 group-hover:scale-110 ${activeSectionId === section.id ? '' : 'opacity-50'}`}>
                                        {section.icon}
                                    </span>
                                    <span className="flex-grow text-left">{section.title}</span>
                                    {activeSectionId === section.id && (
                                        <div className="w-1 h-full bg-thermal absolute left-0 top-0"></div>
                                    )}
                                    {section.badge && (
                                        <span className={`text-[8px] px-1.5 py-0.5 font-black ${
                                            activeSectionId === section.id ? 'bg-obsidian text-cyan' : 'bg-thermal text-white shadow-[0_0_5px_rgba(255,8,68,0.5)]'
                                        }`}>{section.badge}</span>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-8 pt-6 border-t border-cyan/10">
                    <div className="text-[9px] mono text-cyan/30 uppercase leading-relaxed italic">
                        >> AUTH: GRANTED<br/>
                        >> NODE: 0x7A1...<br/>
                        >> SYSTEM: ONLINE
                    </div>
                </div>
            </aside>
        </>
    );
};
