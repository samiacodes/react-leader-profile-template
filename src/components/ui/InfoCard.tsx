import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'

interface InfoCardProps {
  icon?: React.ReactNode
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
  variant?: 'default' | 'outline' | 'primary'
}

const InfoCard = ({ 
  icon, 
  title, 
  description, 
  children, 
  className = '',
  variant = 'default'
}: InfoCardProps) => {
  const { language } = useLanguage()

  const variantStyles = {
    default: 'bg-white dark:bg-black border border-gray-200 dark:border-gray-800',
    outline: 'border-2 border-[#006747] dark:border-[#00A86B] bg-transparent',
    primary: 'bg-[#006747] dark:bg-[#00A86B] text-white border-none'
  }

  return (
    <div className={`rounded-2xl shadow-xl p-6 md:p-8 ${variantStyles[variant]} ${className}`}>
      {icon && (
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
          variant === 'primary' 
            ? 'bg-white/20' 
            : 'bg-[#006747]/10 dark:bg-[#00A86B]/20'
        }`}>
          <div className={variant === 'primary' ? 'text-white' : 'text-[#006747] dark:text-[#00A86B]'}>
            {icon}
          </div>
        </div>
      )}
      
      <h3 className={`text-xl md:text-2xl font-bold mb-3 ${
        variant === 'primary' ? 'text-white' : 'text-black dark:text-white'
      }`}>
        {title}
      </h3>
      
      {description && (
        <p className={`text-sm md:text-base leading-relaxed ${
          variant === 'primary' ? 'text-white/90' : 'text-black dark:text-white'
        }`}>
          {description}
        </p>
      )}
      
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  )
}

export default InfoCard