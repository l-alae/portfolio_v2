export default function StatStrip({ items }) {
  return (
    <dl className="stat-strip">
      {items.map((item) => (
        <div className="stat-item" key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
