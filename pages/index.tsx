import React from "react";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import "../app/globals.css";
import Footer from "./components/Footer";
import { cupcakes, chocolates, cookies } from "@/lib/constants";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon_2.ico" type="image/x-icon" />
      </Head>

      <div className="min-h-full grid grid-rows-[auto,1fr,auto]">
        <main className="bg-background text-primary row-span-4 min-h-full">
          <Hero />
          <section className="text-center py-8 flex flex-col justify-center items-center">
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Cupcakes</h2>
              <Carousel items={cupcakes} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
                Chocolates
              </h2>
              <Carousel items={chocolates} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
                Galletas
              </h2>
              <Carousel items={cookies} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
