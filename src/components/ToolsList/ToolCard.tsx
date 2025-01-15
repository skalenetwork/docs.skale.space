import React from 'react';
import {Badge} from './index';
import './ToolsStyle.css'; 
interface BadgeType {
  text: string;
  variant: 'note' | 'success' | 'tip' | 'caution' | 'danger';
}

interface ToolCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description?: string;
  category?: BadgeType[];
  image?: string;
  badges?: BadgeType[];
}

export default function ToolCard({
  title,
  description,
  category,
  image,
  badges,
  ...attributes
}: ToolCardProps) {
  return (
    <a {...attributes} className="icon-link-card">

      <div className="card-header">
        <div className="left-content">
          {image && <img src={image} alt={title} className="link-card-image" />}
          <span className="card-content">
            <span className="title" dangerouslySetInnerHTML={{ __html: title }} />
          </span>
        </div>
      </div>

      {description && (
        <span className="description" dangerouslySetInnerHTML={{ __html: description }} />
      )}

      {category && category.length > 0 && (
        <div className="badge-container">
          <span className="badge-label">Category:</span>
          <div className="badge-list">
            {category.map(({ text, variant }, index) => (
              <Badge key={index} text={text} variant={variant} className="badge" />
            ))}
          </div>
        </div>
      )}

      {badges && badges.length > 0 && (
        <div className="badge-container">
          <span className="badge-label">Available For:</span>
          <div className="badge-list">
            {badges.map(({ text, variant }, index) => (
              <Badge key={index} text={text} variant={variant} className="badge" />
            ))}
          </div>
        </div>
      )}
    </a>
  );
}
