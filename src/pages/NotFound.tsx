import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-[#1F7A63] mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Page not found
      </p>
      <Link to="/">
        <Button className="bg-[#1F7A63] hover:bg-[#2E8F77] text-white">
          Go Home
        </Button>
      </Link>
    </div>
  )
}

export default NotFound