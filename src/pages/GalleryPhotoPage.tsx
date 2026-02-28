import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import { galleryContent } from '@/config/galleryContent'
import { Image } from 'lucide-react'

const GalleryPhotoPage = () => {
  const { language } = useLanguage()
  const photos = galleryContent.photos

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
        {/* Photo Stats */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Image className="h-4 w-4 text-primary" />
            <span>{photos.length} {language === 'en' ? 'Photos' : 'ছবি'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="text-primary">•</span>
            <span>{language === 'en' ? 'Click to enlarge' : 'বড় করতে ক্লিক করুন'}</span>
          </div>
        </div>

        {/* Photo Grid */}
        <GalleryGrid items={photos} type="photo" />
      </div>
    </div>
  )
}

export default GalleryPhotoPage