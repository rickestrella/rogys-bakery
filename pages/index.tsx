"use server"
import React from "react";
import Hero from "./components/Hero";
import "../app/globals.css";
import Footer from "./components/Footer";
import { cupcakes, chocolates, cookies } from "@/lib/constants";
import Head from "next/head";
import Slideshow from "./components/Slideshow";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon_2.ico" type="image/x-icon" />
      </Head>

      <div className="min-h-full grid grid-rows-[auto,1fr,auto]">
        <main className="bg-background text-primary row-span-4 min-h-full">
          <Hero />
          <section className="text-center py-8 flex flex-col lg:flex-row md: justify-center lg:justify-evenly items-center">
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Cupcakes</h2>
              <Slideshow items={cupcakes} time={2500}/>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
                Chocolates
              </h2>
              <Slideshow items={chocolates} time={2500} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
                Galletas
              </h2>
              <Slideshow items={cookies} time={2500} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
