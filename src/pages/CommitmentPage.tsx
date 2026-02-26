import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import CommitmentCard from '@/components/ui/CommitmentCard'
import { pageContent } from '@/config/pageContent'
import { commitmentContent } from '@/config/commitmentContent'
import CTACard from '@/components/ui/CTACard'
import ArrowButton from '@/components/ui/ArrowButton'

const CommitmentPage = () => {
  const { language } = useLanguage()
  const content = pageContent.commitment[language]

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: content.title, path: '/commitment' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <PageHeader
        title={content.title}
        description={content.description}
        breadcrumb={breadcrumb}
      />

      {/* Commitment Cards Grid */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {commitmentContent.map((commitment) => (
            <CommitmentCard
              key={commitment.number}
              number={commitment.number}
              title={commitment.title[language]}
              description={commitment.description[language]}
              path={commitment.path}
              icon={commitment.icon}
            />
          ))}
        </div>
      </div>
      <div className='mb-4'>
        {/* CTA */}
        <CTACard />
      </div>
    </div>
  )
}

export default CommitmentPage