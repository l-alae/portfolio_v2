import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import PageTransition, { pageItemVariants, staggerVariants } from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'
import projects from '../data/projects'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  const { t } = useLanguage()
  usePageTitle()
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <PageTransition><div className="home-page">
      <motion.section className="home-hero" variants={staggerVariants}>
        <motion.div className="home-label" variants={pageItemVariants}>{t('home.label')}</motion.div>
        <motion.h1 variants={pageItemVariants}>{t('home.name')}</motion.h1>
        <motion.p className="home-lede" variants={pageItemVariants}>{t('home.lede')}</motion.p>
        <motion.div className="home-links" variants={pageItemVariants}>
          <Link className="text-link" to="/projects">
            {t('home.ctaProjects')} <span aria-hidden="true">→</span>
          </Link>
          <Link className="text-link" to="/contact">{t('home.ctaContact')}</Link>
        </motion.div>
      </motion.section>

      <motion.section className="home-section" aria-labelledby="selected-work-title" variants={pageItemVariants}>
        <h2 className="section-label" id="selected-work-title">{t('home.selectedWork')}</h2>
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <Link className="all-projects-link" to="/projects">
          {t('home.allProjects')} <span aria-hidden="true">→</span>
        </Link>
      </motion.section>
    </div></PageTransition>
  )
}
