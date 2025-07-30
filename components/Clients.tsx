"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clients = [
  "9kita.png",
  "Arnes.png",
  "Aeroticket.png",
  "Alba.png",
  "Azkia.png",
  "Belibis.png",
  "BPTJ.png",
  "BRI_1.png",
  "bridge syari_1.png",
  "Cari ustadz.png",
  "ddi_1.png",
  "Dunia Halal.png",
  "Faedah.png",
  "gomasgo.png",
  "Hot job.png",
  "HRD system.png",
  "KFC.png",
  "Kopkar.png",
  "Kosami.png",
  "kpop_1.png",
  "MMBC.png",
  "My suzuki.png",
  "Nushinushi travel.png",
  "Nushinushi.png",
  "Pacific travel.png",
  "Palapa Mall.png",
  "pasteur.png",
  "Payment.png",
  "Pro umkm.png",
  "Puri yatim.png",
  "Rama Optik.png",
  "Real Travel.png",
  "RNI.png",
  "Spirit ebisnis.png",
  "Spirit tour.png",
  "Suzuki.png",
  "Syirkahmu.png",
  "Wakuliner.png",
  "Warung dekat.png",
  "YAKESNA.png",
];

const Clients = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current) {
      // Duplicate logo untuk efek infinite scroll
      trackRef.current.innerHTML += trackRef.current.innerHTML;
    }
  }, []);

  return (
    <section className="py-16 px-4 bg-[#F1F7FE]">
      <div className="text-center mb-6">
        <h2 className="text-[#01B3BF] text-[1.8rem] font-semibold uppercase">Our Clients</h2>
      </div>

      {/* Marquee Container */}
      <div className="overflow-hidden relative w-full">
        <div
          ref={trackRef}
          className="flex gap-10 animate-marquee"
        >
          {clients.map((logo, index) => (
            <Image
              key={index}
              src={`/image/client/${logo}`}
              alt={`Client ${index}`}
              width={100}
              height={100}
              className="h-12 sm:h-14 md:h-16 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for marquee */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Clients;
