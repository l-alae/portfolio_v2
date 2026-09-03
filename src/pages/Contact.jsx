import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import PageTransition, { pageItemVariants } from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'
import usePageTitle from '../hooks/usePageTitle'

export default function Contact() {
  const { t } = useLanguage()
  usePageTitle('contact.title')
  const links = t('contact.links')

  return (
    <PageTransition>
      <section className="page contact-page">
        <PageHeader eyebrow={t('contact.eyebrow')} title={t('contact.title')} lede={t('contact.lede')} />
        <motion.div className="contact-links" variants={pageItemVariants}>
          {links.map((link) => (
            <div className="contact-row" key={link.label}>
              <span className="contact-label">{link.label}</span>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.value}
              </a>
            </div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  )
}
