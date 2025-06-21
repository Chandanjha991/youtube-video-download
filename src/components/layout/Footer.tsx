import React from 'react'
import { Github, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-md py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          © 2024 YouTube Video Downloader. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer