import { useLanguage } from '../context/LanguageContext'
import GithubIcon from './icons/GithubIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import MailIcon from './icons/MailIcon'
import CrescentIcon from './icons/CrescentIcon'
import BookIcon from './icons/BookIcon'

export default function Footer() {
  const { t } = useLanguage()
  const links = t('footer.links')
  const icons = [GithubIcon, LinkedInIcon, MailIcon]

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-columns">
          <div className="footer-identity">
            <div className="footer-name">{t('footer.name')}</div>
            <div className="footer-icon-links">
              {links.map((link, index) => {
                const Icon = icons[index]
                return (
                  <a
                    href={link.href}
                    key={link.label}
                    aria-label={link.label}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
            <div className="footer-discipline">{t('footer.discipline')}</div>
          </div>
          <div className="footer-handle">
            <div className="footer-handle-value">{t('footer.handle')}</div>
            <div className="footer-handle-icons" aria-hidden="true">
              <CrescentIcon size={18} />
              <BookIcon size={18} />
            </div>
          </div>
        </div>
        <div className="footer-source">
          <span>{new Date().getFullYear()} · </span>
          <a href="https://github.com/l-alae/portfolio_v2" target="_blank" rel="noopener noreferrer">
            {t('footer.source')}
          </a>
        </div>
      </div>
    </footer>
  )
}
