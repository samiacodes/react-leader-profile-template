import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Play, Music, Calendar } from 'lucide-react'
import type { GalleryItem } from '@/config/galleryContent'

interface GalleryCardProps {
  item: GalleryItem
  type: 'photo' | 'video' | 'audio'
}

const GalleryCard = ({ item, type }: GalleryCardProps) => {
  const { language } = useLanguage()

  const getIcon = () => {
    switch(type) {
      case 'video': return <Play className="h-5 w-5" />
      case 'audio': return <Music className="h-5 w-5" />
      default: return null
    }
  }

  return (
    <div className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title[language]}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs">
          {type === 'photo' && (language === 'en' ? 'Photo' : 'ছবি')}
          {type === 'video' && (language === 'en' ? 'Video' : 'ভিডিও')}
          {type === 'audio' && (language === 'en' ? 'Audio' : 'অডিও')}
        </div>

        {/* Play/Overlay Icon */}
        {type !== 'photo' && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="text-primary">{getIcon()}</div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-2 line-clamp-2">
          {item.title[language]}
        </h3>
        
        {item.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {item.description[language]}
          </p>
        )}

        {/* Date */}
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
          <Calendar className="h-3 w-3" />
          <span>{new Date(item.date).toLocaleDateString(
            language === 'en' ? 'en-US' : 'bn-BD',
            { year: 'numeric', month: 'long', day: 'numeric' }
          )}</span>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard