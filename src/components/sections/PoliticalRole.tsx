import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Award, Users, Target } from 'lucide-react'
import InfoCard from '@/components/ui/InfoCard'
import { getPoliticalRoleContent } from '@/config/politicalRoleContent'

const iconMap = {
  award: Award,
  users: Users,
  target: Target
}

const PoliticalRole = () => {
  const { language } = useLanguage()
  const content = getPoliticalRoleContent(language)

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#006747] to-[#00A86B] mx-auto rounded-full"></div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.roles.map((role, index) => {
            const Icon = iconMap[role.icon as keyof typeof iconMap]
            
            return (
              <InfoCard
                key={index}
                icon={<Icon className="h-6 w-6" />}
                title={role.title}
                description={role.description}
                className="h-full"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PoliticalRole