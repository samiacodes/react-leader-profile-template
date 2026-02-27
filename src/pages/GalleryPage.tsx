import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import GalleryContainer from '@/components/gallery/GalleryContainer'
import { pageContent } from '@/config/pageContent'

const GalleryPage = () => {
  const { language } = useLanguage()
  const content = pageContent.gallery[language]

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: content.title, path: '/gallery' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <PageHeader 
        title={content.title}
        description={content.description}
        breadcrumb={breadcrumb}
      />
      <GalleryContainer />
    </div>
  )
}

export default GalleryPage