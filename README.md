# Team Taskboard V3 (Angular 17 + NgRx + Tailwind)

Features:
- Role selection -> Login (name + id) -> role-specific dashboards
- Purple header for Team Member, Green header for Team Lead
- Team Member can add tasks (duplicate title prevented)
- Team Lead can move tasks; movedBy saved as lead's name and movedAt timestamp
- NgRx store for user and tasks, persisted to localStorage

Run:
1. npm install
2. npx ng serve --open
3. App at http://localhost:4200

Notes:
- Uses Angular 17 standalone components and provideStore for a minimal setup.
- If you see issues, remove node_modules and package-lock.json and reinstall.
