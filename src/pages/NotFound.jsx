import { motion } from 'framer-motion'
import RichText from '../components/RichText'
import PageHeader from '../components/PageHeader'
import PageTransition, { pageItemVariants } from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  const { t } = useLanguage()
  usePageTitle('pageTitles.notFound')
  return <PageTransition><section className="page"><PageHeader eyebrow={t('pages.notFound.eyebrow')} title={t('pages.notFound.title')} /><motion.div className="page-body" variants={pageItemVariants}><RichText value={t('pages.notFound.placeholder')} /></motion.div></section></PageTransition>
}
