import Heading from "./Heading";
import HoverImage from "./HoverImage";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 p-6">
      <Heading text="Welcome to Tailwind UI" />
      <HoverImage src="/assets/hero.jpg" alt="Hero" />
    </section>
  );
}
