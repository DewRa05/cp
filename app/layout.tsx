"use client";
import "./globals.css";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
 
const sectionOrder = [
  "hero",
  "about",
  "features",
  "services",
  "portfolio",
  "review",
  "contact",
  "footer",
];

export default function RootLayout({ children }: { children: ReactNode }) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "auto" });
    }

    const handleScroll = () => {
      let closestIndex = 0;
      let closestDistance = Infinity;

      sectionOrder.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setCurrentSectionIndex(closestIndex);
      setShowButton(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const footer = document.querySelector("footer");
    if (footer) {
      const observer = new IntersectionObserver(
        (entries) => setIsFooterVisible(entries[0].isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(footer);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    // Jika footer terlihat, langsung scroll ke hero
    if (isFooterVisible) {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } 
    // Jika belum di footer, scroll ke section berikutnya
    else if (currentSectionIndex < sectionOrder.length - 1) {
      const nextId = sectionOrder[currentSectionIndex + 1];
      document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <html lang="en">
      <body className="scroll-smooth bg-gradient-to-b from-[#f0faff] to-[#ffffff] min-h-screen relative font-sans text-gray-800">
        <Navbar />
        {children}
        <Footer />

        {showButton && (
          <button
            onClick={handleScrollClick}
            className={`fixed right-6 w-10 h-10 flex items-center justify-center 
            bg-[#01B3BF] rounded-full z-50 shadow-lg hover:shadow-2xl 
            text-white text-3xl font-bold transition-transform duration-300 
            hover:scale-110
            ${isFooterVisible ? "bottom-24" : "bottom-6"}`}
            aria-label={isFooterVisible ? "Scroll ke atas" : "Scroll ke bawah"}
          >
            {isFooterVisible ? "˄" : "˅"}
          </button>
        )}
      </body>
    </html>
  );
}
