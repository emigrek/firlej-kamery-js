import React from 'react'
import Image from 'next/image'

function Loader() {
  return (
    <div className='absolute inset-0 z-40 bg-[#030303dd] backdrop-blur-sm flex items-center justify-center align-middle'>
      <div className='relative w-16 h-16 lg:w-28 lg:h-28 opacity-80 animate-pulse'>
        <Image alt="logo" priority src={`/logo_firlej.png`} layout='fill'/>  
      </div>
    </div>
  )
}

export default Loader