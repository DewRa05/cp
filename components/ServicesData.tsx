"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLaptopCode, FaCreditCard, FaKaaba, FaQrcode } from "react-icons/fa";

const servicesData = [
  {
    id: "software",
    title: "Software Development",
    description: "Solusi software custom untuk mendukung efisiensi dan inovasi bisnis Anda.",
    features: ["Aplikasi Web & Mobile", "Sistem Otomasi Bisnis", "Integrasi API"],
    image: "/image/service/Software Development.svg",
    icon: <FaLaptopCode />,
  },
  {
    id: "digital",
    title: "Digital Payment",
    description: "Sistem pembayaran digital cepat, aman, dan terintegrasi.",
    features: ["E-Wallet & QRIS", "Payment Gateway", "Keamanan Enkripsi"],
    image: "/image/service/Digital Payment_1.svg",
    icon: <FaCreditCard />,
  },
  {
    id: "online",
    title: "Online Ticketing",
    description: "Platform pemesanan tiket online yang praktis dan terhubung.",
    features: ["Tiket Event & Travel", "Notifikasi Real-time", "Integrasi Multi-Channel"],
    image: "/image/service/Online Ticekting.svg",
    icon: <FaQrcode />,
  },
  {
    id: "umra",
    title: "Umrah & Hajj Apps",
    description: "Aplikasi perjalanan Umrah & Haji yang mudah digunakan.",
    features: ["Panduan Ibadah", "Tracking Jamaah", "Jadwal & Itinerary"],
    image: "/image/service/Umrah HAJJ.svg",
    icon: <FaKaaba />,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <section id="services" className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white">
      {/* Judul Tengah */}
      <div className="mb-12 text-center">
        <h2 className="text-[#01B3BF] text-3xl font-semibold mb-2">Our Services</h2>
        <div className="w-16 h-[3px] bg-[#01B3BF] mx-auto mb-3 rounded-full"></div>
        <p className="text-gray-600 text-sm">Innovative Technology Solutions For Your Business</p>
      </div>

      {/* Konten */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10 items-start">
        {/* Kolom Kiri: Gambar */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={selectedService.image}
            alt={selectedService.title}
            width={340}
            height={340}
            className="object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Kolom Kanan */}
        <div className="w-full lg:w-1/2">
          {/* Icon Navigasi di atas Judul */}
          <div className="flex justify-start gap-4 mb-6">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`w-12 h-12 flex items-center justify-center rounded-full transition shadow-md cursor-pointer text-lg ${
                  selectedService.id === service.id
                    ? "bg-[#01B3BF] text-white scale-110"
                    : "bg-gray-100 text-gray-400 hover:bg-[#e0f8f9] hover:text-[#01B3BF]"
                }`}
              >
                {service.icon}
              </button>
            ))}
          </div>

          {/* Judul & Deskripsi */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">{selectedService.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md">{selectedService.description}</p>

          {/* List Fitur */}
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            {selectedService.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#01B3BF] rounded-full"></span> {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
