import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Nav({ className = '' }) {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const links = [
    ['/', 'nav.home'],
    ['/experience', 'nav.experience'],
    ['/projects', 'nav.projects'],
    ['/about', 'nav.about'],
    ['/contact', 'nav.contact'],
  ]

  return (
    <nav className={className} aria-label={t('nav.primary')}>
      <ul className="nav-list">
        {links.map(([to, key]) => {
          const projectActive = to === '/projects' && pathname.startsWith('/projects/')
          return (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={({ isActive }) => (isActive || projectActive ? 'active' : undefined)}>
                {t(key)}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
