export default function RichText({ value }) {
  const paragraphs = Array.isArray(value) ? value : [value]
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph && typeof paragraph === 'object' && 'lead' in paragraph ? (
            <><strong className="rich-text-lead">{paragraph.lead}</strong>{paragraph.rest}</>
          ) : paragraph}
        </p>
      ))}
    </>
  )
}
