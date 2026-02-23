import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Language } from '@/types'

export const useLanguage = () => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<Language>('bn')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language || 'bn'
    setLanguage(savedLang)
    i18n.changeLanguage(savedLang)
  }, [i18n])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    i18n.changeLanguage(lang)
  }

  return { language, changeLanguage }
}