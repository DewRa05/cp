"use client";

import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Portfolio from "@/components/Portofolio";
import ServicesData from "@/components/ServicesData";
import Team from "@/components/Team";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Philosophy />
      <Features />
      <ServicesData />
      <Clients />
      <Portfolio />
      <Team />
      <Contact />
    </main>
  );
}
