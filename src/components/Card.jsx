import Button from "./Button";

export default function Card({ image, title, description }) {
  return (
    <div className="bg-white rounded shadow-md p-4 flex flex-col items-center text-center">
      <img src={image} alt={title} className="rounded mb-4 w-full h-40 object-cover" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button label="Learn More" />
    </div>
  );
}
