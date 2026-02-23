import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import LanguageToggle from '@/components/language-toggle'
import Logo from './Logo'
import { menuItems } from '@/config/navbarConfig'
import { useLanguage } from '@/hooks/useLanguage'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { language } = useLanguage()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActivePath = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-950 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo image="/leader-image.jpg" name="Leader" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'text-primary bg-secondary/10 dark:bg-secondary/20'
                    : 'text-foreground hover:text-primary hover:bg-secondary/5'
                }`}
              >
                {item.label[language]}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ModeToggle />

            <Button
              className="hidden sm:inline-flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm font-medium shadow-sm"
            >
              {language === 'en' ? 'Write to Your MP' : 'আপনার এমপিকে লিখুন'}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="md:hidden rounded-full"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActivePath(item.path)
                      ? 'text-primary bg-secondary/10'
                      : 'text-foreground hover:text-primary hover:bg-secondary/5'
                  }`}
                >
                  {item.label[language]}
                </Link>
              ))}
              
              <Button
                className="mt-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                {language === 'en' ? 'Write to Your MP' : 'আপনার এমপিকে লিখুন'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar