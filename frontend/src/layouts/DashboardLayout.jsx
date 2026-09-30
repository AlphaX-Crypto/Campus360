import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/common/Header';
import { Sidebar } from '../components/common/Sidebar';
import { useAuth } from '../hooks/useAuth';
import './DashboardLayout.css';

export function DashboardLayout({ forcedRole }) {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If layout is used with forcedRole context, prioritize it for the view
  const activeUser = forcedRole ? { ...user, role: forcedRole } : user;

  return (
    <div className="c360-layout">
      <Header
        user={activeUser}
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />
      <div className="c360-layout__body">
        <Sidebar
          user={activeUser}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="c360-layout__content">
          <div className="c360-layout__content-inner">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
