import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

function HomePage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">{t('welcome')}</h1>
    </div>
  )
}

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const menuItems = [
    { path: '/', key: 'home' },
    { path: '/about', key: 'about' },
    { path: '/promises', key: 'promises' },
    { path: '/works', key: 'works' },
    { path: '/gallery', key: 'gallery' },
    { path: '/news', key: 'news' },
    { path: '/contact', key: 'contact' },
  ]

  return (
    <Router>
      <div className="min-h-screen">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="text-xl font-bold">Profile</Link>
              
              <div className="hidden md:flex space-x-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>

              <div className="flex space-x-2">
                <Button 
                  variant={i18n.language === 'bn' ? 'default' : 'outline'}
                  onClick={() => changeLanguage('bn')}
                >
                  বাংলা
                </Button>
                <Button 
                  variant={i18n.language === 'en' ? 'default' : 'outline'}
                  onClick={() => changeLanguage('en')}
                >
                  English
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div className="p-8">{t('about')}</div>} />
          <Route path="/promises" element={<div className="p-8">{t('promises')}</div>} />
          <Route path="/works" element={<div className="p-8">{t('works')}</div>} />
          <Route path="/gallery" element={<div className="p-8">{t('gallery')}</div>} />
          <Route path="/news" element={<div className="p-8">{t('news')}</div>} />
          <Route path="/contact" element={<div className="p-8">{t('contact')}</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App