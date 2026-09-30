import React from 'react';
import { RoutePlaceholder } from '../../components/common/RoutePlaceholder';
import { Card } from '../../components/common/Card';
import { StatusBadge, PriorityBadge } from '../../components/common/StatusBadge';
import { MOCK_REQUESTS } from '../../data/mockData';
import { formatDate } from '../../utils/formatters';
import { Link } from 'react-router-dom';

export function RequestListPage() {
  return (
    <RoutePlaceholder
      title="My Campus Requests & History"
      subtitle="Comprehensive list and filterable status table for all student submissions."
      path="/student/requests"
      role="STUDENT"
      features={[
        'Full status filter tabs (All, Pending, In Review, Approved, Rejected)',
        'Category and date-range searching',
        'Direct tracking link for every Universal Request ID',
        'Downloadable approved letters / certificates',
      ]}
      quickActions={[
        { label: 'Submit New Request', to: '/student/requests/new', primary: true },
      ]}
    >
      <Card
        title="Student Request Table"
        subtitle="Connected to mock data store (3 requests initialized)"
      >
        <div style={{ overflowX: 'auto' }}>
          <table className="c360-preview-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--font-size-xs)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-subtle)', textAlign: 'left' }}>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Request ID</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Title & Category</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Priority</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Current Stage</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Status</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Created</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_REQUESTS.map((req) => (
                <tr key={req.requestId}>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span className="mono-code">{req.requestId}</span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>{req.title}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{req.category}</div>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <PriorityBadge priority={req.priority} />
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span className="c360-stage-tag">{req.currentStage}</span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <StatusBadge status={req.status} />
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                    {formatDate(req.createdAt)}
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <Link
                      to={`/student/requests/${req.requestId}`}
                      style={{ color: 'var(--color-accent)', fontWeight: 'var(--font-weight-semibold)' }}
                    >
                      View Timeline &rarr;
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
