import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="bg-primary text-white text-center py-12 px-4 md:py-16 w-full">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 font-avoda">
        Rogy&apos;s Bakery
      </h1>
      <p className="text-base md:text-lg italic max-w-2xl mx-auto mb-6">
        Cuando compras algo hecho a mano, no estás comprando una cosa; sino, un
        pedazo de corazón, esfuerzo, dedicación, y algo único en su especie.
      </p>
      <a
        href="https://wa.link/44zrl1"
        target="_blank"
        className="inline-block bg-secondary text-primary font-medium py-2 px-4 rounded-md transform transition-all duration-300 text-sm md:text-base hover:bg-[#fff4fe] shadow-md"
      >
        Haz tu pedido ahora
      </a>
    </header>
  );
};

export default Hero;
