import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import NewsCard from '@/components/news/NewsCard'
import SidebarNews from '@/components/news/SidebarNews'
import { newsContent } from '@/config/newsContent'
import { pageContent } from '@/config/pageContent'
import type { NewsItem } from '@/config/newsContent'

const NewsPage = () => {
  const { language } = useLanguage()
  const content = pageContent.news[language]

  // ফিচার্ড নিউজ
  const featuredNews = newsContent.filter(
    (n: NewsItem) => n.featured
  )

  // অন্যান্য নিউজ
  const otherNews = newsContent.filter(
    (n: NewsItem) => !n.featured
  )

  // সর্বশেষ নিউজ (তারিখ অনুযায়ী)
  const latestNews = [...newsContent].sort(
    (a: NewsItem, b: NewsItem) =>
      new Date(b.date!).getTime() - new Date(a.date!).getTime()
  )

  // জনপ্রিয় নিউজ (ভিউ অনুযায়ী)
  const popularNews = [...newsContent].sort(
    (a: NewsItem, b: NewsItem) =>
      (b.views ?? 0) - (a.views ?? 0)
  )

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: content.title, path: '/news' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <PageHeader
        title={content.title}
        description={content.description}
        breadcrumb={breadcrumb}
      />

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Featured News */}
            {featuredNews.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredNews.slice(0, 2).map((news) => (
                  <NewsCard
                    key={news.id}
                    news={news}
                    variant="featured"
                  />
                ))}
              </div>
            )}

            {/* Other News */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-black dark:text-white">
                {language === 'en'
                  ? 'Latest Updates'
                  : 'সর্বশেষ আপডেট'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherNews.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SidebarNews
              latestNews={latestNews}
              popularNews={popularNews}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage