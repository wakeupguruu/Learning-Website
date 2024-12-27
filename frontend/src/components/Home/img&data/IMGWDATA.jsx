

import React, { useCallback, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Button from "../../utils/Button"
import { TiLocationArrow } from "react-icons/ti"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const IMGWDATA = ({ imgSrc, text, buttonData }) => {
    const sectionRef = useRef(null)
    const mouseCon = useRef(null)
    const imgRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        // Reset rotation when component mounts
        gsap.set('.img', {
            transformPerspective: 1000,
            transformOrigin: 'center'
        })

        const section = sectionRef.current
        const img = imgRef.current
        const text = textRef.current

        if (!section || !img || !text) return

        // Create a timeline for the scroll animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top -50%",
                scrub: 1,
            }
        })

        // Image animation
        tl.fromTo(img,
            {
                x: '-10%',
                rotateY: '-70%',
            },
            {
                x: '0%',
                rotateY: '0%',
                ease: "power2.out",
            }
        )

        // Text animation
        tl.fromTo(text,
            {
                x: '-10%',
                rotateY: '-50%',
                opacity: 0,
            },
            {
                x: '0%',
                rotateY: '0%',
                opacity: 1,
                ease: "power2.out",
            },
            "<+=0.2" // Start slightly after the image animation
        )

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    const handleMouseMove = useCallback((e) => {
        if (!mouseCon.current) return

        const bounds = mouseCon.current.getBoundingClientRect()
        const mouseX = e.clientX - bounds.left
        const mouseY = e.clientY - bounds.top

        // Convert mouse position to -1 to 1 range
        const xRatio = (mouseX / bounds.width - 0.5) * 2
        const yRatio = (mouseY / bounds.height - 0.5) * 2

        // Calculate rotation values
        const rotateY = xRatio * 17
        const rotateX = -yRatio * 13

        gsap.to('.img', {
            rotateX,
            rotateY,
            duration: 0.5,
            ease: "power2.out",
        })
    }, [])

    const handleMouseLeave = useCallback(() => {
        gsap.to('.img', {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
        })
    }, [])

    return (
        <div ref={sectionRef} className="w-full min-h-screen px-4 sm:px-8 md:px-12 py-12 md:py-8 md:mb-8 flex flex-col md:flex-row items-center md:items-start justify-between overflow-hidden">
            <div
                ref={mouseCon}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full md:w-[44%] h-full p-4 sm:p-8 md:p-16"
            >
                <div className="aspect-[3/4] flex items-center justify-center md:justify-between">
                    <div ref={imgRef} className="img overflow-hidden border-2 w-full md:w-[75%] h-[80%] rounded-lg border-wBorder">
                        <img
                            className="w-full h-full object-contain filter saturate-100 contrast-125"
                            src={imgSrc}
                            alt="Featured image"
                        />
                    </div>
                </div>
            </div>

            <div ref={textRef} className="w-full md:w-[50%] h-full text-center text-lWhite mt-8 md:mt-0">
                <h2 className="mt-8 md:mt-28 text-sm font-Aeonik">{text.h2}</h2>
                <h4 className="mt-2 md:mt-4 text-4xl md:text-7xl font-extrabold font-ZENTRY px-4 sm:px-10 md:px-20">{text.h4}</h4>
                <h6 className="mt-8 md:mt-36 px-4 sm:px-16 md:px-36 text-base md:text-lg font-Aeonik font-normal text-lGray-200">{text.h6}</h6>
                <div className="space-y-4 mt-8 md:mt-4 flex items-center justify-center">
                    <Button
                        id="start-theory"
                        title={buttonData.text}
                        navigateTo={buttonData.navigateTo}
                        leftIcon={<TiLocationArrow />}
                        containerClass="bg-lWhite flex justify-center items-center gap-1 z-[40] mt-4 md:mt-10"
                    />
                </div>
            </div>
        </div>
    )
}

export default IMGWDATA

