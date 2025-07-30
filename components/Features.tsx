import Image from "next/image";

const Features = () => {
  return (
    <section
      id="features"
      className="h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-t from-[#F0F0F0] to-[#F5F5F5] px-4 py-16 md:py-24 gap-10 md:gap-0"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
        <h2 className="text-black mb-5 text-xl md:text-3xl font-semibold">Features</h2>
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <div className="text-[#383838] text-[17px] md:text-[18px] leading-relaxed">
              <p>Menyediakan platform yang berkualitas,</p>
              <p>komitmen dan terjamin.</p>
            </div>
            <Image src="/image/features/f1.png" width={28} height={28} alt="icon1" className="w-6 h-6 md:w-7 md:h-7" />
          </div>

          {/* Feature 2 */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <div className="text-[#383838] text-[17px] md:text-[18px] leading-relaxed">
              <p>Membuka peluang pengembangan usaha (entrepreneurship),</p>
              <p>yang terintegrasi dengan layanan digital (online).</p>
            </div>
            <Image src="/image/features/f2.png" width={28} height={28} alt="icon2" className="w-6 h-6 md:w-7 md:h-7" />
          </div>

          {/* Feature 3 */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <div className="text-[#383838] text-[17px] md:text-[18px] leading-relaxed">
              <p>Membantu para pelaku usaha untuk meningkatkan</p>
              <p>peluang positif dari segi keuntungan material.</p>
            </div>
            <Image src="/image/features/f3.png" width={28} height={28} alt="icon3" className="w-6 h-6 md:w-7 md:h-7" />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center text-center">
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
            className="w-[300px] md:w-[400px] h-auto"
          />
          <Image
            src="/image/features/hp.png"
            alt="HP Mockup"
            width={150}
            height={150}
            className="absolute w-[100px] md:w-[150px] bottom-0 left-1/2 -translate-x-[100%] md:-translate-x-[110%] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
