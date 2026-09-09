import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import DataTable from '../components/DataTable'
import FloatingProjectBack from '../components/FloatingProjectBack'
import ImageGallery from '../components/ImageGallery'
import Notice from '../components/Notice'
import RichText from '../components/RichText'
import PageHeader from '../components/PageHeader'
import PageTransition, { pageItemVariants } from '../components/PageTransition'
import Section from '../components/Section'
import StatStrip from '../components/StatStrip'
import ExternalIcon from '../components/icons/ExternalIcon'
import GithubIcon from '../components/icons/GithubIcon'
import { useLanguage } from '../context/LanguageContext'
import projects from '../data/projects'
import NotFound from './NotFound'
import usePageTitle from '../hooks/usePageTitle'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const project = projects.find((item) => item.slug === slug)
  usePageTitle(project ? `projects.${project.i18nKey}.title` : 'pageTitles.notFound')
  if (!project) return <NotFound />
  const key = `projects.${project.i18nKey}`
  const isCapitalBikeshare = project.i18nKey === 'capitalBikeshare'
  const isOlist = project.i18nKey === 'olist'
  const isMarketHub = project.i18nKey === 'markethub'
  const imageFiles = {
    eltPipeline: ['elt-dag.png', 'elt-query.png', 'elt-tests.png'],
    heartDisease: ['heart-app.png'],
    markethub: ['markethub-products.png', 'markethub-dashboard.png', 'markethub-render.png'],
  }
  const images = (imageFiles[project.i18nKey] || []).map((filename, index) => ({
    filename,
    src: `${import.meta.env.BASE_URL}images/${filename}`,
    caption: t(`${key}.images.${index}.caption`),
  }))
  const capitalImages = isCapitalBikeshare ? Object.fromEntries(
    ['header', 'controls', 'clusters', 'drawer', 'mobile'].map((name) => [name, {
      filename: `bikeshare-${name}.png`,
      src: `${import.meta.env.BASE_URL}images/bikeshare-${name}.png`,
      caption: t(`${key}.images.${name}.caption`),
    }]),
  ) : {}
  const capitalTableColumns = isCapitalBikeshare ? [
    { key: 'cluster', label: t(`${key}.table.columns.cluster`) },
    { key: 'stations', label: t(`${key}.table.columns.stations`), numeric: true },
    { key: 'memberShare', label: t(`${key}.table.columns.memberShare`), numeric: true },
    { key: 'weekdayPeak', label: t(`${key}.table.columns.weekdayPeak`) },
    { key: 'medianTrips', label: t(`${key}.table.columns.medianTrips`), numeric: true },
  ] : []
  const olistImages = isOlist ? Object.fromEntries(
    [
      ['lifecycle', 'lifecycle_dashboard.png'],
      ['reliability', 'reliability_dashboard.png'],
      ['model', 'model_view.png'],
    ].map(([name, filename]) => [name, {
      filename,
      src: `${import.meta.env.BASE_URL}images/${filename}`,
      caption: t(`${key}.images.${name}.caption`),
    }]),
  ) : {}
  const olistTableColumns = isOlist ? [
    { key: 'rule', label: t(`${key}.table.columns.rule`) },
    { key: 'threshold', label: t(`${key}.table.columns.threshold`) },
  ] : []

  return (
    <PageTransition>
      <article className="page project-detail-page">
        <FloatingProjectBack label={t('projectDetail.floatingBackAria')} />
        <Link className="project-back-link" to="/projects">{t('projectDetail.back')}</Link>
        <PageHeader
          eyebrow={t('projectDetail.eyebrow')}
          title={t(`${key}.title`)}
          lede={(isCapitalBikeshare || isOlist || isMarketHub) ? t(`${key}.lede`) : undefined}
        />
        <motion.div variants={pageItemVariants}>
          {(project.liveUrl || project.repoUrl) && (
            <div className="project-actions">
              {project.liveUrl && (
                <a className={`project-action ${isMarketHub ? 'project-action-source' : 'project-action-live'}`} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalIcon />
                  {t(`${key}.liveLabel`, t('projectDetail.liveDemo'))}
                </a>
              )}
              {project.repoUrl && (
                <a className="project-action project-action-source" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon />
                  {t('projectDetail.source')}
                </a>
              )}
            </div>
          )}
          {isMarketHub && (
            <Notice label={t(`${key}.notice.label`)}>
              {t(`${key}.notice.body`)}
            </Notice>
          )}
          <StatStrip items={t(`${key}.${isCapitalBikeshare || isOlist ? 'stats' : 'meta'}`)} />
          {t(`${key}.tech`).length > 0 && (
            <div className="project-tech project-detail-tech">
              {t(`${key}.tech`).map((item) => <span className="tech-tag" key={item}>{item}</span>)}
            </div>
          )}
          {isCapitalBikeshare ? (
            <div className="capital-case-study">
              <ImageGallery images={[capitalImages.header]} closeLabel={t('projectDetail.closeImage')} />

              <Section eyebrow={t(`${key}.sections.findings.eyebrow`)} title={t(`${key}.sections.findings.title`)} className="capital-section">
                <div className="project-writeup"><RichText value={t(`${key}.sections.findings.intro`)} /></div>
                <ImageGallery images={[capitalImages.clusters]} closeLabel={t('projectDetail.closeImage')} />
                <DataTable
                  columns={capitalTableColumns}
                  rows={t(`${key}.table.rows`)}
                  label={t(`${key}.table.label`)}
                />
                <div className="project-writeup capital-followup"><RichText value={t(`${key}.sections.findings.body`)} /></div>
              </Section>

              <Section eyebrow={t(`${key}.sections.recording.eyebrow`)} title={t(`${key}.sections.recording.title`)} className="capital-section">
                <div className="project-writeup"><RichText value={t(`${key}.sections.recording.body`)} /></div>
              </Section>

              <Section eyebrow={t(`${key}.sections.method.eyebrow`)} title={t(`${key}.sections.method.title`)} className="capital-section">
                <div className="project-writeup"><RichText value={t(`${key}.sections.method.body`)} /></div>
                <ImageGallery images={[capitalImages.controls, capitalImages.drawer]} closeLabel={t('projectDetail.closeImage')} />
                <div className="capital-mobile-image"><ImageGallery images={[capitalImages.mobile]} closeLabel={t('projectDetail.closeImage')} /></div>
              </Section>

              <Section eyebrow={t(`${key}.sections.limitations.eyebrow`)} title={t(`${key}.sections.limitations.title`)} className="capital-section">
                <div className="project-writeup"><RichText value={t(`${key}.sections.limitations.body`)} /></div>
              </Section>

              <Section eyebrow={t(`${key}.sections.attribution.eyebrow`)} title={t(`${key}.sections.attribution.title`)} className="capital-section capital-attribution">
                <div className="project-writeup"><RichText value={t(`${key}.sections.attribution.body`)} /></div>
              </Section>
            </div>
          ) : isOlist ? (
            <div className="olist-case-study">
              <ImageGallery images={[olistImages.lifecycle]} closeLabel={t('projectDetail.closeImage')} />

              <Section eyebrow={t(`${key}.sections.findings.eyebrow`)} title={t(`${key}.sections.findings.title`)} className="olist-section">
                <div className="project-writeup"><RichText value={t(`${key}.sections.findings.body`)} /></div>
                <ImageGallery images={[olistImages.reliability]} closeLabel={t('projectDetail.closeImage')} />
              </Section>

              <Section eyebrow={t(`${key}.sections.method.eyebrow`)} title={t(`${key}.sections.method.title`)} className="olist-section">
                <div className="project-writeup"><RichText value={t(`${key}.sections.method.body`)} /></div>
                <ImageGallery images={[olistImages.model]} closeLabel={t('projectDetail.closeImage')} />
                <h3 className="detail-subheading">{t(`${key}.sections.method.transformationsTitle`)}</h3>
                <div className="project-writeup"><RichText value={t(`${key}.sections.method.transformations`)} /></div>
              </Section>

              <Section eyebrow={t(`${key}.sections.suppression.eyebrow`)} title={t(`${key}.sections.suppression.title`)} className="olist-section">
                <div className="project-writeup"><RichText value={t(`${key}.sections.suppression.intro`)} /></div>
                <DataTable columns={olistTableColumns} rows={t(`${key}.table.rows`)} label={t(`${key}.table.label`)} />
                <div className="project-writeup olist-table-followup"><RichText value={t(`${key}.sections.suppression.body`)} /></div>
              </Section>

              <Section eyebrow={t(`${key}.sections.limitations.eyebrow`)} title={t(`${key}.sections.limitations.title`)} className="olist-section">
                <div className="project-writeup"><RichText value={t(`${key}.sections.limitations.body`)} /></div>
              </Section>

              <Section eyebrow={t(`${key}.sections.data.eyebrow`)} title={t(`${key}.sections.data.title`)} className="olist-section olist-data">
                <div className="project-writeup"><RichText value={t(`${key}.sections.data.body`)} /></div>
              </Section>
            </div>
          ) : isMarketHub ? (
            <div className="markethub-case-study">
              {['whatItDoes', 'auth', 'deployment', 'changes'].map((sectionKey) => (
                <Section
                  eyebrow={t(`${key}.sections.${sectionKey}.eyebrow`)}
                  title={t(`${key}.sections.${sectionKey}.title`)}
                  className="markethub-section"
                  key={sectionKey}
                >
                  <div className="project-writeup"><RichText value={t(`${key}.sections.${sectionKey}.body`)} /></div>
                </Section>
              ))}
              <ImageGallery images={images} closeLabel={t('projectDetail.closeImage')} />
            </div>
          ) : (
            <>
              <Section>
                <div className="project-writeup"><RichText value={t(`${key}.body`)} /></div>
              </Section>
              <ImageGallery images={images} closeLabel={t('projectDetail.closeImage')} />
            </>
          )}
        </motion.div>
      </article>
    </PageTransition>
  )
}
