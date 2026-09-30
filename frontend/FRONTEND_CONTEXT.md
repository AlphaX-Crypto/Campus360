# Campus360 — Frontend Context & Continuity Guide

## 1. Project Name
**Campus360 — From Fragmented to Connected**  
A unified institutional campus request, approval, and tracking platform designed to eliminate fragmented paper forms, disparate emails, and uncoordinated spreadsheets.

---

## 2. Frontend Owner
- **Lead Developer**: Shiva Kumar
- **Module Scope**: `/frontend` ONLY

---

## 3. Current Git Branch
- **Branch**: `shiva/frontend`
- **Rule**: All frontend changes remain isolated on this branch. Do not switch branches, merge into `main`, or alter non-frontend directories (`/backend`, `/database`, `/intelligence-engine`, `/analytics`).

---

## 4. Technology Stack
- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 8 (`vite`, `@vitejs/plugin-react`)
- **Language**: JavaScript (ES Modules)
- **Routing**: React Router DOM v7 (`react-router-dom`)
- **Styling**: Vanilla CSS with reusable Institutional Design Tokens (`src/styles/variables.css`, `src/styles/globals.css`)
- **Icons**: Lucide React (`lucide-react`)
- **State & Services**: Custom React Hooks (`useAuth`) + Decoupled Service Layer (`requestService`, `authService`, `apiClient`)

---

## 5. Directory Architecture
```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/               # Static graphics, SVGs, and brand assets
│   ├── components/
│   │   ├── common/           # Universal UI components
│   │   │   ├── Button.jsx & Button.css
│   │   │   ├── Card.jsx & Card.css
│   │   │   ├── Header.jsx & Header.css
│   │   │   ├── Sidebar.jsx & Sidebar.css
│   │   │   ├── StatusBadge.jsx & StatusBadge.css
│   │   │   └── RoutePlaceholder.jsx & RoutePlaceholder.css
│   ├── data/
│   │   └── mockData.js       # Pre-configured mock requests and institutional user profiles
│   ├── hooks/
│   │   └── useAuth.js        # Authentication and active role state hook
│   ├── layouts/
│   │   ├── AuthLayout.jsx & AuthLayout.css
│   │   └── DashboardLayout.jsx & DashboardLayout.css
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx & LoginPage.css
│   │   ├── student/
│   │   │   ├── StudentDashboard.jsx & StudentDashboard.css
│   │   │   ├── NewRequestPage.jsx
│   │   │   ├── RequestListPage.jsx
│   │   │   └── RequestDetailPage.jsx
│   │   ├── faculty/
│   │   │   └── FacultyDashboard.jsx
│   │   ├── hod/
│   │   │   └── HodDashboard.jsx
│   │   ├── admin/
│   │   │   └── AdminDashboard.jsx
│   │   └── NotFoundPage.jsx
│   ├── services/
│   │   ├── api.js            # Base HTTP client with JWT interceptor support
│   │   ├── authService.js    # Authentication service abstraction
│   │   └── requestService.js # Request CRUD & approval workflow service
│   ├── styles/
│   │   ├── variables.css     # Institutional SaaS design tokens
│   │   └── globals.css       # Global resets, typography hierarchy, utilities
│   ├── utils/
│   │   ├── constants.js      # Roles, stages, categories, and nav definitions
│   │   └── formatters.js     # Date, relative time, and status label formatters
│   ├── App.jsx               # Central route configuration
│   └── main.jsx              # React root entry point
├── index.html                # HTML entry point with Google Fonts (Inter) & meta tags
├── package.json
├── vite.config.js
├── README.md
└── FRONTEND_CONTEXT.md       # Continuity document for AI agents & team members
```

---

## 6. Implemented Routes

| Route | Role / Scope | Component | Description / Status |
|---|---|---|---|
| `/` | Universal | `Navigate to /login` | Default redirect to login portal |
| `/login` | Public / Auth | `LoginPage` | Institutional login with quick one-click demo role selector |
| `/student/dashboard` | Student | `StudentDashboard` | Overview metrics, quick actions, recent submissions preview |
| `/student/requests/new` | Student | `NewRequestPage` | Submission entry point for leave, hackathons, NOC, certificates |
| `/student/requests` | Student | `RequestListPage` | Filterable list and tracking table of all student requests |
| `/student/requests/:id` | Student | `RequestDetailPage` | Multi-stage timeline tracking for Universal IDs (e.g., `C360-2026-0001`) |
| `/faculty/dashboard` | Faculty | `FacultyDashboard` | Pending verification queue, attendance check, and endorsement |
| `/hod/dashboard` | HOD | `HodDashboard` | Department approval queue and event permission clearance |
| `/admin/dashboard` | Admin | `AdminDashboard` | Campus administration, digital signatures, certificate issuance |
| `*` | Universal | `NotFoundPage` | 404 handler with return-to-portal navigation |

---

## 7. Completed Work (Phase 1 Foundation)
- Scaffolded standard Vite + React application in `/frontend`.
- Established clean institutional SaaS design system using CSS variables:
  - Deep institutional blue & slate surfaces (`#1e3a8a`, `#0f172a`, `#f8fafc`, `#ffffff`).
  - Semantic status badges: Pending (Amber), In Review (Indigo), Approved (Emerald), Rejected (Rose).
  - Clear typography scale and crisp elevation shadows.
- Built reusable core components (`Header`, `Sidebar`, `Button`, `Card`, `StatusBadge`, `PriorityBadge`, `RoutePlaceholder`).
- Implemented full routing tree across all 4 institutional roles (Student, Faculty, HOD, Admin) + Dynamic parameter route `/student/requests/:id`.
- Created decoupled service layer (`api.js`, `authService.js`, `requestService.js`) with mock fallbacks aligned to future backend contracts.
- Integrated one-click role switching for effortless hackathon demonstration and testing.

---

## 8. Current Work
- Completed Phase 1 (Frontend Foundation).
- Standing by for Phase 2 instructions (Login and Student Dashboard implementation).

---

## 9. Pending Work
1. **Phase 2**: Full Login Authentication Flow & Interactive Student Dashboard with real-time statistics.
2. **Phase 3**: Request Submission Form (Multi-category schema validation & attachment handling).
3. **Phase 4**: Universal Request ID Tracking Timeline (`/student/requests/:id`) with interactive audit logs.
4. **Phase 5**: Role Dashboards (Faculty Advisor approval modal, HOD batch clearance, Admin document issuance).
5. **Phase 6**: Backend API Integration (Switch `VITE_USE_REAL_BACKEND=true` in `.env`).

---

## 10. Important Architectural & Design Decisions
1. **Zero Global State Bloat**: State is cleanly scoped via `useAuth` hook and localized data services, keeping it fast and easy to maintain for a hackathon.
2. **Decoupled API Abstraction**: UI components never call `fetch()` directly; all data operations go through `src/services/*`. Connecting real REST APIs will require zero changes to UI JSX.
3. **Universal Request ID Format**: Data models strictly adhere to the format `C360-YYYY-XXXX` (e.g., `C360-2026-0001`).
4. **Institutional SaaS Aesthetic**: Minimalist, clean, trustworthy institutional palette without distracting excessive animations or heavy glassmorphism.

---

## 11. Backend Integration Assumptions
- **Base Endpoint**: `http://localhost:5000/api` (configurable via `VITE_API_BASE_URL`).
- **Auth Header**: Bearer token via `Authorization: Bearer <token>`.
- **Payload Schema Example**:
```json
{
  "requestId": "C360-2026-0001",
  "studentId": "STU001",
  "studentName": "Aarav Sharma",
  "department": "Computer Science & Engineering",
  "category": "Hackathon / Event Permission",
  "title": "Smart India Hackathon Grand Finale Attendance",
  "description": "Request permission to attend hackathon...",
  "status": "PENDING",
  "currentStage": "FACULTY",
  "priority": "HIGH",
  "createdAt": "2026-09-30T08:00:00"
}
```

---

## 12. Known Issues / Limitations
- **None**: Initial build compiles cleanly with zero errors and zero warnings.
