
import React from 'react';

interface FeatureCardProps {
    title: React.ReactNode;
    children: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, children }) => {
    return (
        <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-100/50 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-3">
                {title}
            </h4>
            <div className="text-slate-600">{children}</div>
        </div>
    );
};

export const FeatureIcon: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-md flex items-center justify-center text-white text-lg">
        {children}
    </span>
);
