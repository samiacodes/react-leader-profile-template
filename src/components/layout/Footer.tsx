import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { siteConfig } from '@/config/siteConfig'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  const { language } = useLanguage()
  const { footer } = siteConfig

  // Social icon mapping
  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div>
            <Logo/>
            <p className="text-lg font-semibold text-white my-2">
              {footer.brand.tagline[language]}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {footer.brand.description[language]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00A86B]">
              {language === 'en' ? 'Quick Links' : 'গুরুত্বপূর্ণ লিংক'}
            </h4>
            <ul className="space-y-2">
              {footer.menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#00A86B] transition-colors"
                  >
                    {item.label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00A86B]">
              {language === 'en' ? 'Contact' : 'যোগাযোগ'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-[#00A86B] shrink-0 mt-0.5" />
                <span>{footer.contact.email}</span>
              </li>
              {footer.contact.phone && (
                <li className="flex items-start gap-3 text-gray-400">
                  <Phone className="h-5 w-5 text-[#00A86B] shrink-0 mt-0.5" />
                  <span>{footer.contact.phone}</span>
                </li>
              )}
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-[#00A86B] shrink-0 mt-0.5" />
                <span>{footer.contact.address[language]}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00A86B]">
              {language === 'en' ? 'Follow Us' : 'অনুসরণ করুন'}
            </h4>
            <div className="flex flex-wrap gap-3">
              {Object.entries(footer.social).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons]
                return Icon ? (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-[#00A86B] transition-colors"
                    aria-label={platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ) : null
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {footer.brand.logoText}. {footer.copyright.text[language]}
            </p>
            <p className="text-gray-400 text-sm">
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

export default Footer