import React from 'react';

interface ImagePlaceholderProps {
    title: string;
    caption: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ title, caption }) => {
    return (
        <figure className="text-center">
            <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl aspect-video flex flex-col items-center justify-center p-4 text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <h3 className="font-semibold text-slate-600">{title}</h3>
            </div>
            <figcaption className="text-sm text-slate-500 mt-2 italic px-4">{caption}</figcaption>
        </figure>
    );
};