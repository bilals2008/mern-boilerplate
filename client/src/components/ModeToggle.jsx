// File: client/src/components/ModeToggle.jsx
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const ModeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-background hover:bg-muted transition-colors"
        >
            <Sun
                className={`absolute w-4 h-4 transition-all duration-300 ${theme === 'dark'
                        ? 'opacity-0 rotate-90 scale-50'
                        : 'opacity-100 rotate-0 scale-100'
                    }`}
            />
            <Moon
                className={`absolute w-4 h-4 transition-all duration-300 ${theme === 'dark'
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 -rotate-90 scale-50'
                    }`}
            />
        </button>
    )
}

export default ModeToggle
