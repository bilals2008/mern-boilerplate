// File: client/src/pages/Home/HomePage.jsx
import {
  Database,
  Globe,
  KeyRound,
  Layers,
  Lock,
  Server,
  Shield,
  Zap,
} from 'lucide-react'

const techStack = [
  { label: 'React 19', category: 'Frontend' },
  { label: 'React Router v7', category: 'Frontend' },
  { label: 'Tailwind CSS v4', category: 'Frontend' },
  { label: 'shadcn/ui', category: 'Frontend' },
  { label: 'Node.js', category: 'Backend' },
  { label: 'Express 5', category: 'Backend' },
  { label: 'MongoDB', category: 'Database' },
  { label: 'Mongoose 8', category: 'Database' },
  { label: 'JWT', category: 'Auth' },
  { label: 'bcryptjs', category: 'Auth' },
]

const features = [
  {
    icon: <KeyRound className="w-5 h-5" />,
    title: 'JWT Authentication',
    desc: 'Secure token-based auth stored in HTTP-only cookies.',
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Password Hashing',
    desc: 'bcryptjs with salt rounds of 12 for strong security.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Security Middleware',
    desc: 'Helmet, CORS, rate limiting & mongo-sanitize built in.',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Role-based Access',
    desc: 'Admin and user roles with protected route middleware.',
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: 'MongoDB + Mongoose',
    desc: 'Schema validation, indexes, virtuals and soft deletes.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'ES Modules',
    desc: 'Modern import/export syntax throughout the entire stack.',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'React Router v7',
    desc: 'File-based routing and nested layouts ready to go.',
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: 'Express 5',
    desc: 'Latest Express with async error handling out of the box.',
  },
]

const apiRoutes = [
  { method: 'POST', path: '/api/auth/signup', desc: 'Register a new user', auth: false },
  { method: 'POST', path: '/api/auth/signin', desc: 'Login & receive JWT cookie', auth: false },
  { method: 'GET', path: '/api/auth/profile/:id', desc: 'Get user profile', auth: true },
  { method: 'PUT', path: '/api/auth/change-password', desc: 'Change password', auth: true },
  { method: 'POST', path: '/api/auth/logout', desc: 'Clear auth cookie', auth: true },
  { method: 'GET', path: '/health', desc: 'Server liveness check', auth: false },
]

const methodColor = {
  GET: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
  POST: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
  PUT: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400',
  DELETE: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
}

const categoryColor = {
  Frontend: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400',
  Backend: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400',
  Database: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
  Auth: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400',
}

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden">
        {/* subtle grid bg */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 0%, oklch(0.7 0.15 260 / 0.12) 0%, transparent 70%)',
          }}
        />

        <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6 bg-muted/50 backdrop-blur">
          🚀 Production-Ready Boilerplate
        </span>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
          MERN{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, oklch(0.55 0.22 260), oklch(0.65 0.2 310))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Boilerplate
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
          A secure, modern full-stack starter with authentication, role-based
          access, and a beautiful React frontend — ready to build on.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View on GitHub
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
          >
            Explore Features
          </a>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Everything You Need</h2>
        <p className="text-center text-muted-foreground mb-12">
          Security, auth, and modern tooling — baked in from day one.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <div className="mb-3 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {f.icon}
              </div>
              <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Tech Stack</h2>
          <p className="text-center text-muted-foreground mb-10">
            Best-in-class tools across the full stack.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold ${categoryColor[t.category]}`}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── API Reference ── */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">API Endpoints</h2>
        <p className="text-center text-muted-foreground mb-10">
          Clean RESTful routes ready to extend.
        </p>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="text-left px-4 py-3 font-semibold text-muted-foreground w-20">Method</th>
                <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Endpoint</th>
                <th className="text-left px-4 py-3 font-semibold text-muted-foreground hidden sm:table-cell">Description</th>
                <th className="text-center px-4 py-3 font-semibold text-muted-foreground w-16">Auth</th>
              </tr>
            </thead>
            <tbody>
              {apiRoutes.map((r, i) => (
                <tr
                  key={r.path}
                  className={`border-b border-border last:border-0 hover:bg-muted/30 transition-colors ${i % 2 === 0 ? '' : 'bg-muted/10'
                    }`}
                >
                  <td className="px-4 py-3">
                    <span className={`rounded px-2 py-0.5 text-xs font-bold font-mono ${methodColor[r.method]}`}>
                      {r.method}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-foreground/80">{r.path}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{r.desc}</td>
                  <td className="px-4 py-3 text-center">
                    {r.auth ? (
                      <span title="Auth required" className="text-amber-500">🔒</span>
                    ) : (
                      <span title="Public" className="text-emerald-500">✓</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Quick Start ── */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Quick Start</h2>
          <p className="text-center text-muted-foreground mb-10">
            Up and running in under 2 minutes.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                step: '01',
                title: 'Backend',
                code: `cd server\nnpm install\ncp env.example .env\nnpm start`,
              },
              {
                step: '02',
                title: 'Frontend',
                code: `cd client\nnpm install\nnpm run dev`,
              },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-2.5 py-0.5">
                    {s.step}
                  </span>
                  <span className="font-semibold text-sm">{s.title}</span>
                </div>
                <pre className="bg-muted rounded-lg p-4 text-xs font-mono text-foreground/80 overflow-auto whitespace-pre">
                  {s.code}
                </pre>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Backend runs on{' '}
            <code className="bg-muted px-1.5 py-0.5 rounded text-foreground/80">
              http://localhost:8800
            </code>{' '}
            · Frontend on{' '}
            <code className="bg-muted px-1.5 py-0.5 rounded text-foreground/80">
              http://localhost:5173
            </code>
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">
        MERN Boilerplate — ISC License
      </footer>
    </div>
  )
}

export default HomePage
