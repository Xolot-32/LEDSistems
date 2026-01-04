
import React from 'react';
import type { Section } from '../types';

interface ContentProps {
  section: Section;
}

export const Content: React.FC<ContentProps> = ({ section }) => {
  return (
    <div className="min-h-[calc(100vh-15rem)]">
      {section.content}
    </div>
  );
};
