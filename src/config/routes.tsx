import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import CandidatePage from '@/pages/CandidatePage'
import CommitmentPage from '@/pages/CommitmentPage'
import WorksPage from '@/pages/WorksPage'
import GalleryPage from '@/pages/GalleryPage'
import NewsPage from '@/pages/NewsPage'
import ContactPage from '@/pages/ContactPage'
import NotFound from '@/pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'candidate',
        element: <CandidatePage />,
      },
      {
        path: 'commitment',
        element: <CommitmentPage />,
      },
      {
        path: 'works',
        element: <WorksPage />,
      },
      {
        path: 'gallery',
        element: <GalleryPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  }
])