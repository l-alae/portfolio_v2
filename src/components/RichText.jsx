export default function RichText({ value }) {
  const paragraphs = Array.isArray(value) ? value : [value]

  const renderPart = (part, index) => {
    if (typeof part === 'string') return part

    const external = /^https?:\/\//.test(part.href)
    return (
      <a
        className="rich-text-link"
        href={part.href}
        key={`${part.href}-${index}`}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {part.text}
      </a>
    )
  }

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {Array.isArray(paragraph) ? paragraph.map(renderPart) : paragraph && typeof paragraph === 'object' && 'lead' in paragraph ? (
            <><strong className="rich-text-lead">{paragraph.lead}</strong>{paragraph.rest}</>
          ) : paragraph}
        </p>
      ))}
    </>
  )
}
