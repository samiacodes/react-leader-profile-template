import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './theme-provider'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center rounded-full border border-white/30 p-0.5 h-8 xl:h-9 2xl:h-10">
      <button
        onClick={() => setTheme('light')}
        className={`
          px-2.5 xl:px-3 2xl:px-4 
          h-full
          rounded-full transition 
          flex items-center justify-center
          ${theme === 'light' 
            ? 'bg-white text-black shadow' 
            : 'text-white hover:bg-secondary/80'
          }
        `}
        aria-label="Light mode"
      >
        <Sun className="h-3.5 w-3.5 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`
          px-2.5 xl:px-3 2xl:px-4 
          h-full
          rounded-full transition 
          flex items-center justify-center
          ${theme === 'dark' 
            ? 'bg-black text-white shadow' 
            : 'text-white hover:bg-secondary/80'
          }
        `}
        aria-label="Dark mode"
      >
        <Moon className="h-3.5 w-3.5 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5" />
      </button>
    </div>
  )
}

export default ThemeToggle