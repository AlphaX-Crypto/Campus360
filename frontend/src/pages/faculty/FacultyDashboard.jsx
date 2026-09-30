import React from 'react';
import { RoutePlaceholder } from '../../components/common/RoutePlaceholder';
import { Card } from '../../components/common/Card';
import { StatusBadge, PriorityBadge } from '../../components/common/StatusBadge';
import { MOCK_REQUESTS } from '../../data/mockData';
import { Link } from 'react-router-dom';

export function FacultyDashboard() {
  const pendingForFaculty = MOCK_REQUESTS.filter((r) => r.currentStage === 'FACULTY');

  return (
    <RoutePlaceholder
      title="Faculty Advisor Dashboard"
      subtitle="Verify student requests, inspect academic standings & attendance, and forward endorsed applications to HOD."
      path="/faculty/dashboard"
      role="FACULTY"
      features={[
        'Department student queue with instant verification flags',
        'Academic standing & attendance context card',
        'One-click Endorsement / Return for clarification / Rejection',
        'Direct remarks and recommendation forwarding',
      ]}
      quickActions={[
        { label: 'Switch to Student View', to: '/student/dashboard', primary: false },
        { label: 'Switch to HOD View', to: '/hod/dashboard', primary: false },
      ]}
    >
      <Card
        title="Pending Faculty Reviews"
        subtitle="Incoming student applications requiring faculty endorsement"
      >
        <div style={{ overflowX: 'auto' }}>
          <table className="c360-preview-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--font-size-xs)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-subtle)', textAlign: 'left' }}>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Request ID</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Student</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Request Details</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Priority</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Status</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingForFaculty.map((req) => (
                <tr key={req.requestId}>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span className="mono-code">{req.requestId}</span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 'var(--font-weight-semibold)' }}>{req.studentName}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{req.studentId} • {req.department}</div>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>{req.title}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{req.category}</div>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <PriorityBadge priority={req.priority} />
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <StatusBadge status={req.status} />
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <Link
                      to={`/student/requests/${req.requestId}`}
                      style={{ color: 'var(--color-accent)', fontWeight: 'var(--font-weight-semibold)' }}
                    >
                      Review &rarr;
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
