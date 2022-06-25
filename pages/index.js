import Head from 'next/head'
import { useState } from 'react'

import Camera from '../components/Camera'

export default function Home() {
  const [cams] = useState([
    { id: 4 },
    { id: 10 },
    { id: 11 },
    { id: 12 }
  ]);

  return (
    <div className='bg-black overflow-x-hidden'>
      <Head>
        <title>Firlej Kamery</title>
      </Head>
      <div className='w-screen h-screen flex flex-wrap items-center align-middle justify-center'>
        { 
          cams.map((cam) => 
            <Camera key={cam.id} id={cam.id}/>
          )
        }
      </div>
    </div>
  )
}
