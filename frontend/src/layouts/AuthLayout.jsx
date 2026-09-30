import React from 'react';
import { Outlet } from 'react-router-dom';
import './AuthLayout.css';

export function AuthLayout() {
  return (
    <div className="c360-auth-layout">
      <div className="c360-auth-layout__inner">
        <Outlet />
      </div>
    </div>
  );
}
