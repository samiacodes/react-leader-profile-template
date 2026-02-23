 
import { Link } from 'react-router-dom'
import { useTheme } from '@/components/theme-provider'
import LanguageToggle from '@/components/language-toggle'
import { useLanguage } from '@/hooks/useLanguage'

const Navbar = () => {
  const { theme } = useTheme()  
  const { language } = useLanguage()

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              L
            </div>
            <span className="text-lg font-semibold text-foreground">Leader</span>
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors">
              {language === 'en' ? 'Write to Your MP' : 'আপনার এমপিকে লিখুন'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar