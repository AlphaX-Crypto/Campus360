import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowRight, UserCheck, GraduationCap, Building2, KeyRound } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';
import './LoginPage.css';

export function LoginPage() {
  const navigate = useNavigate();
  const { loginAs, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleLogin = async (roleKey, targetPath) => {
    await loginAs(roleKey);
    navigate(targetPath);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Default to student login placeholder
    await loginAs('student');
    navigate('/student/dashboard');
  };

  return (
    <div className="c360-login-card">
      <div className="c360-login-card__brand">
        <div className="c360-login-card__logo-badge">C360</div>
        <h1 className="c360-login-card__title">Campus360</h1>
        <p className="c360-login-card__subtitle">
          Unified institutional workflow, approval & tracking platform
        </p>
      </div>

      <div className="c360-login-card__notice">
        <span className="mono-code">Phase 1: Foundation Mode</span>
        <p>Select any institutional role below for instant demo navigation:</p>
      </div>

      <div className="c360-login-card__quick-roles">
        <button
          className="c360-role-btn"
          onClick={() => handleRoleLogin('student', '/student/dashboard')}
          disabled={loading}
        >
          <div className="c360-role-btn__icon c360-role-btn__icon--student">
            <GraduationCap size={20} />
          </div>
          <div className="c360-role-btn__content">
            <span className="c360-role-btn__title">Student Portal</span>
            <span className="c360-role-btn__desc">Submit & track requests</span>
          </div>
          <ArrowRight size={16} className="c360-role-btn__arrow" />
        </button>

        <button
          className="c360-role-btn"
          onClick={() => handleRoleLogin('faculty', '/faculty/dashboard')}
          disabled={loading}
        >
          <div className="c360-role-btn__icon c360-role-btn__icon--faculty">
            <UserCheck size={20} />
          </div>
          <div className="c360-role-btn__content">
            <span className="c360-role-btn__title">Faculty Advisor</span>
            <span className="c360-role-btn__desc">Verify & endorse student requests</span>
          </div>
          <ArrowRight size={16} className="c360-role-btn__arrow" />
        </button>

        <button
          className="c360-role-btn"
          onClick={() => handleRoleLogin('hod', '/hod/dashboard')}
          disabled={loading}
        >
          <div className="c360-role-btn__icon c360-role-btn__icon--hod">
            <Building2 size={20} />
          </div>
          <div className="c360-role-btn__content">
            <span className="c360-role-btn__title">Head of Department (HOD)</span>
            <span className="c360-role-btn__desc">Departmental approvals</span>
          </div>
          <ArrowRight size={16} className="c360-role-btn__arrow" />
        </button>

        <button
          className="c360-role-btn"
          onClick={() => handleRoleLogin('admin', '/admin/dashboard')}
          disabled={loading}
        >
          <div className="c360-role-btn__icon c360-role-btn__icon--admin">
            <Shield size={20} />
          </div>
          <div className="c360-role-btn__content">
            <span className="c360-role-btn__title">Administration & Registrar</span>
            <span className="c360-role-btn__desc">Final clearance & certificates</span>
          </div>
          <ArrowRight size={16} className="c360-role-btn__arrow" />
        </button>
      </div>

      <div className="c360-login-card__divider">
        <span>or sign in with institutional credentials</span>
      </div>

      <form onSubmit={handleSubmit} className="c360-login-form">
        <div className="c360-form-group">
          <label className="c360-form-label" htmlFor="campus-email">
            Institutional Email / Roll Number
          </label>
          <input
            id="campus-email"
            type="text"
            className="c360-form-input"
            placeholder="e.g. rollno@campus.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="c360-form-group">
          <label className="c360-form-label" htmlFor="campus-password">
            Password
          </label>
          <input
            id="campus-password"
            type="password"
            className="c360-form-input"
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" variant="primary" size="lg" className="c360-login-submit-btn">
          <span>Sign In to Campus360</span>
        </Button>
      </form>

      <div className="c360-login-card__footer">
        <span>Campus360 Institutional Platform • Secured with Universal Tracking</span>
      </div>
    </div>
  );
}
