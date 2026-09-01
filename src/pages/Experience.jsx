import { motion } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'
import Lightbox from '../components/Lightbox'
import RichText from '../components/RichText'
import PageHeader from '../components/PageHeader'
import PageTransition, { pageItemVariants } from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()
  const [activeImage, setActiveImage] = useState(null)
  const [failedImages, setFailedImages] = useState({})
  const imageTriggers = useRef({})
  const activeTrigger = useRef(null)
  const closeLightbox = useCallback(() => setActiveImage(null), [])
  const entries = ['pfe', 'ministry', 'aeinpt']
  const imageGroups = [
    {
      key: 'tableau',
      images: [
        { key: 'rules', filename: 'pfe-rules.png' },
        { key: 'stations', filename: 'pfe-stations.png' },
        { key: 'gaz', filename: 'pfe-gaz.png' },
      ],
    },
    {
      key: 'platform',
      images: [
        { key: 'platformDashboard', filename: 'pfe-platform-dashboard.png' },
        { key: 'platformImport', filename: 'pfe-platform-import.png' },
        { key: 'platformHistory', filename: 'pfe-platform-history.png' },
      ],
    },
  ].map((group) => ({
    ...group,
    label: t(`experience.entries.pfe.images.groups.${group.key}`),
    images: group.images.map((image) => ({
      ...image,
      src: `${import.meta.env.BASE_URL}images/${image.filename}`,
      caption: t(`experience.entries.pfe.images.items.${image.key}.caption`),
    })),
  }))

  return (
    <PageTransition>
      <section className="page experience-page">
        <PageHeader eyebrow={t('experience.eyebrow')} title={t('experience.title')} />
        <motion.div className="experience-list" variants={pageItemVariants}>
          {entries.map((entryKey) => {
            const key = `experience.entries.${entryKey}`
            const isPfe = entryKey === 'pfe'

            return (
              <article className="experience-entry" key={entryKey}>
                <div className="experience-meta">
                  <span>{t(`${key}.dates`)}</span>
                  <span>{t(`${key}.location`)}</span>
                </div>
                <div className="experience-content">
                  <h2>{t(`${key}.role`)}</h2>
                  <div className="experience-org">{t(`${key}.org`)}</div>
                  <div className="experience-copy"><RichText value={t(`${key}.body`)} /></div>
                  {isPfe && (
                    <>
                      <div className="project-tech experience-tech">
                        {t(`${key}.tech`).map((item) => <span className="tech-tag" key={item}>{item}</span>)}
                      </div>
                      <div className="experience-gallery-groups">
                        {imageGroups.map((group) => (
                          <section className="experience-gallery-group" key={group.key}>
                            <div className="experience-gallery-label">{group.label}</div>
                            <div className="experience-gallery">
                              {group.images.map((image, index) => (
                                <figure className={`experience-image${index === 0 ? ' experience-image-featured' : ''}`} key={image.key}>
                                  <button
                                    type="button"
                                    className="experience-image-trigger"
                                    ref={(element) => { imageTriggers.current[image.key] = element }}
                                    onClick={() => {
                                      activeTrigger.current = imageTriggers.current[image.key]
                                      setActiveImage(image)
                                    }}
                                  >
                                    {failedImages[image.key] ? (
                                      <span className="image-placeholder">{image.filename}</span>
                                    ) : (
                                      <img
                                        src={image.src}
                                        alt={image.caption}
                                        onError={() => setFailedImages((current) => ({ ...current, [image.key]: true }))}
                                      />
                                    )}
                                  </button>
                                  <figcaption>{image.caption}</figcaption>
                                </figure>
                              ))}
                            </div>
                          </section>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </article>
            )
          })}
        </motion.div>
      </section>
      <Lightbox
        open={Boolean(activeImage)}
        src={activeImage?.src}
        alt={activeImage?.caption}
        caption={activeImage?.caption}
        closeLabel={t('experience.lightbox.close')}
        onClose={closeLightbox}
        returnFocusRef={activeTrigger}
      />
    </PageTransition>
  )
}
