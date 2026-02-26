import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { siteConfig } from '@/config/siteConfig'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'

const CompactFooter = () => {
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
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        
        {/* Top Section - Logo & Social */}
        <div className="flex flex-col items-center justify-center mb-8">
          <Logo />
          <p className="text-2xl font-bold text-white mt-4 mb-3">
            {leader.name[language]}
          </p>
          
          {/* Social Icons - বড় ও কেন্দ্রে */}
          <div className="flex justify-center gap-4 mb-6">
            {Object.entries(footer.social).map(([platform, url]) => {
              const Icon = socialIcons[platform as keyof typeof socialIcons]
              return Icon ? (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-secondary transition-colors"
                  aria-label={platform}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ) : null
            })}
          </div>
        </div>

        {/* Tagline & Description */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-lg font-semibold text-secondary mb-2">
            {footer.brand.tagline[language]}
          </p>
          <p className="text-white/80 text-sm leading-relaxed">
            {footer.brand.description[language]}
          </p>
        </div>

        {/* Middle Section - Quick Links & Contact (optional, manageable) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-secondary border-b border-secondary/30 pb-2 inline-block">
              {language === 'en' ? 'Quick Links' : 'গুরুত্বপূর্ণ লিংক'}
            </h4>
            <ul className="space-y-2">
              {footer.menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    {item.label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-secondary border-b border-secondary/30 pb-2 inline-block">
              {language === 'en' ? 'Contact' : 'যোগাযোগ'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-3 text-white/80">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>{footer.contact.email}</span>
              </li>
              {footer.contact.phone && (
                <li className="flex items-center justify-center md:justify-start gap-3 text-white/80">
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  <span>{footer.contact.phone}</span>
                </li>
              )}
              <li className="flex items-center justify-center md:justify-start gap-3 text-white/80">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>{footer.contact.address[language]}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright & Developer */}
        <div className="border-t border-secondary/30 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>
              © {new Date().getFullYear()} {footer.brand.logoText}. {footer.copyright.text[language]}
            </p>
            <p>
              {footer.copyright.developer.label[language]}{' '}
              <a
                href={footer.copyright.developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
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

export default CompactFooter