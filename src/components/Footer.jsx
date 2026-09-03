import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const links = t('footer.links')

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-columns">
          <div className="footer-identity">
            <div className="footer-name">{t('footer.name')}</div>
            <div className="footer-discipline">{t('footer.discipline')}</div>
          </div>
          <div className="footer-links">
            <div className="footer-label">{t('footer.elsewhere')}</div>
            {links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-handle">
            <div className="footer-label">{t('footer.elsewhereIm')}</div>
            <div className="footer-handle-value">{t('footer.handle')}</div>
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
