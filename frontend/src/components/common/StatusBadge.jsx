import React from 'react';
import './StatusBadge.css';

export function StatusBadge({ status = 'PENDING', label = null, className = '' }) {
  const normStatus = (status || '').toUpperCase();

  let badgeType = 'pending';
  let displayLabel = label;

  if (normStatus.includes('ACTION') || normStatus === 'PENDING_ACTION') {
    badgeType = 'action';
    displayLabel = displayLabel || 'Pending action';
  } else if (normStatus.includes('APPROV') || normStatus === 'APPROVED') {
    badgeType = 'approved';
    displayLabel = displayLabel || 'Approved';
  } else if (normStatus.includes('REVIEW') || normStatus === 'IN_REVIEW') {
    badgeType = 'review';
    displayLabel = displayLabel || 'In review';
  } else if (normStatus.includes('COMPLET') || normStatus === 'COMPLETED') {
    badgeType = 'completed';
    displayLabel = displayLabel || 'Completed';
  } else if (normStatus.includes('REJECT') || normStatus === 'REJECTED') {
    badgeType = 'rejected';
    displayLabel = displayLabel || 'Rejected';
  } else {
    badgeType = 'pending';
    displayLabel = displayLabel || 'Pending';
  }

  return (
    <span className={`c360-badge c360-badge--${badgeType} ${className}`}>
      <span className="c360-badge__dot" />
      <span>{displayLabel}</span>
    </span>
  );
}

export function PriorityBadge({ priority = 'NORMAL', className = '' }) {
  const normPriority = (priority || 'NORMAL').toUpperCase();

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
