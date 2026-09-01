import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ open, src, alt, caption, closeLabel, onClose, returnFocusRef }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      const focusTarget = returnFocusRef?.current || previousFocus
      focusTarget?.focus?.()
    }
  }, [open, onClose, returnFocusRef])

  if (!open) return null

  return createPortal(
    <div
      className="lightbox"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      onClick={onClose}
    >
      <button className="lightbox-close" ref={closeRef} type="button" aria-label={closeLabel} onClick={onClose}>×</button>
      <figure className="lightbox-figure">
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>,
    document.body,
  )
}
