import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Table from "../components/Table";
import Form from "../components/Form";

export default function Home() {
  const features = [
    { image: "/assets/feature1.jpg", title: "Fast", description: "Lightning-fast performance." },
    { image: "/assets/feature2.jpg", title: "Responsive", description: "Mobile-first design." },
    { image: "/assets/feature3.jpg", title: "Customizable", description: "Utility-first styling." },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <Card key={i} {...f} />
        ))}
      </section>
      <section className="p-6">
        <Table />
      </section>
      <section className="p-6">
        <Form />
      </section>
    </>
  );
}
