import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Lighteffect from './components/Home/Lighteffect';
import AnimatedHeading from './components/Home/AnimatedHeading';
import MouseTrail from './components/Home/Mouse/MouseTrail';
import Lenis from '@studio-freight/lenis'
import ImgDataContainer from './components/Home/img&data/ImgDataContainer';
import Footer from './components/Footer/Footer';
import About from './components/Home/About/About';
gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  const user = localStorage.getItem('codex-user')

  

  return (
    <>
      <>
        <div className="w-full min-h-[100vh] overflow-hidden bg-lBackground">
          <Navbar />
          <MouseTrail />
          <div className='w-full h-[87vh]'>
            <Lighteffect />
          </div>

          <div className='w-full h-[150vh]'>
            < AnimatedHeading />
          </div>
          <div className='w-full  relative'>
            <About />
          </div>


          <div className='w-full'>
            <ImgDataContainer />
          </div>


        <Footer />
        </div>
      </>
    </>
  )
}

export default App
