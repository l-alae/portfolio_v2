export default function Section({ eyebrow, title, className = '', children }) {
  return (
    <section className={`detail-section${className ? ` ${className}` : ''}`}>
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      {title && <h2>{title}</h2>}
      {children}
    </section>
  )
}
