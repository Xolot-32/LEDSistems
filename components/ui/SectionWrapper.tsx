
import React from 'react';

interface SectionWrapperProps {
    title: string;
    icon: string;
    children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, icon, children }) => {
    return (
        /* Se redujo mb-12 a mb-8 para acercar las secciones si hay varias */
        <section className="animate-fadeIn borgia-border bg-obsidian/60 p-8 rounded-sm mb-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-sm overflow-hidden">
            <header className="pb-4 mb-6 border-b-2 border-thermal/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-6">
                    <span className="w-16 h-16 bg-thermal text-white flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(255,8,68,0.4)]">{icon}</span>
                    {title}
                </h2>
                <div className="text-[10px] mono text-cyan/50 text-right uppercase leading-tight">
                    DOC_REF: {title.toUpperCase().replace(/\s/g, '_')}<br/>
                    SECURITY_LEVEL: ALPHA_7
                </div>
            </header>
            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                {children}
            </div>
        </section>
    );
};

export const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <h3 className="text-2xl font-bold text-cyan mt-12 mb-6 uppercase tracking-widest border-l-4 border-cyan pl-6 bg-cyan/5 py-2">{children}</h3>
);

export const SubTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <h4 className="text-xl font-bold text-thermal mt-8 mb-4 mono uppercase">{" >> "} {children}</h4>
);

export const StyledList: React.FC<{children: React.ReactNode, ordered?: boolean}> = ({ children, ordered = false }) => {
    if (ordered) {
        return <ol className="list-decimal list-inside space-y-4 pl-4 mono text-sm">{children}</ol>;
    }
    return <ul className="space-y-4 pl-4">{children}</ul>;
};

export const StyledListItem: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <li className="relative pl-8 flex items-start group">
        <span className="absolute left-0 text-thermal font-bold text-xl group-hover:animate-glitch">⚡</span>
        <span>{children}</span>
    </li>
);
