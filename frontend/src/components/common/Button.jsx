import React from 'react';
import './Button.css';

export function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`c360-btn c360-btn--${variant} c360-btn--${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} className="c360-btn__icon" />}
      <span>{children}</span>
    </button>
  );
}
