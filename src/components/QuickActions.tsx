import React, { useState, useEffect } from 'react';

export const QuickActions: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handlePrint = () => {
        window.print();
    };

    const showSupport = () => {
        alert('Soporte Técnico\n\n📧 ld.duran.x@gmail.com\n📱 +52 55 3875 6511\n\nHorario: Lun-Vie 9:00-18:00');
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-30">
            <ActionButton tooltip="Descargar PDF" onClick={handlePrint}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </ActionButton>
            <ActionButton tooltip="Soporte" onClick={showSupport} isPrimary>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.482L7 21h4.5m1.5-1.5-2.25-2.25" />
                </svg>
            </ActionButton>
            {isVisible && (
                <ActionButton tooltip="Ir arriba" onClick={scrollToTop} className="bg-slate-800 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </ActionButton>
            )}
        </div>
    );
};


interface ActionButtonProps {
    children: React.ReactNode;
    tooltip: string;
    onClick: () => void;
    isPrimary?: boolean;
    className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, tooltip, onClick, isPrimary = false, className = '' }) => {
    const baseClasses = 'w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 group relative';
    const primaryClasses = 'bg-gradient-to-br from-blue-500 to-violet-500 text-white';
    const secondaryClasses = 'bg-white text-blue-600 border-2 border-blue-500';

    return (
        <button onClick={onClick} className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses} ${className}`}>
            {children}
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-sm px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {tooltip}
            </span>
        </button>
    );
};