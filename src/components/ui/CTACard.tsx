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
        bg-primary
        rounded-2xl shadow-xl p-8 text-white
        ${className}
      `}
    >
      <div className="flex items-start justify-between gap-6">
        
        {/* LEFT:  Icon + Text */}
        <div className="flex gap-4">
          <Award className="h-12 w-12 opacity-90 shrink-0" />
          <div>
            <h4 className="text-xl font-bold mb-1">
              {language === 'en'
                ? 'Ready to Make a Change?'
                : 'পরিবর্তন আনতে প্রস্তুত?'}
            </h4>
            <p className="text-white/90 text-sm">
              {language === 'en'
                ? 'Join us in building a better tomorrow'
                : 'একটি উন্নত আগামী গড়তে আমাদের সাথে যোগ দিন'}
            </p>
          </div>
        </div>


        {/* RIGHT: Write to MP Button  */}
        <WriteToMPButton />
        
      </div>
    </div>
  )
}

export default CTACard