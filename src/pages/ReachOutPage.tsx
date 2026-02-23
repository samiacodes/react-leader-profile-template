import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'  // এই ইম্পোর্ট যোগ করুন

const ReachOutPage = () => {
  const { language } = useLanguage()  // এই লাইন যোগ করুন
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-[#006747] dark:text-[#00A86B] text-center mb-8">
          {language === 'en' ? 'Write to Your MP' : 'আপনার এমপিকে লিখুন'}
        </h1>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Contact form coming soon...
          </p>
          
          {/* ফর্ম পরবর্তীতে যোগ হবে */}
          <div className="space-y-4">
            <div className="h-10 bg-gray-100 dark:bg-gray-800 rounded animate-pulse"></div>
            <div className="h-10 bg-gray-100 dark:bg-gray-800 rounded animate-pulse"></div>
            <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded animate-pulse"></div>
            <div className="h-10 bg-[#006747] opacity-50 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReachOutPage