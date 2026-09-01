import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const copyright = t('footer.copyright').replace('{year}', new Date().getFullYear())

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-name">{t('footer.name')}</div>
        <div className="footer-meta">{copyright}</div>
      </div>
    </footer>
  )
}
