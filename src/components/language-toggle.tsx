import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage()

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'bn' : 'en')
  }

  return (
    <div 
      onClick={toggleLanguage}
      className="relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer transition-colors duration-300"
    >
      {/* Background Text */}
      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-600 dark:text-gray-300 z-10">
        EN
      </span>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-600 dark:text-gray-300 z-10">
        BN
      </span>
      
      {/* Sliding Button */}
      <div
        className={`absolute top-0.5 w-7 h-7 rounded-full bg-primary shadow-md transform transition-transform duration-300 ${
          language === 'en' ? 'translate-x-0.5' : 'translate-x-8'
        }`}
      >
        {/* Button Text */}
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
          {language === 'en' ? 'EN' : 'BN'}
        </span>
      </div>
    </div>
  )
}

export default LanguageToggle