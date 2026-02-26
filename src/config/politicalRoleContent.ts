import { siteConfig } from './siteConfig'

export const getPoliticalRoleContent = (language: 'en' | 'bn') => {
  const party = siteConfig.leader.party

  return {
    en: {
      title: 'Role in National and Central Politics',
      roles: [
        {
          title: `Central Committee Member of ${party.shortName.en}`,
          description: `Serving as the Social Welfare Secretary of ${party.name.en}.`,
          icon: 'award'
        },
        {
          title: `Advisor to ${party.shortName.en} Chairperson`,
          description: `Member of the advisory council of ${party.shortName.en} Chairperson Begum Khaleda Zia.`,
          icon: 'users'
        },
        {
          title: 'Role in Central Politics',
          description: 'Working as a member of the Parliamentary Standing Committee on Local Government, Rural Development and Cooperatives Ministry.',
          icon: 'target'
        }
      ]
    },
    bn: {
      title: 'জাতীয় ও কেন্দ্রীয় রাজনীতিতে ভূমিকা',
      roles: [
        {
          title: `${party.shortName.bn} এর কেন্দ্রীয় কমিটির সদস্য`,
          description: `${party.name.bn} এর সমাজকল্যাণ বিষয়ক সম্পাদক হিসেবে দায়িত্ব পালন।`,
          icon: 'award'
        },
        {
          title: `${party.shortName.bn} চেয়ারপারসনের উপদেষ্টা`,
          description: `${party.shortName.bn} চেয়ারপারসন বেগম খালেদা জিয়ার উপদেষ্টা পরিষদের সদস্য হিসেবে দায়িত্ব।`,
          icon: 'users'
        },
        {
          title: 'কেন্দ্রীয় রাজনীতিতে ভূমিকা',
          description: 'স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয় সম্পর্কিত সংসদীয় স্থায়ী কমিটির সদস্য হিসেবে কাজ।',
          icon: 'target'
        }
      ]
    }
  }[language]
}