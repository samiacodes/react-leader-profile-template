import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { siteConfig } from '@/config/siteConfig'

interface PageHeaderProps {
  title: string  
  description: string  
  breadcrumb?: {
    label: string
    path: string
  }[]  
  bgImage?: string  
  showLeader?: boolean  
}

const PageHeader = ({ 
  title, 
  description, 
  breadcrumb, 
  bgImage,
  showLeader = true 
}: PageHeaderProps) => {
  const { language } = useLanguage()
  const { leader } = siteConfig

  
  const processedDescription = description.replace(
    '{leader}', 
    leader.name[language]
  )

  return (
    <div className="relative bg-primary dark:bg-black overflow-hidden">
      {/* Background Image (if provided) */}
      {bgImage && (
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      {/* Background Pattern (always) */}
      <div className="absolute inset-0 bg-linear-to-br from-black/20 to-transparent" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={item.path}>
                {index > 0 && <span className="text-white/60">/</span>}
                {index === breadcrumb.length - 1 ? (
                  <span className="text-white">{item.label}</span>
                ) : (
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
          {processedDescription}
        </p>

        {/* Leader Name (if showLeader is true) */}
        {showLeader && (
          <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-white font-medium">
              {leader.name[language]} - {leader.constituency[language]}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default PageHeader