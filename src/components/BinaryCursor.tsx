import { useEffect, useMemo, useRef } from 'react'

export default function BinaryCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const digits = useMemo(
    () => Array.from({ length: 32 }, (_, index) => (index * 7) % 3 === 0 ? '1' : '0'),
    [],
  )

  useEffect(() => {
    const element = cursorRef.current
    if (!element) return

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return

    let targetX = -200
    let targetY = -200
    let currentX = -200
    let currentY = -200
    let frame = 0

    const render = () => {
      currentX += (targetX - currentX) * 0.16
      currentY += (targetY - currentY) * 0.16
      element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        frame = window.requestAnimationFrame(render)
      } else {
        frame = 0
      }
    }

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      element.classList.add('is-visible')
      if (!frame) frame = window.requestAnimationFrame(render)
    }

    const handleLeave = () => element.classList.remove('is-visible')

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={cursorRef} className="binary-cursor" aria-hidden="true">
      {digits.map((digit, index) => (
        <span key={index} style={{ '--digit-index': index } as React.CSSProperties}>
          {digit}
        </span>
      ))}
    </div>
  )
}
