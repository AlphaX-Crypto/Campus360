import React from 'react';
import { FileText, Clock, CheckCircle2, Zap } from 'lucide-react';
import './MetricCard.css';

const ICON_MAP = {
  active: FileText,
  pending: Clock,
  completed: CheckCircle2,
  resolution: Zap,
};

export function MetricCard({
  title,
  value,
  subtext,
  variant = 'active', // 'active' | 'pending' | 'completed' | 'resolution'
  icon: CustomIcon,
  subtextColor = null, // 'blue' | 'amber' | 'emerald' | 'muted'
}) {
  const IconComponent = CustomIcon || ICON_MAP[variant] || FileText;

  return (
    <div className={`c360-metric-card c360-metric-card--${variant}`}>
      <div className="c360-metric-card__header">
        <span className="c360-metric-card__title">{title}</span>
        <div className={`c360-metric-card__icon-badge c360-metric-card__icon-badge--${variant}`}>
          <IconComponent size={18} />
        </div>
      </div>

      <div className="c360-metric-card__value">{value}</div>

      <div className={`c360-metric-card__subtext ${subtextColor ? `c360-metric-card__subtext--${subtextColor}` : ''}`}>
        {subtext}
      </div>
    </div>
  );
}
