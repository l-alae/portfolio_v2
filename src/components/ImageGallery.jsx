import { useCallback, useRef, useState } from 'react'
import Lightbox from './Lightbox'

export default function ImageGallery({ images, closeLabel }) {
  const [activeImage, setActiveImage] = useState(null)
  const [failedImages, setFailedImages] = useState({})
  const activeTrigger = useRef(null)
  const closeLightbox = useCallback(() => setActiveImage(null), [])

  if (!images.length) return null

  return (
    <>
      <div className={`media-gallery media-gallery-${images.length}`}>
        {images.map((image, index) => (
          <figure className={`media-item media-item-${index + 1}`} key={image.filename}>
            <button
              className="media-trigger"
              type="button"
              ref={index === 0 ? activeTrigger : undefined}
              onClick={(event) => {
                activeTrigger.current = event.currentTarget
                setActiveImage(image)
              }}
            >
              {failedImages[image.filename] ? (
                <span className="image-placeholder">{image.filename}</span>
              ) : (
                <img
                  src={image.src}
                  alt={image.caption}
                  onError={() => setFailedImages((current) => ({ ...current, [image.filename]: true }))}
                />
              )}
            </button>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      <Lightbox
        open={Boolean(activeImage)}
        src={activeImage?.src}
        alt={activeImage?.caption}
        caption={activeImage?.caption}
        closeLabel={closeLabel}
        onClose={closeLightbox}
        returnFocusRef={activeTrigger}
      />
    </>
  )
}
