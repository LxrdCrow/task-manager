# 📝 Task Manager API

A simple and modular RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage tasks — perfect for small projects, practice, or as a base for more complex applications.

---

## 🚀 Features

- Create, read, update, and delete tasks (CRUD)
- Clean and modular structure using MVC pattern
- MongoDB integration with Mongoose
- Input validation and normalization
- Ready for deployment (Render, Heroku, etc.)

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Utilities**: dotenv for environment variables

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-manager-api.git
   cd task-manager-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/projects
   ```

4. **Start the server**
   ```bash
   npm start
   ```

   Server will run on: `http://localhost:3000/api/tasks`

---

## 🔄 API Endpoints

| Method | Route               | Description              |
|--------|---------------------|--------------------------|
| POST   | `/api/tasks`        | Create a new task        |
| GET    | `/api/tasks`        | Retrieve all tasks       |
| PUT    | `/api/tasks/:id`    | Update a task by ID      |
| DELETE | `/api/tasks/:id`    | Delete a task by ID      |

---

## 📁 Project Structure

```
.
├── controllers/
│   └── TaskController.js
├── models/
│   └── Task.js
├── routes/
│   └── TaskRoutes.js
├── utils/
│   └── SettingsHelper.js
├── .env
├── index.js
├── server.js
└── package.json
```

---

## ✨ Helper Functions

Located in `/utils/settingsHelper.js`, these ensure valid titles:

- `isValidTitle(title)` – Checks if the title is a non-empty string.
- `normalizeTitle(title)` – Trims and capitalizes the first letter.

---

## 🧪 Testing the API

You can use tools like:
- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- `curl` via CLI

Example:
```bash
curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d '{"title":"Buy groceries"}'
```

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---





