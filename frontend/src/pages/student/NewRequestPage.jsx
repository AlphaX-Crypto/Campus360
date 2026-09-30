import React from 'react';
import { RoutePlaceholder } from '../../components/common/RoutePlaceholder';
import { Card } from '../../components/common/Card';
import { CATEGORIES } from '../../utils/constants';

export function NewRequestPage() {
  return (
    <RoutePlaceholder
      title="Submit New Campus Request"
      subtitle="Unified entry point for student permissions, certificates, reimbursements, and NOCs."
      path="/student/requests/new"
      role="STUDENT"
      features={[
        'Category selection (Hackathons, Internships, Leave, Certificates, Reimbursements)',
        'Document & proof upload with integrity checks',
        'Smart automatic routing determination (Advisor -> HOD -> Admin)',
        'Automatic generation of Universal Request ID (e.g., C360-2026-XXXX)',
      ]}
      quickActions={[
        { label: 'View Existing Requests', to: '/student/requests', primary: false },
        { label: 'Back to Dashboard', to: '/student/dashboard', primary: false },
      ]}
    >
      <Card
        title="Form Schema Architecture Preview"
        subtitle="Categories pre-configured for dynamic form fields"
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {CATEGORIES.map((cat, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-default)',
                padding: '6px 12px',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--text-secondary)',
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </Card>
    </RoutePlaceholder>
  );
}
