import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import { pageContent } from '@/config/pageContent'
import CandidateSection from '@/components/sections/CandidateSection'

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

      <CandidateSection/>
      
      
    </div>
  )
}

export default CandidatePage