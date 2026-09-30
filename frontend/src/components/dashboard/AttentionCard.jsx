import React from 'react';
import { AlertTriangle, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AttentionCard.css';

export function AttentionCard({ item }) {
  if (!item) return null;

  return (
    <div className="c360-attention-card">
      <div className="c360-attention-card__icon-wrap">
        <AlertTriangle size={20} className="c360-attention-card__icon" />
      </div>

      <div className="c360-attention-card__body">
        <div className="c360-attention-card__tag-row">
          <span className="c360-attention-card__dot" />
          <span className="c360-attention-card__tag">{item.tag || 'Action required'}</span>
          <span className="c360-attention-card__sep">•</span>
          <span className="c360-attention-card__code">{item.requestId}</span>
          <span className="c360-attention-card__sep">•</span>
          <span className="c360-attention-card__due">{item.dueText || 'Due soon'}</span>
        </div>

        <h3 className="c360-attention-card__title">{item.title}</h3>

        <p className="c360-attention-card__desc">{item.description}</p>
      </div>

      <div className="c360-attention-card__actions">
        <Link
          to={item.detailLink || `/student/requests/${item.requestId}`}
          className="c360-attention-card__btn-secondary"
        >
          View Details
        </Link>
        <Link
          to={item.detailLink || `/student/requests/${item.requestId}`}
          className="c360-attention-card__btn-primary"
        >
          <Upload size={16} />
          <span>{item.actionLabel || 'Upload Document'}</span>
        </Link>
      </div>
    </div>
  );
}
