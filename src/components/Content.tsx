import React from 'react';
import type { Section } from '../types';

interface ContentProps {
  section: Section;
}

export const Content: React.FC<ContentProps> = ({ section }) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg min-h-[calc(100vh-10rem)]">
      {section.content}
    </div>
  );
};