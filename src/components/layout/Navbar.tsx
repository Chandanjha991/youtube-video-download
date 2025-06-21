import React from 'react'
import { Download, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Youtube className="text-youtube-red" size={32} />
          <span className="text-xl font-bold text-primary-600">
            Video Downloader
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
          >
            <Download size={20} />
            <span>Download</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar