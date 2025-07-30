import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="h-min-screen bg-white px-4 py-16 flex flex-col items-center justify-center p-8"
    >
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h1 className="text-[2rem] md:text-[3rem] font-semibold text-[#01B3BF] mb-10 text-left">
          About US
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-radial from-[#51E2C0] to-[#A2FFE9] left-1/2 -translate-x-1/2 -top-8 z-0"></div>
            <Image
              src="/image/about.png"
              alt="Me-Tech Display"
              width={550}
              height={400}
              className="w-full max-w-[550px] h-auto object-contain relative z-10"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 bg-white rounded-xl p-6 md:p-8 text-black">
            <h2 className="text-black text-2xl md:text-[42px] mb-4 font-bold">
              Who We Are
            </h2>
            <p className="text-[18px] md:text-[19px] leading-relaxed text-justify">
              <strong>
                Me-Tech Menyajikan Solusi IT dan Teknologi Terpercaya Untuk Bisnis Anda
              </strong>
              . <br /> <br />
              <strong className="text-[#13AACE]">Me-Tech</strong> adalah mitra bisnis pilihan bagi banyak perusahaan
              terkemuka di Indonesia, UKM, dan penantang teknologi. Kami membantu meningkatkan bisnis melalui
              pengembangan perangkat lunak khusus, desain produk, dan layanan konsultasi IT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
