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
    <div>
      <Head>
        <title>Firlej Kamery</title>
      </Head>
      <div className='w-screen h-screen grid grid-cols-1 xl:grid-cols-2 bg-black'>
        { 
          cams.map((cam) => 
            <Camera key={cam.id} id={cam.id}/>
          )
        }
      </div>
    </div>
  )
}
