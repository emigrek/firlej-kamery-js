import Image from 'next/image'
import { useEffect, useState } from 'react';

import Loader from './Loader';
import Error from './Error';

function Camera({ id }) {
  const [random, setRandom] = useState(Math.random());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const refreshTime = 1000*60*5;
  const loadingTime = 500;

  useEffect(() => {
    const refresh = setInterval(handleRefresh, refreshTime);
    return () => clearInterval(refresh);
  }, [random]);

  const handleRefresh = () => { 
    setLoading(true);
    setError(false);
    setRandom(Math.random());
  }

  const handleLoadingEnd = () => {
    setTimeout(() => {
      setLoading(false);
    }, loadingTime);
  };

  const handleError = () => {
    setError(true)
  };

  return (
    <div onClick={handleRefresh} className='relative xl:h-1/2 h-auto xl:w-auto w-full aspect-video select-none cursor-pointer bg-white/5' style={{ WebkitTapHighlightColor: 'transparent', WebkitTouchCallout: 'none'}}>
      { (loading && !error) && <Loader/> }
      { error && <Error/> }
      <Image 
        onLoad={handleLoadingEnd} 
        onError={handleError}
        alt={`camera-${id}`}
        width={'1280px'} 
        quality={100}
        height={'720px'}
        src={`http://jezioro.firlej.pl/images/Kamery/Kamera${id}.jpg?r=${random}#joomlaImage://local-images/Kamery/Kamera${id}.jpg`}
        layout="responsive"
      /> 
    </div>
  )
}

export default Camera;