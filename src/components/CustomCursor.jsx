import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const glow = glowRef.current
    const canUseCustomCursor = window.matchMedia('(pointer: fine) and (hover: hover)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!cursor || !glow || !canUseCustomCursor.matches || reduceMotion.matches) return undefined

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let targetX = x
    let targetY = y
    let animationId = 0
    let active = false

    const animate = () => {
      x += (targetX - x) * 0.22
      y += (targetY - y) * 0.22
      cursor.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`
      animationId = window.requestAnimationFrame(animate)
    }

    const onPointerMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY
      if (!active) {
        active = true
        cursor.classList.add('is-visible')
        glow.classList.add('is-visible')
        animate()
      }

      const interactive = event.target.closest('a, button, input, textarea, [role="button"]')
      cursor.classList.toggle('is-hovering', Boolean(interactive))
    }

    const onPointerLeave = () => {
      active = false
      cursor.classList.remove('is-visible', 'is-hovering')
      glow.classList.remove('is-visible')
      window.cancelAnimationFrame(animationId)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onPointerLeave)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <>
      <span ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <span ref={cursorRef} className="custom-cursor" aria-hidden="true" />
    </>
  )
}
