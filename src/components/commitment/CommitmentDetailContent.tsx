import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import { Calendar, CheckCircle, Target } from 'lucide-react'
import CTACard from '@/components/ui/CTACard'
import type { CommitmentDetail } from '@/config/commitmentContent'

interface CommitmentDetailContentProps {
  commitment: CommitmentDetail
}

const CommitmentDetailContent = ({ commitment }: CommitmentDetailContentProps) => {
  const { language } = useLanguage()

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: language === 'en' ? 'Commitment' : 'অঙ্গীকার', path: '/commitment' },
    { label: commitment.title[language], path: commitment.path }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <PageHeader
        title={commitment.title[language]}
        description={commitment.description[language]}
        breadcrumb={breadcrumb}
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {commitment.images.map((img, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img}
                  alt={`${commitment.title[language]} - ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Plan Section */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-6 w-6 text-[#006747] dark:text-[#00A86B]" />
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  {language === 'en' ? 'Our Plan' : 'আমাদের পরিকল্পনা'}
                </h2>
              </div>
              <p className="text-black dark:text-white leading-relaxed">
                {commitment.plan[language]}
              </p>
            </div>

            {/* Achievements Section */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-6 w-6 text-[#006747] dark:text-[#00A86B]" />
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  {language === 'en' ? 'Achievements' : 'অর্জন'}
                </h2>
              </div>
              <p className="text-black dark:text-white leading-relaxed">
                {commitment.achievements[language]}
              </p>
            </div>
          </div>

          {/* Updates Timeline */}
          <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-[#006747] dark:text-[#00A86B]" />
              <h2 className="text-2xl font-bold text-black dark:text-white">
                {language === 'en' ? 'Latest Updates' : 'সর্বশেষ আপডেট'}
              </h2>
            </div>
            
            <div className="space-y-4">
              {commitment.updates.map((update, index) => (
                <div key={index} className="flex gap-4 border-l-2 border-[#006747] dark:border-[#00A86B] pl-4">
                  <div className="text-sm text-[#006747] dark:text-[#00A86B] font-medium whitespace-nowrap">
                    {update.date}
                  </div>
                  <div className="text-black dark:text-white">
                    {update.text[language]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <CTACard />
        </div>
      </div>
    </div>
  )
}

export default CommitmentDetailContent