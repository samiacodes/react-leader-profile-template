import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ArrowButtonProps {
  to: string
  text: string
  className?: string
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ to, text, className = '' }) => {
  return (
    <Link
      to={to}
      className={`
        inline-flex items-center gap-2 
        text-primary dark:text-secondary 
        font-semibold 
        hover:gap-3 transition-all 
        group
        ${className}
      `}
    >
      <span>{text}</span>
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

export default ArrowButton