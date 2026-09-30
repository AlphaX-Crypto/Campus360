import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RoutePlaceholder } from '../../components/common/RoutePlaceholder';
import { Card } from '../../components/common/Card';
import { StatusBadge, PriorityBadge } from '../../components/common/StatusBadge';
import { requestService } from '../../services/requestService';
import { formatDate } from '../../utils/formatters';
import { CheckCircle2, Clock, Circle, ArrowLeft } from 'lucide-react';

export function RequestDetailPage() {
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDetail() {
      setLoading(true);
      const data = await requestService.getRequestById(id);
      setRequest(data);
      setLoading(false);
    }
    loadDetail();
  }, [id]);

  const activeId = id || 'C360-2026-0001';

  return (
    <RoutePlaceholder
      title={`Request Tracking: ${activeId}`}
      subtitle="Detailed audit timeline from student submission through faculty, HOD, and administration clearance."
      path={`/student/requests/${activeId}`}
      role="STUDENT"
      features={[
        'Full multi-stage tracking timeline (Submitted -> Faculty -> HOD -> Admin)',
        'Stage verification remarks and approval audit logs',
        'Official signed document download on resolution',
        'Direct inquiry / stage clarification thread',
      ]}
      quickActions={[
        { label: 'Back to Request List', to: '/student/requests', primary: false },
      ]}
    >
      {request && (
        <Card
          title="Universal Request Overview"
          subtitle={`Tracking ID: ${request.requestId}`}
          action={<StatusBadge status={request.status} />}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Student Name</div>
              <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>{request.studentName} ({request.studentId})</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Department</div>
              <div style={{ fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>{request.department}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Category</div>
              <div style={{ fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>{request.category}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Priority</div>
              <div style={{ marginTop: '2px' }}><PriorityBadge priority={request.priority} /></div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: '16px' }}>
            <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '8px' }}>
              {request.title}
            </h4>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
              {request.description}
            </p>
          </div>

          {/* Timeline Track Preview */}
          {request.timeline && (
            <div style={{ marginTop: '24px', borderTop: '1px solid var(--border-default)', paddingTop: '16px' }}>
              <h4 style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Workflow Resolution Progress
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {request.timeline.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ marginTop: '2px' }}>
                      {step.status === 'COMPLETED' ? (
                        <CheckCircle2 size={18} style={{ color: 'var(--status-approved-text)' }} />
                      ) : step.status === 'CURRENT' ? (
                        <Clock size={18} style={{ color: 'var(--status-pending-text)' }} />
                      ) : (
                        <Circle size={18} style={{ color: 'var(--border-strong)' }} />
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>
                        {step.label}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        {step.actor} {step.timestamp ? `• ${formatDate(step.timestamp)}` : '• Pending review'}
                      </div>
                      {step.remarks && (
                        <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px', fontStyle: 'italic', backgroundColor: 'var(--bg-subtle)', padding: '4px 8px', borderRadius: 'var(--radius-xs)' }}>
                          "{step.remarks}"
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}
    </RoutePlaceholder>
  );
}
