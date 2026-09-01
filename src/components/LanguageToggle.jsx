import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()
  return (
    <div className="language-toggle" role="group" aria-label={t('language.label')}>
      <button type="button" aria-label={t('language.english')} aria-pressed={lang === 'en'} onClick={() => setLang('en')}>{t('language.englishShort')}</button>
      <span aria-hidden="true">|</span>
      <button type="button" aria-label={t('language.french')} aria-pressed={lang === 'fr'} onClick={() => setLang('fr')}>{t('language.frenchShort')}</button>
    </div>
  )
}
