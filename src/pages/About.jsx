import { motion } from 'framer-motion'
import { useState } from 'react'
import RichText from '../components/RichText'
import PageHeader from '../components/PageHeader'
import PageTransition, { pageItemVariants } from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'
import usePageTitle from '../hooks/usePageTitle'

// Flip to true once alae-laita-cv.pdf is added to public/cv/.
const CV_AVAILABLE = false

const skillGroups = [
  ['pipelines', ['Python', 'Java', 'JavaScript', 'SQL', 'PySpark', 'pandas', 'dbt', 'Airflow', 'ETL/ELT']],
  ['modelling', ['scikit-learn', 'K-Means', 'SARIMAX', 'OLS', 'Time series', 'Hyperparameter tuning', 'Feature engineering']],
  ['storage', ['PostgreSQL', 'MySQL', 'MongoDB']],
  ['interfaces', ['React', 'Node.js', 'Express', 'Tableau', 'Power BI', 'Docker', 'Git', 'Linux']],
]

export default function About() {
  const { t } = useLanguage()
  usePageTitle('about.title')
  const [photoFailed, setPhotoFailed] = useState(false)
  const bio = t('about.bio')

  return (
    <PageTransition>
      <section className="page about-page">
        <PageHeader eyebrow={t('about.eyebrow')} title={t('about.title')} />
        <motion.div className="about-content" variants={pageItemVariants}>
          <div className="about-intro">
            <div className="about-photo">
              {photoFailed ? (
                <span className="image-placeholder">alae.jpg</span>
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}images/alae.jpg`}
                  alt={t('about.photoAlt')}
                  width="800"
                  height="1000"
                  loading="lazy"
                  onError={() => setPhotoFailed(true)}
                />
              )}
            </div>
            <div className="about-bio">
              <RichText value={bio.slice(0, 2)} />
              {CV_AVAILABLE && (
                <a className="cv-link" href={`${import.meta.env.BASE_URL}cv/alae-laita-cv.pdf`} download>
                  {t('about.downloadCv')}
                </a>
              )}
            </div>
          </div>
          <div className="about-bio about-bio-continuation">
            <RichText value={bio.slice(2)} />
          </div>
          <section className="spoken-languages" aria-labelledby="spoken-languages-title">
            <h2 id="spoken-languages-title">{t('about.skills.spokenEyebrow')}</h2>
            <div className="spoken-language-list">
              {t('about.skills.spokenLanguages').map((language, index) => (
                <span key={language}>
                  {index > 0 && <span className="spoken-separator" aria-hidden="true">·</span>}
                  {language}
                </span>
              ))}
            </div>
          </section>
          <section className="skills-section" aria-labelledby="skills-title">
            <div className="skills-eyebrow">{t('about.skills.eyebrow')}</div>
            <h2 id="skills-title">{t('about.skills.title')}</h2>
            <div className="skills-grid">
              {skillGroups.map(([group, items]) => (
                <section className={`skill-group skill-group-${group}`} key={group}>
                  <h3>{t(`about.skills.groups.${group}`)}</h3>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              ))}
            </div>
          </section>
        </motion.div>
      </section>
    </PageTransition>
  )
}
