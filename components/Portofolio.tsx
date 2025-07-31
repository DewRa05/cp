"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type LogoItem = {
  category: "aplikasi" | "website";
  image: string;
  logo: string;
  title: string;
  description: string; // ✅ Tambahkan properti deskripsi
};

const logos: LogoItem[] = [
  // APLIKASI
  {
    category: "aplikasi",
    image: "/image/aw/16.png",
    logo: "/image/client/Suzuki.png",
    title: "My Suzuki",
    description:
      "Aplikasi resmi Suzuki untuk memudahkan pengguna melakukan servis, klaim poin, dan pembelian suku cadang.",
  },
  {
    category: "aplikasi",
    image: "/image/aw/18.png",
    logo: "/image/client/Hot job.png",
    title: "Hot Job",
    description:
      "Platform pencarian kerja berbasis mobile yang menghubungkan pencari kerja dengan perusahaan.",
  },
  {
    category: "aplikasi",
    image: "/image/aw/19.png",
    logo: "/image/client/Arnes.png",
    title: "Arnes",
    description:
      "Aplikasi pemesanan tiket bus Arnes Shuttle untuk perjalanan yang lebih mudah.",
  },
  {
    category: "aplikasi",
    image: "/image/aw/20.png",
    logo: "/image/client/9kita.png",
    title: "9Kita",
    description:
      "Platform digital yang mendukung berbagai layanan untuk kebutuhan masyarakat.",
  },
  {
    category: "aplikasi",
    image: "/image/aw/17.png",
    logo: "/image/client/KFC.png",
    title: "KFC Bot",
    description:
      "Bot WhatsApp untuk memesan menu KFC dengan mudah langsung dari ponsel.",
  },
  {
    category: "aplikasi",
    image: "/image/aw/15.png",
    logo: "/image/client/Piknik aja.png",
    title: "Piknik Aja",
    description: "Aplikasi untuk mencari dan memesan paket wisata lokal.",
  },
  {
    category: "aplikasi",
    image: "/image/aw/14.png",
    logo: "/image/client/Real Travel.png",
    title: "Real Travel",
    description:
      "Aplikasi pemesanan tiket perjalanan wisata domestik dan internasional.",
  },
  {
    category: "aplikasi",
    image: "/image/aw/11.png",
    logo: "/image/client/Virello.png",
    title: "Virello",
    description:
      "Aplikasi e-commerce dengan pengalaman belanja yang praktis dan cepat.",
  },
  {
    category: "aplikasi",
    image: "/image/portfolio/app/Warung-Dekat.png",
    logo: "/image/client/Warung dekat.png",
    title: "Warung Dekat",
    description:
      "Aplikasi untuk memesan makanan dari warung terdekat dengan cepat.",
  },

  // WEBSITE
  {
    category: "website",
    image: "/image/aw/4.png",
    logo: "/image/client/suzuki.png",
    title: "Suzuki Web",
    description:
      "Website resmi Suzuki dengan katalog mobil, promo terbaru, dan layanan purna jual.",
  },
  {
    category: "website",
    image: "/image/aw/7.png",
    logo: "/image/client/Arnes.png",
    title: "Arnes Web",
    description:
      "Website pemesanan tiket Arnes Shuttle dengan tampilan modern.",
  },
  {
    category: "website",
    image: "/image/aw.3.png",
    logo: "/image/client/pasteur.png",
    title: "Pasteur Web",
    description: "Website resmi Pasteur Trans untuk pemesanan tiket shuttle.",
  },
  {
    category: "website",
    image: "/image/aw/10.png",
    logo: "/image/client/9kita.png",
    title: "Real Travel Web",
    description:
      "Website untuk pemesanan paket perjalanan dan wisata Real Travel.",
  },
  {
    category: "website",
    image: "/image/aw/5.png",
    logo: "/image/client/9kita.png",
    title: "Skota Super",
    description: "Website layanan terpadu untuk kebutuhan kota pintar.",
  },
  {
    category: "website",
    image: "/image/aw/5.png",
    logo: "/image/client/9kita.png",
    title: "Suksesku",
    description:
      "Platform online untuk mendukung UKM mengembangkan bisnis mereka.",
  },
  {
    category: "website",
    image: "/image/5.png",
    logo: "/image/client/9kita.png",
    title: "The Tanis",
    description: "Website hotel The Tanis dengan fitur pemesanan kamar online.",
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<"aplikasi" | "website">(
    "aplikasi"
  );
  const [selected, setSelected] = useState<LogoItem | null>(null);

  useEffect(() => {
    const firstLogo = logos.find((logo) => logo.category === activeTab);
    if (firstLogo) setSelected(firstLogo);
  }, [activeTab]);

  return (
    <section id="portfolio" className="lg:min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 relative">
        {/* LEFT: Main Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start relative text-center md:text-left">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/image/grid.svg')] opacity-10 z-0"></div>
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-600 mb-6 z-10">
            Our Portfolio
          </h2>
          {selected && (
            <Image
              src={selected.image}
              alt={selected.title}
              width={500}
              height={500}
              className="mx-auto w-72 sm:w-80 md:w-[22rem] lg:w-[26rem] transition-all duration-300 rounded-2xl object-contain z-10"
            />
          )}
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
                  className={`change-image ${
                    selected?.image === logo.image ? "active-logo" : ""
                  }`}
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

          {/* ✅ Dynamic Description */}
          {selected && (
            <>
              <h3 className="text-cyan-600 text-lg md:text-xl font-semibold mb-1">
                {selected.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-lg text-center md:text-left">
                {selected.description}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 2px 4px rgba(81, 226, 192, 0.8),
              0 0 0 1px rgba(162, 255, 233, 0.15);
          }
          50% {
            box-shadow: 0 3px 6px rgba(81, 226, 192, 0.12),
              0 0 0 2px rgba(162, 255, 233, 0.2);
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
