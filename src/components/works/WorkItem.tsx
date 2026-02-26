import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { WorkItem as WorkItemType } from '@/config/worksContent'

interface WorkItemProps {
  work: WorkItemType
  index: number
}

const WorkItem = ({ work, index }: WorkItemProps) => {
  const { language } = useLanguage()
  const isImageLeft = work.imagePosition === 'left'
  
  return (
    <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center mb-20 last:mb-0`}>
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={work.image}
            alt={work.title[language]}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-[#006747] dark:bg-[#00A86B] text-white px-3 py-1 rounded-full text-sm">
            {work.category[language]}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        <div className="inline-block px-3 py-1 bg-[#006747]/10 dark:bg-[#00A86B]/20 text-[#006747] dark:text-[#00A86B] rounded-full text-sm">
          {language === 'en' ? 'Notable Work' : 'উল্লেখযোগ্য কাজ'} #{index + 1}
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
          {work.title[language]}
        </h2>
        
        <div className="w-16 h-1 bg-linear-to-r from-[#006747] to-[#00A86B] rounded-full"></div>
        
        <p className="text-black dark:text-white leading-relaxed">
          {work.description[language]}
        </p>
      </div>
    </div>
  )
}

export default WorkItem