import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import MPContactForm from '@/components/forms/MPContactForm'
import PageHeader from '@/components/ui/PageHeader'
import { pageContent } from '@/config/pageContent'

const ReachOutPage = () => {
  const { language } = useLanguage()
  const content = pageContent.writeToMP[language]

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: content.title, path: '/write-to-mp' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Page Header */}
      <PageHeader 
        title={content.title}
        description={content.description}
        breadcrumb={breadcrumb}
        // bgImage="/images/parliament-bg.jpg" 
      />

      {/* Form Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <MPContactForm />
      </div>
    </div>
  )
}

export default ReachOutPage