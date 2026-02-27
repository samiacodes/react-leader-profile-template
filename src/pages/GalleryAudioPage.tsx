import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import { galleryContent } from '@/config/galleryContent'
import { Music, Calendar, Headphones } from 'lucide-react'

const GalleryAudioPage = () => {
  const { language } = useLanguage()
  const audios = galleryContent.audio

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: language === 'en' ? 'Gallery' : 'গ্যালারি', path: '/gallery' },
    { label: language === 'en' ? 'Audio' : 'অডিও', path: '/gallery/audio' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <PageHeader 
        title={language === 'en' ? 'Audio Gallery' : 'অডিও গ্যালারি'}
        description={language === 'en' 
          ? 'Listen to radio interviews, speeches, and important announcements.'
          : 'রেডিও সাক্ষাৎকার, ভাষণ ও গুরুত্বপূর্ণ ঘোষণা শুনুন।'
        }
        breadcrumb={breadcrumb}
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Audio Stats */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Headphones className="h-4 w-4 text-primary" />
            <span>{audios.length} {language === 'en' ? 'Audio Files' : 'অডিও ফাইল'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Music className="h-4 w-4 text-primary" />
            <span>{language === 'en' ? 'Podcasts & Interviews' : 'পডকাস্ট ও সাক্ষাৎকার'}</span>
          </div>
        </div>

        {/* Audio Grid */}
        <GalleryGrid items={audios} type="audio" />

        {/* Audio Player Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {language === 'en' 
              ? 'Click on any audio card to listen online or download.'
              : 'যেকোনো অডিও কার্ডে ক্লিক করে অনলাইনে শুনুন বা ডাউনলোড করুন।'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GalleryAudioPage