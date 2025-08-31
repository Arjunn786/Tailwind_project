export default function HoverImage({ src, alt }) {
  return (
    <div className="rounded shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
}
