import React from 'react';
import './Card.css';

export function Card({ children, className = '', title, subtitle, action, ...props }) {
  return (
    <div className={`c360-card ${className}`} {...props}>
      {(title || subtitle || action) && (
        <div className="c360-card__header">
          <div>
            {title && <h3 className="c360-card__title">{title}</h3>}
            {subtitle && <p className="c360-card__subtitle">{subtitle}</p>}
          </div>
          {action && <div className="c360-card__action">{action}</div>}
        </div>
      )}
      <div className="c360-card__body">{children}</div>
    </div>
  );
}
