import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function FloatingProjectBack({ label }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <Link
      className={`floating-project-back${visible ? ' is-visible' : ''}`}
      to="/projects"
      aria-label={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M19 12H5M11 6l-6 6 6 6" />
      </svg>
    </Link>
  )
}
