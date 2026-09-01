import { useEffect, useRef } from 'react'

const LERP_FACTOR = 0.08
const MAGNETIC_DISTANCE = 40
const MAGNETIC_SHIFT = 3

export default function PointerGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return undefined

    const coarsePointer = window.matchMedia('(pointer: coarse)')
    const narrowViewport = window.matchMedia('(max-width: 767px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const queries = [coarsePointer, narrowViewport, reducedMotion]
    let stopEffect = null

    function effectAllowed() {
      return !coarsePointer.matches && !narrowViewport.matches && !reducedMotion.matches
    }

    function startEffect() {
      const raw = { x: 0, y: 0 }
      const smooth = { x: 0, y: 0 }
      const magneticElements = Array.from(document.querySelectorAll('.desktop-nav a, .language-toggle, .header-actions > .icon-button:not(.menu-button)'))
      const magneticPositions = new Map(magneticElements.map((element) => [element, { x: 0, y: 0 }]))
      let hasPointer = false
      let frameId = 0

      function handlePointerMove(event) {
        raw.x = event.clientX
        raw.y = event.clientY

        if (!hasPointer) {
          smooth.x = raw.x
          smooth.y = raw.y
          hasPointer = true
          glow.classList.add('is-visible')
        }
      }

      function handlePointerLeave() {
        hasPointer = false
        glow.classList.remove('is-visible')
      }

      function animate() {
        smooth.x += (raw.x - smooth.x) * LERP_FACTOR
        smooth.y += (raw.y - smooth.y) * LERP_FACTOR
        glow.style.setProperty('--px', `${smooth.x}px`)
        glow.style.setProperty('--py', `${smooth.y}px`)

        magneticElements.forEach((element) => {
          const rect = element.getBoundingClientRect()
          const dx = raw.x - (rect.left + rect.width / 2)
          const dy = raw.y - (rect.top + rect.height / 2)
          const edgeX = Math.max(Math.abs(dx) - rect.width / 2, 0)
          const edgeY = Math.max(Math.abs(dy) - rect.height / 2, 0)
          const edgeDistance = Math.hypot(edgeX, edgeY)
          const centerDistance = Math.hypot(dx, dy) || 1
          const pull = hasPointer && edgeDistance < MAGNETIC_DISTANCE
            ? (1 - edgeDistance / MAGNETIC_DISTANCE) * MAGNETIC_SHIFT
            : 0
          const targetX = (dx / centerDistance) * pull
          const targetY = (dy / centerDistance) * pull
          const position = magneticPositions.get(element)

          position.x += (targetX - position.x) * 0.16
          position.y += (targetY - position.y) * 0.16
          element.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`
        })

        frameId = window.requestAnimationFrame(animate)
      }

      document.addEventListener('pointermove', handlePointerMove, { passive: true })
      document.addEventListener('pointerleave', handlePointerLeave)
      frameId = window.requestAnimationFrame(animate)

      return () => {
        document.removeEventListener('pointermove', handlePointerMove)
        document.removeEventListener('pointerleave', handlePointerLeave)
        window.cancelAnimationFrame(frameId)
        glow.classList.remove('is-visible')
        magneticElements.forEach((element) => {
          element.style.removeProperty('transform')
        })
      }
    }

    function syncEffect() {
      if (stopEffect) {
        stopEffect()
        stopEffect = null
      }

      if (effectAllowed()) stopEffect = startEffect()
    }

    queries.forEach((query) => query.addEventListener('change', syncEffect))
    syncEffect()

    return () => {
      if (stopEffect) stopEffect()
      queries.forEach((query) => query.removeEventListener('change', syncEffect))
    }
  }, [])

  return <div className="pointer-glow" ref={glowRef} aria-hidden="true" />
}
