export default function Notice({ label, children }) {
  return (
    <aside className="notice">
      <div className="notice-label">{label}</div>
      <div className="notice-body">{children}</div>
    </aside>
  )
}
