# Task Management API

A simple Express.js API for managing tasks with CRUD operations.

## Features

- Get all tasks
- Get a task by ID
- Create a new task
- Update a task (PUT)
- Patch a task (PATCH)
- Delete a task

## Project Structure

```
├── index.js              # Application entry point
├── server.js             # Server configuration
├── config/               # Configuration files
│   └── db.js            # Database configuration
├── controllers/          # Request handlers
│   └── task.controller.js
├── middlewares/          # Express middlewares
│   ├── auth.middleware.js
│   └── error.middleware.js
├── models/               # Data models
│   └── task.model.js
├── routes/               # API routes
│   └── task.routes.js
└── utils/                # Utility functions
    └── asyncHandler.js
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure your database in `config/db.js`

## Running the Application

Start the server:
```bash
npm start
```

Or with nodemon for development:
```bash
npm run dev
```

## API Endpoints

All endpoints are prefixed with `/api/v1/tasks`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all tasks |
| GET | `/:id` | Get a task by ID |
| POST | `/` | Create a new task |
| PUT | `/:id` | Update a task |
| PATCH | `/:id` | Partially update a task |
| DELETE | `/:id` | Delete a task |

## Technologies Used

- **Express.js** - Web framework
- **Node.js** - Runtime environment

## License

MIT
