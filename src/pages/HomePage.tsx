import HeroSection from '@/components/sections/HeroSection'
import HomeIntro from '@/components/sections/HomeIntro'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F6F8F7] dark:bg-black">
      <HeroSection/>
      <HomeIntro/>
    </div>
  )
}

export default HomePage