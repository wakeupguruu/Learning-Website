

import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { CgProfile } from 'react-icons/cg'
import DropDownPrfoile from '../utils/DropDownPrfoile'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuItemsRef = useRef([])
  const underlineRefs = useRef([])
  const backgroundRefs = useRef([])

  useEffect(() => {
    menuItemsRef.current.forEach((item, index) => {
      if (item && underlineRefs.current[index] && backgroundRefs.current[index]) {
        const underline = underlineRefs.current[index]
        const background = backgroundRefs.current[index]
        const text = item.querySelector('h2')

        if (text) {
          // Set initial states
          gsap.set(underline, { width: '100%', scaleX: 0, transformOrigin: 'left' })
          gsap.set(background, { height: 0, bottom: 0 })

          // Create hover animation
          item.addEventListener('mouseenter', () => {
            gsap.to(underline, { scaleX: 1, duration: 0.7, ease: 'power2.out' })
            gsap.to(background, { height: '100%', duration: 0.55, ease: 'power2.out' })
            gsap.to(text, { x: 8, duration: 0.3, ease: 'power2.out' })
          })

          // Create mouse leave animation
          item.addEventListener('mouseleave', () => {
            gsap.to(underline, { scaleX: 0, duration: 0.7, ease: 'power2.in' })
            gsap.to(background, { height: 0, duration: 0.55, ease: 'power2.in' })
            gsap.to(text, { x: 0, duration: 0.3, ease: 'power2.in' })
          })
        }
      }
    })
  }, [])

  useEffect(() => {
    // Prevent scrolling when navbar is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isOpen])

  const handleNavToggle = () => {
    setIsOpen(!isOpen)
    // Animate the left and right panels
    gsap.to('.left', {
      left: isOpen ? '-100%' : '0%',
      zIndex: 60,
      duration: 1,
      ease: 'power2.inOut',
    })
    gsap.to('.right', {
      right: isOpen ? '-100%' : '0%',
      zIndex: 60,
      duration: 1,
      ease: 'power2.inOut',
    })
  }

  const navigate = useNavigate();

  const menuItems = [
    { number: '(1)', title: 'Home', ToNavigate: '/' },
    { number: '(2)', title: 'Roadmap', ToNavigate: '/roadmap' },
    { number: '(3)', title: 'Questions', ToNavigate: '/questions' },
    { number: '(4)', title: 'Profile', ToNavigate: '/profile' },
    { number: '(5)', title: 'Revision', ToNavigate: '/revision' },
    { number: '(6)', title: 'Notes', ToNavigate: '/notes' },
    { number: '(7)', title: 'Theory', ToNavigate: '/theory' },
  ]

  return (
    <div className="w-full relative h-[100px] text-lWhite border-b-2 border-wBorder px-4 sm:px-10 font-PPFragment">
      {/* Header content */}
      <div className="w-full h-full flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl uppercase">codex</h2>
        <div className="flex items-center justify-between gap-4 sm:gap-10 z-50">
          <div className="text-sm sm:text-base font-semibold flex items-center justify-center gap-2 sm:gap-4">
            <h1 className="hidden sm:block">EST - 2024</h1>
            <DropDownPrfoile />
          </div>
          <button className="z-[10]" onClick={handleNavToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-8 sm:size-10"
            >
              <path strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation menu */}
      <div className={`fixed inset-0 w-full h-screen flex flex-col md:flex-row items-center justify-between ${isOpen ? 'z-50' : '-z-10'}`}>
        {/* Left panel with menu items */}
        <div className="left w-full sm:w-[50%] absolute top-0 -left-full h-1/2 sm:h-full bg-lWhite flex flex-col items-start justify-evenly">
          {menuItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (menuItemsRef.current[index] = el)}
              className="w-full h-full border-b border-[#1E1005] flex items-center justify-between px-4 sm:px-10 transition-all duration-300 relative overflow-hidden"
              onClick={() => {
                navigate(item.ToNavigate)
                handleNavToggle()
              }}
            >
              <div
                ref={(el) => (backgroundRefs.current[index] = el)}
                className="absolute inset-x-0 bottom-0 bg-lGreen-300 opacity-40 z-0"
              ></div>
              <div className="flex items-start justify-between gap-2 sm:gap-5 text-lBackground z-0 relative">
                <h4 className="text-xs sm:text-sm mt-1 font-medium">{item.number}</h4>
                <h2 className="text-3xl sm:text-5xl mb-3 font-medium uppercase transition-all duration-300">
                  {item.title}
                </h2>
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-lGreen-500 flex items-center justify-center z-0 relative text-sm sm:text-base">
                {index + 1}
              </div>
              <div
                ref={(el) => (underlineRefs.current[index] = el)}
                className="absolute -bottom-[1px] left-0 w-full h-[3.5px] bg-lGreen-500 z-0"
              ></div>
            </div>
          ))}
        </div>
        {/* Right panel */}
        <div className="right w-full sm:w-[50%] absolute top-1/2 sm:top-0 -right-full h-1/2 sm:h-full bg-lBackground text-lWhite">
          {/* Close button */}
          <div className="w-full h-[50px] sm:h-[100px] flex items-center justify-end px-4 sm:px-16">
            <button
              onClick={handleNavToggle}
              className="bg-lGreen-500 rounded-full font-light px-3 py-1 sm:py-1 text-sm sm:text-base flex items-center justify-center hover:bg-lBackground hover:border-2 hover:border-lWhite"
            >
              CLOSE
            </button>
          </div>

          {/* Main content */}
          <div className="text-center mt-4 sm:mt-20">
            <h2 className="text-5xl sm:text-8xl">CODEX</h2>
          </div>

          {/* Contact information */}
          <div className="text-center mt-4 sm:mt-20 flex justify-center items-center pb-4 mb-12 sm:pb-9">
            <div className="flex flex-col justify-between items-start gap-4 sm:gap-12">
              <div className="flex items-start justify-center gap-8 sm:gap-28 w-full sm:w-48">
                <div className="text-start flex-shrink-0">
                  <h4 className="text-base sm:text-3xl font-medium">DEVELOPER</h4>
                  <div className="flex items-center justify-center flex-col">
                    <h6 className="text-[12px] sm:text-xs  font-light mb-1">TANVEER SINGH</h6>
                    <h6 className="text-[12px] sm:text-xs  font-light mb-1">VYAS GURU</h6>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center gap-8 sm:gap-28 w-full sm:w-48">
                <div className="text-start flex-shrink-0">
                  <h4 className="text-base sm:text-xl font-medium">EMAIL</h4>
                  <h6 className="text-[10px] sm:text-xs font-light mb-1">tanveerrajpurohit603@gmail.com</h6>
                  <h6 className="text-[10px] sm:text-xs font-light mb-1">vyasguru19@gmail.com</h6>
                </div>
                <div className="text-start flex-shrink-0">
                  <h4 className="text-base sm:text-xl font-medium">SOCIAL</h4>
                  <h6 className="text-[10px] sm:text-xs font-light mb-1">INSTAGRAM</h6>
                  <h6 className="text-[10px] sm:text-xs font-light mb-1">FACEBOOK</h6>
                  <h6 className="text-[10px] sm:text-xs font-light mb-1">TWITTER (X)</h6>
                </div>
              </div>
              <div className="flex items-start justify-between gap-8 sm:gap-28 w-full sm:w-48">
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="w-full h-[50px] sm:h-[100px] border-t border-[#FBF0DA] flex items-center justify-center">
            <h5 className="text-sm sm:text-base">@CODEX - 2024</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
