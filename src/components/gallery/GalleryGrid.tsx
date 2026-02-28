import React, { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage' // ← ইম্পোর্ট যোগ করুন
import GalleryCard from './GalleryCard'
import Lightbox from './Lightbox'
import type { GalleryItem } from '@/config/galleryContent'

interface GalleryGridProps<T extends GalleryItem> {
  items: T[]
  type: T['category']
}

function GalleryGrid<T extends GalleryItem>({ items, type }: GalleryGridProps<T>) {
  const { language } = useLanguage() // ← হুক ব্যবহার করুন
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No items found</p>
      </div>
    )
  }

  const handleImageClick = (index: number) => {
    if (type === 'photo') {
      setCurrentIndex(index)
      setLightboxOpen(true)
    }
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const currentItem = items[currentIndex]

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <GalleryCard 
            key={item.id} 
            item={item} 
            type={type}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {/* Lightbox for Photos */}
      {type === 'photo' && lightboxOpen && (
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          currentImage={{
            src: currentItem.thumbnail,
            title: currentItem.title[language], 
            description: currentItem.description 
              ? currentItem.description[language] 
              : undefined
          }}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={items.length > 1}
          hasPrev={items.length > 1}
        />
      )}
    </>
  )
}

export default GalleryGrid