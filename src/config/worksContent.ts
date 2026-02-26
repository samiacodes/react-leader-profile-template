import { siteConfig } from './siteConfig'

export interface WorkItem {
  id: number
  title: {
    en: string
    bn: string
  }
  description: {
    en: string
    bn: string
  }
  image: string
  imagePosition: 'left' | 'right'
  category: {
    en: string
    bn: string
  }
}


const leaderName = siteConfig.leader.name

export const worksContent: WorkItem[] = [
  {
    id: 1,
    title: {
      en: 'Healthcare & Social Welfare',
      bn: 'স্বাস্থ্য ও সামাজিক কল্যাণ'
    },
    description: {
      en: `Under the leadership of ${leaderName.en}, significant progress has been made in healthcare and social welfare in ${siteConfig.leader.constituency.en} constituency. Through active collaboration with upazila health authorities and union parishads, quality healthcare services have been ensured. Modern medical facilities have been established, emergency healthcare services have been regularized, and special attention has been given to maternal and child health. Initiatives for drug rehabilitation and mental health support have also been strengthened, increasing community trust and well-being.`,
      bn: `${leaderName.bn} এর নেতৃত্বে ${siteConfig.leader.constituency.bn} আসনে স্বাস্থ্য ও সামাজিক কল্যাণে উল্লেখযোগ্য অগ্রগতি হয়েছে। উপজেলা স্বাস্থ্য কর্তৃপক্ষ ও ইউনিয়ন পরিষদের সাথে সক্রিয় সহযোগিতার মাধ্যমে মানসম্মত স্বাস্থ্যসেবা নিশ্চিত করা হয়েছে। আধুনিক চিকিৎসা সুবিধা স্থাপন, জরুরি স্বাস্থ্যসেবা নিয়মিতকরণ এবং মাতৃ ও শিশু স্বাস্থ্যের দিকে বিশেষ নজর দেওয়া হয়েছে। মাদকাসক্তি নিরাময় ও মানসিক স্বাস্থ্য সহায়তার উদ্যোগও জোরদার করা হয়েছে, যা এলাকাবাসীর আস্থা ও মঙ্গল বাড়িয়েছে।`
    },
    image: '/images/works/healthcare.jpg',
    imagePosition: 'left',
    category: {
      en: 'Healthcare',
      bn: 'স্বাস্থ্যসেবা'
    }
  },
  {
    id: 2,
    title: {
      en: 'Agriculture & Farmer Welfare',
      bn: 'কৃষি ও কৃষক কল্যাণ'
    },
    description: {
      en: `Remarkable initiatives have been taken for agricultural advancement in ${siteConfig.leader.constituency.en} under the guidance of ${leaderName.en}. New irrigation projects have been implemented to ensure proper water management for farmers. Modern agricultural techniques have been introduced to increase crop production. Through farmer training programs and providing quality seeds and fertilizers, productivity has significantly increased. These efforts have reduced production costs and improved the livelihoods of farming communities.`,
      bn: `${leaderName.bn} এর নির্দেশনায় ${siteConfig.leader.constituency.bn} এ কৃষির অগ্রগতির জন্য উল্লেখযোগ্য উদ্যোগ নেওয়া হয়েছে। কৃষকদের জন্য সেচ ব্যবস্থা নিশ্চিত করতে নতুন প্রকল্প গ্রহণ ও পানি ব্যবস্থাপনার উন্নয়ন করা হয়েছে। আধুনিক কৃষি প্রযুক্তি প্রবর্তনের মাধ্যমে ফসল উৎপাদন বাড়ানোর উদ্যোগ নেওয়া হয়েছে। কৃষক প্রশিক্ষণ ও মানসম্মত বীজ ও সার প্রদানের মাধ্যমে উৎপাদনশীলতা significantly বৃদ্ধি পেয়েছে। এসব উদ্যোগের ফলে উৎপাদন খরচ কমেছে এবং কৃষকদের জীবনমান উন্নত হয়েছে।`
    },
    image: '/images/works/agriculture.jpg',
    imagePosition: 'right',
    category: {
      en: 'Agriculture',
      bn: 'কৃষি'
    }
  },
  {
    id: 3,
    title: {
      en: 'Youth Development & Anti-Drug Initiatives',
      bn: 'যুব উন্নয়ন ও মাদকবিরোধী উদ্যোগ'
    },
    description: {
      en: `Special emphasis has been placed by ${leaderName.en} on guiding the youth towards constructive and progressive paths. Financial support has been provided for youth entrepreneurship, along with establishing science clubs and cultural organizations. Comprehensive anti-drug programs have been implemented involving local representatives, social organizations, and educational institutions. These activities are creating positive social change and playing a vital role in building a safe, secure, and progressive ${siteConfig.leader.constituency.en}.`,
      bn: `${leaderName.bn} তরুণ সমাজকে পঠনমূলক ও প্রগতিশীল পথে পরিচালিত করতে বিশেষ গুরুত্ব দিয়েছেন। যুব উদ্যোক্তাদের জন্য আর্থিক সহায়তা, বিজ্ঞান ক্লাব ও সাংস্কৃতিক সংগঠন প্রতিষ্ঠার মাধ্যমে সহায়তা প্রদান করা হয়েছে। স্থানীয় প্রতিনিধি, সামাজিক সংগঠন ও শিক্ষাপ্রতিষ্ঠানের সাথে সমন্বয়ে মাদকবিরোধী ব্যাপক কর্মসূচি বাস্তবায়ন করা হয়েছে। এসব কার্যক্রম ইতিবাচক সামাজিক পরিবর্তন তৈরি করছে এবং একটি নিরাপদ ও প্রগতিশীল ${siteConfig.leader.constituency.bn} গঠনে গুরুত্বপূর্ণ ভূমিকা রাখছে।`
    },
    image: '/images/works/youth.jpg',
    imagePosition: 'left',
    category: {
      en: 'Youth Development',
      bn: 'যুব উন্নয়ন'
    }
  }
]