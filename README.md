# SOC Management Backend

Backend system for a fictional Security Operations Center (SOC) used to manage
clients, users, health checks, and VPN configuration.

Built as a role-based API to model real-world SOC workflows and backend authorization patterns.

---

## Features

- JWT authentication with role-based access (Admin / Engineer)
- Client management and health check submissions
- Admin-only user creation
- VPN configuration management
- PostgreSQL database with Prisma ORM

---

## Tech Stack

- NestJS
- PostgreSQL (Docker)
- Prisma ORM
- JWT Authentication

---

## Running Locally

```bash
# start database
docker compose up -d

# install dependencies
npm install

# apply database migrations
npx prisma migrate dev

# start server
npm run start:dev

API runs at http://localhost:8000  

