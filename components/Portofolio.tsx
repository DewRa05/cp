"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type LogoItem = {
  category: "aplikasi" | "website";
  image: string;
  logo: string;
  title: string;
};

const logos: LogoItem[] = [
  // APLIKASI
  { category: "aplikasi", image: "/image/portfolio/app/My Suzuki Apps.png", logo: "/image/client/Suzuki.png", title: "My Suzuki" },
  { category: "aplikasi", image: "/image/portfolio/app/Hot-Job-App.png", logo: "/image/client/Hot job.png", title: "Hot Job" },
  { category: "aplikasi", image: "/image/portfolio/app/Arnes-Apps.png", logo: "/image/client/Arnes.png", title: "Arnes" },
  { category: "aplikasi", image: "/image/portfolio/app/9-Kita Apps.png", logo: "/image/client/9kita.png", title: "9Kita" },
  { category: "aplikasi", image: "/image/portfolio/app/KFC-Whatsapp-bot.png", logo: "/image/client/KFC.png", title: "KFC Bot" },
  { category: "aplikasi", image: "/image/portfolio/app/Piknik-aja-App.png", logo: "/image/client/Piknik aja.png", title: "Piknik Aja" },
  { category: "aplikasi", image: "/image/portfolio/app/Real-Travel-App.png", logo: "/image/client/Real Travel.png", title: "Real Travel" },
  { category: "aplikasi", image: "/image/portfolio/app/Virelo-App.png", logo: "/image/client/Virello.png", title: "Virello" },
  { category: "aplikasi", image: "/image/portfolio/app/Warung-Dekat.png", logo: "/image/client/Warung dekat.png", title: "Warung Dekat" },

  // WEBSITE
  { category: "website", image: "/image/portfolio/Web/Suzuki Web.png", logo: "/image/client/suzuki.png", title: "Suzuki Web" },
  { category: "website", image: "/image/portfolio/Web/Arnes Web.png", logo: "/image/client/Arnes.png", title: "Arnes Web" },
  { category: "website", image: "/image/portfolio/Web/Pasteur Web.png", logo: "/image/client/pasteur.png", title: "Pasteur Web" },
  { category: "website", image: "/image/portfolio/Web/Real-Travel-Web.png", logo: "/image/client/9kita.png", title: "Real Travel Web" },
  { category: "website", image: "/image/portfolio/Web/Skota super App.png", logo: "/image/client/9kita.png", title: "Skota Super" },
  { category: "website", image: "/image/portfolio/Web/Suksesku-Web.png", logo: "/image/client/9kita.png", title: "Suksesku" },
  { category: "website", image: "/image/portfolio/Web/The-Tanis-Web.png", logo: "/image/client/9kita.png", title: "The Tanis" },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<"aplikasi" | "website">("aplikasi");
  const [selected, setSelected] = useState<LogoItem | null>(null);

  useEffect(() => {
    const firstLogo = logos.find((logo) => logo.category === activeTab);
    if (firstLogo) setSelected(firstLogo);
  }, [activeTab]);

  return (
    <section id="portfolio" className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 relative">
        {/* LEFT: Main Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start relative text-center md:text-left">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/image/grid.svg')] opacity-10 z-0"></div>
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-600 mb-6 z-10">Our Portfolio</h2>

          {/* Fixed Height Container for Image */}
          <div className="min-h-[350px] flex items-center justify-center">
            {selected && (
              <Image
                src={selected.image}
                alt={selected.title}
                width={350}
                height={350}
                className="mx-auto w-48 sm:w-56 md:w-64 lg:w-72 transition-all duration-300 rounded-2xl object-contain z-10"
              />
            )}
          </div>
        </div>

        {/* RIGHT: Tabs & Logos */}
        <div className="w-full md:w-1/2 flex flex-col z-5">
          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 mb-4 justify-center md:justify-start">
            <button
              className={`text-lg md:text-xl pb-1 transition ${
                activeTab === "aplikasi"
                  ? "text-cyan-600 font-semibold border-b-2 border-cyan-600"
                  : "text-gray-400 hover:text-cyan-600"
              }`}
              onClick={() => setActiveTab("aplikasi")}
            >
              Aplikasi
            </button>
            <button
              className={`text-lg md:text-xl pb-1 transition ${
                activeTab === "website"
                  ? "text-cyan-600 font-semibold border-b-2 border-cyan-600"
                  : "text-gray-400 hover:text-cyan-600"
              }`}
              onClick={() => setActiveTab("website")}
            >
              Website
            </button>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 justify-items-center md:justify-items-start mb-6">
            {logos
              .filter((logo) => logo.category === activeTab)
              .map((logo, index) => (
                <button
                  key={index}
                  className={`change-image ${selected?.image === logo.image ? "active-logo" : ""}`}
                  onClick={() => setSelected(logo)}
                >
                  <Image
                    src={logo.logo}
                    alt={logo.title}
                    width={70}
                    height={70}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-105 transition duration-300 rounded-xl"
                  />
                </button>
              ))}
          </div>

          {/* Description */}
          {selected && (
            <>
              <h3 className="text-cyan-600 text-lg md:text-xl font-semibold mb-1">{selected.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg text-center md:text-left">
                <span className="font-semibold text-cyan-500">Me-Tech</span> adalah mitra bisnis pilihan bagi banyak perusahaan
                terkemuka di Indonesia, UKM dan penantang teknologi. Kami membantu meningkatkan bisnis melalui pengembangan.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 2px 4px rgba(81, 226, 192, 0.8), 0 0 0 1px rgba(162, 255, 233, 0.15);
          }
          50% {
            box-shadow: 0 3px 6px rgba(81, 226, 192, 0.12), 0 0 0 2px rgba(162, 255, 233, 0.2);
          }
        }
        .active-logo img {
          transform: scale(1.03);
          animation: pulseGlow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
