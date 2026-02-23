import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'

interface WriteToMPButtonProps {
  className?: string
  fullWidth?: boolean
}

const WriteToMPButton: React.FC<WriteToMPButtonProps> = ({ 
  className = '',
  fullWidth = false 
}) => {
  const navigate = useNavigate()
  const { language } = useLanguage()

  const handleClick = () => {
    navigate('/reach-out-to-your-mp')
  }

  return (
    <button
      onClick={handleClick}
      className={`
        bg-[#006747] text-white 
        px-4 py-2 rounded-full 
        text-sm font-medium 
        hover:bg-[#00523b] 
        dark:bg-[#008055] 
        dark:hover:bg-[#006747] 
        transition-colors 
        whitespace-nowrap
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {language === 'en' ? 'Write to MP' : 'এমপিকে লিখুন'}
    </button>
  )
}

export default WriteToMPButton