import React from 'react'
import Image from 'next/image'

function Loader() {
  return (
    <div className='absolute inset-0 z-40 bg-black/70 h-full aspect-video backdrop-blur-md'>
        <div className='flex items-center align-middle justify-center text-center aspect-video animate-pulse'>
            <div className='relative w-32 h-32 opacity-50'>
                <Image alt="logo" priority src={`/logo_firlej.png`} layout='fill'/>  
            </div>
        </div>
    </div>
  )
}

export default Loader