import { LeaderContent } from '@/types'

export const defaultContent: LeaderContent = {
  name: 'নেতার নাম',
  title: 'পদবী / পরিচয়',
  heroImage: '/images/hero.jpg',
  about: {
    description: 'নেতা সম্পর্কে বিস্তারিত বক্তব্য এখানে লেখা হবে।',
    image: '/images/about.jpg',
  },
  promises: [
    {
      title: 'প্রতিশ্রুতি ১',
      description: 'এই প্রতিশ্রুতির বিস্তারিত বিবরণ।',
    },
    {
      title: 'প্রতিশ্রুতি ২',
      description: 'এই প্রতিশ্রুতির বিস্তারিত বিবরণ।',
    },
  ],
}