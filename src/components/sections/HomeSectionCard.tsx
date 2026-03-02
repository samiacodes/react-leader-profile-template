import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { ArrowRight } from 'lucide-react'

interface HomeSectionCardProps {
  title: string
  description: string
  cta: string
  path: string
  image?: string
  icon?: React.ReactNode
  delay?: number
}

const HomeSectionCard = ({ title, description, cta, path, image, icon, delay = 0 }: HomeSectionCardProps) => {
  const { language } = useLanguage()

  return (
    <div 
      className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image Section */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Icon Overlay (if icon exists) */}
          {icon && (
            <div className="absolute bottom-4 left-4">
              <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                <div className="text-primary">
                  {icon}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        {!image && icon && (
          <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-dark/20 flex items-center justify-center mb-6">
            <div className="text-primary dark:text-primary-dark">
              {icon}
            </div>
          </div>
        )}
        
        <h3 className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-primary transition-colors">
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
    </div>
  )
}

export default HomeSectionCard