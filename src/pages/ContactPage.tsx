import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import { pageContent } from '@/config/pageContent'
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'
import WriteToMPButton from '@/components/ui/WriteToMPButton'

const ContactPage = () => {
  const { language } = useLanguage()
  const content = pageContent.contact[language]
  const { leader, footer } = siteConfig
  const officeHours = footer.officeHours[language] // এটা এখন স্ট্রিং
  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: content.title, path: '/contact' }
  ]

  // Social icon mapping
  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin
  }

  // Google Maps URL Generator
  const getMapUrl = (address: string) => {
    const baseUrl = "https://www.google.com/maps/embed/v1/place"
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"
    const encodedAddress = encodeURIComponent(address)
    return `${baseUrl}?key=${apiKey}&q=${encodedAddress}`
  }

  // OpenStreetMap URL (WithOut API key)
  const getOpenStreetMapUrl = (lat: number, lng: number) => {
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.01}%2C${lng + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat}%2C${lng}`
  }

  // coordinates
  const coordinates = {
    lat: 23.6225,
    lng: 90.5000
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <PageHeader
        title={content.title}
        description={content.description}
        breadcrumb={breadcrumb}
      />

      <div className="w-full  py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">

          {/* Left Column - Contact Info, Social & CTA */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <h2 className="text-2xl font-bold text-black mb-6">
              {language === 'en' ? 'Get in Touch' : 'যোগাযোগ করুন'}
            </h2>

            {/* Contact Info Grid */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg border border-secondary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-black">Email</p>
                  <a href={`mailto:${footer.contact.email}`} className="font-medium text-black hover:text-secondary">
                    {footer.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg border border-secondary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-black">Phone</p>
                  <p className="font-medium text-black">{footer.contact.phone || '+880 1234 567890'}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg border border-secondary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-black">Office</p>
                  <p className="font-medium text-black">{footer.contact.address[language]}</p>
                </div>
              </div>

              {/* Office Hours - সরাসরি স্ট্রিং দেখাচ্ছি */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg border border-secondary/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-black">
                    {language === 'en' ? 'Office Hours' : 'অফিস সময়'}
                  </p>
                  <p className="font-medium text-black">
                    {officeHours}  {/* এখন স্ট্রিং, কাজ করবে */}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-black mb-4">
                {language === 'en' ? 'Follow Us' : 'অনুসরণ করুন'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(footer.social).map(([platform, url]) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons]
                  return Icon ? (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full border border-secondary/20 hover:bg-secondary group transition-all"
                      aria-label={platform}
                    >
                      <Icon className="h-5 w-5 text-primary group-hover:text-white" />
                    </a>
                  ) : null
                })}
              </div>
            </div>

            {/* Write to MP CTA */}
            <div className="mt-8 bg-white rounded-xl p-6 border border-secondary/20">
              <h3 className="text-xl font-bold text-black mb-2">
                {language === 'en' ? 'Write to Your MP' : 'এমপিকে লিখুন'}
              </h3>
              <p className="text-black mb-4">
                {language === 'en'
                  ? `Have a concern or suggestion? Directly message ${leader.name.en} and the team.`
                  : `কোনো সমস্যা বা পরামর্শ আছে? সরাসরি ${leader.name.bn} ও টিমকে বার্তা পাঠান।`}
              </p>
              <WriteToMPButton />
            </div>
          </div>

          {/* Right Column - Location Map */}
          <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-black mb-6">
              {language === 'en' ? 'Our Location' : 'আমাদের অবস্থান'}
            </h2>

            {/* Map Toggle Options */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => {/* Google Maps সিলেক্ট */ }}
                className="btn-primary px-4 py-2 text-sm"
              >
                Google Maps
              </button>
              <button
                onClick={() => {/* OpenStreetMap সিলেক্ট */ }}
                className="px-4 py-2 text-sm bg-white text-black border border-secondary/20 rounded-lg hover:bg-secondary/10"
              >
                OpenStreetMap
              </button>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-100 rounded-xl overflow-hidden mb-4">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301397!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbff5908a!2sNarayanganj!5e0!3m2!1sen!2sbd!4v1645561234567!5m2!1sen!2sbd`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="grayscale hover:grayscale-0 transition-all"
              />
            </div>

            {/* Address below map */}
            <div className="text-center">
              <p className="text-black flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {footer.contact.address[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage