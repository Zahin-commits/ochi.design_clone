import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <p className='text-6xl'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</p>

      <div className="w-full flex gap-5 pt-10 border-t-[2px] mt-20 border-[#adc454]">
        <div className="w-1/2">
          <h1 className='text-6xl'>Our Approach:</h1>
          <button className='flex gap-10 uppercase items-center px-7 py-4 mt-10 bg-zinc-900 rounded-full text-white'>Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b3ce54]"></div>
      </div>
    </div>
  )
}

export default About