import React from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme)
  }

  return (
    <div className="flex items-center rounded-full bg-gray-100 dark:bg-gray-800 p-1">
      <button
        onClick={() => handleThemeChange("light")}
        className={`px-1 py-1 text-xs lg:text-sm rounded-full transition
          ${
            theme === "light"
              ? "bg-white dark:bg-black text-[#006747] dark:text-[#00A86B] shadow"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }
        `}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>

      <button
        onClick={() => handleThemeChange("dark")}
        className={`px-1 py-1 text-xs lg:text-sm rounded-full transition
          ${
            theme === "dark"
              ? "bg-white dark:bg-black text-[#006747] dark:text-[#00A86B] shadow"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }
        `}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  )
}

export default ThemeToggle