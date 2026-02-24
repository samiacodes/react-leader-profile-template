import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'
// import CompactFooter from '@/components/layout/CompactFooter'
import PyramidFooter from '@/components/layout/PyramidFooter'

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <PyramidFooter/>
      {/* <CompactFooter/> */}
      {/* <Footer /> */}
    </div>
  )
}

export default RootLayout