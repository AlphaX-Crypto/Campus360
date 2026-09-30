import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Plus,
  FileText,
  FileSpreadsheet,
  Folder,
  Bell,
  HelpCircle,
  ChevronsUpDown,
  Building2,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import './Sidebar.css';

export function Sidebar({ isOpen, onClose }) {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const studentName = user?.name || 'Shiva Kumar';
  const studentYear = user?.department ? `${user.department} ${user.year || '3rd Year'}` : 'CSE 3rd Year';
  const initials = user?.initials || 'SK';

  return (
    <>
      {isOpen && <div className="c360-sidebar-overlay" onClick={onClose} />}
      <aside className={`c360-sidebar ${isOpen ? 'c360-sidebar--open' : ''}`}>
        {/* Brand Header */}
        <div className="c360-sidebar__brand" onClick={() => navigate('/student/dashboard')}>
          <div className="c360-sidebar__logo-icon">
            <Building2 size={20} />
          </div>
          <div className="c360-sidebar__brand-text">
            <span className="c360-sidebar__brand-title">Campus360</span>
            <span className="c360-sidebar__brand-subtitle">Requests & records</span>
          </div>
        </div>

        {/* Scrollable Nav Area */}
        <div className="c360-sidebar__scroll">
          {/* WORKSPACE SECTION */}
          <div className="c360-sidebar__section">
            <div className="c360-sidebar__section-heading">WORKSPACE</div>
            <nav className="c360-sidebar__menu">
              <NavLink
                to="/student/dashboard"
                end
                onClick={onClose}
                className={({ isActive }) =>
                  `c360-sidebar__item ${isActive ? 'c360-sidebar__item--active' : ''}`
                }
              >
                <LayoutDashboard size={18} className="c360-sidebar__icon" />
                <span className="c360-sidebar__label">Dashboard</span>
              </NavLink>

              <NavLink
                to="/student/requests/new"
                onClick={onClose}
                className={({ isActive }) =>
                  `c360-sidebar__item ${isActive ? 'c360-sidebar__item--active' : ''}`
                }
              >
                <Plus size={18} className="c360-sidebar__icon" />
                <span className="c360-sidebar__label">New Request</span>
              </NavLink>

              <NavLink
                to="/student/requests"
                onClick={onClose}
                className={({ isActive }) =>
                  `c360-sidebar__item ${isActive ? 'c360-sidebar__item--active' : ''}`
                }
              >
                <FileText size={18} className="c360-sidebar__icon" />
                <span className="c360-sidebar__label">My Requests</span>
                <span className="c360-sidebar__badge-count">3</span>
              </NavLink>

              <NavLink
                to="/student/records"
                onClick={onClose}
                className={({ isActive }) =>
                  `c360-sidebar__item ${isActive ? 'c360-sidebar__item--active' : ''}`
                }
              >
                <FileSpreadsheet size={18} className="c360-sidebar__icon" />
                <span className="c360-sidebar__label">My Records</span>
              </NavLink>
            </nav>
          </div>

          {/* RESOURCES SECTION */}
          <div className="c360-sidebar__section">
            <div className="c360-sidebar__section-heading">RESOURCES</div>
            <nav className="c360-sidebar__menu">
              <NavLink
                to="/student/documents"
                onClick={onClose}
                className={({ isActive }) =>
                  `c360-sidebar__item ${isActive ? 'c360-sidebar__item--active' : ''}`
                }
              >
                <Folder size={18} className="c360-sidebar__icon" />
                <span className="c360-sidebar__label">Documents</span>
              </NavLink>

              <NavLink
                to="/student/notifications"
                onClick={onClose}
                className={({ isActive }) =>
                  `c360-sidebar__item ${isActive ? 'c360-sidebar__item--active' : ''}`
                }
              >
                <Bell size={18} className="c360-sidebar__icon" />
                <span className="c360-sidebar__label">Notifications</span>
                <span className="c360-sidebar__badge-count c360-sidebar__badge-count--blue">1</span>
              </NavLink>
            </nav>
          </div>
        </div>

        {/* BOTTOM AREA */}
        <div className="c360-sidebar__bottom">
          <NavLink
            to="/student/help"
            onClick={onClose}
            className={({ isActive }) =>
              `c360-sidebar__item c360-sidebar__item--help ${isActive ? 'c360-sidebar__item--active' : ''}`
            }
          >
            <HelpCircle size={18} className="c360-sidebar__icon" />
            <span className="c360-sidebar__label">Help & support</span>
          </NavLink>

          {/* Student Profile Card */}
          <div className="c360-sidebar__profile-card" onClick={() => navigate('/login')}>
            <div className="c360-sidebar__profile-avatar">
              <span>{initials}</span>
              <span className="c360-sidebar__online-dot" />
            </div>
            <div className="c360-sidebar__profile-info">
              <span className="c360-sidebar__profile-name">{studentName}</span>
              <span className="c360-sidebar__profile-meta">{studentYear}</span>
            </div>
            <ChevronsUpDown size={16} className="c360-sidebar__profile-chevron" />
          </div>
        </div>
      </aside>
    </>
  );
}
