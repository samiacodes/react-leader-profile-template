import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import { galleryContent } from '@/config/galleryContent'
import { Play, Calendar, Clock } from 'lucide-react'

const GalleryVideoPage = () => {
  const { language } = useLanguage()
  const videos = galleryContent.videos

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: language === 'en' ? 'Gallery' : 'গ্যালারি', path: '/gallery' },
    { label: language === 'en' ? 'Videos' : 'ভিডিও', path: '/gallery/video' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <PageHeader 
        title={language === 'en' ? 'Video Gallery' : 'ভিডিও গ্যালারি'}
        description={language === 'en' 
          ? 'Watch speeches, interviews, and important events coverage.'
          : 'ভাষণ, সাক্ষাৎকার ও গুরুত্বপূর্ণ ইভেন্টের ভিডিও দেখুন।'
        }
        breadcrumb={breadcrumb}
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Video Stats */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Play className="h-4 w-4 text-primary" />
            <span>{videos.length} {language === 'en' ? 'Videos' : 'ভিডিও'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Clock className="h-4 w-4 text-primary" />
            <span>{language === 'en' ? 'Updated regularly' : 'নিয়মিত আপডেট হয়'}</span>
          </div>
        </div>

        {/* Video Grid */}
        <GalleryGrid items={videos} type="video" />
      </div>
    </div>
  )
}

export default GalleryVideoPage