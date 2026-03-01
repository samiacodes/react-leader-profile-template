import React, { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { galleryContent } from '@/config/galleryContent'
import GalleryHeader from './GalleryHeader'
import GalleryTabs from './GalleryTabs'
import GalleryGrid from './GalleryGrid'
import CTACard from '@/components/ui/CTACard'

// টাইপ গার্ড ফাংশন
const isPhotoItem = (item: any): item is typeof galleryContent.photos[0] => {
  return item.category === 'photo'
}

const isVideoItem = (item: any): item is typeof galleryContent.videos[0] => {
  return item.category === 'video'
}

const isAudioItem = (item: any): item is typeof galleryContent.audio[0] => {
  return item.category === 'audio'
}

const GalleryContainer = () => {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<'photo' | 'video' | 'audio'>('photo')

  const getItems = () => {
    switch(activeTab) {
      case 'photo': return galleryContent.photos
      case 'video': return galleryContent.videos
      case 'audio': return galleryContent.audio
    }
  }

  const getTitle = () => {
    switch(activeTab) {
      case 'photo': return language === 'en' ? 'Photo Gallery' : 'ছবির গ্যালারি'
      case 'video': return language === 'en' ? 'Video Gallery' : 'ভিডিও গ্যালারি'
      case 'audio': return language === 'en' ? 'Audio Gallery' : 'অডিও গ্যালারি'
    }
  }

  const getDescription = () => {
    switch(activeTab) {
      case 'photo': 
        return language === 'en' 
          ? 'A collection of photographs capturing important moments and events.'
          : 'গুরুত্বপূর্ণ মুহূর্ত ও ঘটনার ছবির সংগ্রহ।'
      case 'video':
        return language === 'en'
          ? 'Watch speeches, interviews, and event coverage.'
          : 'ভাষণ, সাক্ষাৎকার ও ইভেন্টের ভিডিও দেখুন।'
      case 'audio':
        return language === 'en'
          ? 'Listen to radio interviews and important announcements.'
          : 'রেডিও সাক্ষাৎকার ও গুরুত্বপূর্ণ ঘোষণা শুনুন।'
    }
  }

  const items = getItems()
  const totalItems = items.length

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto  py-12 md:py-20">
        
        <GalleryHeader 
          title={getTitle()}
          description={getDescription()}
          totalItems={totalItems}
        />

        <GalleryTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* টাইপ কাস্ট করে পাঠান */}
        <GalleryGrid 
          items={items as any} 
          type={activeTab} 
        />

        <div className="mt-16">
          <CTACard />
        </div>
      </div>
    </div>
  )
}

export default GalleryContainer