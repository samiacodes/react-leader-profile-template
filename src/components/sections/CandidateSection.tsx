import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { getCandidateContent } from '@/config/candidateContent'
import { siteConfig } from '@/config/siteConfig'
import {
  Target,
  Heart,
  Award,
  CheckCircle,
  User,
  Calendar,
  MapPin,
  Users,
} from 'lucide-react'
import CTACard from '@/components/ui/CTACard'
import ArrowButton from '@/components/ui/ArrowButton'
import PoliticalRole from './PoliticalRole'
import JourneyTimeline from './JourneyTimeline'

const CandidateSection = () => {
  const { language } = useLanguage()
  const content = getCandidateContent(language)
  const { leader } = siteConfig

  const detailIcons = [
    <User key="user" className="h-5 w-5" />,
    <Users key="party" className="h-5 w-5" />,
    <Award key="position" className="h-5 w-5" />,
    <Calendar key="birth" className="h-5 w-5" />,
    <MapPin key="birthplace" className="h-5 w-5" />,
    <MapPin key="district" className="h-5 w-5" />,
    <MapPin key="constituency" className="h-5 w-5" />,
    <Calendar key="term" className="h-5 w-5" />,
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary dark:bg-white rounded-full text-sm font-bold mb-4">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-black dark:text-white max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="space-y-12">

          {/* Personal Info */}
          <div>
            <h3 className="text-2xl font-bold text-center text-black dark:text-white mb-6">
              {language === 'en' ? 'Personal Information' : 'ব্যক্তিগত তথ্য'}
            </h3>

            <div className="flex flex-col lg:flex-row gap-4 items-stretch">

              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square h-full mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-primary shadow-xl">
                  <img
                    src={leader.imagePath}
                    alt={leader.name[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="w-full lg:w-1/2">
                <div className="h-full bg-white text-black rounded-2xl shadow-xl p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
                    {content.personalDetails.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 border-b border-secondary/20 pb-2"
                      >
                        <span className="text-primary shrink-0 mt-1">
                          {detailIcons[index % detailIcons.length]}
                        </span>
                        <div>
                          <p className="text-sm">
                            {detail.label}
                          </p>
                          <p className="text-base font-medium wrap-break-words">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Vision */}
            <div className="bg-white text-black rounded-2xl shadow-xl p-8 transition-transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full border border-secondary/20">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  {content.vision.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {content.vision.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-white text-black rounded-2xl shadow-xl p-8 transition-transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full border border-secondary/20">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  {content.mission.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {content.mission.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white text-black rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {content.achievements.title}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {content.achievements.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl border border-secondary/20"
                >
                  <p className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        <PoliticalRole />
          {/* CTA */}
          <CTACard />
        </div>

        {/* Bottom Arrow */}
        <div className="text-center mt-12">
          <ArrowButton to="/commitment" text={content.cta} />
        </div>
      </div>
    </section>
  )
}

export default CandidateSection