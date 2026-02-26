import { siteConfig } from './siteConfig'

export const getHomeSectionsContent = (language: 'en' | 'bn') => {
  const leader = siteConfig.leader
  const party = leader.party
  
  // প্রথমে পুরো কন্টেন্ট অবজেক্ট তৈরি করুন
  const content = {
    commitment: {
      title: {
        en: 'Our Commitments',
        bn: 'আমাদের অঙ্গীকার'
      },
      description: {
        en: `Discover the promises and commitments ${leader.name.en} has made to ensure a better future for ${leader.constituency.en}.`,
        bn: `${leader.constituency.bn} এর জন্য একটি উন্নত ভবিষ্যত নিশ্চিত করতে ${leader.name.bn} যে অঙ্গীকার করেছেন তা জানুন।`
      },
      cta: {
        en: 'View All Commitments',
        bn: 'সব অঙ্গীকার দেখুন'
      },
      path: '/commitment'
    },
    
    works: {
      title: {
        en: 'Notable Achievements',
        bn: 'উল্লেখযোগ্য অর্জন'
      },
      description: {
        en: `Explore the significant works and achievements of ${leader.name.en} in serving the people and developing ${leader.constituency.en}.`,
        bn: `${leader.constituency.bn} এর জনসেবা ও উন্নয়নে ${leader.name.bn} এর উল্লেখযোগ্য কাজ ও অর্জন সম্পর্কে জানুন।`
      },
      cta: {
        en: 'See Notable Works',
        bn: 'উল্লেখযোগ্য কাজ দেখুন'
      },
      path: '/works'
    },
    
    gallery: {
      title: {
        en: 'Photo Gallery',
        bn: 'চিত্রশালা'
      },
      description: {
        en: `A visual journey through ${leader.name.en}'s events, meetings, and community engagements in ${leader.constituency.en}.`,
        bn: `${leader.constituency.bn} এ ${leader.name.bn} এর ইভেন্ট, সভা ও কমিউনিটি কাজের ভিজুয়াল উপস্থাপনা।`
      },
      cta: {
        en: 'Browse Gallery',
        bn: 'গ্যালারি দেখুন'
      },
      path: '/gallery'
    },
    
    news: {
      title: {
        en: 'News & Updates',
        bn: 'সংবাদ ও আপডেট'
      },
      description: {
        en: `Stay updated with the latest news, announcements, and activities of ${leader.name.en}.`,
        bn: `${leader.name.bn} এর সর্বশেষ সংবাদ, ঘোষণা ও কার্যক্রম সম্পর্কে জানুন।`
      },
      cta: {
        en: 'Read Latest News',
        bn: 'সর্বশেষ সংবাদ পড়ুন'
      },
      path: '/news'
    }
  }

  // এখন ভাষা অনুযায়ী রিটার্ন করুন
  return {
    commitment: {
      title: content.commitment.title[language],
      description: content.commitment.description[language],
      cta: content.commitment.cta[language],
      path: content.commitment.path
    },
    works: {
      title: content.works.title[language],
      description: content.works.description[language],
      cta: content.works.cta[language],
      path: content.works.path
    },
    gallery: {
      title: content.gallery.title[language],
      description: content.gallery.description[language],
      cta: content.gallery.cta[language],
      path: content.gallery.path
    },
    news: {
      title: content.news.title[language],
      description: content.news.description[language],
      cta: content.news.cta[language],
      path: content.news.path
    }
  }
}