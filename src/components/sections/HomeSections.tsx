import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { getHomeSectionsContent } from '@/config/homeSectionsContent'
import HomeSectionCard from './HomeSectionCard'
import { Target, Award, Image, Newspaper } from 'lucide-react'

const iconMap = {
  commitment: Target,
  works: Award,
  gallery: Image,
  news: Newspaper
}

const HomeSections = () => {
  const { language } = useLanguage()
  const content = getHomeSectionsContent(language)

 
  if (!content) {
    return null
  }

  const sections = [
    {
      key: 'commitment',
      title: content.commitment.title,
      description: content.commitment.description,
      cta: content.commitment.cta,
      path: content.commitment.path,
      icon: iconMap.commitment
    },
    {
      key: 'works',
      title: content.works.title,
      description: content.works.description,
      cta: content.works.cta,
      path: content.works.path,
      icon: iconMap.works
    },
    {
      key: 'gallery',
      title: content.gallery.title,
      description: content.gallery.description,
      cta: content.gallery.cta,
      path: content.gallery.path,
      icon: iconMap.gallery
    },
    {
      key: 'news',
      title: content.news.title,
      description: content.news.description,
      cta: content.news.cta,
      path: content.news.path,
      icon: iconMap.news
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            {language === 'en' ? 'Explore More' : 'আরও জানুন'}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#006747] to-[#00A86B] mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <HomeSectionCard
                key={section.key}
                title={section.title}
                description={section.description}
                cta={section.cta}
                path={section.path}
                icon={<Icon className="h-6 w-6" />}
                delay={index * 100}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeSections