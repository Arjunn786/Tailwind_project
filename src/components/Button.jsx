export default function Button({ label = "Click Me" }) {
  return (
    <button className="rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400 px-4 py-2 transition">
      {label}
    </button>
  );
}
