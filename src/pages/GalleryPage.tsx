import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import { pageContent } from '@/config/pageContent'

const GalleryPage = () => {
  const { language } = useLanguage()
  const content = pageContent.gallery[language]

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: content.title, path: '/gallery' }
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
          {/* Gallery content will go here */}
          <p className="text-center text-gray-600 dark:text-gray-400">
            {language === 'en' 
              ? 'Gallery coming soon...' 
              : 'গ্যালারি খুব শীঘ্রই আসছে...'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GalleryPage