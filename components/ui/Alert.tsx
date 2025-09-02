
import React from 'react';

interface AlertProps {
    type: 'info' | 'warning' | 'danger';
    children: React.ReactNode;
}

const ICONS = {
    info: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    ),
    warning: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
    ),
    danger: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
    ),
};

const STYLES = {
    info: {
        gradient: 'from-blue-100 to-blue-200',
        border: 'border-blue-400',
        text: 'text-blue-800',
        iconColor: 'text-blue-500',
    },
    warning: {
        gradient: 'from-amber-100 to-amber-200',
        border: 'border-amber-400',
        text: 'text-amber-800',
        iconColor: 'text-amber-500',
    },
    danger: {
        gradient: 'from-red-100 to-red-200',
        border: 'border-red-400',
        text: 'text-red-800',
        iconColor: 'text-red-500',
    },
};

export const Alert: React.FC<AlertProps> = ({ type, children }) => {
    const styles = STYLES[type];

    return (
        <div className={`p-4 rounded-xl my-6 flex items-start gap-4 bg-gradient-to-br ${styles.gradient} border ${styles.border} ${styles.text}`}>
            <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/70 ${styles.iconColor}`}>
                {ICONS[type]}
            </div>
            <div className="flex-grow">{children}</div>
        </div>
    );
};
