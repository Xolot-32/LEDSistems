import React from 'react';

const TelegramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.91-.494 1.208-.822 1.23-.696.047-1.225-.46-1.9-1.088-1.026-.948-1.597-1.524-2.58-2.464-.984-.94-1.954-1.89-1.797-2.932.11-.732.654-2.215 1.15-3.088.08-.142.16-.284.25-.425a.83.83 0 0 1 .12-.186.415.415 0 0 1 .433-.13.414.414 0 0 1 .333.342c.045.22.06.413.06.542 0 .19-.01.38-.04.57-.104.58-.32 1.16-.62 1.745-.16.3-.32.6-.49.9-.17.3-.34.6-.51.9-.03.05-.05.1-.07.15-.02.05-.03.1-.03.15-.01.05 0 .1.03.15.02.04.07.08.12.1.05.02.1.03.15.03.05 0 .1 0 .15-.03.05-.02.09-.07.12-.12.03-.05.05-.1.07-.15l.07-.15s.31-.31.78-.77c2.5-2.45 2.8-2.7 2.9-2.8.1-.1.1-.2 0-.3-.1-.1-.2-.1-.3 0-.1 0-2.3 1.5-6.7 4.5-.47.33-.95.66-1.42.98-.47.33-.95.66-1.42.98l-.02.02-.02.01c-.17.11-.34.23-.5.35-.4.3-1 .6-1.5.6-.5 0-1-.2-1.5-.6s-.9-1.2-1.2-2.1c-.3-1 .2-2 .5-2.5 1.5-2.5 3.5-5.5 5-7.5.4-.5.8-1 1.2-1.5s.8-1 1.2-1.5c.4-.5.8-1 1.2-1.5s.8-1 1.2-1.5c.2-.25.4-.5.6-.75s.4-.5.6-.75c.2-.25.4-.5.6-.75.2-.25.4-.5.6-.75.05-.05.1-.1.15-.15s.1-.1.15-.15c.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3.1-.1.2-.15.3-.2s.2-.1.3-.15c.1 0 .2-.05.3-.05z"/>
    </svg>
);

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white/95 backdrop-blur-sm mt-12 rounded-t-2xl shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)]">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                        <span>📧</span>
                        <a href="mailto:ld.duran.x@gmail.com" className="text-blue-600 hover:text-violet-600 transition-colors">ld.duran.x@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                        <span>📱</span>
                        <a href="tel:+525538756511" className="text-blue-600 hover:text-violet-600 transition-colors">+52 55 3875 6511</a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                        <span className="text-blue-600"><TelegramIcon /></span>
                        <a href="https://t.me/DanielXolot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-violet-600 transition-colors">@DanielXolot</a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                        <span>📄</span>
                        <span>Versión 1.2 - 2025</span>
                    </div>
                </div>
                <p className="text-sm text-slate-500">
                    © 2025 Sistema de Control de Iluminación LED. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
