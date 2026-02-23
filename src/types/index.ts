export interface LeaderContent {
  name: string
  title: string
  heroImage: string
  about: {
    description: string
    image: string
  }
  promises: Array<{
    title: string
    description: string
  }>
  
}
export type Language = 'en' | 'bn'

export interface NavbarProps {
  leaderImage?: string
  leaderName?: string
}

export interface MenuItem {
  key: string
  path: string
  label: {
    en: string
    bn: string
  }
}