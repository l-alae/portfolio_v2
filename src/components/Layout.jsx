import { cloneElement } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLocation, useOutlet } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Footer from './Footer'
import Header from './Header'
import PointerGlow from './PointerGlow'

export default function Layout() {
  const { t } = useLanguage()
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <div className="site-shell">
      <PointerGlow />
      <a className="skip-link" href="#main-content">{t('accessibility.skipToContent')}</a>
      <Header />
      <main id="main-content" className="main-content" tabIndex="-1">
        <div className="route-stage">
          <AnimatePresence mode="wait">
            {outlet && cloneElement(outlet, { key: location.pathname })}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  )
}
