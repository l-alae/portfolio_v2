import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import PageTransition, { pageItemVariants } from '../components/PageTransition'
import ProjectCard from '../components/ProjectCard'
import { useLanguage } from '../context/LanguageContext'
import projects from '../data/projects'

export default function Projects() {
  const { t } = useLanguage()
  return (
    <PageTransition><section className="page projects-page">
      <PageHeader eyebrow={t('projectIndex.eyebrow')} title={t('projectIndex.title')} lede={t('projectIndex.lede')} />
      <motion.div className="all-project-rows" variants={pageItemVariants}>
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
      </motion.div>
    </section></PageTransition>
  )
}
