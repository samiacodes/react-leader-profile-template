import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import LanguageToggle from '@/components/language-toggle'
import ThemeToggle from '@/components/theme-toggle'
import WriteToMPButton from '@/components/ui/WriteToMPButton'  
import { useLanguage } from '@/hooks/useLanguage'
import { menuItems } from '@/config/navbarConfig'
import Logo from './Logo'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { language, changeLanguage } = useLanguage()
  const { theme } = useTheme()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActivePath = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo - বামে */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-2">
            <div className="flex items-center gap-0.5 lg:gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`whitespace-nowrap px-2 lg:px-2.5 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-colors ${
                    isActivePath(item.path)
                      ? 'text-[#006747] dark:text-[#00A86B] bg-gray-100 dark:bg-gray-900'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#006747] dark:hover:text-[#00A86B] hover:bg-gray-50 dark:hover:bg-gray-900'
                  }`}
                >
                  {item.label[language]}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-1 md:gap-2 shrink-0">
            <LanguageToggle 
              value={language} 
              onChange={changeLanguage} 
            />
            
            <ThemeToggle />

            {/* Desktop Button  */}
            <WriteToMPButton className="hidden lg:inline-block" />

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActivePath(item.path)
                      ? 'text-[#006747] dark:text-[#00A86B] bg-gray-100 dark:bg-gray-900'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#006747] dark:hover:text-[#00A86B] hover:bg-gray-50 dark:hover:bg-gray-900'
                  }`}
                >
                  {item.label[language]}
                </Link>
              ))}
              
              {/* Mobile Button */}
              <WriteToMPButton fullWidth className="mt-3" />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar