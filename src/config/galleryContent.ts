import { siteConfig } from './siteConfig'

export interface GalleryItem {
  id: number
  title: {
    en: string
    bn: string
  }
  description?: {
    en: string
    bn: string
  }
  thumbnail: string
  url?: string
  date: string
  category: 'photo' | 'video' | 'audio'  
}

export const galleryContent = {
  photos: [
    {
      id: 1,
      title: {
        en: 'Community Meeting in Ward 3',
        bn: 'ওয়ার্ড ৩ এ কমিউনিটি সভা'
      },
      description: {
        en: `${siteConfig.leader.name.en} addressing community concerns in Ward 3`,
        bn: `${siteConfig.leader.name.bn} ওয়ার্ড ৩ এ কমিউনিটির সমস্যা নিয়ে কথা বলছেন`
      },
      thumbnail: '/images/gallery/meeting-1.jpg',
      date: '2024-02-15',
      category: 'photo' as const  
    },
    {
      id: 2,
      title: {
        en: 'Inauguration of New School',
        bn: 'নতুন স্কুল উদ্বোধন'
      },
      description: {
        en: `${siteConfig.leader.name.en} inaugurating a new educational institution`,
        bn: `${siteConfig.leader.name.bn} একটি নতুন শিক্ষাপ্রতিষ্ঠান উদ্বোধন করছেন`
      },
      thumbnail: '/images/gallery/school-1.jpg',
      date: '2024-02-10',
      category: 'photo' as const
    },
    {
      id: 3,
      title: {
        en: 'Healthcare Camp Inauguration',
        bn: 'স্বাস্থ্য ক্যাম্প উদ্বোধন'
      },
      description: {
        en: `${siteConfig.leader.name.en} launching free healthcare camp`,
        bn: `${siteConfig.leader.name.bn} বিনামূল্যে স্বাস্থ্য ক্যাম্প চালু করছেন`
      },
      thumbnail: '/images/gallery/health-1.jpg',
      date: '2024-02-05',
      category: 'photo' as const
    }
  ],
  videos: [
    {
      id: 1,
      title: {
        en: 'Speech at Public Rally',
        bn: 'জনসভায় ভাষণ'
      },
      description: {
        en: `${siteConfig.leader.name.en} addressing a massive public gathering`,
        bn: `${siteConfig.leader.name.bn} বিশাল জনসভায় ভাষণ দিচ্ছেন`
      },
      thumbnail: '/images/gallery/video-thumb-1.jpg',
      url: 'https://youtube.com/watch?v=123',
      date: '2024-02-01',
      category: 'video' as const
    },
    {
      id: 2,
      title: {
        en: 'Interview on Local Development',
        bn: 'স্থানীয় উন্নয়ন নিয়ে সাক্ষাৎকার'
      },
      description: {
        en: `Exclusive interview with ${siteConfig.leader.name.en} about ongoing projects`,
        bn: `${siteConfig.leader.name.bn} এর সাথে চলমান প্রকল্প নিয়ে এক্সক্লুসিভ সাক্ষাৎকার`
      },
      thumbnail: '/images/gallery/video-thumb-2.jpg',
      url: 'https://youtube.com/watch?v=456',
      date: '2024-01-25',
      category: 'video' as const
    }
  ],
  audio: [
    {
      id: 1,
      title: {
        en: 'Radio Interview',
        bn: 'রেডিও সাক্ষাৎকার'
      },
      description: {
        en: `${siteConfig.leader.name.en} discussing upcoming development plans`,
        bn: `${siteConfig.leader.name.bn} আসন্ন উন্নয়ন পরিকল্পনা নিয়ে আলোচনা করছেন`
      },
      thumbnail: '/images/gallery/audio-thumb-1.jpg',
      url: '/audio/interview-1.mp3',
      date: '2024-01-20',
      category: 'audio' as const
    }
  ]
}