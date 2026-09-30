import React from 'react';
import { RoutePlaceholder } from '../../components/common/RoutePlaceholder';
import { Card } from '../../components/common/Card';
import { StatusBadge, PriorityBadge } from '../../components/common/StatusBadge';
import { MOCK_REQUESTS } from '../../data/mockData';
import { Link } from 'react-router-dom';

export function HodDashboard() {
  const pendingForHod = MOCK_REQUESTS.filter((r) => r.currentStage === 'HOD');

  return (
    <RoutePlaceholder
      title="Head of Department (HOD) Dashboard"
      subtitle="Executive departmental approval portal for student leaves, external hackathons, research internships, and budget clearances."
      path="/hod/dashboard"
      role="HOD"
      features={[
        'Department-wide request analytics & faculty verification trail',
        'Batch approvals for hackathon delegations & academic events',
        'Direct routing to Registrar & Administration for NOC/certificate issuance',
        'Department policy override and escalation controls',
      ]}
      quickActions={[
        { label: 'Switch to Faculty View', to: '/faculty/dashboard', primary: false },
        { label: 'Switch to Admin View', to: '/admin/dashboard', primary: false },
      ]}
    >
      <Card
        title="Department Review Queue"
        subtitle="Endorsed by faculty advisors, awaiting HOD clearance"
      >
        <div style={{ overflowX: 'auto' }}>
          <table className="c360-preview-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--font-size-xs)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-subtle)', textAlign: 'left' }}>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Request ID</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Student & Dept</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Subject</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Faculty Remarks</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Status</th>
                <th style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingForHod.map((req) => (
                <tr key={req.requestId}>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span className="mono-code">{req.requestId}</span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 'var(--font-weight-semibold)' }}>{req.studentName}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{req.studentId}</div>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>{req.title}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{req.category}</div>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)', maxWidth: '240px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                      {req.timeline?.find((t) => t.stage === 'FACULTY')?.remarks || 'Recommended for approval'}
                    </div>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <StatusBadge status={req.status} />
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <Link
                      to={`/student/requests/${req.requestId}`}
                      style={{ color: 'var(--color-accent)', fontWeight: 'var(--font-weight-semibold)' }}
                    >
                      Authorize &rarr;
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
