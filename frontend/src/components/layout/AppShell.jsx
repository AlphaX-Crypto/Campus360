import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import './AppShell.css';

export function AppShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="c360-app-shell">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="c360-app-shell__main">
        <TopBar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <main className="c360-app-shell__content">
          <div className="c360-app-shell__content-container">
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
}
