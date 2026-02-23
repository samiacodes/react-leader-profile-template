import React from 'react'
import { useTranslation } from 'react-i18next'

const NewsPage = () => {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#006747] dark:text-[#00A86B] text-center mb-8">
          {t('news')}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400">
          News & updates page content coming soon...
        </p>
      </div>
    </div>
  )
}

export default NewsPage