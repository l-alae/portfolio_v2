export default function DataTable({ columns, rows, label }) {
  return (
    <div className="data-table-shell">
      <div className="data-table-scroll" tabIndex="0" role="region" aria-label={label}>
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th className={column.numeric ? 'is-numeric' : undefined} scope="col" key={column.key}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[columns[0].key]}>
                {columns.map((column) => (
                  <td className={column.numeric ? 'is-numeric' : undefined} key={column.key}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
