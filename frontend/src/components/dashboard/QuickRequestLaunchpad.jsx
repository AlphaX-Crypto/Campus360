import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ShieldCheck, Briefcase, Receipt, ChevronRight, ArrowRight } from 'lucide-react';
import './QuickRequestLaunchpad.css';

const ICON_MAP = {
  Calendar: { icon: Calendar, colorClass: 'c360-launchpad-item__icon--calendar' },
  ShieldCheck: { icon: ShieldCheck, colorClass: 'c360-launchpad-item__icon--shield' },
  Briefcase: { icon: Briefcase, colorClass: 'c360-launchpad-item__icon--briefcase' },
  Receipt: { icon: Receipt, colorClass: 'c360-launchpad-item__icon--receipt' },
};

export function QuickRequestLaunchpad({ items = [] }) {
  return (
    <div className="c360-launchpad-card">
      <div className="c360-launchpad-card__header">
        <h2 className="c360-launchpad-card__title">Quick Request Launchpad</h2>
        <p className="c360-launchpad-card__subtitle">Start a common request in one step.</p>
      </div>

      <div className="c360-launchpad-card__list">
        {items.map((item) => {
          const config = ICON_MAP[item.icon] || { icon: Calendar, colorClass: 'c360-launchpad-item__icon--calendar' };
          const IconComp = config.icon;

          return (
            <Link key={item.id} to={item.to} className="c360-launchpad-item">
              <div className={`c360-launchpad-item__icon ${config.colorClass}`}>
                <IconComp size={18} />
              </div>

              <div className="c360-launchpad-item__content">
                <span className="c360-launchpad-item__title">{item.title}</span>
                <span className="c360-launchpad-item__subtitle">{item.subtitle}</span>
              </div>

              <ChevronRight size={16} className="c360-launchpad-item__chevron" />
            </Link>
          );
        })}
      </div>

      <div className="c360-launchpad-card__footer">
        <Link to="/student/requests/new" className="c360-launchpad-card__browse-link">
          <span>Browse all requests</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
