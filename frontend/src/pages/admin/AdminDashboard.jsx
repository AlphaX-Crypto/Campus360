import React from 'react';
import { RoutePlaceholder } from '../../components/common/RoutePlaceholder';
import { Card } from '../../components/common/Card';
import { StatusBadge, PriorityBadge } from '../../components/common/StatusBadge';
import { MOCK_REQUESTS } from '../../data/mockData';
import { Link } from 'react-router-dom';

export function AdminDashboard() {
  return (
    <RoutePlaceholder
      title="Campus Administration & Registrar Dashboard"
      subtitle="Final authority portal for institutional clearance, digital document signing, gatepass generation, and campus-wide audit trails."
      path="/admin/dashboard"
      role="ADMIN"
      features={[
        'Campus-wide workflow metrics and clearance queues',
        'Digital signature & certificate generation engine',
        'Audit logs and Universal Request ID search / verification',
        'Administrative policy settings & department routing management',
      ]}
      quickActions={[
        { label: 'Switch to Student View', to: '/student/dashboard', primary: false },
        { label: 'Switch to Faculty View', to: '/faculty/dashboard', primary: false },
      ]}
    >
      <Card
        title="Institutional Clearance & Completed Requests"
        subtitle="Final verification and issued documents across campus"
      >
        <div style={{ overflowX: 'auto' }}>
          <table className="c360-preview-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--font-size-xs)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-subtle)', textAlign: 'left' }}>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Request ID</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Student / Dept</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Request Type</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Current Stage</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Status</th>
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
                    <div style={{ fontWeight: 'var(--font-weight-semibold)' }}>{req.studentName}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{req.department}</div>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 'var(--font-weight-medium)' }}>{req.title}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{req.category}</div>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span className="c360-stage-tag">{req.currentStage}</span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <StatusBadge status={req.status} />
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <Link
                      to={`/student/requests/${req.requestId}`}
                      style={{ color: 'var(--color-accent)', fontWeight: 'var(--font-weight-semibold)' }}
                    >
                      Audit Trail &rarr;
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
