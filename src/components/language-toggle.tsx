import React from "react"

type Props = {
  value: "en" | "bn"
  onChange: (val: "en" | "bn") => void
}

const LanguageToggle = ({ value, onChange }: Props) => {
  return (
    <div className="flex items-center rounded-full bg-gray-100 dark:bg-gray-800 p-1">
      <button
        onClick={() => onChange("en")}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition
          ${
            value === "en"
              ? "bg-white dark:bg-black text-[#006747] dark:text-[#00A86B] shadow"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }
        `}
      >
        EN
      </button>

      <button
        onClick={() => onChange("bn")}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition
          ${
            value === "bn"
              ? "bg-white dark:bg-black text-[#006747] dark:text-[#00A86B] shadow"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }
        `}
      >
        BN
      </button>
    </div>
  )
}

export default LanguageToggle