export interface CommitmentDetail {
  number: string
  title: {
    en: string
    bn: string
  }
  description: {
    en: string
    bn: string
  }
  path: string
  icon: 'target' | 'heart' | 'award' | 'users' | 'globe'
  images: string[]
  plan: {
    en: string
    bn: string
  }
  achievements: {
    en: string
    bn: string
  }
  updates: {
    date: string
    text: {
      en: string
      bn: string
    }
  }[]
}

export const commitmentContent: CommitmentDetail[] = [
  {
    number: '১',
    title: {
      en: 'Quality Education for All',
      bn: 'সবার জন্য মানসম্মত শিক্ষা'
    },
    description: {
      en: 'Ensuring access to quality education for every child in the constituency.',
      bn: 'নির্বাচনী এলাকার প্রতিটি শিশুর জন্য মানসম্মত শিক্ষা নিশ্চিত করা।'
    },
    path: '/commitment/1',
    icon: 'target',
    images: [
      '/images/commitment/education-1.jpg',
      '/images/commitment/education-2.jpg',
      '/images/commitment/education-3.jpg',
      '/images/commitment/education-4.jpg'
    ],
    plan: {
      en: 'Our plan includes building new schools, providing free textbooks, and ensuring modern teaching methods. We aim to reduce dropout rates and improve overall education quality.',
      bn: 'আমাদের পরিকল্পনার মধ্যে রয়েছে নতুন স্কুল নির্মাণ, বিনামূল্যে পাঠ্যবই প্রদান এবং আধুনিক শিক্ষাপদ্ধতি নিশ্চিত করা। আমরা ঝরে পড়ার হার কমানো এবং সামগ্রিক শিক্ষার মান উন্নত করার লক্ষ্য নিয়েছি।'
    },
    achievements: {
      en: 'So far, we have established 5 new schools, provided scholarships to 1000+ students, and introduced digital learning in 20 institutions.',
      bn: 'এ পর্যন্ত আমরা ৫টি নতুন স্কুল প্রতিষ্ঠা করেছি, ১০০০+ শিক্ষার্থীকে বৃত্তি প্রদান করেছি এবং ২০টি প্রতিষ্ঠানে ডিজিটাল লার্নিং চালু করেছি।'
    },
    updates: [
      {
        date: '2024-01-15',
        text: {
          en: 'New computer lab inaugurated in Barishal High School',
          bn: 'বরিশাল হাই স্কুলে নতুন কম্পিউটার ল্যাব উদ্বোধন'
        }
      },
      {
        date: '2023-12-10',
        text: {
          en: 'Free textbook distribution completed for 2024 academic year',
          bn: '২০২৪ শিক্ষাবর্ষের জন্য বিনামূল্যে পাঠ্যবই বিতরণ সম্পন্ন'
        }
      }
    ]
  },
  {
    number: '২',
    title: {
      en: 'Healthcare for Everyone',
      bn: 'সবার জন্য স্বাস্থ্যসেবা'
    },
    description: {
      en: 'Modern healthcare facilities accessible to all residents.',
      bn: 'সবার জন্য আধুনিক স্বাস্থ্যসেবা সুবিধা।'
    },
    path: '/commitment/2',
    icon: 'heart',
    images: [
      '/images/commitment/health-1.jpg',
      '/images/commitment/health-2.jpg',
      '/images/commitment/health-3.jpg',
      '/images/commitment/health-4.jpg'
    ],
    plan: {
      en: 'Our healthcare plan includes setting up community clinics, mobile medical camps, and ensuring affordable medicine for all.',
      bn: 'আমাদের স্বাস্থ্যসেবা পরিকল্পনার মধ্যে রয়েছে কমিউনিটি ক্লিনিক স্থাপন, মোবাইল মেডিকেল ক্যাম্প এবং সবার জন্য সাশ্রয়ী ওষুধ নিশ্চিত করা।'
    },
    achievements: {
      en: 'We have established 3 community clinics, organized 15 health camps, and provided free medicine to 5000+ patients.',
      bn: 'আমরা ৩টি কমিউনিটি ক্লিনিক স্থাপন করেছি, ১৫টি স্বাস্থ্য ক্যাম্পের আয়োজন করেছি এবং ৫০০০+ রোগীকে বিনামূল্যে ওষুধ প্রদান করেছি।'
    },
    updates: [
      {
        date: '2024-02-20',
        text: {
          en: 'New community clinic opened in Ward 4',
          bn: 'ওয়ার্ড ৪ এ নতুন কমিউনিটি ক্লিনিক চালু'
        }
      }
    ]
  },
  {
    number: '৩',
    title: {
      en: 'Infrastructure Development',
      bn: 'অবকাঠামো উন্নয়ন'
    },
    description: {
      en: 'Building roads, bridges, and modern infrastructure.',
      bn: 'রাস্তা, সেতু ও আধুনিক অবকাঠামো নির্মাণ।'
    },
    path: '/commitment/3',
    icon: 'award',
    images: [
      '/images/commitment/infra-1.jpg',
      '/images/commitment/infra-2.jpg',
      '/images/commitment/infra-3.jpg',
      '/images/commitment/infra-4.jpg'
    ],
    plan: {
      en: 'Our infrastructure plan focuses on road connectivity, bridge construction, and urban development projects.',
      bn: 'আমাদের অবকাঠামো পরিকল্পনা সড়ক সংযোগ, সেতু নির্মাণ এবং নগর উন্নয়ন প্রকল্পের উপর দৃষ্টি নিবদ্ধ করে।'
    },
    achievements: {
      en: 'Completed 25km of new roads, 3 bridges, and 2 market development projects.',
      bn: '২৫ কিমি নতুন রাস্তা, ৩টি সেতু এবং ২টি বাজার উন্নয়ন প্রকল্প সম্পন্ন করেছি।'
    },
    updates: [
      {
        date: '2024-01-05',
        text: {
          en: 'New bridge connecting 3 villages inaugurated',
          bn: '৩টি গ্রামকে সংযুক্ত করে নতুন সেতু উদ্বোধন'
        }
      }
    ]
  },
  {
    number: '৪',
    title: {
      en: 'Employment Generation',
      bn: 'কর্মসংস্থান সৃষ্টি'
    },
    description: {
      en: 'Creating job opportunities for the youth.',
      bn: 'তরুণদের জন্য কর্মসংস্থানের সুযোগ সৃষ্টি।'
    },
    path: '/commitment/4',
    icon: 'users',
    images: [
      '/images/commitment/jobs-1.jpg',
      '/images/commitment/jobs-2.jpg',
      '/images/commitment/jobs-3.jpg',
      '/images/commitment/jobs-4.jpg'
    ],
    plan: {
      en: 'Our employment plan includes skill development programs, job fairs, and entrepreneurship support.',
      bn: 'আমাদের কর্মসংস্থান পরিকল্পনার মধ্যে রয়েছে দক্ষতা উন্নয়ন কর্মসূচি, চাকরি মেলা এবং উদ্যোক্তা সহায়তা।'
    },
    achievements: {
      en: 'Trained 1000+ youth, helped 200+ start businesses, and facilitated 500+ job placements.',
      bn: '১০০০+ তরুণকে প্রশিক্ষণ দিয়েছি, ২০০+ কে ব্যবসা শুরু করতে সহায়তা করেছি এবং ৫০০+ চাকরির ব্যবস্থা করেছি।'
    },
    updates: [
      {
        date: '2024-02-10',
        text: {
          en: 'Free vocational training program launched',
          bn: 'বিনামূল্যে কারিগরি প্রশিক্ষণ কর্মসূচি চালু'
        }
      }
    ]
  },
  {
    number: '৫',
    title: {
      en: 'Sustainable Development',
      bn: 'টেকসই উন্নয়ন'
    },
    description: {
      en: 'Environmentally friendly development projects.',
      bn: 'পরিবেশবান্ধব উন্নয়ন প্রকল্প।'
    },
    path: '/commitment/5',
    icon: 'globe',
    images: [
      '/images/commitment/sustainable-1.jpg',
      '/images/commitment/sustainable-2.jpg',
      '/images/commitment/sustainable-3.jpg',
      '/images/commitment/sustainable-4.jpg'
    ],
    plan: {
      en: 'Our sustainable development plan includes renewable energy, waste management, and green spaces.',
      bn: 'আমাদের টেকসই উন্নয়ন পরিকল্পনার মধ্যে রয়েছে নবায়নযোগ্য জ্বালানি, বর্জ্য ব্যবস্থাপনা এবং সবুজ স্থান।'
    },
    achievements: {
      en: 'Installed solar panels in 5 schools, planted 10,000 trees, and started waste management program.',
      bn: '৫টি স্কুলে সোলার প্যানেল স্থাপন করেছি, ১০,০০০ গাছ লাগিয়েছি এবং বর্জ্য ব্যবস্থাপনা কর্মসূচি শুরু করেছি।'
    },
    updates: [
      {
        date: '2024-01-25',
        text: {
          en: 'Tree plantation drive covered 5 villages',
          bn: 'বৃক্ষরোপণ অভিযান ৫টি গ্রামে সম্পন্ন'
        }
      }
    ]
  }
]