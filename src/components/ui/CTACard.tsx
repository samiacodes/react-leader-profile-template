import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Award } from 'lucide-react'
import WriteToMPButton from './WriteToMPButton'

interface CTACardProps {
  className?: string
}

const CTACard: React.FC<CTACardProps> = ({ className = '' }) => {
  const { language } = useLanguage()

  return (
    <div
      className={`
        bg-primary text-white
        rounded-2xl shadow-xl
        p-4 sm:p-6 md:p-8
        mb-10
        ${className}
      `}
    >
      <div
        className="
          flex flex-col md:flex-row
          items-start md:items-center
          gap-4 md:gap-6
        "
      >
        {/* LEFT: Icon + Text */}
        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
          <Award className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 opacity-90 shrink-0" />

          <div className="min-w-0">
            <h4 className="text-base sm:text-lg md:text-xl font-bold leading-snug">
              {language === 'en'
                ? 'Ready to Make a Change?'
                : 'পরিবর্তন আনতে প্রস্তুত?'}
            </h4>

            <p className="text-white/90 text-xs sm:text-sm mt-1">
              {language === 'en'
                ? 'Join us in building a better tomorrow'
                : 'একটি উন্নত আগামী গড়তে আমাদের সাথে যোগ দিন'}
            </p>
          </div>
        </div>

        {/* RIGHT: Button */}
        <div className="w-full md:w-auto">
          <WriteToMPButton fullWidth />
        </div>
      </div>
    </div>
  )
}

export default CTACard