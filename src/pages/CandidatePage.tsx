import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import { pageContent } from '@/config/pageContent'

const CandidatePage = () => {
  const { language } = useLanguage()
  const content = pageContent.candidate[language]

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: content.title, path: '/candidate' }
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
          {/* Candidate content will go here */}
          <p className="text-center text-gray-600 dark:text-gray-400">
            {language === 'en' 
              ? 'Candidate information coming soon...' 
              : 'প্রার্থীর তথ্য খুব শীঘ্রই আসছে...'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CandidatePage