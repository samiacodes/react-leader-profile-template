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