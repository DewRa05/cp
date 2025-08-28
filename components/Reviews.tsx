"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rizky Pratama",
    role: "CEO, Themeland",
    avatar: "/image/review/pp.jpg",
    text: "Layanan mereka sangat cepat dan responsif. Timnya juga komunikatif dan membantu kami dari awal hingga akhir. Sangat direkomendasikan!",
    rating: 5,
  },
  {
    name: "Anna Salsabila",
    role: "Founder, Themeland",
    avatar: "/image/review/pp.jpg",
    text: "Hasil desain websitenya sesuai harapan kami — modern, responsif, dan mudah digunakan. Kami sangat puas",
    rating: 4,
  },
  {
    name: "Dedi Saputra",
    role: "CEO, Themeland",
    avatar: "/image/review/pp.jpg",
    text: "Sistem yang dibangun benar-benar memudahkan operasional kami. Proses inventaris sekarang jauh lebih efisien.",
    rating: 5,
  },
  {
    name: "Nurul Aini",
    role: "CTO, CreativeLab",
    avatar: "/image/review/pp.jpg",
    text: "Terima kasih timnya! Sekarang bisnis kecil saya punya website sendiri dan terlihat lebih profesional di mata pelanggan.",
    rating: 4,
  },
  {
    name: "Ali Raza",
    role: "CMO, InnovateX",
    avatar: "/image/review/pp.jpg",
    text: "Cepat, tepat, dan hasilnya luar biasa!",
    rating: 5,
  },
];

const ReviewSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalItems = reviews.length;
  const itemWidth = 260 + 32;

  const cloned = [
    ...reviews.slice(-1),
    ...reviews,
    ...reviews.slice(0, 1),
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = itemWidth;
    }
  }, []);

  const handleScroll = (dir: "left" | "right") => {
    if (isTransitioning || !containerRef.current) return;

    setIsTransitioning(true);
    const container = containerRef.current;
    const scrollAmount = dir === "left" ? -itemWidth : itemWidth;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(() => {
      const maxScroll = itemWidth * totalItems;
      if (container.scrollLeft <= 0) {
        container.scrollLeft = itemWidth * totalItems;
      } else if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = itemWidth;
      }
      setIsTransitioning(false);
    }, 350);
  };

  return (
    <section id="review" className="bg-white py-24">
      <div className="max-w-5xl mx-auto">
        <div className="bg-cyan-600 text-white rounded-xl p-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Kata Klien kami</h2>
            <p className="mt-4">Apa kata mereka tentang kami?</p>
          </div>

          <div className="relative mt-12">
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-cyan-600 hover:bg-cyan-100 rounded-full p-2 shadow-md"
            >
              <FaChevronLeft size={20} />
            </button>

            <button
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-cyan-600 hover:bg-cyan-100 rounded-full p-2 shadow-md"
            >
              <FaChevronRight size={20} />
            </button>

            <div ref={containerRef} className="overflow-x-hidden scroll-smooth w-full">
              <div
                className="flex gap-8 snap-x snap-mandatory transition-transform duration-300 ease-in-out"
                style={{
                  width: `${cloned.length * itemWidth}px`,
                }}
              >
                {cloned.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white text-gray-700 rounded-xl shadow-lg w-[200px] sm:w-[260px] h-[170px] p-4 flex flex-col justify-between snap-center shrink-0"
                  >
                    <div className="flex-1 overflow-hidden">
                      <p className="text-xs italic leading-snug">
                        {review.text}
                      </p>
                    </div>

                    {/* ⭐ Rating */}
                    <div className="flex items-center mt-2">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <FaStar key={i} className="text-yellow-200 text-xs" />
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-600 shadow-md shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-cyan-600 font-semibold text-xs">
                          {review.name}
                        </h4>
                        <p className="text-[10px] text-gray-600">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
