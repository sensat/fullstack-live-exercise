# Live coding exercise - Full Stack

This project is a lightweight nodejs (Typescript) API that exposes 1 resource, content. The frontend (Angular)
currently fetches a list of content items and displays them.

## Prerequisites

- Node.js 18+ and npm

## Folder Structure

- `backend/` — Express server written in TypeScript
- `frontend/` — Angular app for the UI

## Backend Quick Start

```bash
cd backend
npm install
npm run dev
```

The API will run at `http://localhost:4000`.

### Endpoints

- `GET /api/content/list` — list available content

## Frontend Notes

The `frontend/` folder is a runnable Angular app with the complete UI and service
code for the exercise.

## Frontend Quick Start

```bash
cd frontend
npm install
npm start
```

The app will run at `http://localhost:4200` and call the backend at
`http://localhost:4000`.

## How to Use

1. Start the backend.
2. Start the frontend.
3. The UI will fetch content and render a grid of content tiles.
