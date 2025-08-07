"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Philosophy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <section className="relative py-20 px-4 bg-white">
      {/* Background bawah */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#F5F5F5] z-0"
        data-aos="fade-up"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-[#01B3BF] text-3xl md:text-4xl font-semibold">
            Our Philosophy
          </h2>
        </div>

        {/* Cards Container */}
        <div
          className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Card 1 */}
          <div
            className="flex-1 text-center p-6 flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Image
              src="/image/philosophy/p1.png"
              alt="Komitmen Me-Tech"
              width={48}
              height={48}
              className="mb-4 h-12 w-12"
            />
            <h3 className="font-bold mb-2">Komitmen Me-Tech</h3>
            <p className="text-sm text-gray-700">
              Me-Tech mengejar keberlanjutan bisnis dengan tekad kuat, sambil
              tetap menjaga kepercayaan
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center">
            <div className="w-[2px] h-16 bg-[#01B3BF]" data-aos="fade-in"></div>
          </div>

          {/* Card 2 */}
          <div
            className="flex-1 text-center p-6 flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Image
              src="/image/philosophy/p2.png"
              alt="Sinergi Me-Tech"
              width={48}
              height={48}
              className="mb-4 h-12 w-12"
            />
            <h3 className="font-bold mb-2">Sinergi Me-Tech Bersama</h3>
            <p className="text-sm text-gray-700">
              Me-Tech, dengan tulus dan tekad, berkomitmen untuk mengoptimalkan
              kualitas
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center">
            <div className="w-[2px] h-16 bg-[#01B3BF]" data-aos="fade-in"></div>
          </div>

          {/* Card 3 */}
          <div
            className="flex-1 text-center p-6 flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Image
              src="/image/philosophy/p3.png"
              alt="Komitmen Me-Tech Setiap"
              width={48}
              height={48}
              className="mb-4 h-12 w-12"
            />
            <h3 className="font-bold mb-2">Komitmen Me-Tech Setiap</h3>
            <p className="text-sm text-gray-700">
              Kami di Me-Tech menjadikan kepuasan klien sebagai prioritas utama
              dalam setiap kerjasama
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
