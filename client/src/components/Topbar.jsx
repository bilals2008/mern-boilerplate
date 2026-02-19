// File: client/src/components/Topbar.jsx
import ModeToggle from './ModeToggle'

const Topbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 font-bold text-sm tracking-tight">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-primary text-primary-foreground text-xs font-black">
                        M
                    </span>
                    <span>MERN Boilerplate</span>
                </a>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        GitHub
                    </a>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Topbar
