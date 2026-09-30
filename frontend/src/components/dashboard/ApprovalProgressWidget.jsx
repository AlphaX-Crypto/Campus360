import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';
import { StatusBadge } from '../common/StatusBadge';
import './ApprovalProgressWidget.css';

/**
 * Reusable ApprovalProgress / WorkflowProgress Component
 * Accepts dynamic stages array: [{ label: string, status: 'completed' | 'current' | 'future', date?: string }]
 */
export function WorkflowProgress({ stages = [] }) {
  if (!stages || stages.length === 0) return null;

  return (
    <div className="c360-workflow-progress">
      <div className="c360-workflow-progress__track">
        {stages.map((stage, idx) => {
          const isCompleted = stage.status === 'completed';
          const isCurrent = stage.status === 'current';
          const isFuture = stage.status === 'future';

          const isLast = idx === stages.length - 1;
          const nextStage = stages[idx + 1];
          const lineCompleted = isCompleted && nextStage && (nextStage.status === 'completed' || nextStage.status === 'current');

          return (
            <React.Fragment key={idx}>
              <div className="c360-workflow-step">
                <div
                  className={`c360-workflow-step__circle c360-workflow-step__circle--${stage.status}`}
                  title={`${stage.label}: ${stage.status}`}
                >
                  {isCompleted ? (
                    <Check size={14} strokeWidth={3} />
                  ) : isCurrent ? (
                    <span className="c360-workflow-step__dot" />
                  ) : (
                    <span className="c360-workflow-step__num">{idx + 1}</span>
                  )}
                </div>

                <div className="c360-workflow-step__labels">
                  <span className={`c360-workflow-step__title ${isCurrent ? 'c360-workflow-step__title--current' : ''}`}>
                    {stage.label}
                  </span>
                  <span className={`c360-workflow-step__subtitle ${isCompleted ? 'text-success' : isCurrent ? 'text-info' : 'text-muted'}`}>
                    {stage.date || (isCompleted ? 'Approved' : isCurrent ? 'In review' : 'Next')}
                  </span>
                </div>
              </div>

              {!isLast && (
                <div
                  className={`c360-workflow-connector ${lineCompleted ? 'c360-workflow-connector--active' : ''}`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export function ApprovalProgressWidget({
  requestId = 'C360-2026-0001',
  title = 'Hackathon Permission',
  status = 'IN_REVIEW',
  statusLabel = 'In review',
  stages = [],
  stageNote = 'Stage 3 of 4: Awaiting Head of Department digital endorsement.',
  detailLink = '/student/requests/C360-2026-0001',
}) {
  return (
    <div className="c360-approval-widget">
      <div className="c360-approval-widget__header">
        <h2 className="c360-approval-widget__title">Approval Progress</h2>
        <Link to={detailLink} className="c360-approval-widget__view-link">
          <span>View request</span>
        </Link>
      </div>

      <div className="c360-approval-widget__meta">
        <div className="c360-approval-widget__id-row">
          <span className="mono-code">{requestId}</span>
          <StatusBadge status={status} label={statusLabel} />
        </div>
        <h3 className="c360-approval-widget__req-title">{title}</h3>
      </div>

      {/* Progress Track */}
      <WorkflowProgress stages={stages} />

      {/* Explanation Box */}
      {stageNote && (
        <div className="c360-approval-widget__note">
          <p>{stageNote}</p>
        </div>
      )}
    </div>
  );
}
