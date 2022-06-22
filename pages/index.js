import Head from 'next/head'
import { useState } from 'react'

import Camera from '../components/Camera'
import HelperDown from '../components/HelperDown'

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const [cams] = useState([
    { id: 4 },
    { id: 10 },
    { id: 11 },
    { id: 12 }
  ]);

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  }

  return (
    <div>
      <Head>
        <title>Firlej Kamery</title>
      </Head>
      <div className='w-screen h-screen snap-y overflow-x-hidden snap-mandatory' onScroll={handleScroll}>
        {  scrollTop < 100 && <HelperDown/>  }
        { 
          cams.map((cam) => 
            <Camera key={cam.id} id={cam.id}/>
          )
        }
      </div>
    </div>
  )
}
