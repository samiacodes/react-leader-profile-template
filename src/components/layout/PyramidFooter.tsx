import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { siteConfig } from '@/config/siteConfig'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react'
import Logo from './Logo'

const PyramidFooter = () => {
  const { language } = useLanguage()
  const { footer, leader } = siteConfig

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin
  }

  return (
    <footer className="bg-[#006747] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">

        {/* Logo */}
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
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#DA291C] transition-colors"
                aria-label={platform}
              >
                <Icon className="h-4 w-4 text-white" />
              </a>
            ) : null
          })}
        </div>

        {/* Tagline */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <p className="text-base md:text-2xl text-[#DA291C] font-medium">
            {footer.brand.tagline[language]}
          </p>
        </div>

        {/* Description */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-lg text-white/80 leading-relaxed">
            {footer.brand.description[language]}
          </p>
        </div>

        {/* Links & Contact */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-8 border-t border-white/10 pt-6">
          {footer.menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label[language]}
            </Link>
          ))}

          <span className="text-white/30 hidden sm:inline">|</span>

          <a
            href={`mailto:${footer.contact.email}`}
            className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-1"
          >
            <Mail className="h-3.5 w-3.5" />
            {footer.contact.email}
          </a>

          {footer.contact.phone && (
            <>
              <span className="text-white/30 hidden sm:inline">|</span>
              <a
                href={`tel:${footer.contact.phone}`}
                className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-1"
              >
                <Phone className="h-3.5 w-3.5" />
                {footer.contact.phone}
              </a>
            </>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
            <p>
              © {new Date().getFullYear()} {footer.brand.logoText}. {footer.copyright.text[language]}
            </p>
            <p>
              {footer.copyright.developer.label[language]}{' '}
              <a
                href={footer.copyright.developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DA291C] hover:underline"
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