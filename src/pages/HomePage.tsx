import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import HeroSection from '@/components/sections/HeroSection'
import HomeIntro from '@/components/sections/HomeIntro'
import HomeSections from '@/components/sections/HomeSections'
import { pageContent } from '@/config/pageContent'

const HomePage = () => {
  const { language } = useLanguage()
  const content = pageContent.home[language]

  return (
    <div>
      <HeroSection />
      <HomeIntro />
      <HomeSections />
    </div>
  )
}

export default HomePage