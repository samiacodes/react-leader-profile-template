import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Heart, Target, Users, Globe } from 'lucide-react'

interface CommitmentCardProps {
  number: string
  title: string
  description: string
  path: string
  icon?: 'award' | 'heart' | 'target' | 'users' | 'globe'
}

const icons = {
  award: Award,
  heart: Heart,
  target: Target,
  users: Users,
  globe: Globe,
}

const CommitmentCard = ({
  number,
  title,
  description,
  path,
  icon = 'award',
}: CommitmentCardProps) => {
  const Icon = icons[icon]

  return (
    <Link
      to={path}
      className="
        group block
        bg-white text-black
        rounded-2xl shadow-xl p-8
        transform transition-all duration-300
        hover:scale-105
      "
    >
      <div className="flex items-start gap-4">
        
        {/* Icon */}
        <div className="bg-primary/10 p-4 rounded-full">
          <Icon className="h-8 w-8 text-primary" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <span className="text-sm text-primary font-medium mb-2 block">
            Commitment {number}
          </span>

          <h3 className="text-xl font-bold mb-2">
            {title}
          </h3>

          <p className="text-sm mb-4">
            {description}
          </p>

          <div className="flex items-center gap-2 text-secondary font-medium transition-all group-hover:gap-3">
            <span>Read More</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

      </div>
    </Link>
  )
}

export default CommitmentCard