import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { getJourneyContent } from '@/config/journeyContent'
import { Calendar, Award, TrendingUp, Heart, Users } from 'lucide-react'

const JourneyTimeline = () => {
  const { language } = useLanguage()
  const content = getJourneyContent(language)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Icon mapping for points
  const pointIcons = [
    <Award className="h-4 w-4" key="award" />,
    <TrendingUp className="h-4 w-4" key="trend" />,
    <Heart className="h-4 w-4" key="heart" />,
    <Users className="h-4 w-4" key="users" />,
    <Calendar className="h-4 w-4" key="cal" />
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 md:py-28 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#006747]/10 dark:bg-[#00A86B]/20 text-[#006747] dark:text-[#00A86B] rounded-full text-sm font-medium mb-4">
            {content.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#006747] to-[#DA291C] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-[#006747]/30 via-[#DA291C]/30 to-[#006747]/30 -translate-y-1/2"></div>

          {content.timeline.map((item, index) => (
            <div
              key={item.year}
              className={`
                relative group
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Year Circle */}
              <div className="relative z-10 mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full border-4 border-[#006747] dark:border-[#00A86B] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-[#006747] dark:text-[#00A86B]">
                      {item.year}
                    </span>
                  </div>
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-full bg-[#006747]/20 dark:bg-[#00A86B]/20 animate-ping"></div>
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform group-hover:-translate-y-2 transition-all duration-300 border-l-4 border-[#006747] dark:border-[#00A86B]">
                <ul className="space-y-4">
                  {item.points.map((point, idx) => (
                    <li 
                      key={idx} 
                      className={`
                        flex items-start gap-3
                        transition-all duration-500
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                      `}
                      style={{ transitionDelay: `${index * 200 + idx * 100}ms` }}
                    >
                      <span className="text-[#006747] dark:text-[#00A86B] shrink-0 mt-1">
                        {pointIcons[idx % pointIcons.length]}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Year Label for Mobile */}
              <div className="md:hidden text-center mt-4">
                <span className="inline-block px-4 py-1 bg-[#006747]/10 dark:bg-[#00A86B]/20 text-[#006747] dark:text-[#00A86B] rounded-full text-sm font-medium">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md">
            <Calendar className="h-5 w-5 text-[#006747] dark:text-[#00A86B]" />
            <span className="text-gray-700 dark:text-gray-300">
              {language === 'en' 
                ? 'Three consecutive terms serving the people' 
                : 'টানা তিন মেয়াদ জনগণের সেবায়'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneyTimeline