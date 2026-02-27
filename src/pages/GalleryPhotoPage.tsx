import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import { galleryContent } from '@/config/galleryContent'

const GalleryPhotoPage = () => {
  const { language } = useLanguage()

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: language === 'en' ? 'Gallery' : 'গ্যালারি', path: '/gallery' },
    { label: language === 'en' ? 'Photos' : 'ছবি', path: '/gallery/photo' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <PageHeader 
        title={language === 'en' ? 'Photo Gallery' : 'ছবির গ্যালারি'}
        description={language === 'en' 
          ? 'A collection of photographs capturing important moments and events.'
          : 'গুরুত্বপূর্ণ মুহূর্ত ও ঘটনার ছবির সংগ্রহ।'
        }
        breadcrumb={breadcrumb}
      />
      <div className="container mx-auto px-4 py-12">
        <GalleryGrid items={galleryContent.photos} type="photo" />
      </div>
    </div>
  )
}

export default GalleryPhotoPage