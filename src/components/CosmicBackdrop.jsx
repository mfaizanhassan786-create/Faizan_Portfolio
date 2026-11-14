import { useEffect, useRef } from 'react'

function createStars(count) {
  return Array.from({ length: count }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() > 0.96 ? 1.5 : Math.random() * 0.8 + 0.25,
    phase: index * 1.618,
    speed: Math.random() * 0.008 + 0.002,
    color: index % 5 === 0 ? '160, 143, 255' : index % 3 === 0 ? '115, 164, 255' : '235, 236, 255',
  }))
}

export default function CosmicBackdrop({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: true })
    if (!canvas || !context) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointerFine = window.matchMedia('(pointer: fine)')
    const mobile = window.matchMedia('(max-width: 640px)')
    const pointer = { x: 0, y: 0 }
    let stars = []
    let width = 0
    let height = 0
    let animationId = 0
    let lastFrame = 0
    let visible = !document.hidden
    let inView = true

    const draw = (time = 0) => {
      if (!width || !height) return
      context.clearRect(0, 0, width, height)
      const offsetX = pointerFine.matches ? pointer.x * 10 : 0
      const offsetY = pointerFine.matches ? pointer.y * 8 : 0

      for (const star of stars) {
        const x = (star.x * width + offsetX * star.radius + width) % width
        const y = (star.y * height + offsetY * star.radius + height) % height
        const twinkle = reduceMotion.matches
          ? 0.72
          : 0.55 + Math.sin(time * star.speed + star.phase) * (mobile.matches ? 0.12 : 0.3)
        context.beginPath()
        context.arc(x, y, star.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(${star.color}, ${twinkle})`
        context.fill()
      }

      if (!reduceMotion.matches && !mobile.matches) {
        const cycle = (time % 12000) / 12000
        if (cycle < 0.035) {
          const progress = cycle / 0.035
          const x = width * (0.18 + progress * 0.72)
          const y = height * (0.12 + progress * 0.28)
          const trail = context.createLinearGradient(x - 70, y - 28, x, y)
          trail.addColorStop(0, 'rgba(125, 146, 255, 0)')
          trail.addColorStop(1, 'rgba(190, 177, 255, 0.75)')
          context.beginPath()
          context.moveTo(x - 70, y - 28)
          context.lineTo(x, y)
          context.strokeStyle = trail
          context.lineWidth = 1.2
          context.stroke()
        }
      }
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const count = window.innerWidth < 640 ? 70 : window.innerWidth < 1024 ? 110 : 160
      stars = createStars(count)
      draw()
    }

    const animate = (time) => {
      if (!visible || reduceMotion.matches) return
      const frameInterval = mobile.matches ? 1000 / 20 : 1000 / 30
      if (time - lastFrame >= frameInterval) {
        draw(time)
        lastFrame = time
      }
      animationId = window.requestAnimationFrame(animate)
    }

    const start = () => {
      window.cancelAnimationFrame(animationId)
      if (visible && !reduceMotion.matches) animationId = window.requestAnimationFrame(animate)
      else draw()
    }

    const onPointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.x = (event.clientX - bounds.left) / Math.max(bounds.width, 1) - 0.5
      pointer.y = (event.clientY - bounds.top) / Math.max(bounds.height, 1) - 0.5
      if (reduceMotion.matches) draw()
    }

    const onVisibilityChange = () => {
      visible = inView && !document.hidden
      start()
    }

    const observer = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting
        visible = inView && !document.hidden
        start()
      }, { threshold: 0 })

    observer?.observe(canvas)
    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)
    reduceMotion.addEventListener('change', start)
    resize()
    start()

    return () => {
      window.cancelAnimationFrame(animationId)
      observer?.disconnect()
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      reduceMotion.removeEventListener('change', start)
    }
  }, [])

  return <canvas ref={canvasRef} className={`cosmic-canvas ${className}`} aria-hidden="true" />
}
