import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  useGSAP(()=>{
    gsap.to("#tag",{
      width:'8vw',
      duration:1,
      ease:'power3.inOut',
      delay:1.3
    })
  })
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-40 px-20">
            <div className="masker mt-32">
                <h1 className='uppercase text-8xl leading-none tracking-tighter font-medium'>WE CREATE</h1>
                {/* <div className="w-[6vw] h-[5vw]"></div> */}
                <h1 className='uppercase text-8xl leading-none tracking-tighter font-medium'>
                <div 
                //  initial={{width:"0px"}}
                //  animate={{width:"8vw"}}
                //  transition={{ease: [0.76, 0, 0.24, 1], duration:1}}
                 id='tag'
                 className="w-[0vw] h-[5.3vw] relative top-[0.2vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-left bg-cover inline-block rounded-md"></div>
                  Eye Opening</h1>
                <h1 className='uppercase text-8xl leading-none tracking-tighter font-medium'>Presentation</h1>
            </div>
            
            <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-10 capitalize">
                <p className="text-md font-light tracking-tight leading-none">For Public And Public Companies</p>
                <p className="text-md font-light tracking-tight leading-none">From the first Pich to IPO </p>
                {/* <p className="text-md font-light tracking-tight leading-none">Start the project</p> */}
                <div className="start flex items-center gap-2">
                  <div className='px-4 py-2 border-[1px] rounded-full border-zinc-500 font-light text-sm'>Start the project</div>
                  <div className="w-10 h-10 border-[1px] rounded-full border-zinc-500 flex items-center justify-center rotate-[45deg]">
                    <FaArrowUpLong/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage