import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import PageHeader from '@/components/ui/PageHeader'
import NewsCard from '@/components/news/NewsCard'
import { newsContent } from '@/config/newsContent'
import type { NewsItem } from '@/config/newsContent'
import { Calendar, User, Eye, ArrowLeft } from 'lucide-react'

const NewsDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { language } = useLanguage()

  const news = newsContent.find(
    (n: NewsItem) => n.slug === slug
  )

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        News not found
      </div>
    )
  }

  // সম্পর্কিত নিউজ (একই ক্যাটাগরি)
  const relatedNews = newsContent
    .filter(
      (n: NewsItem) =>
        n.category.en === news.category.en &&
        n.id !== news.id
    )
    .slice(0, 3)

  const breadcrumb = [
    { label: language === 'en' ? 'Home' : 'হোম', path: '/' },
    { label: language === 'en' ? 'News' : 'সংবাদ', path: '/news' },
    {
      label: news.title![language],
      path: `/news/${news.slug}`
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <PageHeader
        title={news.title![language]}
        description={news.excerpt![language]}
        breadcrumb={breadcrumb}
      />

      <div className="container mx-auto py-12">
        <div className="w-full mx-auto">

          {/* Back Button */}
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>
              {language === 'en'
                ? 'Back to News'
                : 'সংবাদে ফিরে যান'}
            </span>
          </Link>

          {/* Featured Image */}
          <div className="aspect-video w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl mb-8">
            <img
              src={news.image}
              alt={news.title![language]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(news.date!).toLocaleDateString(
                  language === 'en' ? 'en-US' : 'bn-BD',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }
                )}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{news.author![language]}</span>
            </div>

            {news.views !== undefined && (
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>
                  {news.views}{' '}
                  {language === 'en'
                    ? 'views'
                    : 'বার পঠিত'}
                </span>
              </div>
            )}

            <span className="text-primary font-medium">
              {news.category![language]}
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
            {news.content![language]
              .split('\n\n')
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
          </div>

          {/* Related News */}
          {relatedNews.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-800 pt-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                {language === 'en'
                  ? 'Related News'
                  : 'সম্পর্কিত সংবাদ'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((item) => (
                  <NewsCard
                    key={item.id}
                    news={item}
                    variant="small"
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default NewsDetailPage