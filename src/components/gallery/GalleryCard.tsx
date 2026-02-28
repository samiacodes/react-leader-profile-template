import React, { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Play, Music, Calendar, Download, ExternalLink, Maximize2 } from 'lucide-react'
import type { GalleryItem } from '@/config/galleryContent'

interface GalleryCardProps {
  item: GalleryItem
  type: 'photo' | 'video' | 'audio'
  onClick?: () => void
}

const GalleryCard = ({ item, type, onClick }: GalleryCardProps) => {
  const { language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)

  const getIcon = () => {
    switch(type) {
      case 'video': return <Play className="h-5 w-5" />
      case 'audio': return <Music className="h-5 w-5" />
      default: return <Maximize2 className="h-5 w-5" />
    }
  }

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (type === 'video' && item.url) {
      window.open(item.url, '_blank')
    } else if (type === 'audio' && item.url) {
      setIsPlaying(!isPlaying)
      // অডিও প্লেয়ার লজিক এখানে
    }
  }

  const handleCardClick = () => {
    if (type === 'photo' && onClick) {
      onClick()
    }
  }

  return (
    <div 
      className={`group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
        type === 'photo' ? 'cursor-pointer' : ''
      }`}
      onClick={handleCardClick}
    >
      
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

        {/* Overlay Icon */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          type === 'photo' ? 'bg-black/20' : ''
        }`}>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
            <div className={type === 'photo' ? 'text-primary' : 'text-primary'}>
              {type === 'photo' ? <Maximize2 className="h-5 w-5" /> : getIcon()}
            </div>
          </div>
        </div>

        {/* Video/Audio Play Button (separate) */}
        {type !== 'photo' && (
          <div 
            onClick={handlePlay}
            className="absolute bottom-3 right-3 bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-dark"
          >
            {type === 'video' ? <Play className="h-4 w-4" /> : <Music className="h-4 w-4" />}
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

        {/* Metadata */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
            <Calendar className="h-3 w-3" />
            <span>{new Date(item.date).toLocaleDateString(
              language === 'en' ? 'en-US' : 'bn-BD',
              { year: 'numeric', month: 'long', day: 'numeric' }
            )}</span>
          </div>

          {/* Action Buttons */}
          {item.url && type !== 'photo' && (
            <div className="flex gap-2">
              {type === 'audio' && (
                <button 
                  onClick={(e) => { e.stopPropagation(); window.open(item.url, '_blank') }}
                  className="text-gray-500 hover:text-primary transition-colors"
                  title={language === 'en' ? 'Download' : 'ডাউনলোড'}
                >
                  <Download className="h-4 w-4" />
                </button>
              )}
              {type === 'video' && (
                <button 
                  onClick={(e) => { e.stopPropagation(); window.open(item.url, '_blank') }}
                  className="text-gray-500 hover:text-primary transition-colors"
                  title={language === 'en' ? 'Watch' : 'দেখুন'}
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GalleryCard