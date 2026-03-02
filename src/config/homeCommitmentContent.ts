import { siteConfig } from './siteConfig'
import { BookOpen, Sprout, Heart, Briefcase, Globe } from 'lucide-react'

export const getHomeCommitmentContent = (language: 'en' | 'bn') => {
  const leader = siteConfig.leader
  const constituency = leader.constituency[language]

  // প্রথমে সম্পূর্ণ কন্টেন্ট অবজেক্ট তৈরি করুন
  const content = {
    title: {
      en: `Commitment to Build a New ${leader.constituency.en}`,
      bn: `নতুন ${leader.constituency.bn} গড়ার অঙ্গীকার`
    },
    description: {
      en: `With a vision for sustainable development, focusing on education, infrastructure, employment, and public service to build a progressive, safe, and prosperous ${leader.constituency.en}.`,
      bn: `টেকসই উন্নয়নের লক্ষ্যে শিক্ষা, অবকাঠামো, কর্মসংস্থান ও জনসেবায় অগ্রগতি নিশ্চিত করে একটি উন্নত, নিরাপদ ও সমৃদ্ধ ${leader.constituency.bn} গড়ে তোলার প্রত্যয়।`
    },
    commitments: [
      {
        id: 1,
        icon: 'education',
        image: '/images/commitment/education-1.jpg',
        title: {
          en: 'Education & Youth Development',
          bn: 'শিক্ষা ও যুব উন্নয়ন'
        },
        description: {
          en: 'Ensuring quality education and creating opportunities for the youth.',
          bn: 'মানসম্মত শিক্ষা নিশ্চিত করা এবং যুবকদের জন্য সুযোগ সৃষ্টি।'
        },
        path: '/commitment/1'
      },
      {
        id: 2,
        icon: 'agriculture',
        image: '/images/works/agriculture.jpg',
        title: {
          en: 'Agriculture & Rural Development',
          bn: 'কৃষি ও গ্রামীণ উন্নয়ন'
        },
        description: {
          en: 'Modernizing agriculture and improving rural infrastructure.',
          bn: 'কৃষির আধুনিকায়ন ও গ্রামীণ অবকাঠামো উন্নয়ন।'
        },
        path: '/commitment/2'
      },
      {
        id: 3,
        icon: 'healthcare',
        image: '/images/commitment/health-1.jpg',
        title: {
          en: 'Healthcare for All',
          bn: 'সবার জন্য স্বাস্থ্যসেবা'
        },
        description: {
          en: 'Accessible and affordable healthcare services for every citizen.',
          bn: 'প্রত্যেক নাগরিকের জন্য সহজলভ্য ও সাশ্রয়ী স্বাস্থ্যসেবা।'
        },
        path: '/commitment/3'
      },
      {
        id: 4,
        icon: 'employment',
        image: '/images/commitment/jobs-1.jpg',
        title: {
          en: 'Employment & Entrepreneurship',
          bn: 'কর্মসংস্থান ও উদ্যোক্তা'
        },
        description: {
          en: 'Creating job opportunities and supporting local entrepreneurs.',
          bn: 'কর্মসংস্থানের সুযোগ সৃষ্টি ও স্থানীয় উদ্যোক্তাদের সহায়তা।'
        },
        path: '/commitment/4'
      },
      {
        id: 5,
        icon: 'sustainable',
        image: '/images/commitment/sustainable-1.jpg',
        title: {
          en: 'Sustainable Development',
          bn: 'টেকসই উন্নয়ন'
        },
        description: {
          en: 'Environmentally friendly projects for a greener future.',
          bn: 'সবুজ ভবিষ্যতের জন্য পরিবেশবান্ধব প্রকল্প।'
        },
        path: '/commitment/5'
      }
    ]
  }

  return {
    title: content.title[language],
    description: content.description[language],
    commitments: content.commitments.map(c => ({
      id: c.id,
      icon: c.icon,
      image: c.image,
      title: c.title[language],
      description: c.description[language],
      path: c.path
    }))
  }
}

export const getCommitmentIcon = (iconName: string) => {
  const icons = {
    education: BookOpen,
    agriculture: Sprout,
    healthcare: Heart,
    employment: Briefcase,
    sustainable: Globe
  }
  return icons[iconName as keyof typeof icons] || BookOpen
}