
import { useLanguage } from '@/hooks/useLanguage'

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage()

  return (
    <button
      onClick={() => changeLanguage(language === 'en' ? 'bn' : 'en')}
      className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
    >
      <span className={`absolute left-1.5 top-1/2 -translate-y-1/2 text-xs font-medium ${language === 'en' ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}>
        EN
      </span>
      <span className={`absolute right-1.5 top-1/2 -translate-y-1/2 text-xs font-medium ${language === 'bn' ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}>
        BN
      </span>
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full bg-primary shadow-md transform transition-transform duration-300 ${
          language === 'en' ? 'translate-x-0.5' : 'translate-x-7'
        }`}
      />
    </button>
  )
}

export default LanguageToggle