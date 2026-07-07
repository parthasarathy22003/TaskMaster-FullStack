# 📋 Full Stack Todo Application

A modern **Full Stack Todo Application** built with **React, Node.js, Express.js, Sequelize ORM, and MySQL**. This project demonstrates complete CRUD operations, REST API development, frontend-backend integration, and responsive UI design.

---

## 🚀 Demo

> Add your deployment link here after hosting.

**Frontend:** [https://your-frontend-url.com](https://your-frontend-url.com)

**Backend API:** [https://your-backend-url.com](https://your-backend-url.com)

---

# 📸 Preview

> Add screenshots here

| Home Page                     | Edit Todo                     |
| ----------------------------- | ----------------------------- |
| ![Home](screenshots/home.png) | ![Edit](screenshots/edit.png) |

---

# ✨ Features

* Create new todos
* View all todos
* Update existing todos
* Delete todos
* Mark todos as completed or pending
* Inline editing
* Input validation
* Toast notifications
* Loading indicators
* Responsive design
* RESTful API
* MySQL database integration
* Error handling

---

# 🛠 Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* Sequelize ORM

### Database

* MySQL

---

# 📂 Project Structure

```
todo-app/

├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/todo-app.git

cd todo-app
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a **.env** file.

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todo_db
```

Start Backend

```bash
npm run dev
```

Backend runs at

```
http://localhost:5000
```

---

## Frontend Setup

Open another terminal.

```bash
cd frontend

npm install
```

Create **.env**

```env
VITE_API_URL=http://localhost:5000
```

Run frontend

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# 🗄 Database

Create a MySQL database.

```sql
CREATE DATABASE todo_db;
```

Sequelize automatically creates the required table when the server starts.

---

# 🔗 API Endpoints

| Method | Endpoint   | Description             |
| ------ | ---------- | ----------------------- |
| GET    | /todos     | Get all todos           |
| GET    | /todos/:id | Get single todo         |
| POST   | /todos     | Create todo             |
| PUT    | /todos/:id | Update todo             |
| PATCH  | /todos/:id | Toggle completed status |
| DELETE | /todos/:id | Delete todo             |

---

# 📦 Sample Request

### Create Todo

```json
{
  "title": "Learn React"
}
```

### Update Todo

```json
{
  "title": "Learn Full Stack Development"
}
```

### Toggle Status

```json
{
  "completed": true
}
```

---

# 💡 What I Learned

During this project I gained practical experience with:

* React Components
* React Hooks
* State Management
* REST APIs
* Express Routing
* Controllers
* Sequelize ORM
* MySQL Database
* CRUD Operations
* Axios API Calls
* Form Validation
* Error Handling
* Responsive UI Design
* Project Folder Structure
* Environment Variables

---

# 🎯 Future Improvements

* JWT Authentication
* User Login & Registration
* Search Todos
* Filter by Status
* Pagination
* Due Dates
* Dark Mode
* Docker Support
* Deployment using Render & Vercel

---

# 👨‍💻 Author

**SARATHY T**


# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.


