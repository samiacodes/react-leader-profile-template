export const siteConfig = {
  // Leader Information for Hero section
  leader: {
    name: {
      en: 'Samiya Islam Lamiya',
      bn: 'সামিয়া ইসলাম লামিয়া'
    },
    designation: {
      en: 'Member of Parliament',
      bn: 'সংসদ সদস্য'
    },
    constituency: {
      en: 'Narayanganj-3',
      bn: 'নারায়ণগঞ্জ-৩'
    },
    imagePath: '/images/leader-image.jpg',
    tagline: {
      en: 'Let\'s build a new',
      bn: 'আসুন, একসাথে গড়ি নতুন'
    }
  },

  // Footer Information
  footer: {
    // Logo/Tagline section
    brand: {
      logoText: 'Samiya Islam Lamiya',
      tagline: {
        en: 'Leadership for a better tomorrow',
        bn: 'উত্তম আগামীর জন্য নেতৃত্ব'
      },
      description: {
        en: 'Dedicated to serving the people of Narayanganj-3 with integrity and vision.',
        bn: 'সততা ও দূরদৃষ্টির সাথে নারায়ণগঞ্জ-৩ এর জনগণের সেবায় নিবেদিত।'
      }
    },

    // Footer menu items (specific 4 items)
    menuItems: [
      {
        key: 'commitment',
        path: '/commitment',
        label: {
          en: 'Commitment',
          bn: 'অঙ্গীকার'
        }
      },
      {
        key: 'works',
        path: '/works',
        label: {
          en: 'Notable Works',
          bn: 'উল্লেখযোগ্য কাজ'
        }
      },
      {
        key: 'candidate',
        path: '/candidate',
        label: {
          en: 'Candidate',
          bn: 'প্রার্থী পরিচিতি'
        }
      },
      {
        key: 'contact',
        path: '/contact',
        label: {
          en: 'Contact',
          bn: 'যোগাযোগ'
        }
      }
    ],

    // Contact information
    contact: {
      email: 'samiyaislamlamia@gmail.com',
      phone: '+880 1234 567890', 
      address: {
        en: 'Narayanganj, Bangladesh',
        bn: 'নারায়ণগঞ্জ, বাংলাদেশ'
      }
    },

    // Social media links
    social: {
      facebook: 'https://facebook.com/LamiyaEmii',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
      youtube: 'https://youtube.com/',
      linkedin: 'https://linkedin.com/'
    },

    // Office Hours
    officeHours: {
      en: "Sunday - Thursday: 9:00 AM - 5:00 PM",  
      bn: "রবিবার - বৃহস্পতিবার: সকাল ৯:০০ - বিকাল ৫:০০"  
    },

    // Copyright and developer
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

  // Navigation Menu (full menu for navbar)
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