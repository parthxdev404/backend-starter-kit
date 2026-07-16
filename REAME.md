![Node.js](https://img.shields.io/badge/Node.js-22.x-green)

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

![Express](https://img.shields.io/badge/Express-5-black)

![MongoDB](https://img.shields.io/badge/MongoDB-8-green)

![Docker](https://img.shields.io/badge/Docker-Enabled-blue)

![License](https://img.shields.io/badge/License-MIT-yellow)

# 🚀 Backend Starter Kit

> A production-ready backend starter template built with **Node.js**, **Express**, **TypeScript**, **MongoDB**, and **Docker** to help developers skip repetitive setup and start building scalable APIs faster.

---

## 📖 Overview

Setting up a new backend project often involves repeating the same tasks:

- Creating the folder structure
- Configuring TypeScript
- Setting up Express
- Connecting MongoDB
- Managing environment variables
- Configuring Docker
- Adding logging
- Implementing error handling
- Validating requests
- Organizing the project architecture

This repository eliminates that repetitive work by providing a clean, scalable, and production-ready backend foundation that you can clone and start building immediately.

Instead of spending hours configuring your backend, you can focus on building features.

Whether you're creating a personal project, freelance application, startup MVP, or production API, this starter kit gives you a solid foundation following modern backend best practices.

---

# ✨ Features

- ⚡ Express.js with TypeScript
- 📁 Scalable folder structure
- 🌍 Environment variable validation
- 🛡️ Global error handling
- 📝 Structured request validation using Zod
- 📊 Production-ready logging with Pino
- 🍃 MongoDB integration using Mongoose
- 🐳 Docker & Docker Compose support
- ❤️ Health check endpoint
- 🔄 Graceful server shutdown
- 📦 Clean architecture (Controllers → Services → Repositories)
- 🎯 Beginner-friendly and production-ready

---

# 🛠 Tech Stack

## Backend

- Node.js
- Express.js
- TypeScript

## Database

- MongoDB
- Mongoose

## Validation

- Zod

## Logging

- Pino
- Pino HTTP

## Environment

- dotenv
- envalid

## Containerization

- Docker
- Docker Compose

## Development Tools

- ESLint
- Prettier
- TSX

---

# 🚀 Quick Start

Clone the repository

```bash
git clone https://github.com/<your-username>/backend-starter-kit.git
```

Move inside the project

```bash
cd backend-starter-kit
```

Install dependencies

```bash
npm install
```

Create your environment file

```bash
cp .env.example .env
```

Start the development server

```bash
npm run dev
```

Or run using Docker

```bash
docker compose -f docker-compose.dev.yml up --build
```

Your API will now be running on

```
http://localhost:5000
```

---

# 📂 Project Structure

```text
backend-starter-kit
│
├── docker/
│   ├── Dockerfile.dev
│   └── Dockerfile.prod
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── validators/
│   │
│   ├── app.ts
│   └── server.ts
│
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── .env.example
├── .dockerignore
├── package.json
├── tsconfig.json
└── README.md
```

---

# 🎯 Who is this for?

This starter kit is designed for developers who want to:

- Build backend APIs faster
- Learn scalable backend architecture
- Avoid repeating project setup for every application
- Learn Docker with a real project
- Follow production-ready backend practices
- Use a clean and maintainable folder structure
- Focus on writing business logic instead of boilerplate

Whether you're a beginner learning backend development or an experienced developer starting a new project, this repository provides a clean foundation to build upon.

---

# ⭐ What makes this different?

Most starter templates simply provide code.

This repository is designed to **teach** while providing a production-ready setup.

Every major part of the project—including Docker, logging, database configuration, validation, error handling, and project architecture—is documented with explanations of **what it does**, **why it's needed**, and **how it works**.

The goal isn't just to give you a starter project—it's to help you understand the decisions behind a well-structured backend application.

# 📁 Folder Structure Explained

The project follows a layered architecture to keep the codebase modular, maintainable, and scalable.

```
src
├── config
├── controllers
├── middlewares
├── models
├── repositories
├── routes
├── services
├── types
├── utils
├── validators
├── app.ts
└── server.ts
```

---

## 📂 config/

Contains all application configuration files.

This folder centralizes the application's setup, making it easier to maintain and modify configuration without touching business logic.

### Files

| File        | Purpose                                     |
| ----------- | ------------------------------------------- |
| env.ts      | Validates and exports environment variables |
| database.ts | Connects the application to MongoDB         |
| logger.ts   | Configures the application logger           |
| index.ts    | Re-exports configuration modules            |

---

## 📂 controllers/

Controllers receive incoming HTTP requests and send responses.

A controller should only:

- Read request data
- Call a service
- Return a response

Avoid writing business logic inside controllers.

---

## 📂 services/

Services contain the application's business logic.

Examples include:

- Creating a user
- Generating a JWT
- Processing payments
- Sending emails

Services communicate with repositories instead of directly accessing the database.

---

## 📂 repositories/

Repositories are responsible for database operations.

Instead of writing database queries inside services, repositories isolate database access.

Example responsibilities:

- Create documents
- Update documents
- Delete documents
- Query collections

This makes switching databases easier in the future.

---

## 📂 models/

Contains all MongoDB models and schemas.

Each model defines:

- Fields
- Data types
- Validation
- Indexes
- Relationships

---

## 📂 routes/

Defines all API endpoints.

Example:

```
GET /users

POST /users

PATCH /users/:id

DELETE /users/:id
```

Routes should only connect endpoints to controllers.

---

## 📂 middlewares/

Stores reusable Express middlewares.

Examples:

- Error Handler
- Async Handler
- Request Logger
- Authentication
- Authorization
- Validation

---

## 📂 validators/

Contains all Zod validation schemas.

Instead of validating requests inside controllers, define reusable schemas here.

Example:

```
Create User Schema

Update User Schema

Login Schema
```

---

## 📂 utils/

Contains reusable helper functions.

Examples:

- Date helpers
- Password utilities
- Token helpers
- String formatting

---

## 📂 types/

Stores custom TypeScript types and interfaces.

Examples:

- Express Request extensions
- JWT payload types
- Generic API responses

---

# 📄 Important Files

---

## server.ts

The application's entry point.

Responsible for:

- Starting the HTTP server
- Connecting to MongoDB
- Graceful shutdown
- Process signal handling

Nothing related to routes or business logic should exist here.

---

## app.ts

Creates and configures the Express application.

Responsible for:

- Middlewares
- Routes
- Error handling
- Request logging

The server imports this file to create the HTTP server.

---

## env.ts

Loads and validates environment variables using Envalid.

Instead of directly using:

```ts
process.env.PORT;
```

Use:

```ts
env.PORT;
```

This ensures all required variables exist before the application starts.

---

## database.ts

Responsible for MongoDB configuration.

Includes:

- Connection
- Retry logic
- Graceful disconnect
- Connection events

---

## logger.ts

Creates the application's logger using Pino.

Supports:

- Application logs
- Error logs
- Request logs

Pretty logs in development and structured JSON logs in production.

---

# 🌍 Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/backend-starter
```

## PORT

Defines the port on which the application runs.

Example:

```
PORT=5000
```

---

## NODE_ENV

Specifies the current environment.

Available values:

```
development
production
test
```

---

## MONGO_URI

MongoDB connection string.

### Local Development

```
mongodb://localhost:27017/backend-starter
```

### Docker

```
mongodb://mongodb:27017/backend-starter
```

Inside Docker, `mongodb` refers to the MongoDB service defined in `docker-compose.yml`.

---

# 📜 Available Scripts

| Script               | Description                                             |
| -------------------- | ------------------------------------------------------- |
| npm run dev          | Starts the development server using TSX with hot reload |
| npm run build        | Compiles TypeScript into JavaScript                     |
| npm start            | Starts the compiled production build                    |
| npm run clean        | Removes the generated dist folder                       |
| npm run lint         | Runs ESLint                                             |
| npm run lint:fix     | Automatically fixes ESLint issues                       |
| npm run format       | Formats the project using Prettier                      |
| npm run format:check | Checks formatting without modifying files               |

---

# 📦 Packages Used

## Production Dependencies

| Package           | Why it's used                                            |
| ----------------- | -------------------------------------------------------- |
| express           | Fast and minimal web framework for building REST APIs    |
| mongoose          | MongoDB ODM for schema modeling and database interaction |
| dotenv            | Loads environment variables from `.env` files            |
| envalid           | Validates environment variables before the app starts    |
| zod               | Runtime validation for request data                      |
| pino              | High-performance structured logger                       |
| pino-http         | Automatically logs incoming HTTP requests                |
| http-status-codes | Provides readable HTTP status constants                  |

---

## Development Dependencies

| Package                | Why it's used                                               |
| ---------------------- | ----------------------------------------------------------- |
| typescript             | Adds static typing to JavaScript                            |
| tsx                    | Runs TypeScript directly during development with hot reload |
| eslint                 | Detects code quality issues                                 |
| prettier               | Automatically formats code                                  |
| eslint-config-prettier | Prevents conflicts between ESLint and Prettier              |
| @types/node            | Type definitions for Node.js                                |
| @types/express         | Type definitions for Express                                |
| typescript-eslint      | TypeScript support for ESLint                               |
| pino-pretty            | Human-readable logs during development                      |

---

# 🤔 Why These Packages?

### Why Express?

Express is lightweight, flexible, and widely adopted, making it an excellent foundation for REST APIs.

---

### Why TypeScript?

TypeScript catches errors during development, improves code readability, and provides a better developer experience through autocomplete and type safety.

---

### Why Mongoose?

Mongoose simplifies MongoDB operations by providing schemas, models, validation, middleware, and indexing support.

---

### Why Zod?

Zod offers type-safe runtime validation and integrates naturally with TypeScript, ensuring incoming requests match expected formats.

---

### Why Pino?

Pino is one of the fastest logging libraries for Node.js. It produces structured logs suitable for development, monitoring, and production environments.

---

### Why Envalid?

Instead of failing later because of missing environment variables, Envalid validates configuration during application startup, helping catch issues early.

---

# 🏗 Project Architecture

The application follows a layered architecture.

```
HTTP Request
      │
      ▼
Routes
      │
      ▼
Validation
      │
      ▼
Controllers
      │
      ▼
Services
      │
      ▼
Repositories
      │
      ▼
MongoDB
      │
      ▼
Response
```

Each layer has a single responsibility, making the project easier to maintain, test, and extend.

# 🐳 Docker

Docker allows you to package your application along with all its dependencies into a portable container. This ensures that every developer works in the same environment, eliminating "it works on my machine" issues.

This project includes separate configurations for development and production.

```
docker/
├── Dockerfile.dev
└── Dockerfile.prod

docker-compose.dev.yml
docker-compose.prod.yml
```

---

# 📦 Dockerfile.dev

Used for local development.

### Features

- Installs all dependencies
- Supports hot reload using TSX
- Mounts local source code
- Ideal for active development

The development container starts the application using:

```bash
npm run dev
```

Whenever you save a file, TSX automatically restarts the server.

---

# 🚀 Dockerfile.prod

Used to build the production image.

It uses a **multi-stage build**.

### Stage 1 — Builder

Responsible for:

- Installing dependencies
- Compiling TypeScript
- Generating the `dist` folder

### Stage 2 — Runtime

Responsible for:

- Installing production dependencies only
- Copying compiled JavaScript
- Running the application

Benefits of a multi-stage build:

- Smaller image size
- Faster deployments
- Better security
- No unnecessary development dependencies

---

# 📄 docker-compose.dev.yml

Used during development.

Services included:

## Backend

Runs the Express application with hot reload.

## MongoDB

Runs a MongoDB container for local development.

The backend automatically connects to this database.

---

### Start Development Environment

```bash
docker compose -f docker-compose.dev.yml up --build
```

---

### Stop Containers

```bash
docker compose -f docker-compose.dev.yml down
```

---

### Remove Containers and Volumes

```bash
docker compose -f docker-compose.dev.yml down -v
```

---

# 📄 docker-compose.prod.yml

Used for production deployments.

Unlike development:

- No hot reload
- Runs compiled JavaScript
- Uses production dependencies only
- Optimized image

Run:

```bash
docker compose -f docker-compose.prod.yml up --build
```

---

# 📂 Volumes

Docker volumes are used to persist MongoDB data.

Without a volume:

```
Container Deleted

↓

Database Deleted
```

With a volume:

```
Container Deleted

↓

Database Still Exists
```

MongoDB data is stored inside:

```
/data/db
```

---

# 🌐 Docker Networking

Docker Compose automatically creates a private network.

Every service can communicate using its service name.

Example:

```
services:

backend:

mongodb:
```

The backend connects to MongoDB using

```
mongodb
```

instead of

```
localhost
```

---

# 🍃 MongoDB

MongoDB is configured using Mongoose.

The connection is initialized before the server starts accepting requests.

---

## Local Development

If MongoDB is installed on your machine:

```env
MONGO_URI=mongodb://localhost:27017/backend-starter
```

Run:

```bash
npm run dev
```

---

## Docker Development

If MongoDB runs inside Docker:

```env
MONGO_URI=mongodb://mongodb:27017/backend-starter
```

Notice that **mongodb** is the Docker service name.

---

## Why doesn't localhost work inside Docker?

When running inside Docker:

```
Backend Container

localhost

↓

Backend Container
```

It does **not** refer to your computer.

Instead, use:

```
mongodb
```

because Docker provides automatic DNS resolution between services.

---

# 🔌 Database Connection

The database configuration includes:

- Connection retries
- Graceful shutdown
- Connection event listeners
- Connection pooling

If MongoDB is temporarily unavailable, the application retries the connection before exiting.

---

# 📈 Logging

Logging is handled using **Pino**.

The project uses three different types of logging.

---

## Application Logs

Used to log application events.

Example:

```
Server Started

Database Connected

Graceful Shutdown
```

---

## Request Logs

Automatically logs every HTTP request.

Example:

```
GET /users

Status: 200

Response Time: 14ms
```

Useful for debugging and monitoring.

---

## Error Logs

Unexpected errors are logged with stack traces.

Example:

```
Database Connection Failed

Validation Error

Unhandled Exception
```

---

# 🎨 Pretty Logs

During development, logs are formatted using

```
pino-pretty
```

This makes logs easier to read.

In production, logs are emitted as JSON for compatibility with monitoring tools.

---

# ❌ Error Handling

Instead of surrounding every controller with

```ts
try {
} catch {}
```

the project uses centralized error handling.

Benefits:

- Cleaner controllers
- Consistent API responses
- Easier debugging
- Less repetitive code

---

# ApiError

Custom error class.

Allows throwing meaningful application errors.

Example:

```ts
throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
```

---

# Async Handler

Wraps asynchronous route handlers.

Instead of

```ts
try {
} catch {}
```

inside every controller:

```ts
export const getUsers = asyncHandler(async (req, res) => {});
```

Any thrown error automatically reaches the global error middleware.

---

# Global Error Middleware

Handles every uncaught application error.

Responsibilities:

- Logging
- Formatting responses
- Hiding internal implementation details
- Returning correct status codes

Standard response:

```json
{
  "success": false,
  "message": "Resource not found"
}
```

---

# 404 Handler

Requests to undefined routes automatically return

```http
404 Not Found
```

Example:

```
GET /unknown-route
```

Response:

```json
{
  "success": false,
  "message": "Route not found"
}
```

---

# ✅ Validation

Request validation is implemented using **Zod**.

Validation occurs before the controller executes.

This prevents invalid data from reaching business logic.

---

Example:

```
Incoming Request

↓

Validate

↓

Controller

↓

Service

↓

Database
```

---

Validation can be used for:

- Request Body
- Query Parameters
- URL Parameters
- Headers

---

Benefits:

- Better API reliability
- Type-safe validation
- Cleaner controllers
- Improved developer experience

---

# ❤️ Health Check

The project exposes a health endpoint.

```
GET /health
```

Example Response

```json
{
  "success": true,
  "message": "Server is healthy"
}
```

Health checks are useful for:

- Docker
- Kubernetes
- Load Balancers
- Monitoring Systems
- CI/CD Pipelines

---

# 🌊 Request Lifecycle

Every incoming request follows the same flow.

```text
Client
   │
   ▼
Express Server
   │
   ▼
Request Logger
   │
   ▼
Route
   │
   ▼
Validation
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Repository
   │
   ▼
MongoDB
   │
   ▼
Controller
   │
   ▼
Response
```

---

# ➕ Adding a New Feature

Every feature should follow the same architecture.

Example: Adding a **User Module**

```
models/
└── user.model.ts

repositories/
└── user.repository.ts

services/
└── user.service.ts

controllers/
└── user.controller.ts

validators/
└── user.validator.ts

routes/
└── user.routes.ts
```

Flow:

```
Create Model

↓

Create Repository

↓

Create Service

↓

Create Controller

↓

Create Validation

↓

Create Routes

↓

Register Routes

↓

Done ✅
```

Following this structure keeps the project modular, maintainable, and easy to scale as new features are added.

# 💡 Best Practices

This starter kit follows a set of backend development best practices to keep projects maintainable, scalable, and easy to understand.

## Project Structure

- Keep each module independent.
- Separate business logic from controllers.
- Organize code by feature whenever possible.
- Avoid deeply nested folders.

---

## Controllers

Controllers should only:

- Receive requests
- Validate input
- Call services
- Return responses

❌ Don't

```ts
router.post("/", async (req, res) => {
  const user = await User.create(req.body);
});
```

✅ Do

```ts
router.post("/", createUserController);
```

---

## Services

Services contain all business logic.

Examples:

- Authentication
- Payment processing
- Email sending
- Business rules

Services should never know anything about Express.

---

## Repositories

Repositories should only communicate with the database.

Instead of

```
Controller

↓

MongoDB
```

Use

```
Controller

↓

Service

↓

Repository

↓

MongoDB
```

---

## Validation

Always validate every request before processing it.

Never trust client input.

Validate:

- Body
- Query
- Params
- Headers

---

## Logging

Never use

```ts
console.log();
```

inside production code.

Instead use

```ts
logger.info();

logger.warn();

logger.error();

logger.fatal();
```

---

## Error Handling

Never write

```ts
try {
} catch {}
```

inside every controller.

Instead use

```
asyncHandler()

↓

ApiError

↓

Global Error Middleware
```

---

## Environment Variables

Never hardcode

- Database URLs
- API Keys
- JWT Secrets
- Ports

Always use

```
.env
```

---

## Docker

Use Docker for consistent development environments.

Avoid installing databases directly on your machine when working with teams.

---

# ⚡ Troubleshooting

## MongoDB Connection Failed

### Error

```
ECONNREFUSED 127.0.0.1:27017
```

### Cause

MongoDB is not running.

### Solution

For local development

```
mongod
```

or

```
brew services start mongodb-community
```

or start MongoDB using Docker.

---

## Docker Cannot Connect to MongoDB

### Wrong

```
MONGO_URI=mongodb://localhost:27017/my-db
```

### Correct

```
MONGO_URI=mongodb://mongodb:27017/my-db
```

Inside Docker,

```
localhost
```

refers to the current container.

---

## Port Already In Use

Error

```
EADDRINUSE
```

Either

- Stop the running process

or

Change

```
PORT
```

inside

```
.env
```

---

## tsx not found

You are probably using the production Docker image.

Development should use

```
Dockerfile.dev
```

---

## Docker Container Not Starting

Try rebuilding everything.

```
docker compose down -v

docker compose build --no-cache

docker compose up
```

---

## MongoDB Container Keeps Restarting

Check container logs

```bash
docker logs mongodb
```

---

## Environment Variables Not Updating

Restart the application after changing

```
.env
```

or rebuild Docker containers if using Docker Compose.

---

# 📚 Learning Resources

If you're new to backend development, these topics will help you understand this starter kit better.

- HTTP & HTTPS
- REST APIs
- Node.js Event Loop
- Express.js
- MongoDB
- Docker
- TypeScript
- Zod Validation
- Logging
- Error Handling
- Clean Architecture

---

# 🚀 Roadmap

Planned features for future versions.

## Version 1.1

- JWT Authentication
- Authentication Middleware
- Authorization Middleware
- Cookie Support

---

## Version 1.2

- Redis Integration
- Response Caching
- Session Storage

---

## Version 1.3

- Rate Limiting
- Helmet
- CORS Configuration
- Compression

---

## Version 1.4

- Swagger / OpenAPI Documentation
- API Versioning
- Request IDs

---

## Version 1.5

- Unit Testing
- Integration Testing
- Test Containers

---

## Version 2.0

- PostgreSQL Support
- Prisma Support
- Drizzle Support
- Queue System
- Background Jobs
- Email Service
- File Upload Module

---

# 🤝 Contributing

Contributions are always welcome.

If you'd like to improve this starter kit:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/my-feature
```

3. Make your changes.

4. Commit your changes.

```bash
git commit -m "feat: add new feature"
```

5. Push your branch.

```bash
git push origin feature/my-feature
```

6. Open a Pull Request.

Please ensure your code:

- Passes linting
- Is formatted using Prettier
- Follows the existing project structure
- Includes documentation when necessary

---

# 📜 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project for personal or commercial purposes.

See the LICENSE file for complete details.

---

# 🌟 Support the Project

If you found this project useful:

⭐ Star the repository

🍴 Fork it

📢 Share it with other developers

🤝 Contribute improvements

Every contribution helps make this starter kit better for the community.

---

# 👨‍💻 Author

Developed and maintained by **Parth Sharma**.

GitHub: https://github.com/parthxdev404

If this project helped you, consider giving it a ⭐ on GitHub.

---

# ❤️ Acknowledgements

This project is inspired by modern backend engineering practices and lessons learned while building production-ready applications.

The goal is to provide a clean foundation that helps developers spend less time on setup and more time building great software.

Happy Coding! 🚀
