import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import WriteToMPButton from '@/components/ui/WriteToMPButton'
import { siteConfig } from '@/config/siteConfig'

const HeroSection = () => {
  const { language } = useLanguage()
  const { leader } = siteConfig

  return (
    <section className="w-full relative bg-white dark:bg-black min-h-fit overflow-hidden">
     
      <div className="relative z-10 py-8">
        <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
          
          {/* Top Text - Tagline */}
          <div className="text-center mb-8 md:mb-12 w-full max-w-4xl mx-auto">
            <p className="text-primary font-medium text-2xl md:text-4xl lg:text-5xl tracking-wide leading-relaxed">
              {leader.tagline[language]} {leader.constituency[language]}
            </p>
          </div>

          {/* Mobile View (Stacked Layout) */}
          <div className="block md:hidden w-full">
            {/* Name */}
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold text-black dark:text-white">
                {leader.name[language]}
              </h1>
            </div>

            {/* Designation */}
            <div className="text-center mb-6">
              <p className="text-xl text-black dark:text-white">
                {leader.designation[language]} {leader.constituency[language]}
              </p>
            </div>

            {/* Image with Button */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <img
                  src={leader.imagePath}
                  alt={leader.name[language]}
                  className="object-cover w-full h-full rounded-t-full shadow-2xl border-4 border-primary"
                />
                
                {/* Button on Image */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-40">
                  <WriteToMPButton className="w-full shadow-lg text-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - Three Column Layout */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-4 lg:gap-8 xl:gap-12 w-full max-w-6xl mx-auto items-center">
            
            {/* Left Column - Name */}
            <div className="text-right">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-white">
                {leader.name[language]}
              </h1>
            </div>

            {/* Center Column - Image */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                <img
                  src={leader.imagePath}
                  alt={leader.name[language]}
                  className="object-cover w-full h-full rounded-t-full shadow-2xl border-4 border-primary"
                />
                
                {/* Button on Image */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-40">
                  <WriteToMPButton className="w-full shadow-lg text-sm" />
                </div>
              </div>
            </div>

            {/* Right Column - Designation */}
            <div className="text-left">
              <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-black dark:text-white">
                {leader.designation[language]} {leader.constituency[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection