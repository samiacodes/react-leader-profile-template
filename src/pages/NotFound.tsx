import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
      <p className="text-xl text-black dark:text-white mb-8">
        Page not found
      </p>
      <Link to="/">
        <Button className="btn-secondary">
          Go Home
        </Button>
      </Link>
    </div>
  )
}

export default NotFound