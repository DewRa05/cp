"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle, FaLightbulb, FaChartLine } from "react-icons/fa"; // ✅ React Icons

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="features"
      className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-t from-[#F0F0F0] to-[#F5F5F5] px-4 py-16 md:py-24 gap-10 md:gap-0"
    >
      {/* Left Content */}
      <div
        className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right"
        data-aos="fade-right"
      >
        <h2 className="text-black mb-5 text-xl md:text-3xl font-semibold">
          Features
        </h2>
        <div className="space-y-6">
          {/* Feature 1 */}
          <div
            className="flex items-center justify-center md:justify-end gap-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-[#383838] text-[17px] md:text-[18px] leading-relaxed">
              <p>Menyediakan platform yang berkualitas,</p>
              <p>komitmen dan terjamin.</p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#01B3BF] text-white shadow-md rounded-lg">
              <FaCheckCircle className="text-lg md:text-xl" />
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="flex items-center justify-center md:justify-end gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-[#383838] text-[17px] md:text-[18px] leading-relaxed">
              <p>Membuka peluang pengembangan usaha (entrepreneurship),</p>
              <p>yang terintegrasi dengan layanan digital (online).</p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#01B3BF] text-white shadow-md rounded-lg">
              <FaLightbulb className="text-lg md:text-xl" />
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="flex items-center justify-center md:justify-end gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-[#383838] text-[17px] md:text-[18px] leading-relaxed">
              <p>Membantu para pelaku usaha untuk meningkatkan</p>
              <p>peluang positif dari segi keuntungan material.</p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#01B3BF] text-white shadow-md rounded-lg">
              <FaChartLine className="text-lg md:text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div
        className="w-full md:w-1/2 flex flex-col items-center text-center"
        data-aos="fade-left"
      >
        <p className="text-[#383838] font-bold mb-5 text-[17px] md:text-[18px] leading-relaxed">
          Dapatkan Solusi Kebutuhan Teknologi <br />
          Bisnis Anda Bersama Kami
        </p>
        <div className="relative w-full max-w-[420px] md:max-w-[520px] h-auto flex justify-center">
          <Image
            src="/image/features/pc.png"
            alt="Desktop Mockup"
            width={400}
            height={300}
            className="w-[250px] sm:w-[300px] md:w-[400px] h-auto"
          />
          <Image
            src="/image/features/hp.png"
            alt="HP Mockup"
            width={150}
            height={150}
            className="absolute w-[80px] sm:w-[100px] md:w-[150px] bottom-0 left-1/2 -translate-x-[100%] md:-translate-x-[110%] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
