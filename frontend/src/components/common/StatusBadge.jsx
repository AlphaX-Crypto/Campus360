import React from 'react';
import './StatusBadge.css';

export function StatusBadge({ status = 'PENDING', className = '' }) {
  const normStatus = status?.toUpperCase() || 'PENDING';

  const labelMap = {
    PENDING: 'Pending',
    IN_REVIEW: 'In Review',
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
    COMPLETED: 'Completed',
  };

  const styleClass = {
    PENDING: 'c360-badge--pending',
    IN_REVIEW: 'c360-badge--review',
    APPROVED: 'c360-badge--approved',
    REJECTED: 'c360-badge--rejected',
    COMPLETED: 'c360-badge--approved',
  }[normStatus] || 'c360-badge--pending';

  return (
    <span className={`c360-badge ${styleClass} ${className}`}>
      <span className="c360-badge__dot" />
      {labelMap[normStatus] || status}
    </span>
  );
}

export function PriorityBadge({ priority = 'NORMAL', className = '' }) {
  const normPriority = priority?.toUpperCase() || 'NORMAL';

  const styleClass = {
    LOW: 'c360-priority--low',
    NORMAL: 'c360-priority--normal',
    HIGH: 'c360-priority--high',
    URGENT: 'c360-priority--urgent',
  }[normPriority] || 'c360-priority--normal';

  return (
    <span className={`c360-priority-badge ${styleClass} ${className}`}>
      {priority}
    </span>
  );
}
