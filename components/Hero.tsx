"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <header
      id="hero"
      className="relative min-h-screen w-full pt-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pb-8 
      bg-cover bg-center flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
      style={{ backgroundImage: "url('/image/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-0"></div>

      {/* Text Section */}
      <div
        className="flex-1 text-white text-center md:text-left z-10 max-w-lg lg:max-w-xl"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-bold mb-4 leading-snug"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Solusi teknologi <br />
          yang <span className="text-[#49E6DC] font-extrabold">inovatif</span>
          <br />
          untuk bisnis Anda
        </h1>

        <p
          className="mb-5 text-sm md:text-base text-white/90 max-w-md mx-auto md:mx-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis
          Anda.
        </p>

        <a
          href="https://wa.me/6287823237339"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 text-white font-semibold text-sm md:text-base rounded-xl 
          bg-[#49E6DC] border border-white shadow-[0_0_8px_#49E6DC] hover:opacity-90 transition"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Hubungi Kami
        </a>
      </div>

      {/* Image Section */}
      <div
        className="relative flex-1 flex justify-center items-center w-full md:w-[750px] lg:w-[850px] xl:w-[900px] z-10"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <div className="relative scale-[0.75] sm:scale-[0.85] md:scale-[0.95] lg:scale-[1] origin-center">
          <Image
            src="/image/laptop.png"
            alt="Mockup laptop"
            width={494}
            height={400}
            className="w-[494px] h-auto z-0 translate-x-[80px]"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          />
          <Image
            src="/image/hp.png"
            alt="Mockup hp"
            width={600}
            height={500}
            className="absolute w-[600px] -rotate-[5deg] right-[50%] top-[10%] z-10 translate-x-[80px]"
            data-aos="zoom-in"
            data-aos-delay="500"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
