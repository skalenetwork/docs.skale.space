import React from 'react';
import type { ReactNode } from 'react';
import './ToolsStyle.css'; 

interface CardGridProps {
  stagger?: boolean;
  children: ReactNode;
}

export default function CardGrid({ stagger = false, children }: CardGridProps) {
  return (
    <div className={`card-grid ${stagger ? 'stagger' : ''}`}>
      {children}
    </div>
  );
}
