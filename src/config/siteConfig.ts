export const siteConfig = {
  // Basic Info
  name: 'Leader Profile',
  title: {
    en: 'Political Leader Profile',
    bn: 'রাজনৈতিক নেতার প্রোফাইল'
  },
  description: {
    en: 'Official website of the political leader',
    bn: 'রাজনৈতিক নেতার অফিসিয়াল ওয়েবসাইট'
  },

  // Leader Information 
  leader: {
    name: {
      en: 'Samiya Islam Lamiya',
      bn: 'সামিয়া ইসলাম লামিয়া'
    },
    nameFull: {
      en: 'Samiya Islam Lamiya',
      bn: 'সামিয়া ইসলাম লামিয়া'
    },
    designation: {
      en: 'Member of Parliament',
      bn: 'সংসদ সদস্য'
    },
    formerDesignation: {
      en: 'Former Member of Parliament',
      bn: 'সাবেক সংসদ সদস্য'
    },
    constituency: {
      en: 'Narayanganj-3',
      bn: 'নারায়ণগঞ্জ-৩'
    },
    constituencyNumber: {
      en: '206, Narayanganj-3',
      bn: '২০৬,নারায়ণগঞ্জ-৩'
    },
    imagePath: '/images/leader-image.jpg',
    tagline: {
      en: 'Let\'s build a new',
      bn: 'আসুন, একসাথে গড়ি নতুন'
    },
    
    // Political Party
    party: {
      name: {
        en: 'Bangladesh ',
        bn: 'বাংলাদেশ '
      },
      shortName: {
        en: 'BD',
        bn: 'বাংলাদেশ'
      }
    },
    
    // Personal Details
    personalInfo: {
      birthDate: {
        en: 'October 10, 2003',
        bn: '১০ অক্টোবর, ২০০৩'
      },
      birthPlace: {
        en: 'Bangladesh',
        bn: 'বাংলাদেশ'
      },
      district: {
        en: 'Narayanganj',
        bn: 'নারায়ণগঞ্জ'
      },
      currentTerm: {
        en: 'Third Term (2018-2026)',
        bn: 'তৃতীয় বার (২০১৮-২০২৬)'
      }
    },

  },

  // Footer Information
  footer: {
    brand: {
      logoText: 'Samiya Islam Lamiya',
      tagline: {
        en: 'Leadership for a better tomorrow',
        bn: 'উত্তম আগামীর জন্য নেতৃত্ব'
      },
      description: {
        en: 'Dedicated to serving the people with integrity and vision.',
        bn: 'সততা ও দূরদৃষ্টির সাথে জনগণের সেবায় নিবেদিত।'
      }
    },

    menuItems: [
      { key: 'commitment', path: '/commitment', label: { en: 'Commitment', bn: 'অঙ্গীকার' } },
      { key: 'works', path: '/works', label: { en: 'Notable Works', bn: 'উল্লেখযোগ্য কাজ' } },
      { key: 'candidate', path: '/candidate', label: { en: 'Candidate', bn: 'প্রার্থী পরিচিতি' } },
      { key: 'contact', path: '/contact', label: { en: 'Contact', bn: 'যোগাযোগ' } }
    ],

    contact: {
      email: 'samiyaislamlamia@gmail.com',
      phone: '+880 1234 567890',
      address: {
        en: 'Narayanganj, Bangladesh',
        bn: 'নারায়ণগঞ্জ, বাংলাদেশ'
      }
    },

    officeHours: {
      en: "Sunday - Thursday: 9:00 AM - 5:00 PM",
      bn: "রবিবার - বৃহস্পতিবার: সকাল ৯:০০ - বিকাল ৫:০০"
    },

    social: {
      facebook: 'https://facebook.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
      youtube: 'https://youtube.com/',
      linkedin: 'https://linkedin.com/'
    },

    copyright: {
      text: {
        en: 'All rights reserved.',
        bn: 'সর্বস্বত্ব সংরক্ষিত।'
      },
      developer: {
        name: 'Creative Software Bangladesh',
        url: 'https://creativesoftware.com.bd/',
        label: {
          en: 'Developed by',
          bn: 'ডেভেলপড বাই'
        }
      }
    }
  },

  // Navigation Menu
  menuItems: [
    { key: 'home', path: '/' },
    { key: 'candidate', path: '/candidate' },
    { key: 'commitment', path: '/commitment' },
    { key: 'works', path: '/works' },
    { key: 'gallery', path: '/gallery' },
    { key: 'news', path: '/news' },
    { key: 'contact', path: '/contact' }
  ],

  // Colors
  colors: {
    primary: '#006747',
    primaryDark: '#00A86B',
    secondary: '#DA291C',
    secondaryDark: '#FF4D4D'
  }
}