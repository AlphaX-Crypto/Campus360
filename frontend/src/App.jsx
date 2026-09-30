import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { LoginPage } from './pages/auth/LoginPage';
import { StudentDashboard } from './pages/student/StudentDashboard';
import { NewRequestPage } from './pages/student/NewRequestPage';
import { RequestListPage } from './pages/student/RequestListPage';
import { RequestDetailPage } from './pages/student/RequestDetailPage';
import { FacultyDashboard } from './pages/faculty/FacultyDashboard';
import { HodDashboard } from './pages/hod/HodDashboard';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { NotFoundPage } from './pages/NotFoundPage';
import { ROLES } from './utils/constants';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Student Portal Routes */}
        <Route path="/student" element={<DashboardLayout forcedRole={ROLES.STUDENT} />}>
          <Route index element={<Navigate to="/student/dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="requests" element={<RequestListPage />} />
          <Route path="requests/new" element={<NewRequestPage />} />
          <Route path="requests/:id" element={<RequestDetailPage />} />
        </Route>

        {/* Faculty Advisor Portal Routes */}
        <Route path="/faculty" element={<DashboardLayout forcedRole={ROLES.FACULTY} />}>
          <Route index element={<Navigate to="/faculty/dashboard" replace />} />
          <Route path="dashboard" element={<FacultyDashboard />} />
        </Route>

        {/* Head of Department (HOD) Portal Routes */}
        <Route path="/hod" element={<DashboardLayout forcedRole={ROLES.HOD} />}>
          <Route index element={<Navigate to="/hod/dashboard" replace />} />
          <Route path="dashboard" element={<HodDashboard />} />
        </Route>

        {/* Campus Administration & Registrar Portal Routes */}
        <Route path="/admin" element={<DashboardLayout forcedRole={ROLES.ADMIN} />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Catch-all 404 Route */}
        <Route path="*" element={<DashboardLayout />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
