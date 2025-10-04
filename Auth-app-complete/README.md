```md
# Auth App — Frontend + Backend


This project includes a simple secure auth example:
- Backend: Node.js + Express + MongoDB + JWT
- Frontend: static HTML/CSS/JS that calls backend API


## Run locally
1. Setup backend:
- cd backend
- npm install
- create .env from .env.example and add values (MONGO_URI, JWT_SECRET)
- npm run dev


2. Serve frontend:
- You can open the HTML files directly in browser (e.g., open frontend/index.html)
- Or run a simple server in frontend folder: `npx http-server -p 5500` or use VSCode Live Server


3. Use the app: signup → login → dashboard


## Deploy
- Push code to GitHub.
- Deploy backend to a node host (Render.com, Railway, Heroku). Update CLIENT_URL and allowed CORS origin.
- Serve frontend from GitHub Pages, Vercel, or the same host.


```


---


## Notes & Security tips
- Passwords are hashed using bcrypt before saving.
- JWT is used for authentication; keep `JWT_SECRET` secret.
- For production, use HTTPS and set tokens in secure, httpOnly cookies instead of localStorage.
- Add rate-limiting, input validation, and account lockout in production.


---


*If you want, I can now:*
- provide a `Dockerfile` and `docker-compose` to run everything locally,
- convert the backend to be deployable on Vercel serverless functions,
- or create a GitHub repo with these files and give step-by-step deploy instructions.

