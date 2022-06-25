import React from 'react'
import Image from 'next/image'

function CameraLoader() {
  return (
    <div className='absolute inset-0 z-40 bg-black/80 h-full aspect-video'>
        <div className='flex items-center align-middle justify-center text-center aspect-video'>
            <div className='relative w-32 h-32 opacity-50 animate-pulse'>
                <Image alt="logo" priority src={`/logo_firlej.png`} layout='fill'/>  
            </div>
        </div>
    </div>
  )
}

export default CameraLoader