import React from 'react'

function Error() {
  return (
    <div className='group absolute inset-0 z-40 bg-white/10 h-full aspect-video backdrop-blur-md'>
        <div className='flex flex-col space-y-1 items-center align-middle justify-center text-center aspect-video'>
            <div className='text-6xl my-5'>
              ❌
            </div>
            <div className='text-white text-2xl font-bold'>
              Brak obrazu z kamery
            </div>
            <div className='text-white/50 text-sm border-b-2 border-b-transparent group-hover:border-b-2 group-hover:border-sky-600/50 transition-all duration-100 group-hover:text-sky-600'>
              Kliknij aby odświeżyć
            </div>
        </div>
    </div>
  )
}

export default Error