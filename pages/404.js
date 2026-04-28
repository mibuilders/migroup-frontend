// pages/404.js
import Buttons from '@/components/common/Button'
import { useRouter } from 'next/router'


export default function Custom404() {
    const router=useRouter()
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-color text-center px-4">
      <div>
        <h1 className="text-6xl font-extrabold text-secondary-color mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
    
     <div className='flex justify-center'>
     <Buttons onClick={()=>{router.push('/')}} text={" Go Home"} />
     </div>
      </div>
    </div>
  )
}
