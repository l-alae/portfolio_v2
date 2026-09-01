import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const label = theme === 'light' ? t('theme.switchToDark') : t('theme.switchToLight')

  return (
    <button className="icon-button" type="button" onClick={toggleTheme} aria-label={label} title={label}>
      {theme === 'light' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" /><circle cx="12" cy="12" r="4" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.3A8 8 0 0 1 8.7 4 8.5 8.5 0 1 0 20 15.3Z" /></svg>
      )}
    </button>
  )
}
