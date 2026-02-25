import { siteConfig } from './siteConfig'

export const getCandidateContent = (language: 'en' | 'bn') => {
  const leader = siteConfig.leader
  const party = leader.party
  const info = leader.personalInfo

  const content = {
    en: {
      badge: "People's Representative",
      title: `Meet ${leader.name.en}`,
      description: `A seasoned leader. A responsible representative. Your voice.`,
      
      vision: {
        title: "Our Vision",
        points: [
          "Inclusive development for all",
          "Transparent governance",
          "Quality education and healthcare",
          "Sustainable infrastructure"
        ]
      },
      
      mission: {
        title: "Our Mission",
        points: [
          "Bridge the gap between people and government",
          "Ensure basic rights for every citizen",
          "Create employment opportunities",
          "Modernize local infrastructure"
        ]
      },
      
      achievements: {
        title: "Key Achievements",
        stats: [
          { number: "10+", label: "Schools Built" },
          { number: "25km", label: "Roads Constructed" },
          { number: "5000+", label: "People Helped" },
          { number: "100+", label: "Community Programs" }
        ]
      },

      // Personal Details (ইমেজের পাশে দেখানোর জন্য)
      personalDetails: [
        { label: "Full Name", value: leader.nameFull[language] },
        { label: "Political Party", value: party.name[language] },
        { label: "Current Position", value: leader.designation[language] },
        { label: "Birth Date", value: info.birthDate[language] },
        { label: "Birth Place", value: info.birthPlace[language] },
        { label: "District", value: info.district[language] },
        { label: "Constituency", value: leader.constituencyNumber[language] },
        { label: "Current Term", value: info.currentTerm[language] }
      ],
      
      cta: "Learn More About Our Journey"
    },
    
    bn: {
      badge: "জনগণের প্রতিনিধি",
      title: `${leader.name.bn} এর সাথে পরিচিত হোন`,
      description: `একজন অভিজ্ঞ নেতা। একজন দায়িত্বশীল প্রতিনিধি। আপনার কণ্ঠস্বর।`,
      
      vision: {
        title: "আমাদের দৃষ্টিভঙ্গি",
        points: [
          "সবার জন্য অন্তর্ভুক্তিমূলক উন্নয়ন",
          "স্বচ্ছ শাসন ব্যবস্থা",
          "মানসম্মত শিক্ষা ও স্বাস্থ্যসেবা",
          "টেকসই অবকাঠামো"
        ]
      },
      
      mission: {
        title: "আমাদের লক্ষ্য",
        points: [
          "জনগণ ও সরকারের মধ্যে সেতুবন্ধন তৈরি",
          "প্রত্যেক নাগরিকের মৌলিক অধিকার নিশ্চিত করা",
          "কর্মসংস্থানের সুযোগ সৃষ্টি",
          "স্থানীয় অবকাঠামো আধুনিকায়ন"
        ]
      },
      
      achievements: {
        title: "উল্লেখযোগ্য অর্জন",
        stats: [
          { number: "১০+", label: "স্কুল প্রতিষ্ঠিত" },
          { number: "২৫কি.মি.", label: "রাস্তা নির্মিত" },
          { number: "৫০০০+", label: "মানুষ সহায়তা পেয়েছে" },
          { number: "১০০+", label: "কমিউনিটি প্রোগ্রাম" }
        ]
      },

      // Personal Details (ইমেজের পাশে দেখানোর জন্য)
      personalDetails: [
        { label: "পূর্ণ নাম", value: leader.nameFull[language] },
        { label: "রাজনৈতিক দল", value: party.name[language] },
        { label: "বর্তমান পদ", value: leader.designation[language] },
        { label: "জন্ম তারিখ", value: info.birthDate[language] },
        { label: "জন্মস্থান", value: info.birthPlace[language] },
        { label: "জেলা", value: info.district[language] },
        { label: "নির্বাচনী এলাকা", value: leader.constituencyNumber[language] },
        { label: "বর্তমান মেয়াদ", value: info.currentTerm[language] }
      ],
      
      cta: "আমাদের যাত্রা সম্পর্কে আরও জানুন"
    }
  }

  return content[language]
}