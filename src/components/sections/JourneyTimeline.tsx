import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import { getJourneyContent } from '@/config/journeyContent'

const JourneyTimeline = () => {
  const { language } = useLanguage()
  const content = getJourneyContent(language)

  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#006747] font-semibold text-sm block mb-2">
            {content.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {content.title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Center Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-[#006747]/30 md:-translate-x-1/2"></div>

          <div className="space-y-20">
            {content.timeline.map((item, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Empty side (desktop alignment) */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-[#006747]"></div>
                  </div>

                  {/* Card */}
                  <div className="w-full m-5 md:w-1/2 pl-20 md:pl-0">
                    <div className="bg-[#F8FFF9] dark:bg-gray-900 border-l-4 border-[#006747] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-[#006747]">
                          {item.year}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {item.points.map((point, i) => (
                          <li
                            key={i}
                            className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneyTimeline