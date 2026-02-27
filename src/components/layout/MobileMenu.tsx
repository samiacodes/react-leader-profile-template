import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { MenuItem } from '@/types'
import WriteToMPButton from '@/components/ui/WriteToMPButton'

interface MobileMenuProps {
  items: MenuItem[]
  language: 'en' | 'bn'
  onClose: () => void
}

const MobileMenu = ({ items, language, onClose }: MobileMenuProps) => {
  const location = useLocation()
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])

  const isActivePath = (path: string) => location.pathname === path
  const toggleDropdown = (key: string) =>
    setOpenDropdowns(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    )

  return (
    <div className="lg:hidden py-3 border-t border-white/20">
      <div className="flex flex-col space-y-1">
        {items.map(item => (
          <div key={item.key} className="flex flex-col">
            {item.children ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className={`flex items-center justify-between px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    openDropdowns.includes(item.key)
                      ? 'bg-secondary text-white'
                      : 'text-white hover:bg-secondary/80'
                  }`}
                >
                  <span>{item.label[language]}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openDropdowns.includes(item.key) ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openDropdowns.includes(item.key) && (
                  <div className="pl-4 mt-1 space-y-1 border-l-2 border-white/20 ml-3">
                    {/* শুধুমাত্র children দেখাবে */}
                    {item.children.map(child => (
                      <Link
                        key={child.key}
                        to={child.path}
                        onClick={onClose}
                        className={`block px-3 py-2 rounded-full text-sm transition-colors ${
                          isActivePath(child.path) ? 'bg-secondary text-white' : 'text-white hover:bg-secondary/80'
                        }`}
                      >
                        {child.label[language]}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                onClick={onClose}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActivePath(item.path) ? 'bg-secondary text-white' : 'text-white hover:bg-secondary/80'
                }`}
              >
                {item.label[language]}
              </Link>
            )}
          </div>
        ))}

        <WriteToMPButton fullWidth className="mt-3" />
      </div>
    </div>
  )
}

export default MobileMenu