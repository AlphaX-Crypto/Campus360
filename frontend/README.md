# Campus360 — Frontend

**Campus360: From Fragmented to Connected**  
Unified Institutional Request, Approval, and Tracking Platform.

---

## Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Execution
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies (already initialized)
npm install

# Start Vite Development Server
npm run dev
```

The application will run locally at: `http://localhost:5173`

---

## Prepared Routes
- `/` &rarr; Redirects to `/login`
- `/login` &rarr; Authentication Portal with instant demo role switcher
- `/student/dashboard` &rarr; Student Request Overview
- `/student/requests/new` &rarr; New Request Form
- `/student/requests` &rarr; Requests List & Filtering
- `/student/requests/:id` &rarr; Universal Request ID Tracking Timeline
- `/faculty/dashboard` &rarr; Faculty Advisor Review Queue
- `/hod/dashboard` &rarr; Department Head Approval Queue
- `/admin/dashboard` &rarr; Campus Administration & Clearance

---

## Technical Documentation
For architecture, design tokens, and continuity details, see [FRONTEND_CONTEXT.md](./FRONTEND_CONTEXT.md).
