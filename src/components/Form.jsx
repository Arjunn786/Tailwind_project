export default function Form() {
  return (
    <form className="space-y-4 max-w-md mx-auto">
      {["Name", "Email", "Password"].map((field) => (
        <div key={field}>
          <label className="block mb-1 font-medium">{field}</label>
          <input
            type={field === "Password" ? "password" : "text"}
            placeholder={`Enter your ${field.toLowerCase()}`}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}
