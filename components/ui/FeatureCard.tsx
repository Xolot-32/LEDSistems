
import React from 'react';

interface FeatureCardProps {
    title: React.ReactNode;
    children: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, children }) => {
    return (
        <div className="relative bg-techblue/20 border border-cyan/30 p-6 transition-all duration-300 hover:border-cyan hover:bg-techblue/40 group overflow-hidden">
            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:10px_10px]"></div>
            
            <h4 className="text-lg font-bold text-cyan mb-4 flex items-center gap-3 mono uppercase tracking-tighter">
                {title}
            </h4>
            <div className="text-slate-400 text-sm leading-relaxed relative z-10">{children}</div>
            
            {/* Corner Markers inside the card */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-thermal/50"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan/50"></div>
        </div>
    );
};

export const FeatureIcon: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <span className="w-10 h-10 bg-cyan text-obsidian font-bold flex items-center justify-center text-xl shadow-[0_0_15px_rgba(0,229,255,0.4)]">
        {children}
    </span>
);
