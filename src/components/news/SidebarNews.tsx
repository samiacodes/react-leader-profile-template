import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import NewsCard from './NewsCard'
import type { NewsItem } from '@/config/newsContent'

interface SidebarNewsProps {
  latestNews: NewsItem[]
  popularNews: NewsItem[]
}

const CATEGORIES = [
  { en: 'Healthcare', bn: 'স্বাস্থ্যসেবা' },
  { en: 'Education', bn: 'শিক্ষা' },
  { en: 'Infrastructure', bn: 'অবকাঠামো' },
  { en: 'Employment', bn: 'কর্মসংস্থান' },
  { en: 'Social', bn: 'সামাজিক' },
  { en: 'Women Development', bn: 'নারী উন্নয়ন' }
]

const SidebarNews = ({ latestNews, popularNews }: SidebarNewsProps) => {
  const { language } = useLanguage()

  // sidebar-এর জন্য total data
  const allNews = [...latestNews, ...popularNews]

  return (
    <div className="space-y-8">
      {/* Latest News */}
      <div>
        <h3 className="text-lg font-bold text-black dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          {language === 'en' ? 'Latest News' : 'সর্বশেষ সংবাদ'}
        </h3>

        <div className="space-y-2">
          {latestNews.slice(0, 5).map((news) => (
            <NewsCard key={news.id} news={news} variant="small" />
          ))}
        </div>

        <Link
          to="/news"
          className="block text-center mt-4 text-sm text-primary hover:underline"
        >
          {language === 'en' ? 'View All' : 'সব দেখুন'} →
        </Link>
      </div>

      {/* Popular News */}
      <div>
        <h3 className="text-lg font-bold text-black dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          {language === 'en' ? 'Most Popular' : 'সর্বাধিক পঠিত'}
        </h3>

        <div className="space-y-2">
          {popularNews.slice(0, 5).map((news) => (
            <NewsCard key={news.id} news={news} variant="small" />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold text-black dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          {language === 'en' ? 'Categories' : 'বিভাগ'}
        </h3>

        <div className="space-y-2">
          {CATEGORIES.map((cat) => {
            const count = allNews.filter(
              (n: NewsItem) => n.category.en === cat.en
            ).length

            return (
              <Link
                key={cat.en}
                to={`/news/category/${cat.en.toLowerCase()}`}
                className="flex justify-between items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <span>{language === 'en' ? cat.en : cat.bn}</span>
                <span className="text-sm">({count})</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SidebarNews