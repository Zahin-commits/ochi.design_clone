import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-[100%] bg-[#004D43] py-20 rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden flex whitespace-nowrap">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[20vw] pr-10 leading-none uppercase font-bold' >We Are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[20vw] pr-10 leading-none uppercase font-bold' >We Are Ochi</motion.h1>
            {/* <motion.h1 className='text-[20vw] leading-none uppercase font-bold' >We Are Ochi</motion.h1> */}
        </div>
    </div>
  )
}

export default Marquee