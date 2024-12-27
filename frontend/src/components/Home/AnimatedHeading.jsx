import Button from '../utils/Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedHeading() {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const titleRef = useRef(null)
  const additionalTextRef = useRef(null)

  useEffect(() => {
    const getRandom = (min, max) => Math.random() * (max - min) + min

    // Animate header elements
    const headerElements = headerRef.current?.querySelectorAll('.header-text')
    headerElements?.forEach((el, i) => {
      gsap.set(el, {
        y: getRandom(-800, -400),
        x: getRandom(-200, 200),
        rotationX: getRandom(-90, 90),
        rotationY: getRandom(-90, 90),
        rotationZ: getRandom(-90, 90),
        opacity: 0,
      })

      gsap.to(el, {
        y: 0,
        x: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        }
      })
    })

    // Animate main text characters
    const animateChars = (chars) => {
      chars?.forEach((char, i) => {
        gsap.set(char, {
          y: getRandom(-1000, -500),
          x: getRandom(-500, 500),
          rotationX: getRandom(-180, 180),
          rotationY: getRandom(-180, 180),
          rotationZ: getRandom(-180, 180),
          opacity: 0,
          transformOrigin: "50% 50% -50px",
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "center center",
            scrub: 1.5,
          }
        })

        // Different animation for each character
        if (i % 4 === 0) {
          tl.to(char, {
            y: 0,
            x: 0,
            rotationX: 720,
            rotationY: 0,
            rotationZ: 0,
            opacity: 1,
            duration: 2,
            ease: "power4.out",
          })
        } else if (i % 4 === 1) {
          tl.to(char, {
            y: 0,
            x: 0,
            rotationX: 0,
            rotationY: 720,
            rotationZ: 0,
            opacity: 1,
            duration: 2.2,
            ease: "power3.inOut",
          })
        } else if (i % 4 === 2) {
          tl.to(char, {
            y: 0,
            x: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 720,
            opacity: 1,
            duration: 2.4,
            ease: "back.out(1.7)",
          })
        } else {
          tl.to(char, {
            y: 0,
            x: 0,
            rotationX: 360,
            rotationY: 360,
            rotationZ: 360,
            opacity: 1,
            duration: 2.6,
            ease: "elastic.out(1, 0.8)",
          })
        }
      })
    }

    const mainChars = titleRef.current?.querySelectorAll('.char')
    animateChars(mainChars)

    const additionalChars = additionalTextRef.current?.querySelectorAll('.char')
    animateChars(additionalChars)

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="h-[150vh]  relative perspective-[1000px]">
      <div className=" sticky top-0 h-[100vh] flex flex-col items-center justify-center pt-96 text-lWhite">
        <div ref={headerRef} className="text-center mb-16 relative z-10">
          {/* <div className="header-text text-2xl sm:text-3xl tracking-widest mb-2">AA</div>
          <div className="header-text text-sm sm:text-base tracking-[0.2em] mb-4">Lorem, ipsum.</div> */}
          <div className="header-text text-sm sm:text-base tracking-[0.3em]">Theory</div>
        </div>

        <div
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-serif tracking-wider relative z-0"
        >
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 mb-6">
            {"The Science".split("").map((char, i) => (
              <span
                key={`1-${i}`}
                className="char inline-block transform-gpu"
                style={{ display: char === " " ? "inline-block" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4">
            {"Behind the Code".split("").map((char, i) => (
              <span
                key={`2-${i}`}
                className="char inline-block transform-gpu"
                style={{ display: char === " " ? "inline-block" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={additionalTextRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide text-center mt-16"
        >
          <div className="mb-4">
            {"The more you know".split("").map((char, i) => (
              <span
                key={`3-${i}`}
                className="char inline-block transform-gpu"
                style={{ display: char === " " ? "inline-block" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="mb-4">
            {"the theory, the more".split("").map((char, i) => (
              <span
                key={`4-${i}`}
                className="char inline-block transform-gpu"
                style={{ display: char === " " ? "inline-block" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div>
            {"you can bend the rules".split("").map((char, i) => (
              <span
                key={`5-${i}`}
                className="char inline-block transform-gpu"
                style={{ display: char === " " ? "inline-block" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <Button
            id="start-theory"
            title="Start Theory"
            navigateTo="/theory"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-lWhite flex justify-center items-center gap-1 z-[40] mt-10 "
          />
        </div>
      </div>
    </div>
  )
}
