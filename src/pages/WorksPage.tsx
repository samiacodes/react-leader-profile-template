import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import WorkItem from '@/components/works/WorkItem'
import CTACard from '@/components/ui/CTACard'
import { pageContent } from '@/config/pageContent'
import { worksContent } from '@/config/worksContent'

const WorksPage = () => {
  const { language } = useLanguage()
  const content = pageContent.works[language]

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: content.title, path: '/works' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <PageHeader 
        title={content.title}
        description={content.description}
        breadcrumb={breadcrumb}
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Works Grid */}
          <div className="space-y-16 md:space-y-24">
            {worksContent.map((work, index) => (
              <WorkItem key={work.id} work={work} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20">
            <CTACard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorksPage