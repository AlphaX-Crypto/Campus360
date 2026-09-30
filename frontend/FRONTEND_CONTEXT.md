# Campus360 — Frontend Context & Continuity Guide

## 1. Project Name
**Campus360 — From Fragmented to Connected**  
A unified institutional campus request, approval, and tracking platform giving every campus request ONE secure, connected, and trackable path from submission to resolution.

---

## 2. Frontend Owner
- **Lead Developer**: Shiva Kumar
- **Module Scope**: `/frontend` ONLY

---

## 3. Current Git Branch
- **Branch**: `shiva/frontend`
- **Rule**: All frontend implementation remains strictly inside `/frontend`. Do not switch branches, merge into `main`, or alter non-frontend directories (`/backend`, `/database`, `/intelligence-engine`, `/analytics`).

---

## 4. Technology Stack
- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 8 (`vite`, `@vitejs/plugin-react`)
- **Language**: JavaScript (ES Modules)
- **Routing**: React Router DOM v7 (`react-router-dom`)
- **Theme & Styling**: Vanilla CSS Design Tokens (`src/styles/variables.css`, `src/styles/globals.css`) with ThemeContext and localStorage persistence (`c360_theme`)
- **Icons**: Lucide React (`lucide-react`)
- **State & Services**: Custom Hooks (`useTheme`, `useAuth`) + Decoupled Service Layer (`requestService`, `authService`, `apiClient`)

---

## 5. Directory Architecture
```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                       # Static graphics and campus image assets
│   ├── components/
│   │   ├── common/                   # Universal UI components
│   │   │   ├── Button.jsx & Button.css
│   │   │   ├── Card.jsx & Card.css
│   │   │   ├── StatusBadge.jsx & StatusBadge.css
│   │   │   └── RoutePlaceholder.jsx & RoutePlaceholder.css
│   │   ├── dashboard/                # Reusable Dashboard components
│   │   │   ├── DashboardHero.jsx & DashboardHero.css
│   │   │   ├── MetricCard.jsx & MetricCard.css
│   │   │   ├── AttentionCard.jsx & AttentionCard.css
│   │   │   ├── RecentRequestsTable.jsx & RecentRequestsTable.css
│   │   │   ├── ApprovalProgressWidget.jsx & ApprovalProgressWidget.css
│   │   │   └── QuickRequestLaunchpad.jsx & QuickRequestLaunchpad.css
│   │   ├── layout/                   # Application shell & navigation
│   │   │   ├── AppShell.jsx & AppShell.css
│   │   │   ├── Sidebar.jsx & Sidebar.css
│   │   │   └── TopBar.jsx & TopBar.css
│   │   └── theme/
│   │       ├── ThemeToggle.jsx & ThemeToggle.css
│   ├── context/
│   │   └── ThemeContext.jsx          # Theme state provider (Light/Dark)
│   ├── data/
│   │   └── mockData.js               # Mock data aligned with reference screenshot
│   ├── hooks/
│   │   ├── useAuth.js                # Auth & user profile hook
│   │   └── useTheme.js               # Theme context hook
│   ├── layouts/
│   │   ├── AuthLayout.jsx & AuthLayout.css
│   │   └── DashboardLayout.jsx
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx & LoginPage.css
│   │   ├── student/
│   │   │   ├── StudentDashboard.jsx & StudentDashboard.css
│   │   │   ├── NewRequestPage.jsx
│   │   │   ├── RequestListPage.jsx
│   │   │   ├── RequestDetailPage.jsx
│   │   │   ├── RecordsPage.jsx
│   │   │   └── AuxiliaryPages.jsx   # Documents, Notifications, Help
│   │   ├── faculty/
│   │   │   └── FacultyDashboard.jsx
│   │   ├── hod/
│   │   │   └── HodDashboard.jsx
│   │   ├── admin/
│   │   │   └── AdminDashboard.jsx
│   │   └── NotFoundPage.jsx
│   ├── services/
│   │   ├── api.js                    # Base HTTP client with JWT interceptor support
│   │   ├── authService.js            # Authentication service abstraction
│   │   └── requestService.js         # Request CRUD & workflow service
│   ├── styles/
│   │   ├── variables.css             # Light & Dark theme tokens
│   │   └── globals.css               # Typography hierarchy & resets
│   ├── utils/
│   │   ├── constants.js              # Roles, stages, categories & nav definitions
│   │   └── formatters.js             # Date and status label formatters
│   ├── App.jsx                       # Main React router
│   └── main.jsx                      # App root mount
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── FRONTEND_CONTEXT.md               # Continuity guide
```

---

## 6. Implemented Routes

| Route | View Component | Status | Description |
|---|---|---|---|
| `/` | `Navigate to /login` | Operational | Default entry redirect |
| `/login` | `LoginPage` | Operational | Authentication portal with one-click demo role switches |
| `/student/dashboard` | `StudentDashboard` | **Phase 2B Complete** | Full operational Student Dashboard matching approved primary reference |
| `/student/requests` | `RequestListPage` | Operational | Filterable request history |
| `/student/requests/new` | `NewRequestPage` | Operational | Request submission entry point |
| `/student/requests/:id` | `RequestDetailPage` | Operational | Universal Request ID timeline tracking |
| `/student/records` | `RecordsPage` | Operational | Archived official certificates, NOCs & transcripts |
| `/student/documents` | `DocumentsPage` | Operational | Institutional form templates & guidelines |
| `/student/notifications` | `NotificationsPage` | Operational | Request status change alerts |
| `/student/help` | `HelpPage` | Operational | Routing & support desk |
| `/faculty/dashboard` | `FacultyDashboard` | Operational | Faculty verification queue placeholder |
| `/hod/dashboard` | `HodDashboard` | Operational | HOD clearance queue placeholder |
| `/admin/dashboard` | `AdminDashboard` | Operational | Registrar & clearance queue placeholder |
| `*` | `NotFoundPage` | Operational | 404 handler |

---

## 7. Completed Work (Phase 2B)
1. **Design System & Theme Tokens**:
   - Implemented exact Light (`#F7F9FC` bg, `#FFFFFF` surface, `#2347A6` primary, `#2563EB` secondary, `#E2E8F0` border) and Dark (`#0B1120` bg, `#151E2E` surface, `#638BFF` primary, `#293548` border) design tokens.
   - Built `ThemeContext` + `ThemeToggle` with seamless switching and `localStorage` persistence.
2. **Application Shell (`AppShell`, `Sidebar`, `TopBar`)**:
   - Institutional dark sidebar with Workspace (`Dashboard`, `New Request`, `My Requests [3]`, `My Records`), Resources (`Documents`, `Notifications [1]`), and bottom Student Profile (`Shiva Kumar • CSE 3rd Year`).
   - Top bar with academic term badge (`Academic Year 2025–26 • Spring`), search field with `⌘ K` keyboard shortcut, theme switcher, and notification badge.
3. **Student Dashboard Components**:
   - **DashboardHero**: Greeting (`Good morning, Shiva`), campus badge (`Garden City University`), and `+ New Request` CTA with graceful gradient fallback.
   - **MetricCard (Row of 4)**: Active requests (3), Pending approval (2), Completed (12), and Average resolution (24h).
   - **AttentionCard**: Action required banner for `C360-2026-0001` with `View Details` and `Upload Document` actions.
   - **RecentRequestsTable**: Operational table with status badges (`Pending action`, `Approved`, `In review`, `Completed`), filter pills, formatted Universal IDs, and stage/next-step actions.
   - **WorkflowProgress & ApprovalProgressWidget**: Dynamic multi-stage connector (Submitted &rarr; Faculty &rarr; HOD &rarr; Admin) supporting custom stages array.
   - **QuickRequestLaunchpad**: Quick start cards for Leave, Certificates, Internship/NOC, and Reimbursements.
4. **Preserved Compatibility**: All Phase 1 placeholder routes and service layers remain fully functional.

---

## 8. Current Work
- Phase 2B complete.
- Standing by for Phase 3 instruction.

---

## 9. Pending Work
1. **Phase 3**: New Request Submission Multi-Category Form (`/student/requests/new`) with file attachment validation and dynamic routing preview.
2. **Phase 4**: Interactive Universal Request Tracking Timeline (`/student/requests/:id`) with activity logs and document download.
3. **Phase 5**: Role Dashboards (Faculty Advisor approval modal, HOD batch endorsement, Admin clearance).
4. **Phase 6**: Backend REST API integration (`/src/services/api.js`).

---

## 10. Important Architectural & Design Decisions
1. **Modular Components**: Dashboard split into isolated reusable components (`DashboardHero`, `MetricCard`, `AttentionCard`, `RecentRequestsTable`, `ApprovalProgressWidget`, `QuickRequestLaunchpad`) rather than a monolithic view.
2. **Dynamic WorkflowProgress**: `WorkflowProgress` is category-agnostic and accepts any stage array configuration.
3. **Zero Hard-coded Colors in Components**: All components consume CSS variable tokens, ensuring instant Light & Dark theme adaptation.
4. **Universal Request ID Compliance**: Universal IDs strictly follow `C360-YYYY-XXXX`.

---

## 11. Backend Integration Assumptions
- Decoupled in `/src/services`. No UI JSX contains direct `fetch()` calls.
- Environment variables: `VITE_API_BASE_URL` and `VITE_USE_REAL_BACKEND`.

---

## 12. Known Limitations
- Backend API is mocked in local state for hackathon frontend development until backend integration phase.
