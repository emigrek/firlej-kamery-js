import Image from 'next/image'

function Camera({ id }) {
  return (
    <div className='snap-always snap-center relative w-screen h-max aspect-video'>
        <Image alt={`camera-${id}`} src={`http://jezioro.firlej.pl/images/Kamery/Kamera${id}.jpg#joomlaImage://local-images/Kamery/Kamera${id}.jpg`} layout='fill'/>  
    </div>
  )
}

export default Camera;