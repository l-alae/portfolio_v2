import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'
import Nav from './Nav'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const { t } = useLanguage()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isProjectDetail = /^\/projects\/[^/]+\/?$/.test(location.pathname)

  useEffect(() => setMenuOpen(false), [location.pathname])

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <div className="header-bar container">
        <div className="header-primary">
          <Link className="logo" to="/" aria-label={t('nav.logo')}>
            <span className="logo-full">{t('brand.name')}</span>
            <span className="logo-short">{t('brand.shortName')}</span>
          </Link>
          <div className="header-navigation">
            <Nav className="desktop-nav" />
            {isProjectDetail && (
              <Link className="project-header-back desktop-project-back" to="/projects" aria-label={t('projectDetail.headerBackAria')}>
                <span className="project-header-back-arrow" aria-hidden="true">←</span>
                <span>{t('projectDetail.headerBack')}</span>
              </Link>
            )}
          </div>
        </div>
        <div className="header-actions">
          <LanguageToggle />
          <ThemeToggle />
          {isProjectDetail && (
            <Link className="project-header-back mobile-project-back" to="/projects" aria-label={t('projectDetail.headerBackAria')}>
              <span className="project-header-back-arrow" aria-hidden="true">←</span>
            </Link>
          )}
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' is-open' : ''}`} hidden={!menuOpen}>
        <Nav className="container" />
      </div>
    </header>
  )
}
