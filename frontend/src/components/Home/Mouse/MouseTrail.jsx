import { useEffect, useRef, useState } from 'react'

export default function MouseTrail() {
  const svgRef = useRef(null)
  const pathRef = useRef(null)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    let points= []
    const segments = 60
    let mouse = { x: 0, y: 0 }
    let animationFrameId

    const move = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY

      if (points.length === 0) {
        for (let i = 0; i < segments; i++) {
          points.push({ x: mouse.x, y: mouse.y })
        }
      }
    }

    const anim = () => {
      let px = mouse.x
      let py = mouse.y

      points.forEach((p, index) => {
        p.x = px
        p.y = py

        let n = points[index + 1]

        if (n) {
          px = px - (p.x - n.x) * 0.35
          py = py - (p.y - n.y) * 0.35
        }
      })

      if (pathRef.current) {
        pathRef.current.setAttribute('d', `M ${points.map((p) => `${p.x} ${p.y}`).join(' L ')}`)
      }

      animationFrameId = requestAnimationFrame(anim)
    }

    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setWindowSize({ width, height })
    }

    document.addEventListener('mousemove', move)
    window.addEventListener('resize', resize)
    resize()
    anim()

    return () => {
      document.removeEventListener('mousemove', move)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{ width: windowSize.width, height: windowSize.height }}
      viewBox={`0 0 ${windowSize.width} ${windowSize.height}`}
    >
      <path ref={pathRef} className=" fill-none stroke-[#5cab8b71] stroke-[4px] stroke-round" style={{strokeLinecap:'round', strokeLinejoin:'round'}}/>
    </svg>
  )
}