# CI/CD Date Checker

Full-stack demo with Express (backend) and React (frontend). Checks if a date exists (YYYY-MM-DD), including leap-year handling. Includes tests and GitHub Actions CI.

## Run locally

Backend:
```
cd backend
npm ci
npm run dev
```

Frontend:
```
cd frontend
npm ci
npm run dev
```

## Test
```
# from root (npm workspaces)
npm test
```

## Build
```
# from root
npm run build
```

## CI
Push to GitHub; workflow in `.github/workflows/ci.yml` runs tests and builds on push/PR for Node 18/20.
