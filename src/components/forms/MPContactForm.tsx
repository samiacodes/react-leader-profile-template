import React, { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { formContent } from '@/config/formContent'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  address: string
  description: string
  isPrivate: boolean
  file: File | null
}

const MPContactForm = () => {
  const { language } = useLanguage()
  const content = formContent[language]
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    address: '',
    description: '',
    isPrivate: false,
    file: null
  })

  const [fileName, setFileName] = useState<string>(content.fileSelected)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, isPrivate: e.target.checked }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, file }))
    setFileName(file ? file.name : content.fileSelected)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    // API Call
    alert(language === 'en' ? 'Form submitted successfully!' : 'ফর্ম সফলভাবে জমা দেওয়া হয়েছে!')
  }

  return (
    <div className="w-full mx-auto bg-white dark:bg-black rounded-2xl shadow-xl ">
        
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              {content.nameLabel}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={content.namePlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-red-100 dark:bg-green-900/20 text-black dark:text-white focus:ring-2 focus:ring-[#006747] focus:border-transparent transition-all"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              {content.emailLabel}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={content.emailPlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-red-100 dark:bg-green-900/20 text-black dark:text-white focus:ring-2 focus:ring-[#006747] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium text-black dark:text-white mb-2">
            {content.phoneLabel}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={content.phonePlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-red-100 dark:bg-green-900/20 text-black dark:text-white focus:ring-2 focus:ring-[#006747] focus:border-transparent transition-all"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-sm font-medium text-black dark:text-white mb-2">
            {content.subjectLabel}
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={content.subjectPlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-red-100 dark:bg-green-900/20 text-black dark:text-white focus:ring-2 focus:ring-[#006747] focus:border-transparent transition-all"
          />
        </div>

        {/* Address Field */}
        <div>
          <label className="block text-sm font-medium text-black dark:text-white mb-2">
            {content.addressLabel}
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder={content.addressPlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-red-100 dark:bg-green-900/20 text-black dark:text-white focus:ring-2 focus:ring-[#006747] focus:border-transparent transition-all"
          />
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-sm font-medium text-black dark:text-white mb-2">
            {content.descriptionLabel}
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            placeholder={content.descriptionPlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-red-100 dark:bg-green-900/20 text-black dark:text-white focus:ring-2 focus:ring-[#006747] focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-black dark:text-white mb-2">
            {content.fileLabel}
          </label>
          <div className="flex items-center gap-3">
            <label className="px-4 py-2 bg-[#006747] hover:bg-[#00523b] dark:bg-[#00A86B] dark:hover:bg-[#008055] text-white rounded-lg cursor-pointer transition-colors text-sm">
              {content.fileButton}
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <span className="text-sm text-black dark:text-white">
              {fileName}
            </span>
          </div>
        </div>

        {/* Privacy Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="privacy"
            checked={formData.isPrivate}
            onChange={handleCheckboxChange}
            className="mt-1 w-4 h-4 text-[#006747] dark:text-[#00A86B] border-gray-300 rounded focus:ring-[#006747]"
          />
          <label htmlFor="privacy" className="ml-3 text-sm text-black dark:text-white">
            {content.privacyLabel}
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#DA291C] hover:bg-[#DA291C] dark:bg-[#00A86B] dark:hover:bg-[#008055] text-white font-semibold rounded-lg transition-colors text-lg"
          >
            {content.submitButton}
          </button>
        </div>
      </form>
    </div>
  )
}

export default MPContactForm