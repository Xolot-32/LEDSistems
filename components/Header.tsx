
import React, { useState, useEffect } from 'react';

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
}> = ({ onClick, isActive, children }) => {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded transition-all duration-300 flex-1 sm:flex-none ${
                isActive
                    ? 'bg-cyan text-obsidian shadow-[0_0_10px_rgba(0,229,255,0.5)]'
                    : 'text-cyan/40 hover:text-cyan hover:bg-cyan/10 border border-cyan/10'
            }`}
        >
            {children}
        </button>
    );
};

export const Header: React.FC<HeaderProps> = ({ onSearch, onMenuToggle, activeSystem, onSystemChange }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <header className="bg-obsidian/95 backdrop-blur-md border-b-2 border-thermal/30 shadow-[0_4px_20px_rgba(0,0,0,0.8)] fixed w-full top-0 z-50">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Main Bar */}
                <div className="flex items-center justify-between h-20 sm:h-24">
                    {/* Logo & Status */}
                    <div className="flex items-center gap-3 sm:gap-6">
                        <div className="relative flex-shrink-0">
                            <div className="w-10 h-10 sm:w-14 sm:h-14 border-2 border-cyan flex items-center justify-center text-cyan text-xl sm:text-3xl animate-olin">
                                🏮
                            </div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full animate-pulse"></div>
                        </div>
                        <div className="min-w-0">
                             <h1 className="text-sm sm:text-xl font-bold text-cyan tracking-tighter uppercase leading-none truncate">
                                {activeSystem === 'led' ? 'LED OS v2.5' : 'WLED CONTROLLER'}
                            </h1>
                            <div className="hidden sm:flex gap-3 mt-1 text-[10px] mono text-thermal font-bold uppercase">
                                <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-thermal animate-pulse rounded-full"></span>
                                    REC
                                </span>
                                <span>{time.toLocaleTimeString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Actions */}
                    <div className="flex items-center gap-2 sm:gap-4">
                         <nav className="hidden lg:flex items-center gap-2 p-1 bg-techblue/40 border border-cyan/20 rounded-full">
                            <SystemButton onClick={() => onSystemChange('led')} isActive={activeSystem === 'led'}>LED OS</SystemButton>
                            <SystemButton onClick={() => onSystemChange('wled')} isActive={activeSystem === 'wled'}>WLED OS</SystemButton>
                        </nav>
                        
                        <div className="relative hidden md:block">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="ACCEDER..."
                                className="bg-obsidian/50 border-b border-cyan/30 text-cyan px-4 py-2 w-32 lg:w-48 focus:w-64 focus:border-cyan focus:outline-none transition-all duration-500 mono text-xs"
                            />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button 
                            onClick={onMenuToggle} 
                            className="p-2 rounded bg-cyan/10 text-cyan border border-cyan/30 hover:bg-cyan/20 transition-colors"
                            aria-label="Menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile System Selector (Integrated) */}
                <div className="lg:hidden flex border-t border-cyan/10 py-2 gap-2">
                    <SystemButton onClick={() => onSystemChange('led')} isActive={activeSystem === 'led'}>LED SYSTEM</SystemButton>
                    <SystemButton onClick={() => onSystemChange('wled')} isActive={activeSystem === 'wled'}>WLED SYSTEM</SystemButton>
                </div>
            </div>
        </header>
    );
};
