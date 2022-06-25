import Image from 'next/image'
import { useState } from 'react';

function Camera({ id }) {
  const [random] = useState(Math.random());
  const [loading, setLoading] = useState(true);
  
  const handleLoadingEnd = () => {
    setLoading(false);
  };

  return (
    <div className='relative w-full xl:w-[44%] h-max aspect-video select-none pointer-events-none'>
      {
        loading && (
          <div className='absolute inset-0 z-40 bg-black/80 h-full aspect-video'>
            <div className='flex items-center align-middle justify-center text-center h-full aspect-video'>
              <div className='text-8xl animate-pulse opacity-50'>📡</div>
            </div>
          </div>
        )
      }
      <Image onLoad={handleLoadingEnd} alt={`camera-${id}`} src={`http://jezioro.firlej.pl/images/Kamery/Kamera${id}.jpg?r=${random}#joomlaImage://local-images/Kamery/Kamera${id}.jpg`} layout='fill'/>  
    </div>
  )
}

export default Camera;