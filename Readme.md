# 🗄️ Backend - Advanced Task Manager App (MERN)

This is the **Backend API** for the Advanced Task Manager App.  
Built with **Node.js, Express.js, MongoDB, and Mongoose**, following clean MVC architecture.

---

## 🚀 Tech Stack (Backend)

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **dotenv** (environment variables)
- **cors** (API access control)
- **nodemon** (development auto-restart)

---

## 📂 Folder Structure
Backend/
│── controllers/
│ └── taskControllers.js # All task CRUD logic
│── Lib/
│ └── dbConnection.js # MongoDB connection
│── Modules/
│ └── taskModule.js # Mongoose schema/model
│── Routes/
│ └── task.js # Routes definitions
│── .env # Environment variables
│── index.js # Server entry point
│── package.json



---

## ⚙️ Setup & Installation
npm install

MONGO_URI=
PORT=5000

Server runs by default on:
http://localhost:5000


| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/v1/tasks`     | Get all tasks     |
| POST   | `/api/v1/tasks`     | Create a new task |
| PUT    | `/api/v1/tasks/:id` | Update task       |
| DELETE | `/api/v1/tasks/:id` | Delete task       |
| PATCH | `/api/v1/tasks/:id/toggle` | update Pendding true and false task |


✅ Features

✔️ RESTful API
✔️ Full CRUD operations
✔️ MongoDB storage
✔️ Async/await + try/catch error handling
✔️ No empty fields validation
✔️ Modular folder structure (MVC)
✔️ Includes CORS support
✔️ Auto restart with Nodemon

{
  "_id": "65a5f3c21b23c1a9b8e9d123",
  "task": "Complete assignment",
  "completed": false,
  "createdAt": "2024-01-15T10:30:01.123Z"
}


🧪 Testing Routes

You can test routes using:

Postman

Thunder Client (VS Code)

cURL

Frontend client

Example (POST):

POST http://localhost:5000/api/tasks
Content-Type: application/json

{
  "title": "Learn MERN Stack"
}
