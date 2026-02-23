import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F6F8F7] dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-[#1F2937] dark:text-white mb-4">
        {t('welcome')}
      </h1>
      <p className="text-[#6B7280] dark:text-gray-300">
        Home Page Content
      </p>
    </div>
  )
}

export default HomePage