import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { siteConfig } from '@/config/siteConfig'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'

const PyramidFooter = () => {
  const { language } = useLanguage()
  const { footer, leader } = siteConfig

  // Social icon mapping
  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin
  }

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        
        {/* Top Section - Logo */}
        <div className="flex justify-center mb-6">
          <Logo />
        </div>

        {/* Leader Name */}
        <div className="text-center mb-3">
          <h2 className="text-xl md:text-xl font-bold text-white">
            {leader.name[language]}
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-6">
          {Object.entries(footer.social).map(([platform, url]) => {
            const Icon = socialIcons[platform as keyof typeof socialIcons]
            return Icon ? (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-[#00A86B] transition-colors"
                aria-label={platform}
              >
                <Icon className="h-4 w-4" />
              </a>
            ) : null
          })}
        </div>

        {/* Tagline */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <p className="text-base md:text-2xl text-[#00A86B] font-medium">
            {footer.brand.tagline[language]}
          </p>
        </div>

        {/* Description */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-lg text-gray-400 leading-relaxed">
            {footer.brand.description[language]}
          </p>
        </div>

        {/* Quick Links & Contact */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-8 border-t border-gray-800 pt-6">
          {/* Quick Links */}
          {footer.menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className="text-sm text-gray-400 hover:text-[#00A86B] transition-colors"
            >
              {item.label[language]}
            </Link>
          ))}

          {/* Separator */}
          <span className="text-gray-600 hidden sm:inline">|</span>

          {/* Contact Email */}
          <a 
            href={`mailto:${footer.contact.email}`}
            className="text-sm text-gray-400 hover:text-[#00A86B] transition-colors flex items-center gap-1"
          >
            <Mail className="h-3.5 w-3.5" />
            {footer.contact.email}
          </a>

          {/* Phone if exists */}
          {footer.contact.phone && (
            <>
              <span className="text-gray-600 hidden sm:inline">|</span>
              <a 
                href={`tel:${footer.contact.phone}`}
                className="text-sm text-gray-400 hover:text-[#00A86B] transition-colors flex items-center gap-1"
              >
                <Phone className="h-3.5 w-3.5" />
                {footer.contact.phone}
              </a>
            </>
          )}
        </div>

        {/* Bottom Bar - Copyright & Developer */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} {footer.brand.logoText}. {footer.copyright.text[language]}
            </p>
            <p>
              {footer.copyright.developer.label[language]}{' '}
              <a
                href={footer.copyright.developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A86B] hover:underline"
              >
                {footer.copyright.developer.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default PyramidFooter