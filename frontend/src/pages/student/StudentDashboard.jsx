import React, { useState, useEffect } from 'react';
import { DashboardHero } from '../../components/dashboard/DashboardHero';
import { MetricCard } from '../../components/dashboard/MetricCard';
import { AttentionCard } from '../../components/dashboard/AttentionCard';
import { RecentRequestsTable } from '../../components/dashboard/RecentRequestsTable';
import { ApprovalProgressWidget } from '../../components/dashboard/ApprovalProgressWidget';
import { QuickRequestLaunchpad } from '../../components/dashboard/QuickRequestLaunchpad';
import {
  MOCK_METRICS,
  MOCK_ATTENTION_ITEM,
  MOCK_REQUESTS,
  MOCK_LAUNCHPAD_ITEMS,
} from '../../data/mockData';
import './StudentDashboard.css';

export function StudentDashboard() {
  const [metrics, setMetrics] = useState(MOCK_METRICS);
  const [attentionItem, setAttentionItem] = useState(MOCK_ATTENTION_ITEM);
  const [requests, setRequests] = useState(MOCK_REQUESTS);
  const [launchpadItems, setLaunchpadItems] = useState(MOCK_LAUNCHPAD_ITEMS);

  // Active tracked request for Approval Progress widget (e.g. C360-2026-0001)
  const activeTrackedRequest = requests[0] || {};

  return (
    <div className="c360-student-dashboard">
      {/* 1. Welcome Hero */}
      <DashboardHero
        campusName="Garden City University"
      />

      {/* 2. Top Metric Cards (Row of 4) */}
      <div className="c360-dashboard-metrics">
        <MetricCard
          title={metrics.activeRequests.label}
          value={metrics.activeRequests.value}
          subtext={metrics.activeRequests.subtext}
          variant="active"
        />
        <MetricCard
          title={metrics.pendingApproval.label}
          value={metrics.pendingApproval.value}
          subtext={metrics.pendingApproval.subtext}
          variant="pending"
        />
        <MetricCard
          title={metrics.completed.label}
          value={metrics.completed.value}
          subtext={metrics.completed.subtext}
          variant="completed"
        />
        <MetricCard
          title={metrics.avgResolution.label}
          value={metrics.avgResolution.value}
          subtext={metrics.avgResolution.subtext}
          variant="resolution"
        />
      </div>

      {/* 3. Needs Your Attention Banner */}
      {attentionItem && <AttentionCard item={attentionItem} />}

      {/* 4. Main Operational Split Grid */}
      <div className="c360-dashboard-grid">
        {/* Left Column: Recent Requests Table */}
        <div className="c360-dashboard-grid__left">
          <RecentRequestsTable requests={requests} />
        </div>

        {/* Right Column: Approval Progress & Quick Launchpad */}
        <div className="c360-dashboard-grid__right">
          <ApprovalProgressWidget
            requestId={activeTrackedRequest.requestId}
            title={activeTrackedRequest.title}
            status={activeTrackedRequest.status}
            statusLabel={activeTrackedRequest.statusLabel}
            stages={activeTrackedRequest.timeline}
            stageNote={activeTrackedRequest.stageNote}
            detailLink={`/student/requests/${activeTrackedRequest.requestId}`}
          />

          <QuickRequestLaunchpad items={launchpadItems} />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
