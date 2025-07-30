"use client";

import { useState } from "react";
import Image from "next/image";

const servicesData = [
  {
    id: "software",
    title: "Software Development",
    description:
      "Kami menyediakan solusi pengembangan software custom sesuai kebutuhan bisnis Anda dengan teknologi terbaru.",
    image: "/image/service/Software Development.svg",
  },
  {
    id: "digital",
    title: "Digital Payment",
    description:
      "Sistem pembayaran digital yang aman, cepat, dan efisien untuk menunjang kebutuhan transaksi Anda.",
    image: "/image/service/Digital Payment_1.svg",
  },
  {
    id: "online",
    title: "Online Ticketing",
    description:
      "Platform pemesanan tiket online yang memudahkan pengguna dengan sistem cepat dan terintegrasi.",
    image: "/image/service/Online Ticekting.svg",
  },
  {
    id: "umra",
    title: "Umrah & Hajj Apps",
    description:
      "Aplikasi untuk kebutuhan perjalanan Umrah & Haji yang praktis dan mudah digunakan.",
    image: "/image/service/Umrah HAJJ.svg",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-white"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-[#01B3BF] text-3xl font-medium mb-2">Our Services</h2>
          <p className="text-gray-600 text-sm font-medium">
            Innovative Technology Solutions For Your Business
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Menu */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3 max-h-64 overflow-y-auto pr-2 custom-scroll">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`service-btn py-3 rounded-xl shadow text-left pl-5 block cursor-pointer font-medium transition 
                ${
                  selectedService.id === service.id
                    ? "bg-cyan-600 text-white"
                    : "bg-cyan-50 text-cyan-600 hover:bg-cyan-100"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Right Content (Dynamic) */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  width={300}
                  height={300}
                  className="service-img w-[300px] max-w-full"
                />
              </div>
              {/* Description Box */}
              <div className="w-full lg:w-1/2 bg-[#14b4e2] text-white p-6 rounded-xl shadow-md min-h-[220px] flex flex-col justify-center">
                <h4 className="service-title text-white font-semibold text-lg mb-2">
                  {selectedService.title}
                </h4>
                <p className="service-desc text-sm leading-relaxed min-h-[80px]">
                  {selectedService.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
