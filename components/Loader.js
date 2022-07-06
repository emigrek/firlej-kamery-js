import React from 'react'
import Image from 'next/image'

function Loader() {
  return (
    <div className='absolute inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center align-middle'>
      <div className='relative w-28 h-28 opacity-70'>
        <Image alt="logo" priority src={`/logo_firlej.png`} layout='fill'/>  
      </div>
    </div>
  )
}

export default Loader