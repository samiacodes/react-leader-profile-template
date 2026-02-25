import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { getCandidateContent } from '@/config/candidateContent'
import { siteConfig } from '@/config/siteConfig'
import { Target, Heart, Award, CheckCircle, User, Calendar, MapPin, Users } from 'lucide-react'
import CTACard from '@/components/ui/CTACard'
import ArrowButton from '@/components/ui/ArrowButton'

const CandidateSection = () => {
  const { language } = useLanguage()
  const content = getCandidateContent(language)
  const { leader } = siteConfig

  // Icon mapping for personal details
  const detailIcons = [
    <User key="user" className="h-5 w-5" />,
    <Users key="party" className="h-5 w-5" />,
    <Award key="position" className="h-5 w-5" />,
    <Calendar key="birth" className="h-5 w-5" />,
    <MapPin key="birthplace" className="h-5 w-5" />,
    <MapPin key="district" className="h-5 w-5" />,
    <MapPin key="constituency" className="h-5 w-5" />,
    <Calendar key="term" className="h-5 w-5" />
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header with Badge */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#006747]/10 dark:bg-[#00A86B]/20 text-[#006747] dark:text-[#00A86B] rounded-full text-sm font-medium mb-4">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Main Content - Full Width */}
        <div className="space-y-12">

          {/* Personal Details Section - Half Image, Half Text */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
              {language === 'en' ? 'Personal Information' : 'ব্যক্তিগত তথ্য'}
            </h3>
            <div className="flex flex-col lg:flex-row gap-4 items-start">
              {/* Image - Half (Centered on Mobile) */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square  mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-[#006747] dark:border-[#00A86B] shadow-xl">
                  <img
                    src={leader.imagePath}
                    alt={leader.name[language]}
                    className="w-auto h-auto object-cover"
                  />
                </div>
              </div>

              {/* Personal Details - Half, Full Width on Mobile */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-1 w-full">
                  {content.personalDetails.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3 border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 w-full">
                      <span className="text-[#006747] dark:text-[#00A86B] shrink-0 mt-1">
                        {detailIcons[index % detailIcons.length]}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center lg:text-left">{detail.label}</p>
                        <p className="text-base font-medium text-gray-900 dark:text-white wrap-break-words text-center lg:text-left">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission - 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#006747]/10 dark:bg-[#00A86B]/20 p-4 rounded-full">
                  <Target className="h-8 w-8 text-[#006747] dark:text-[#00A86B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {content.vision.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {content.vision.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#006747] dark:text-[#00A86B] shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#006747]/10 dark:bg-[#00A86B]/20 p-4 rounded-full">
                  <Heart className="h-8 w-8 text-[#006747] dark:text-[#00A86B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {content.mission.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {content.mission.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#006747] dark:text-[#00A86B] shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats - 4 Columns on Large Screens */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {content.achievements.title}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {content.achievements.stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <p className="text-3xl font-bold text-[#006747] dark:text-[#00A86B] mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <CTACard />
        </div>

        {/* Bottom Arrow Button */}
        <div className="text-center mt-12">
          <ArrowButton
            to="/commitment"
            text={content.cta}
          />
        </div>
      </div>
    </section>
  )
}

export default CandidateSection