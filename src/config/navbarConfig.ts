import { MenuItem } from '@/types'

export const menuItems: MenuItem[] = [
  {
    key: 'home',
    path: '/',
    label: {
      en: 'Home',
      bn: 'হোম'
    }
  },
  {
    key: 'candidate',
    path: '/candidate',
    label: {
      en: 'Candidate',
      bn: 'প্রার্থী পরিচিতি'
    }
  },
  {
    key: 'commitment',
    path: '/commitment',
    label: {
      en: 'Commitment',
      bn: 'অঙ্গীকার'
    }
  },
  {
    key: 'works',
    path: '/works',
    label: {
      en: 'Notable Works',
      bn: 'উল্লেখযোগ্য কাজ'
    }
  },
  {
    key: 'gallery',
    path: '/gallery',
    label: {
      en: 'Gallery',
      bn: 'গ্যালারি'
    }
  },
  {
    key: 'news',
    path: '/news',
    label: {
      en: 'News & Updates',
      bn: 'সংবাদ ও আপডেট'
    }
  },
  {
    key: 'contact',
    path: '/contact',
    label: {
      en: 'Contact',
      bn: 'যোগাযোগ'
    }
  }
]

export const colors = {
  navbarBg: '#FFFFFF',
  primaryGreen: '#1F7A63',
  darkGreen: '#0F3D34',
  ctaHover: '#2E8F77',
  lightBg: '#F6F8F7',
  textPrimary: '#1F2937',
  textMuted: '#6B7280',
  border: '#E5E7EB',
  ctaText: '#FFFFFF'
}