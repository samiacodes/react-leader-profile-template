import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { Calendar, User, Eye, ArrowRight } from 'lucide-react'
import type { NewsItem } from '@/config/newsContent'

interface NewsCardProps {
  news: NewsItem
  variant?: 'large' | 'small' | 'featured'
}

const NewsCard = ({ news, variant = 'large' }: NewsCardProps) => {
  const { language } = useLanguage()

  if (variant === 'small') {
    return (
      <Link
        to={`/news/${news.slug}`}
        className="flex gap-3 group hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-lg transition-colors"
      >
        <img
          src={news.image}
          alt={news.title![language]}
          className="w-20 h-20 object-cover rounded-lg"
        />

        <div className="flex-1">
          <div className="text-xs text-primary mb-1">
            {news.category![language]}
          </div>

          <h4 className="text-sm font-medium text-black dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
            {news.title![language]}
          </h4>

          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
            <Calendar className="h-3 w-3" />
            <span>
              {new Date(news.date!).toLocaleDateString(
                language === 'en' ? 'en-US' : 'bn-BD'
              )}
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/news/${news.slug}`}
      className={`group block bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        variant === 'featured' ? 'hover:-translate-y-2' : ''
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={news.image}
          alt={news.title![language]}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {news.featured && (
          <div className="absolute top-3 left-3 bg-secondary text-white px-3 py-1 rounded-full text-xs">
            {language === 'en' ? 'Featured' : 'বৈশিষ্ট্যযুক্ত'}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span className="text-primary font-medium">
            {news.category![language]}
          </span>

          <span>•</span>

          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>
              {new Date(news.date!).toLocaleDateString(
                language === 'en' ? 'en-US' : 'bn-BD'
              )}
            </span>
          </div>

          {news.views !== undefined && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                <span>{news.views}</span>
              </div>
            </>
          )}
        </div>

        <h3 className="text-xl font-bold text-black dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {news.title![language]}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {news.excerpt![language]}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <User className="h-4 w-4" />
            <span>{news.author![language]}</span>
          </div>

          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            <span>{language === 'en' ? 'Read More' : 'বিস্তারিত'}</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard