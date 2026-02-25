import { siteConfig } from './siteConfig'

export const getHomeIntroContent = (language: 'en' | 'bn') => {
  const leader = siteConfig.leader
  const party = leader.party
  
  return {
    en: {
      description: `A dedicated leader of ${party.name.en}, committed to democracy, good governance, and protecting people's rights. Working tirelessly for the development of ${leader.constituency.en} in education, health, infrastructure, and technology sectors. He pledges to work with compassion, dedication, and responsibility for the people.`,
      cta: "Learn More"
    },
    bn: {
      description: `মানুষের প্রতি নিবেদিত, মানুষের পাশে। ${party.name.bn}র একজন অগ্রণী রাজনীতিবিদ ${leader.name.bn}, যিনি দীর্ঘদিন ধরে গণতন্ত্র, সুশাসন এবং জনগণের অধিকার রক্ষায় কাজ করে যাচ্ছেন। ${leader.constituency.bn} এর মানুষের উন্নয়ন, শিক্ষা, স্বাস্থ্য, অবকাঠামো ও প্রযুক্তির ক্ষেত্রে নতুন দিগন্ত গড়ার লক্ষ্যে তিনি কাজ করছেন। তিনি মানুষের কথা প্রাণে, সততা ও দায়িত্ববোধ নিয়ে কাজ করার অঙ্গীকার ব্যক্ত করেছেন।`,
      cta: "আরও জানুন"
    }
  }[language]
}