import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Download, Link as LinkIcon } from 'lucide-react'
import axios from 'axios'

const Home: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [downloadOptions, setDownloadOptions] = useState<any[]>([])

  const handleDownload = async () => {
    if (!videoUrl) {
      toast.error('Please enter a valid YouTube URL')
      return
    }

    setLoading(true)
    try {
      // Simulated API call - replace with actual YouTube download service
      const response = await axios.post('https://example.com/download', { url: videoUrl })
      setDownloadOptions(response.data.formats)
      toast.success('Download options retrieved successfully!')
    } catch (error) {
      toast.error('Failed to retrieve download options')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-primary-600 mb-4 text-center">
          YouTube Video Downloader
        </h1>
        <div className="flex space-x-2">
          <div className="relative flex-grow">
            <input 
              type="text" 
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Enter YouTube Video URL" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <LinkIcon 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              size={20} 
            />
          </div>
          <button 
            onClick={handleDownload}
            disabled={loading}
            className={`px-4 py-2 bg-primary-600 text-white rounded-md flex items-center space-x-2 
              ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-700'}
              transition-colors`}
          >
            <Download size={20} />
            <span>Get Options</span>
          </button>
        </div>
      </div>

      {downloadOptions.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary-600">
            Download Options
          </h2>
          <div className="space-y-3">
            {downloadOptions.map((option, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center bg-gray-50 p-3 rounded-md"
              >
                <div>
                  <p className="font-medium">{option.quality} - {option.type}</p>
                  <p className="text-sm text-gray-500">{option.size}</p>
                </div>
                <button 
                  className="px-3 py-1 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home