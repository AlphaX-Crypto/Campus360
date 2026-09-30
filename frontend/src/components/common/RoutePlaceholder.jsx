import React from 'react';
import { Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import './RoutePlaceholder.css';

export function RoutePlaceholder({
  title,
  subtitle,
  path,
  role = 'STUDENT',
  phase = 'Phase 1: Foundation Ready',
  features = [],
  quickActions = [],
  children,
}) {
  return (
    <div className="c360-placeholder-page">
      <div className="c360-placeholder-page__header">
        <div className="c360-placeholder-page__title-area">
          <div className="c360-placeholder-page__tag-row">
            <span className="mono-code">{path}</span>
            <span className="c360-placeholder-page__phase-tag">{phase}</span>
            <span className="c360-placeholder-page__role-tag">{role}</span>
          </div>
          <h2 className="c360-placeholder-page__title">{title}</h2>
          <p className="c360-placeholder-page__subtitle">{subtitle}</p>
        </div>

        {quickActions.length > 0 && (
          <div className="c360-placeholder-page__actions">
            {quickActions.map((action, idx) => (
              <Link
                key={idx}
                to={action.to}
                className={`c360-placeholder-page__action-btn ${
                  action.primary ? 'c360-placeholder-page__action-btn--primary' : ''
                }`}
              >
                <span>{action.label}</span>
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        )}
      </div>

      {children}

      <div className="c360-placeholder-page__grid">
        <Card
          title="Planned MVP Capabilities"
          subtitle="Scoped for upcoming development phase"
          className="c360-placeholder-page__card"
        >
          <ul className="c360-placeholder-page__features-list">
            {features.map((feat, idx) => (
              <li key={idx} className="c360-placeholder-page__feature-item">
                <CheckCircle2 size={16} className="c360-placeholder-page__feat-icon" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card
          title="Architecture Status"
          subtitle="Modular boundaries & isolated services"
          className="c360-placeholder-page__card"
        >
          <div className="c360-placeholder-page__meta-block">
            <div className="c360-placeholder-page__meta-row">
              <span className="c360-placeholder-page__meta-label">Route Status:</span>
              <span className="c360-placeholder-page__meta-val text-approved">Active & Verified</span>
            </div>
            <div className="c360-placeholder-page__meta-row">
              <span className="c360-placeholder-page__meta-label">Data Layer:</span>
              <span className="c360-placeholder-page__meta-val">Mock & API Service Isolated</span>
            </div>
            <div className="c360-placeholder-page__meta-row">
              <span className="c360-placeholder-page__meta-label">Universal ID Ready:</span>
              <span className="c360-placeholder-page__meta-val">Yes (e.g. C360-2026-XXXX)</span>
            </div>
            <div className="c360-placeholder-page__meta-row">
              <span className="c360-placeholder-page__meta-label">Assigned Frontend:</span>
              <span className="c360-placeholder-page__meta-val">Shiva Kumar (/frontend)</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
