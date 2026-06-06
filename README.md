# Backend Engineer Portfolio 
- React + Vite
- Tailwind CSS v4
- Framer Motion animations
- Recharts performance visualizations
- Dynamic GitHub API integration
- Dark/light mode with localStorage persistence
- Responsive mobile-first layout
- FastAPI contact backend integration

## Frontend Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment example:

```bash
copy .env.example .env
```

3. Update .env values:

- VITE_FULL_NAME
- VITE_CONTACT_EMAIL
- VITE_GITHUB_PROFILE
- VITE_LINKEDIN_PROFILE
- VITE_RESUME_FILE
- VITE_GITHUB_USERNAME
- VITE_CONTACT_API_URL (default: http://localhost:8000/api/contact)
- VITE_PROJECT1_GITHUB
- VITE_PROJECT2_GITHUB
- VITE_PROJECT3_GITHUB

4. Start frontend only:

```bash
npm run dev:frontend
```

5. Start frontend + backend with one command:

```bash
npm run dev:all
```

6. Build for production:

```bash
npm run build
```

7. Preview production build:

```bash
npm run preview
```

## Backend Setup (FastAPI Contact API)

1. Move to backend folder:

```bash
cd backend
```

2. Create and activate virtual environment (recommended).

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Copy backend env file:

```bash
copy .env.example .env
```

5. Start API server:

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

Or from project root:

```bash
npm run dev:backend
```

6. Check health endpoint:

```bash
http://localhost:8000/api/health
```

## Personalization Checklist

- Replace name, links, and email in src/data/portfolioData.js
- Replace project links and metrics in src/data/portfolioData.js
- Replace public/resume.pdf with your real resume file
- Optionally add your own OG image in public/

## Contact Form Behavior

- If VITE_CONTACT_API_URL is set, form submits using POST JSON.
- If not set, form opens the local mail client using mailto.
- FastAPI backend supports log mode and SMTP mode for real email delivery.

## Deployment

- Frontend Vercel config: vercel.json
- Frontend Netlify config: netlify.toml
- Backend Render blueprint: render.yaml
- Full deployment playbook: DEPLOYMENT.md

## Performance Notes

- Heavy sections are lazy loaded with React Suspense.
- Theme preference is persisted in localStorage.
- UI is mobile-first and optimized for smooth transitions.
