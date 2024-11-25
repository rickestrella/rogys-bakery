import React from "react";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import "../app/globals.css";
import Footer from "./components/Footer";
import Image from "next/image";

const Home: React.FC = () => {
  const cupcakes = [
    {
      id: 1,
      name: "Vanilla",
      price: 2.99,
      image: "/images/vanilla-cupcake.jpg",
    },
    {
      id: 2,
      name: "Chocolate",
      price: 2.99,
      image: "/images/chocolate-cupcake.jpg",
    },
    {
      id: 3,
      name: "Red Velvet",
      price: 3.99,
      image: "/images/red-velvet-cupcake.jpg",
    },
  ];
  const cookies = [
    {
      id: 1,
      name: "Cookie 1",
      image: "/images/cookie1.jpg",
      description: "Cookie 1 description",
    },
    {
      id: 2,
      name: "Cookie 2",
      image: "/images/cookie2.jpg",
      description: "Cookie 2 description",
    },
    {
      id: 3,
      name: "Cookie 3",
      image: "/images/cookie3.jpg",
      description: "Cookie 3 description",
    },
  ];

  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr,auto] max-w-screen">
      <main className="bg-background text-primary row-span-4">
        <div className="fixed top-0 left-0 z-0 blur-[3px] w-full h-full overflow-hidden">
          <Image
            width={350}
            height={350}
            alt="Imagen referencial"
            src="/products/"
            className="object-cover w-full h-full"
          />
        </div>
        <Hero />
        <section className="text-center py-8 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Cupcakes</h2>
          <Carousel items={cupcakes} />
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">Galletas</h2>
          <Carousel items={cookies} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
