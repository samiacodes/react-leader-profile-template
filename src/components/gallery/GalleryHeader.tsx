import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'

interface GalleryHeaderProps {
  title: string
  description: string
  totalItems: number
}

const GalleryHeader = ({ title, description, totalItems }: GalleryHeaderProps) => {
  const { language } = useLanguage()

  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
        {title}
      </h1>
      <p className="text-black dark:text-white max-w-2xl mx-auto mb-4">
        {description}
      </p>
      <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
        {language === 'en' ? 'Total' : 'মোট'} {totalItems} {language === 'en' ? 'items' : 'আইটেম'}
      </div>
    </div>
  )
}

export default GalleryHeader