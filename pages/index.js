import { useState } from 'react'

import Camera from '../components/Camera'

export default function Home() {
  const [cams] = useState([4, 10, 11, 12]);

  return (
    <div className='p-0 m-0 overflow-x-hidden bg-black'>
      <div className='flex flex-wrap items-center justify-center w-screen h-screen align-middle'>
        { cams.map((cam) => <Camera key={cam} id={cam}/> ) }
      </div>
    </div>
  )
}
