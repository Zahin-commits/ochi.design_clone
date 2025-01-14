import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Marquee = () => {
    useGSAP(()=>{
      gsap.to(".marq",{
         x:'-100%',
         duration:5,
         ease:'linear',
         repeat:-1
      })
    })
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-[100%] bg-[#004D43] py-20 rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden flex whitespace-nowrap">
            <h1 className='marq text-[20vw] pr-10 leading-none uppercase font-bold translate-x-0' >We Are Ochi</h1>
            <h1 className='marq text-[20vw] pr-10 leading-none uppercase font-bold translate-x-0' >We Are Ochi</h1>
            {/* <motion.h1 className='text-[20vw] leading-none uppercase font-bold' >We Are Ochi</motion.h1> */}
        </div>
    </div>
  )
}

export default Marquee