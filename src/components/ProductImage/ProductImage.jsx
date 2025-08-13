"use client"

import { useState } from 'react'
import Image from 'next/image'

const ProductImage = ({ src, alt, title, category, index }) => {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  // Generate initials from title
  const getInitials = (text) => {
    return text
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  if (imageError) {
    return (
      <div className={`w-24 h-24 mb-6 relative flex items-center justify-center mx-auto rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300 ${
        index % 2 === 0 
          ? "bg-gradient-to-br from-blue-500 to-blue-600" 
          : "bg-gradient-to-br from-orange-500 to-orange-600"
      }`}>
        <span className="text-white font-bold text-xl">
          {getInitials(title)}
        </span>
      </div>
    )
  }

  return (
    <div className="w-24 h-24 mb-6 relative flex items-center justify-center mx-auto rounded-2xl overflow-hidden bg-gray-100 group-hover:scale-110 transition-transform duration-300">
      {isLoading && (
        <div className={`absolute inset-0 flex items-center justify-center ${
          index % 2 === 0 
            ? "bg-gradient-to-br from-blue-500 to-blue-600" 
            : "bg-gradient-to-br from-orange-500 to-orange-600"
        }`}>
          <span className="text-white font-bold text-xl">
            {getInitials(title)}
          </span>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        suppressHydrationWarning={true}
      />
    </div>
  )
}

export default ProductImage
