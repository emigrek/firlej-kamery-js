import React from 'react'
import Image from 'next/image'

function Loader() {
  return (
    <div className='absolute inset-0 z-40 bg-black/50 h-full aspect-video backdrop-blur-sm'>
      <div className='flex items-center align-middle justify-center text-center aspect-video animate-pulse'>
          <div className='relative w-32 h-32 opacity-70'>
              <Image alt="logo" priority src={`/logo_firlej.png`} layout='fill'/>  
          </div>
      </div>
    </div>
  )
}

export default Loader