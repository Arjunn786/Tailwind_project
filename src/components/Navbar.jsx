export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex flex-col md:flex-row gap-4 justify-center items-center">
        {["Home", "Features", "Contact"].map((link) => (
          <li key={link} className="hover:text-blue-600 cursor-pointer font-medium">
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}
