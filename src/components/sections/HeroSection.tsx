import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import WriteToMPButton from '@/components/ui/WriteToMPButton'
import { siteConfig } from '@/config/siteConfig'

const HeroSection = () => {
  const { language } = useLanguage()
  const { leader } = siteConfig

  return (
    <section className="w-full relative bg-white dark:bg-black overflow-hidden">
      <div className="relative z-10 py-4 md:py-6">
        <div className="w-full max-w-7xl mx-auto px-4">

          {/* Tagline */}
          <div className="mb-2 md:mb-6">
            <p className="text-primary font-medium text-2xl md:text-4xl lg:text-5xl leading-relaxed max-w-4xl">
              {leader.tagline[language]} {leader.constituency[language]}
            </p>
          </div>

          {/* ================= Mobile Layout ================= */}
          <div className="md:hidden flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-2">
              {leader.name[language]}
            </h1>

            <p className="text-lg text-black dark:text-white mb-6">
              {leader.designation[language]} {leader.constituency[language]}
            </p>

            <div className="relative w-72 h-72">
              <img
                src={leader.imagePath}
                alt={leader.name[language]}
                className="w-full h-full object-cover rounded-t-full border-4 border-primary shadow-2xl"
              />

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full max-w-44">
                <WriteToMPButton className="w-full text-sm shadow-lg" />
              </div>
            </div>
          </div>

          {/* ================= Desktop Layout ================= */}
          <div className="hidden md:grid grid-cols-2 gap-10 lg:gap-16 items-center min-h-[70vh]">

            {/* Left: Text */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white leading-tight">
                {leader.name[language]}
              </h1>

              <p className="text-xl lg:text-2xl xl:text-3xl font-semibold text-secondary">
                {leader.designation[language]} {leader.constituency[language]}
              </p>

              <div className="mt-4 max-w-52">
                <WriteToMPButton className="w-full text-sm lg:text-base shadow-lg" />
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-104 xl:h-104">
                <img
                  src={leader.imagePath}
                  alt={leader.name[language]}
                  className="w-full h-full object-cover rounded-t-full border-4 border-primary shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection