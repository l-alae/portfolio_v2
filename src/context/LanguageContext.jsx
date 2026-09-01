import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n'

const LanguageContext = createContext(null)

function resolvePath(source, key) {
  return key.split('.').reduce((value, segment) => value?.[segment], source)
}

function getInitialLanguage() {
  const stored = localStorage.getItem('lang')
  return stored === 'fr' ? 'fr' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = translations[lang].meta.title
    localStorage.setItem('lang', lang)
  }, [lang])

  const value = useMemo(() => {
    function t(key, missingValue) {
      const translated = resolvePath(translations[lang], key)
      if (translated !== undefined) return translated

      if (missingValue !== undefined) return missingValue

      if (import.meta.env.DEV) console.warn(`Missing translation: ${lang}.${key}`)
      const fallback = resolvePath(translations.en, key)
      return fallback === undefined ? key : fallback
    }

    return { lang, setLang, t }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
