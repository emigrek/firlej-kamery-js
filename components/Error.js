import React from 'react'
import { EyeOffIcon, RefreshIcon } from '@heroicons/react/solid'

function Error() {
  return (
    <div className='group absolute inset-0 z-40 flex flex-col items-center justify-center align-middle bg-[#030303]'>
      <div className='relative lg:w-14 lg:h-14 h-11 w-11 my-1'>
        <EyeOffIcon className='text-red-500 group-hover:hidden'/>
        <RefreshIcon className='text-sky-600 hidden group-hover:block'/>
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