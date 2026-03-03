import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LanguageToggle from '@/components/language-toggle'
import ThemeToggle from '@/components/theme-toggle'
import WriteToMPButton from '@/components/ui/WriteToMPButton'
import { useLanguage } from '@/hooks/useLanguage'
import { menuItems } from '@/config/navbarConfig'
import Logo from './Logo'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, changeLanguage } = useLanguage()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        {/* Flex container with consistent gap that scales */}
        <div className="flex items-center h-14 lg:h-16 gap-2 xl:gap-2 2xl:gap-4">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <DesktopMenu items={menuItems} language={language} />
          </div>

          {/* Right Section – Toggles & CTA (always together) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 ml-auto">
            <LanguageToggle value={language} onChange={changeLanguage} />
            <ThemeToggle />
            <WriteToMPButton />
          </div>
          <div className="flex lg:hidden items-center ml-auto gap-4">
            <LanguageToggle value={language} onChange={changeLanguage} />
            <ThemeToggle />
          </div>
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full transition-colors hover:bg-secondary/80"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <MobileMenu
            items={menuItems}
            language={language}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar