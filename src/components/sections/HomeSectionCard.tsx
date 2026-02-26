import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { ArrowRight } from 'lucide-react'

interface HomeSectionCardProps {
  title: string
  description: string
  cta: string
  path: string
  icon?: React.ReactNode
  delay?: number
}

const HomeSectionCard = ({ title, description, cta, path, icon, delay = 0 }: HomeSectionCardProps) => {
  const { language } = useLanguage()

  return (
    <div 
      className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      {icon && (
        <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-dark/20 flex items-center justify-center mb-6">
          <div className="text-primary dark:text-primary-dark">
            {icon}
          </div>
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
        {title}
      </h3>
      
      <p className="text-black dark:text-white leading-relaxed mb-6">
        {description}
      </p>
      
      <Link
        to={path}
        className="inline-flex items-center gap-2 text-primary dark:text-primary-dark font-semibold hover:gap-3 transition-all group"
      >
        <span>{cta}</span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}

export default HomeSectionCard