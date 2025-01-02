import React from 'react';
import './ToolsStyle.css';

type BadgeProps = {
    text: string;
    variant?: 'default' | 'note' | 'danger' | 'success' | 'caution' | 'tip';
    size?: 'small' | 'medium' | 'large';
    className?: string;
  };

export default function Badge({ text, variant = 'default', size = 'medium', className }: BadgeProps) {
    const classes = ['sl-badge', variant, size, className].filter(Boolean).join(' ');
  
    return <span className={classes}>{text}</span>;
}
