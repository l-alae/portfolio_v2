import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const SITE_TITLE = 'nocturnalae'

export default function usePageTitle(key) {
  const { lang, t } = useLanguage()

  useEffect(() => {
    document.title = key ? `${t(key)} · ${SITE_TITLE}` : SITE_TITLE
  }, [key, lang, t])
}
