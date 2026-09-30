import React from 'react';
import { RoutePlaceholder } from '../../components/common/RoutePlaceholder';
import { Card } from '../../components/common/Card';
import { FileCheck, Download, Award, Shield, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RecordsPage() {
  const mockRecords = [
    {
      id: 'REC-2026-001',
      title: 'Bonafide Certificate',
      type: 'Official Certificate',
      issuedDate: '21 Feb 2026',
      issuedBy: 'Office of Registrar',
      status: 'Digitally Verified',
      icon: Award,
    },
    {
      id: 'REC-2025-089',
      title: 'Semester Grade Sheet (Autumn 2025)',
      type: 'Academic Record',
      issuedDate: '15 Jan 2026',
      issuedBy: 'Controller of Examinations',
      status: 'Archived',
      icon: FileSpreadsheet,
    },
    {
      id: 'REC-2025-042',
      title: 'Summer Research Internship NOC',
      type: 'Department NOC',
      issuedDate: '10 Jun 2025',
      issuedBy: 'HOD CSE & Dean Academics',
      status: 'Completed',
      icon: Shield,
    },
  ];

  return (
    <RoutePlaceholder
      title="My Campus Records & Archive"
      subtitle="Unified vault for all verified certificates, transcripts, approved NOCs, and permanent institutional credentials."
      path="/student/records"
      role="STUDENT"
      features={[
        'Tamper-proof digital certificate archive with QR verification',
        'Official transcript and semester grade sheet downloads',
        'Approved internship NOCs and leave records history',
        'Direct sharing with external recruiters and verification bodies',
      ]}
      quickActions={[
        { label: 'Submit New Request', to: '/student/requests/new', primary: true },
        { label: 'Back to Dashboard', to: '/student/dashboard', primary: false },
      ]}
    >
      <Card
        title="Archived & Verified Records (Preview)"
        subtitle="3 verified records on file"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {mockRecords.map((rec) => {
            const IconComp = rec.icon;
            return (
              <div
                key={rec.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  backgroundColor: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-info-bg)',
                      color: 'var(--color-info)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', fontSize: 'var(--font-size-sm)' }}>
                      {rec.title}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      <span className="mono-code">{rec.id}</span> • {rec.type} • Issued: {rec.issuedDate}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-secondary)',
                    cursor: 'pointer',
                  }}
                  onClick={() => alert(`Downloading record ${rec.id}`)}
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </button>
              </div>
            );
          })}
        </div>
      </Card>
    </RoutePlaceholder>
  );
}
