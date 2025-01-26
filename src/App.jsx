import React, { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const [isThemeDark,setIsThemeDark] = useState(true);
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className={`w-full min-h-screen text-zinc-900 bg-white dark:text-white dark:bg-zinc-900 ${isThemeDark ? 'dark':''}`}>
      <Navbar isDark={isThemeDark} setIsDark={setIsThemeDark}/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App