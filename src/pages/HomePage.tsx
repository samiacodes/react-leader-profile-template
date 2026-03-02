import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import HeroSection from '@/components/sections/HeroSection'
import HomeIntro from '@/components/sections/HomeIntro'
import HomeSections from '@/components/sections/HomeSections'
import { pageContent } from '@/config/pageContent'
import HomeCommitment from '@/components/sections/HomeCommitment'
import CTACard from '@/components/ui/CTACard'

const HomePage = () => {
  const { language } = useLanguage()
  const content = pageContent.home[language]

  return (
    <div>
      <HeroSection />
      <HomeIntro />
      <HomeCommitment />
      <HomeSections />
      <CTACard />
    </div>
  )
}

export default HomePage