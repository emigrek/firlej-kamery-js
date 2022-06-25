import Image from 'next/image'
import { useState } from 'react';
import CameraLoader from './CameraLoader';

function Camera({ id }) {
  const [random] = useState(Math.random());
  const [loading, setLoading] = useState(true);
  
  const handleLoadingEnd = () => {
    setLoading(false);
  };

  return (
    <div className='relative xl:h-1/2 h-auto xl:w-auto w-full aspect-video select-none pointer-events-none'>
      { loading && <CameraLoader/> }
      <Image onLoad={handleLoadingEnd} alt={`camera-${id}`} src={`http://jezioro.firlej.pl/images/Kamery/Kamera${id}.jpg?r=${random}#joomlaImage://local-images/Kamery/Kamera${id}.jpg`} layout='fill'/>  
    </div>
  )
}

export default Camera;