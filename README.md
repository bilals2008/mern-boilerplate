# MERN Boilerplate 🚀

A production-ready full-stack boilerplate built with the **MERN stack**. Features a secure Express/MongoDB backend and a modern React + Vite + Tailwind CSS v4 frontend. Includes a built-in **authentication system** and a **referral system** out of the box.

---

## ✨ Features

### Backend (Express + MongoDB)

- 🔐 **JWT Authentication** — Secure token-based auth with HTTP-only cookies
- 🔑 **Password Hashing** — bcryptjs with salt rounds of 12
- 🛡️ **Security Middleware** — Helmet, CORS, rate limiting, and mongo-sanitize
- 👥 **Referral System** — Auto-generated unique referral codes per user
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
    │   ├── auth.js             # Register, login, logout logic
    │   └── referral.js         # Referral system logic
    ├── middleware/
    │   └── authMiddleware.js   # Protect routes with JWT
    ├── models/
    │   └── User.js             # User schema with referral fields
    ├── routes/
    │   ├── auth.js             # /api/auth/* routes
    │   └── referral.js         # /api/referral/* routes
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

| Method | Endpoint    | Description           | Auth Required |
| ------ | ----------- | --------------------- | ------------- |
| POST   | `/register` | Register a new user   | ❌            |
| POST   | `/login`    | Login and receive JWT | ❌            |
| POST   | `/logout`   | Clear auth cookie     | ✅            |

### Referral Routes — `/api/referral`

| Method | Endpoint   | Description                  | Auth Required |
| ------ | ---------- | ---------------------------- | ------------- |
| GET    | `/my-code` | Get the user's referral code | ✅            |
| GET    | `/stats`   | Get referral statistics      | ✅            |
| POST   | `/apply`   | Apply a referral code        | ✅            |

### Health Check

| Method | Endpoint  | Description           |
| ------ | --------- | --------------------- |
| GET    | `/health` | Server liveness check |

---

## 🗃️ User Model

The `User` schema includes:

| Field           | Type     | Description                       |
| --------------- | -------- | --------------------------------- |
| `name`          | String   | User's full name                  |
| `email`         | String   | Unique email (lowercased)         |
| `password`      | String   | Bcrypt hashed (hidden by default) |
| `role`          | String   | `user` or `admin`                 |
| `referralCode`  | String   | Auto-generated unique code        |
| `referredBy`    | ObjectId | Reference to the referring user   |
| `referrals`     | Array    | List of users referred            |
| `referralStats` | Object   | `totalReferrals`, `rewards`, etc. |
| `isActive`      | Boolean  | Account active status             |
| `isDeleted`     | Boolean  | Soft delete flag                  |
| `lastLogin`     | Date     | Last login timestamp              |

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
