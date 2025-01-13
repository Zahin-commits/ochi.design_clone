import { useGSAP } from '@gsap/react'
import { motion as m} from 'framer-motion'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Featured = () => {
  // useGSAP(()=>{
  //   gsap.to(".card_container1 .heading1 span",{
  //     y: 0,
  //     stagger:0.07,
  //     duration: 0.35,
  //     ease: "power3.out"
  //   })
  // })
  const headingRef = useRef();
  const handleHover = (cont)=>{
    
       gsap.to(`${cont} .heading span`,{
      
      y: 0,
      stagger:0.07,
      duration: 0.35,
      ease: "power4.inOut"
    })
   
    console.log("enter")
  }
  const handleLeave = (cont)=>{
    gsap.to(`${cont} h1 span`,{
      y: 100,
      stagger:0.07,
      duration: 0.35,
      ease: "power4.inOut"
    })
    console.log("leave")
  }
  return (
    <div className='w-full py-14'>
        <div className='w-full px-14 pb-14 border-b-[1px] border-zinc-700'>
            <h1 className='text-7xl'>Featured Projects</h1>
        </div>
     
     <div className='px-14'>
        <div className="cards relative w-full flex gap-10 mt-10">

            <div 
              onMouseEnter={()=>handleHover(".card_container1")} 
              onMouseLeave={()=>handleLeave(".card_container1")} 
              className="card_container1 w-1/2 h-[75vh] overflow-hidden rounded-lg">
               <h1 className='heading absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[#CDEA68] text-8xl leading-none tracking-tighter font-bold flex clip-th'>
                  {"FYDE".split("").map((item,i)=><span className='inline-block translate-y-full' key={i}>{item}</span>)}    
               </h1>
              <div className="card w-full h-full  rounded-lg">
                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
              </div>
            </div>

            <div 
              onMouseEnter={()=>handleHover(".card_container2")}
              onMouseLeave={()=>handleLeave(".card_container2")} 
              className="card_container2 w-1/2 h-[75vh] overflow-hidden bg-red-500 rounded-lg">
            <h1 className='heading absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[#CDEA68] text-8xl leading-none tracking-tighter font-bold flex clip-th'>
              {"VISE".split("").map((item,i)=><span className='inline-block translate-y-full' key={i}>{item}</span>)}
            </h1>
              <div className="card w-full h-full bg-green-400 rounded-lg">
                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
              </div>
            </div>

        </div>
     </div>
        
    </div>
  )
}

export default Featured