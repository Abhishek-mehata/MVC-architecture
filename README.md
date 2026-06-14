
---

# 🏗️ MVC Architecture with Node.js, Express & MongoDB

A production-style implementation of the **Model–View–Controller (MVC)** pattern using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.

This project demonstrates how to structure backend applications in a **scalable, maintainable, and industry-standard way**.

---

## 🚀 Tech Stack

* 🟢 Node.js – Runtime environment
* ⚡ Express.js – Backend framework
* 🍃 MongoDB – NoSQL database
* 🧩 Mongoose – ODM for MongoDB
* 🔁 Nodemon – Development auto-reload

---

## 📌 What This Project Teaches

This project is designed to help you master:

* MVC Architecture in real-world backend apps
* RESTful API design principles
* Clean code separation (Models, Controllers, Routes)
* MongoDB CRUD operations
* Async/Await handling in Node.js
* Proper HTTP status codes & API responses
* Scalable backend folder structure

---

## 🧠 What is MVC?

### 🟩 Model

Handles **data + database logic**

* Schema definition
* Validation rules
* Database operations

### 🟦 View

Represents **output layer**

* In this project: JSON responses (API-based view)

### 🟨 Controller

Handles **business logic**

* Processes requests
* Calls models
* Returns responses

---

## 📁 Project Structure

```
MVC-architecture/
│
├── index.js                  # Entry point
├── connection.js             # MongoDB connection
├── package.json
│
├── models/
│   └── employee.js           # Schema definition
│
├── controllers/
│   └── employee.js           # Business logic (CRUD)
│
├── routes/
│   └── employee.js           # API routes
│
└── views/                    # (Optional future UI layer)
```

---

## 🔄 Architecture Flow

```
Client → Routes → Controller → Model → Database → Response → Client
```

Or more clearly:

1. Client sends request
2. Route receives request
3. Controller processes logic
4. Model interacts with MongoDB
5. Response sent back to client

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abhishek-mehata/MVC-architecture.git
cd MVC-architecture
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

```bash
brew services start mongodb-community
```

### 4. Run the server

```bash
npm start
```

Server runs at:

```
http://localhost:8000
```

---

## 📡 API Reference

### Base URL

```
/api/employees
```

### 🔹 Endpoints

| Method | Route | Description        |
| ------ | ----- | ------------------ |
| GET    | /     | Get all employees  |
| GET    | /:id  | Get employee by ID |
| POST   | /     | Create employee    |
| PUT    | /:id  | Replace employee   |
| PATCH  | /:id  | Update employee    |
| DELETE | /:id  | Delete employee    |

---

## 🧩 Model (Employee Schema)

```js
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  job_title: { type: String, required: true }
}, { timestamps: true });
```

✔ Validation
✔ Unique constraints
✔ Auto timestamps

---

## 🧠 Controller Functions

| Function        | Purpose             |
| --------------- | ------------------- |
| getAllEmployees | Fetch all data      |
| getEmployeeById | Fetch single record |
| createNewUser   | Create employee     |
| putEmployee     | Full update         |
| patchEmployee   | Partial update      |
| deleteEmployee  | Remove record       |

✔ Clean async/await structure
✔ Proper error handling
✔ RESTful responses

---

## 🛣️ Routes Mapping

```js
router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.post("/", createNewUser);
router.put("/:id", putEmployee);
router.patch("/:id", patchEmployee);
router.delete("/:id", deleteEmployee);
```

---

## 🗄️ Database Connection

```js
mongoose.connect("mongodb://127.0.0.1:27017/company")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Error:", err));
```

---

## 🧪 Example Requests

### ➕ Create Employee

```bash
curl -X POST http://localhost:8000/api/employees \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe",
  "email": "john@example.com",
  "job_title": "Backend Developer"
}'
```

---

### 📥 Get All Employees

```bash
curl http://localhost:8000/api/employees
```


---

## 🤝 Contributing

```bash
1. Fork repo
2. Create feature branch
3. Commit changes
4. Push branch
5. Create Pull Request
```

---

---

## ⭐ Support

If this project helped you understand MVC architecture, consider giving it a ⭐ on GitHub.

---