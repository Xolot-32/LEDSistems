import React from 'react';

interface SectionWrapperProps {
    title: string;
    icon: string;
    children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, icon, children }) => {
    return (
        <section className="animate-fadeIn">
            <header className="pb-4 mb-8 border-b-2 border-slate-100">
                <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-4">
                    <span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center text-white text-2xl">{icon}</span>
                    {title}
                </h2>
            </header>
            <div className="space-y-6 text-slate-600 leading-relaxed">
                {children}
            </div>
        </section>
    );
};

export const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4 pl-4 border-l-4 border-blue-500">{children}</h3>
);

export const SubTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <h4 className="text-xl font-semibold text-blue-600 mt-8 mb-4">{children}</h4>
);

export const StyledList: React.FC<{children: React.ReactNode, ordered?: boolean}> = ({ children, ordered = false }) => {
    if (ordered) {
        return <ol className="list-decimal list-inside space-y-2 pl-4">{children}</ol>;
    }
    return <ul className="space-y-2 pl-4">{children}</ul>;
};

export const StyledListItem: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <li className="relative pl-6 before:content-['▸'] before:absolute before:left-0 before:text-blue-500 before:font-bold">{children}</li>
);
