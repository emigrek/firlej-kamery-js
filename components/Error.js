import React from 'react'

function Error() {
  return (
    <div className='group absolute inset-0 z-40 flex flex-col items-center justify-center align-middle bg-black/80'>
        <div className='text-3xl lg:text-6xl my-2'>
          ❌
        </div>
        <div className='text-white text-xl lg:text-2xl font-bold'>
          Brak obrazu z kamery
        </div>
        <div className='text-white/50 text-sm border-b-2 border-b-transparent group-hover:border-b-2 group-hover:border-sky-600/50 transition-all duration-100 group-hover:text-sky-600'>
          Kliknij aby odświeżyć
        </div>
    </div>
  )
}

export default Error