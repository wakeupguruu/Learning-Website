'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function TextEffect() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    let scene,
      camera,
      renderer,
      planeMesh

    let easeFactor = 0.02
    let mousePosition = { x: 0.5, y: 0.5 }
    let targetMousePosition = { x: 0.5, y: 0.5 }
    let prevPosition = { x: 0.5, y: 0.5 }

    const vertexShader = `
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D u_texture;
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;

      void main() {
          vec2 gridUV = floor(vUv * vec2(40.0, 40.0)) / vec2(40.0, 40.0);
          vec2 centerOfPixel = gridUV + vec2(1.0/40.0, 1.0/40.0);

          vec2 mouseDirection = u_mouse - u_prevMouse;

          vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
          float pixelDistanceToMouse = length(pixelToMouseDirection);
          float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

          vec2 uvOffset = strength * -mouseDirection * 0.3;
          vec2 uv = vUv - uvOffset;

          vec4 color = texture2D(u_texture, uv);
          gl_FragColor = color;
      }
    `

    function createTextTexture(text, font, size, color, fontWeight = "100") {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      if (!ctx) return new THREE.Texture()

      const canvasWidth = window.innerWidth * 2
      const canvasHeight = window.innerHeight * 2

      canvas.width = canvasWidth
      canvas.height = canvasHeight

      ctx.fillStyle = color || '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const fontSize = size || Math.floor(canvasWidth * 2)

      ctx.fillStyle = "#1a1a1a"
      ctx.font = `${fontWeight} ${fontSize}px "${font || 'PPFragment'}"`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"

      const textMetrics = ctx.measureText(text)
      const textWidth = textMetrics.width

      const scaleFactor = Math.min(1, (canvasWidth * 1) / textWidth)
      const aspectCorrection = canvasWidth / canvasHeight

      ctx.setTransform(
        scaleFactor,
        0,
        0,
        scaleFactor / aspectCorrection,
        canvasWidth / 2,
        canvasHeight / 2
      )

      ctx.strokeStyle = "#1a1a1a"
      ctx.lineWidth = fontSize * 0.005
      for (let i = 0; i < 3; i++) {
        ctx.strokeText(text, 0, 0)
      }

      ctx.fillText(text, 0, 0)

      return new THREE.CanvasTexture(canvas)
    }

    function initializeScene(texture) {
      scene = new THREE.Scene()

      const aspectRatio = window.innerWidth / window.innerHeight
      camera = new THREE.OrthographicCamera(
        -1,
        1,
        1 / aspectRatio,
        -1 / aspectRatio,
        0.1,
        1000
      )

      camera.position.z = 1

      let shaderUniform = {
        u_mouse: { value: new THREE.Vector2() },
        u_prevMouse: { value: new THREE.Vector2() },
        u_texture: { value: texture },
      }

      planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          uniforms: shaderUniform,
          vertexShader,
          fragmentShader,
        })
      )

      scene.add(planeMesh)

      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setClearColor(0xffffff, 1)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(window.devicePixelRatio)

      containerRef.current?.appendChild(renderer.domElement)
    }

    function reloadTexture() {
      const newTexture = createTextTexture(
        'CODEX',
        'PPFragment',
        null,
        '#ffffff',
        '100'
      )

      if (planeMesh.material instanceof THREE.ShaderMaterial) {
        planeMesh.material.uniforms.u_texture.value = newTexture
      }
    }

    function animateScene() {
      requestAnimationFrame(animateScene)

      mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor

      if (planeMesh.material instanceof THREE.ShaderMaterial) {
        planeMesh.material.uniforms.u_mouse.value.set(
          mousePosition.x,
          1.0 - mousePosition.y
        )

        planeMesh.material.uniforms.u_prevMouse.value.set(
          prevPosition.x,
          1.0 - prevPosition.y
        )
      }

      renderer.render(scene, camera)
    }

    function handleMouseMove(event) {
      easeFactor = 0.04
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return

      prevPosition = { ...targetMousePosition }

      targetMousePosition.x = (event.clientX - rect.left) / rect.width
      targetMousePosition.y = (event.clientY - rect.top) / rect.height
    }

    function handleMouseEnter(event) {
      easeFactor = 0.02
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return

      mousePosition.x = targetMousePosition.x = (event.clientX - rect.left) / rect.width
      mousePosition.y = targetMousePosition.y = (event.clientY - rect.top) / rect.height
    }

    function handleMouseLeave() {
      easeFactor = 0.02
      targetMousePosition = { ...prevPosition }
    }

    function handleWindowResize() {
      const aspectRatio = window.innerWidth / window.innerHeight
      if (camera instanceof THREE.OrthographicCamera) {
        camera.left = -1
        camera.right = 1
        camera.top = 1 / aspectRatio
        camera.bottom = -1 / aspectRatio
        camera.updateProjectionMatrix()
      }

      renderer.setSize(window.innerWidth, window.innerHeight)

      reloadTexture()
    }

    initializeScene(
      createTextTexture('CODEX', 'PPFragment', null, '#ffffff', '100')
    )
    animateScene()

    containerRef.current.addEventListener('mousemove', handleMouseMove)
    containerRef.current.addEventListener('mouseenter', handleMouseEnter)
    containerRef.current.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleWindowResize)

    return () => {
      containerRef.current?.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter)
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleWindowResize)
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full font-PPFragment  ">
      
    </div>
  )
}