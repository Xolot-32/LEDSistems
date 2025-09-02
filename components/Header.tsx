
import React, { useState } from 'react';

interface HeaderProps {
    onSearch: (query: string) => void;
    onMenuToggle: () => void;
    activeSystem: 'led' | 'wled';
    onSystemChange: (system: 'led' | 'wled') => void;
}

const SystemButton: React.FC<{
    onClick: () => void;
    isActive: boolean;
    children: React.ReactNode;
    className?: string;
}> = ({ onClick, isActive, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 flex-1 ${
                isActive
                    ? 'bg-blue-500 text-white shadow'
                    : 'text-slate-600 hover:bg-slate-200'
            } ${className}`}
        >
            {children}
        </button>
    );
};

export const Header: React.FC<HeaderProps> = ({ onSearch, onMenuToggle, activeSystem, onSystemChange }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <header className="bg-white/95 backdrop-blur-sm shadow-md fixed w-full top-0 z-40 transition-all duration-300">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center text-white text-3xl animate-bounce" style={{ animationDuration: '3s' }}>
                            💡
                        </div>
                        <div>
                             <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text whitespace-nowrap">
                                {activeSystem === 'led' ? 'Sistema LED' : 'Controladores WLED'}
                            </h1>
                            <p className="text-sm text-slate-500">Manual Operativo v1.2</p>
                        </div>
                    </div>

                    {/* Nav Actions */}
                    <div className="flex items-center gap-2 sm:gap-4">
                         <nav className="hidden lg:flex items-center gap-2 p-1 bg-slate-100 rounded-full">
                            <SystemButton onClick={() => onSystemChange('led')} isActive={activeSystem === 'led'}>Sistema LED</SystemButton>
                            <SystemButton onClick={() => onSystemChange('wled')} isActive={activeSystem === 'wled'}>Controladores WLED</SystemButton>
                        </nav>
                        <div className="relative hidden md:block">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Buscar en el manual..."
                                className="pl-10 pr-4 py-2 w-48 lg:w-64 border-2 border-slate-200 rounded-full transition-all duration-300 focus:w-64 lg:focus:w-80 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <button onClick={onMenuToggle} className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
             {/* Mobile System Navigation */}
            <nav className="lg:hidden flex items-center p-2 border-t border-slate-200 bg-slate-50 gap-2">
                <SystemButton onClick={() => onSystemChange('led')} isActive={activeSystem === 'led'}>Sistema LED</SystemButton>
                <SystemButton onClick={() => onSystemChange('wled')} isActive={activeSystem === 'wled'}>Controladores WLED</SystemButton>
            </nav>
        </header>
    );
};
