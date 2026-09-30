import React from 'react';
import { RoutePlaceholder } from '../../components/common/RoutePlaceholder';

export function DocumentsPage() {
  return (
    <RoutePlaceholder
      title="Campus Documents & Templates"
      subtitle="Institutional forms, letter templates, guideline manuals, and policy handbooks."
      path="/student/documents"
      role="STUDENT"
      features={[
        'Standard event permission request template PDF/Word',
        'Internship undertaking and department declaration forms',
        'Medical leave certificate format and attendance policy guide',
        'Fee reimbursement claim guidelines',
      ]}
      quickActions={[
        { label: 'Submit New Request', to: '/student/requests/new', primary: true },
        { label: 'Back to Dashboard', to: '/student/dashboard', primary: false },
      ]}
    />
  );
}

export function NotificationsPage() {
  return (
    <RoutePlaceholder
      title="Student Notifications & Updates"
      subtitle="Real-time alerts regarding request state changes, document requirements, and endorsement actions."
      path="/student/notifications"
      role="STUDENT"
      features={[
        'Action required alerts (Missing documents, clarifications needed)',
        'Stage progress updates (Faculty verified, HOD approved)',
        'Final digital sign-off and issuance notifications',
        'Campus-wide workflow deadline notices',
      ]}
      quickActions={[
        { label: 'View Active Requests', to: '/student/requests', primary: true },
        { label: 'Back to Dashboard', to: '/student/dashboard', primary: false },
      ]}
    />
  );
}

export function HelpPage() {
  return (
    <RoutePlaceholder
      title="Help & Support Desk"
      subtitle="Guidance on campus workflow routing, escalation procedures, and institutional contact directories."
      path="/student/help"
      role="STUDENT"
      features={[
        'Step-by-step submission guides for all 6 request categories',
        'Understanding Universal Request ID lifecycle (C360-YYYY-XXXX)',
        'Department advisor and HOD office inquiry contacts',
        'IT support and grievance escalation matrix',
      ]}
      quickActions={[
        { label: 'Back to Dashboard', to: '/student/dashboard', primary: false },
      ]}
    />
  );
}
