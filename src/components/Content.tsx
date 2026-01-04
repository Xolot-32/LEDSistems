
import React from 'react';
import type { Section } from '../types';

interface ContentProps {
  section: Section;
}

export const Content: React.FC<ContentProps> = ({ section }) => {
  return (
    <div className="animate-fadeIn">
      {section.content}
    </div>
  );
};
