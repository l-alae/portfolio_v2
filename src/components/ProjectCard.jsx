import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import ExternalIcon from './icons/ExternalIcon'
import GithubIcon from './icons/GithubIcon'

export default function ProjectCard({ project, index }) {
  const { t } = useLanguage()
  const key = `projects.${project.i18nKey}`
  const tech = t(`${key}.tech`)
  const title = t(`${key}.title`)

  return (
    <article className={`project-card${project.status ? ' is-muted' : ''}`}>
      <Link className="project-card-main-link" to={`/projects/${project.slug}`} aria-label={title} />
      <span className="project-card-marker">
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        {project.status === 'in-progress' && <span className="project-status">{t('projects.status.inProgress')}</span>}
      </span>
      <span className="project-card-content">
        <span className="project-card-title">{title}</span>
        <span className="project-card-blurb">{t(`${key}.blurb`)}</span>
        <span className="project-tech">
          {tech.map((item) => <span className="tech-tag" key={item}>{item}</span>)}
        </span>
      </span>
      {(project.repoUrl || project.liveUrl) && (
        <span className="project-card-icons">
          {project.repoUrl && (
            <a
              className="project-card-icon-link"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('projectDetail.source')}
            >
              <GithubIcon />
            </a>
          )}
          {project.liveUrl && (
            <a
              className="project-card-icon-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('projectDetail.openLiveDemo')}
            >
              <ExternalIcon />
            </a>
          )}
        </span>
      )}
    </article>
  )
}
