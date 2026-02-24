import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import { pageContent } from '@/config/pageContent'

const WorksPage = () => {
  const { language } = useLanguage()
  const content = pageContent.works[language]

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: content.title, path: '/works' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <PageHeader 
        title={content.title}
        description={content.description}
        breadcrumb={breadcrumb}
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Works content will go here */}
          <p className="text-center text-gray-600 dark:text-gray-400">
            {language === 'en' 
              ? 'Notable works coming soon...' 
              : 'উল্লেখযোগ্য কাজ খুব শীঘ্রই আসছে...'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorksPage