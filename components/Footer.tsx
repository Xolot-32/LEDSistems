
import React from 'react';

const TelegramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.91-.494 1.208-.822 1.23-.696.047-1.225-.46-1.9-1.088-1.026-.948-1.597-1.524-2.58-2.464-.984-.94-1.954-1.89-1.797-2.932.11-.732.654-2.215 1.15-3.088.08-.142.16-.284.25-.425a.83.83 0 0 1 .12-.186.415.415 0 0 1 .433-.13.414.414 0 0 1 .333.342c.045.22.06.413.06.542 0 .19-.01.38-.04.57-.104.58-.32 1.16-.62 1.745-.16.3-.32.6-.49.9-.17.3-.34.6-.51.9-.03.05-.05.1-.07.15-.02.05-.03.1-.03.15-.01.05 0 .1.03.15.02.04.07.08.12.1.05.02.1.03.15.03.05 0 .1 0 .15-.03.05-.02.09-.07.12-.12.03-.05.05-.1.07-.15l.07-.15s.31-.31.78-.77c2.5-2.45 2.8-2.7 2.9-2.8.1-.1.1-.2 0-.3-.1-.1-.2-.1-.3 0-.1 0-2.3 1.5-6.7 4.5-.47.33-.95.66-1.42.98-.47.33-.95.66-1.42.98l-.02.02-.02.01c-.17.11-.34.23-.5.35-.4.3-1 .6-1.5.6-.5 0-1-.2-1.5-.6s-.9-1.2-1.2-2.1c-.3-1 .2-2 .5-2.5 1.5-2.5 3.5-5.5 5-7.5.4-.5.8-1 1.2-1.5s.8-1 1.2-1.5c.4-.5.8-1 1.2-1.5s.8-1 1.2-1.5c.2-.25.4-.5.6-.75s.4-.5.6-.75c.2-.25.4-.5.6-.75.2-.25.4-.5.6-.75.05-.05.1-.1.15-.15s.1-.1.15-.15c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3.1-.1.2-.15.3-.2s.2-.1.3-.15c.1 0 .2-.05.3-.05z"/>
    </svg>
);

export const Footer: React.FC = () => {
    return (
        <footer className="bg-obsidian/90 border-t-4 border-thermal relative mt-24">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 mono text-xs uppercase tracking-tighter">
                    <div className="flex flex-col gap-2">
                        <span className="text-cyan font-bold">Contact_Secure:</span>
                        <a href="mailto:ld.duran.x@gmail.com" className="hover:text-cyan transition-colors">ld.duran.x@gmail.com</a>
                        <a href="tel:+525538756511" className="hover:text-cyan transition-colors">+52 55 3875 6511</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-cyan font-bold">Digital_Nerve:</span>
                        <a href="https://t.me/DanielXolot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan transition-colors">
                            <TelegramIcon /> @DanielXolot
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-cyan font-bold">System_Version:</span>
                        <span>v2.5.0_STABLE</span>
                        <span>BUILD_2025_TEO</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-cyan font-bold">Protocol_Status:</span>
                        <span className="text-jade">ENCRYPTED</span>
                        <span className="text-jade">ACTIVE_LOG</span>
                    </div>
                </div>
                <div className="pt-8 border-t border-cyan/10 text-center">
                    <p className="text-[10px] mono text-slate-500 uppercase">
                        © 2025 BORGIA_OPERATING_SYSTEM // TODOS LOS DERECHOS RESERVADOS AL PROVEEDOR.
                    </p>
                </div>
            </div>
        </footer>
    );
};
