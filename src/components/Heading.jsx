export default function Heading({ text }) {
  return (
    <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
      {text}
    </h2>
  );
}
