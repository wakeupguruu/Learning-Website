import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
export default function CosmicScroll() {
  
  const stickyRef = useRef(null)
  const img1Ref = useRef(null)
  const img2Ref = useRef(null)
  const img3Ref = useRef(null)
  const copyRef = useRef(null)

  useEffect(() => {
    
    
    const totalStickyHeight = window.innerHeight * 4

    const introParagraphs = document.querySelectorAll('.intro-col p')
    introParagraphs.forEach((paragraph) => {
      const text = paragraph.textContent || ''
      paragraph.innerHTML = text
        .split(/(\s+)/)
        .map((part) => {
          if (part.trim() === '') {
            return part
          } else {
            return part
              .split('')
              .map((char) => `<span style="opacity: 0; display: inline-block;">${char}</span>`)
              .join('')
          }
        })
        .join('')
    })

    function flickerAnimation(targets, toOpacity) {
      gsap.to(targets, {
        opacity: toOpacity,
        duration: 0.05,
        stagger: {
          amount: 0.3,
          from: 'random',
        },
        
      })
    }

    ScrollTrigger.create({
      trigger: stickyRef.current,
      start: 'top top',
      end: () => `${window.innerHeight * 33}`,
      onEnter: () => flickerAnimation('.intro-col p span', 1),
      onLeave: () => flickerAnimation('.intro-col p span', 0),
      onEnterBack: () => flickerAnimation('.intro-col p span', 1),
      onLeaveBack: () => flickerAnimation('.intro-col p span', 0),
    })

    ScrollTrigger.create({
      trigger: stickyRef.current,
      start: 'top top',
      end: () => `+=${totalStickyHeight}`,
      pin: true,
      pinSpacing: true,
    })

    gsap.to(img1Ref.current, {
      scale: 1.525,
      ease: 'none',
      scrollTrigger: {
        trigger: stickyRef.current,
        start: 'top top',
        end: () => `+=${window.innerHeight}`,
        scrub: true,
      },
    })

    gsap.to(img2Ref.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'none',
      scrollTrigger: {
        trigger: stickyRef.current,
        start: 'top top',
        end: () => `+=${window.innerHeight}`,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.set(img2Ref.current, {
            clipPath: `polygon(
              ${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(25, 0, progress)}%,
              ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(25, 0, progress)}%,
              ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%,
              ${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%
            )`,
          })
        },
      },
    })

    gsap.to(img3Ref.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'none',
      scrollTrigger: {
        trigger: stickyRef.current,
        start: () => `${window.innerHeight * 3.5}`,
        end: () => `${window.innerHeight * 5}`,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.set(img3Ref.current, {
            clipPath: `polygon(
              ${gsap.utils.interpolate(50, 0, progress)}% ${gsap.utils.interpolate(50, 0, progress)}%,
              ${gsap.utils.interpolate(50, 100, progress)}% ${gsap.utils.interpolate(50, 0, progress)}%,
              ${gsap.utils.interpolate(50, 100, progress)}% ${gsap.utils.interpolate(50, 100, progress)}%,
              ${gsap.utils.interpolate(50, 0, progress)}% ${gsap.utils.interpolate(50, 100, progress)}%
            )`,
          })
        },
      },
    })

    gsap.fromTo(
      '.img-2 img',
      { scale: 1.125 },
      {
        scale: 1.25,
        ease: 'none',
        scrollTrigger: {
          trigger: stickyRef.current,
          start: () => `${window.innerHeight * 5}`,
          end: () => `${window.innerHeight * 7}`,
          scrub: true,
        },
      }
    )

    gsap.fromTo(
      '.img-3 img',
      { scale: 2.9 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: stickyRef.current,
          start: () => `${window.innerHeight * 3.8}`,
          end: () => `${window.innerHeight * 6}`,
          scrub: true,
        },
      }
    )

    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: stickyRef.current,
    //     start: () => `${window.innerHeight * 4.3}`,
    //     end: () => `${window.innerHeight * 6}`,
    //     scrub: true,
    //     toggleActions: 'play reverse play reverse',
    //   },
    // })

    // tl.to(copyRef.current, {
    //   display: 'block',
    //   rotateY: 0,
    //   scale: 1,
    //   duration: 1,
    // })

    return () => {
      
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <>
     
      <section ref={stickyRef} className="relative w-full h-screen perspective-1000">
        <div className="intro absolute top-1/2 -translate-y-1/2 w-full p-4 flex z-10">
          <div className="intro-col flex-1 flex">
            <p className="flex-1 uppercase text-2xl font-normal text-white">Veiled depths of eternity</p>
            <p className="flex-1 uppercase text-2xl font-normal text-white">Currents of cosmic wisdom</p>
          </div>
          <div className="intro-col flex-1 flex">
            <p className="flex-1 uppercase text-2xl font-normal text-white text-right">Nexus of all existence</p>
          </div>
        </div>

        <div className="img-1 absolute top-0 left-0 w-full h-screen overflow-hidden">
          <img ref={img1Ref} src="/CosmicScroll/img-1.webp" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div ref={img2Ref} className="img-2 absolute top-0 left-0 w-full h-screen overflow-hidden" style={{ clipPath: 'polygon(40% 25%, 60% 25%, 60% 75%, 40% 75%)' }}>
          <img src="/CosmicScroll/img-2.webp" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div ref={img3Ref} className="img-3 absolute top-0 left-0 w-full h-screen overflow-hidden" style={{ clipPath: 'polygon(50% 25%, 50% 25%, 50% 75%, 50% 75%)' }}>
          <img src="/CosmicScroll/img-3.webp" alt="" className="w-full h-full object-cover origin-top-right scale-[3]" />
        </div>

      
      </section>
      
    </>
  )
}