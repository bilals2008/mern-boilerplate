# MERN Boilerplate 🚀

A production-ready full-stack boilerplate built with the **MERN stack**. Features a secure Express/MongoDB backend and a modern React + Vite + Tailwind CSS v4 frontend with a built-in **authentication system**.

---

## ✨ Features

### Backend (Express + MongoDB)

- 🔐 **JWT Authentication** — Secure token-based auth with HTTP-only cookies
- 🔑 **Password Hashing** — bcryptjs with salt rounds of 12
- 🛡️ **Security Middleware** — Helmet, CORS, rate limiting, and mongo-sanitize
- 🧩 **Role-based Users** — `admin` and `user` roles
- 🗃️ **MongoDB + Mongoose** — Schema validation, indexes, and virtuals
- ⚡ **ES Modules** — Modern `import/export` syntax throughout

### Frontend (React + Vite)

- ⚛️ **React 19** with React Router v7
- 🎨 **Tailwind CSS v4** with `tw-animate-css`
- 🧱 **shadcn/ui** component system (via Radix UI + CVA)
- ⚡ **Vite 7** for blazing-fast development and builds
- 🔍 **ESLint** configured with React hooks and refresh plugins

---

## 📁 Project Structure

```
mern-boilerplate/
├── client/                     # React + Vite frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page-level components
│   │   ├── lib/                # Utility functions (cn, etc.)
│   │   ├── App.jsx             # Root app with routing
│   │   └── main.jsx            # Entry point
│   ├── index.html
│   └── package.json
│
└── server/                     # Express + MongoDB backend
    ├── controllers/
    │   └── auth.js             # Register, login, logout logic
    ├── middleware/
    │   └── authMiddleware.js   # Protect routes with JWT
    ├── models/
    │   └── User.js             # User schema
    ├── routes/
    │   └── auth.js             # /api/auth/* routes
    ├── index.js                # Express app entry point
    ├── error.js                # Custom error helper
    ├── verifyToken.js          # JWT verification utility
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or a local MongoDB instance)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd mern-boilerplate
```

### 2. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file by copying the example:

```bash
cp env.example .env
```

Fill in your values in `.env`:

```env
MONGO=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
JWT_COOKIE_EXPIRES_IN=7
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
PORT=8800
```

Start the development server:

```bash
npm start
```

> Server runs on **http://localhost:8800**

### 3. Setup the Frontend

```bash
cd ../client
npm install
npm run dev
```

> Client runs on **http://localhost:5173**

---

## 🔌 API Endpoints

### Auth Routes — `/api/auth`

| Method | Endpoint           | Description                    | Auth Required |
| ------ | ------------------ | ------------------------------ | ------------- |
| POST   | `/signup`          | Register a new user            | ❌            |
| POST   | `/signin`          | Login and receive JWT cookie   | ❌            |
| GET    | `/profile/:id`     | Get user profile               | ✅            |
| PUT    | `/change-password` | Change current user's password | ✅            |
| POST   | `/logout`          | Clear auth cookie              | ✅            |
| PUT    | `/profile`         | Update own profile             | ✅            |
| PUT    | `/users/:id`       | Update user (self or admin)    | ✅            |
| GET    | `/all-users`       | Get all users _(admin only)_   | ✅ Admin      |
| POST   | `/create-user`     | Create a user _(admin only)_   | ✅ Admin      |
| PUT    | `/admin/users/:id` | Admin update any user          | ✅ Admin      |
| DELETE | `/admin/users/:id` | Delete a user _(admin only)_   | ✅ Admin      |

### Health Check

| Method | Endpoint  | Description           |
| ------ | --------- | --------------------- |
| GET    | `/health` | Server liveness check |

---

## 🗃️ User Model

| Field       | Type    | Description                       |
| ----------- | ------- | --------------------------------- |
| `name`      | String  | User's full name                  |
| `email`     | String  | Unique email (lowercased)         |
| `password`  | String  | Bcrypt hashed (hidden by default) |
| `role`      | String  | `user` or `admin`                 |
| `isActive`  | Boolean | Account active status             |
| `isDeleted` | Boolean | Soft delete flag                  |
| `lastLogin` | Date    | Last login timestamp              |

---

## 🛡️ Security

- **Helmet** — Sets secure HTTP headers
- **CORS** — Restricted to allowed origins per environment
- **Rate Limiting** — Prevents brute-force attacks
- **Mongo Sanitize** — Prevents NoSQL injection
- **HTTP-only Cookies** — JWT stored securely, not accessible via JS
- **Bcrypt (salt=12)** — Strong password hashing

---

## 🧑‍💻 Tech Stack

| Layer      | Technology                        |
| ---------- | --------------------------------- |
| Frontend   | React 19, Vite 7, Tailwind CSS v4 |
| UI Library | shadcn/ui, Radix UI, Lucide React |
| Routing    | React Router v7                   |
| Backend    | Node.js, Express 5                |
| Database   | MongoDB, Mongoose 8               |
| Auth       | JWT, bcryptjs, cookie-parser      |
| Security   | Helmet, express-rate-limit, cors  |

---

## 📝 Scripts

### Client

```bash
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Server

```bash
npm start         # Start with nodemon (auto-restart on changes)
```

---

## 📄 License

This project is open-source and available under the [ISC License](LICENSE).
