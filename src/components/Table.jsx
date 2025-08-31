export default function Table() {
  const rows = [
    ["Alice", "Designer", "Remote"],
    ["Bob", "Developer", "Onsite"],
    ["Charlie", "Manager", "Hybrid"],
    ["Dana", "QA", "Remote"],
  ];

  return (
    <table className="w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Role</th>
          <th className="border px-4 py-2">Location</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}>
            {row.map((cell, j) => (
              <td key={j} className="border px-4 py-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
