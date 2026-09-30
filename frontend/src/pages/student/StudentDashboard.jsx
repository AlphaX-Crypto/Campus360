import React from 'react';
import { RoutePlaceholder } from '../../components/common/RoutePlaceholder';
import { Card } from '../../components/common/Card';
import { StatusBadge, PriorityBadge } from '../../components/common/StatusBadge';
import { MOCK_REQUESTS } from '../../data/mockData';
import { Link } from 'react-router-dom';
import { PlusCircle, ListOrdered, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import './StudentDashboard.css';

export function StudentDashboard() {
  return (
    <RoutePlaceholder
      title="Student Workflow Dashboard"
      subtitle="Overview of active campus submissions, approval stage tracking, and quick request actions."
      path="/student/dashboard"
      role="STUDENT"
      features={[
        'Live summary metrics (Active Requests, In-Review, Approved)',
        'Quick request submission entry point',
        'Direct links to Universal Request ID tracking timelines',
        'Recent request history and institutional announcements',
      ]}
      quickActions={[
        { label: 'Submit New Request', to: '/student/requests/new', primary: true },
        { label: 'View All Requests', to: '/student/requests', primary: false },
      ]}
    >
      {/* Visual Metric Preview for Foundation Phase */}
      <div className="c360-preview-metrics">
        <Card className="c360-metric-card">
          <div className="c360-metric-card__header">
            <span className="c360-metric-card__label">Active Requests</span>
            <Clock size={18} className="text-muted" />
          </div>
          <div className="c360-metric-card__value">2</div>
          <span className="c360-metric-card__hint">1 Pending • 1 In Review</span>
        </Card>

        <Card className="c360-metric-card">
          <div className="c360-metric-card__header">
            <span className="c360-metric-card__label">Completed / Approved</span>
            <CheckCircle2 size={18} className="text-approved" />
          </div>
          <div className="c360-metric-card__value">1</div>
          <span className="c360-metric-card__hint">Digitally signed & issued</span>
        </Card>

        <Card className="c360-metric-card">
          <div className="c360-metric-card__header">
            <span className="c360-metric-card__label">Avg Turnaround Time</span>
            <AlertCircle size={18} className="text-muted" />
          </div>
          <div className="c360-metric-card__value">24h</div>
          <span className="c360-metric-card__hint">Via automated smart routing</span>
        </Card>
      </div>

      {/* Quick Mock List Preview */}
      <Card
        title="Recent Submissions (Preview)"
        subtitle="Universal request identifier preview"
        action={
          <Link to="/student/requests" className="c360-link-action">
            View full list &rarr;
          </Link>
        }
      >
        <div className="c360-table-wrapper">
          <table className="c360-preview-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Category</th>
                <th>Current Stage</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_REQUESTS.slice(0, 2).map((req) => (
                <tr key={req.requestId}>
                  <td>
                    <span className="mono-code">{req.requestId}</span>
                  </td>
                  <td>{req.category}</td>
                  <td>
                    <span className="c360-stage-tag">{req.currentStage}</span>
                  </td>
                  <td>
                    <StatusBadge status={req.status} />
                  </td>
                  <td>
                    <Link
                      to={`/student/requests/${req.requestId}`}
                      className="c360-table-link"
                    >
                      Track &rarr;
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </RoutePlaceholder>
  );
}
