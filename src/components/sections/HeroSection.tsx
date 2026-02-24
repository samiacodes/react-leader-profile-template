import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import WriteToMPButton from '@/components/ui/WriteToMPButton'
import { siteConfig } from '@/config/siteConfig'

const HeroSection = () => {
  const { language } = useLanguage()
  const { leader } = siteConfig

  return (
    <section className="bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-12 md:py-20">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl text-[#006747] dark:text-[#00A86B] font-medium mb-2">
              {leader.tagline[language]} {leader.constituency[language]}
            </h2>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3">
              {leader.name[language]}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2">
              {leader.designation[language]}
            </p>

            <p className="text-lg md:text-xl text-[#006747] dark:text-[#00A86B] font-semibold mb-6 md:mb-8">
              {leader.constituency[language]}
            </p>

            <div className="flex justify-center md:justify-start">
              <WriteToMPButton className="px-6 py-3 text-base" />
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-auto">
              <img
                src={leader.imagePath}
                alt={leader.name[language]}
                className="object-cover w-full h-full shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection