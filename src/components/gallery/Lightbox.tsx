import React, { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  currentImage: {
    src: string
    title: string | { en: string; bn: string } // টাইটেল স্ট্রিং বা অবজেক্ট হতে পারে
    description?: string | { en: string; bn: string } // ডেসক্রিপশন স্ট্রিং বা অবজেক্ট হতে পারে
  }
  onNext?: () => void
  onPrev?: () => void
  hasNext?: boolean
  hasPrev?: boolean
}

const Lightbox = ({ 
  isOpen, 
  onClose, 
  currentImage, 
  onNext, 
  onPrev, 
  hasNext, 
  hasPrev 
}: LightboxProps) => {
  const { language } = useLanguage()

  // টাইটেল ও ডেসক্রিপশন ভাষা অনুযায়ী দেখানো
  const getTitle = () => {
    if (typeof currentImage.title === 'string') {
      return currentImage.title
    }
    return currentImage.title[language]
  }

  const getDescription = () => {
    if (!currentImage.description) return undefined
    if (typeof currentImage.description === 'string') {
      return currentImage.description
    }
    return currentImage.description[language]
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight' && hasNext && onNext) {
        onNext()
      } else if (e.key === 'ArrowLeft' && hasPrev && onPrev) {
        onPrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    
    // Body scroll lock
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Navigation Buttons */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev?.() }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="h-10 w-10" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext?.() }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="h-10 w-10" />
        </button>
      )}

      {/* Image Container */}
      <div 
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={getTitle()}
          className="max-w-full max-h-[90vh] object-contain"
        />
        
        {/* Image Info */}
        {(getTitle() || getDescription()) && (
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{getTitle()}</h3>
            {getDescription() && (
              <p className="text-sm text-white/80">{getDescription()}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Lightbox