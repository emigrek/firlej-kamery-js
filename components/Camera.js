import Image from 'next/image'
import { useState } from 'react';

import Loader from './Loader';
import Error from './Error';

function Camera({ id }) {
  const [random, setRandom] = useState(Math.random());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  
  const handleLoadingEnd = () => {
    setTimeout(() => { setLoading(false) }, 500);
  };

  const handleError = () => {
    setError(true)
  };

  const handleRefresh = () => { 
    setError(false);
    setLoading(true);
    setRandom(Math.random());
  }

  return (
    <div onClick={handleRefresh} className='relative xl:h-1/2 h-auto xl:w-auto w-full aspect-video select-none cursor-pointer bg-white/5'>
      { (loading && !error) && <Loader/> }
      { error && <Error/> }
      <Image 
        onLoad={handleLoadingEnd} 
        onError={handleError}
        alt={`camera-${id}`} 
        width={'1280px'} 
        height={'720px'} 
        src={`http://jezioro.firlej.pl/images/Kamery/Kamera${id}.jpg?r=${random}#joomlaImage://local-images/Kamery/Kamera${id}.jpg`}
        layout="responsive"
      /> 
    </div>
  )
}

export default Camera;