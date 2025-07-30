import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-white px-4 py-12 flex flex-col items-center justify-center">
      <h1 className="text-[2rem] md:text-[3rem] font-semibold text-[#01B3BF] mb-10 w-full max-w-6xl text-left">
        Contact US
      </h1>

      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white shadow-md border border-gray-300 rounded-md overflow-hidden">
        {/* Map Section */}
        <div className="w-full md:w-2/3">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.6920072302887!2d107.6597654!3d-6.930908999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9f3f0db63b7%3A0x4ebd07c683f69ff1!2sPT.%20Milenial%20Elite%20Teknologi!5e1!3m2!1sid!2sid!4v1753084739522!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 p-6 space-y-4 flex flex-col justify-center">
          <div className="flex items-start gap-3">
            <Image src="/image/contact/alamat.png" alt="Lokasi" width={20} height={20} className="mt-1" />
            <p>Jl. Kawaluyaan Indah XXI No.8 , Bandung, Jawa Barat</p>
          </div>

          <div className="flex items-start gap-3">
            <Image src="/image/contact/wa.png" alt="WhatsApp" width={20} height={20} className="mt-1" />
            <p>+62 812 3456 7890</p>
          </div>

          <div className="flex items-start gap-3">
            <Image src="/image/contact/email.png" alt="Email" width={20} height={20} className="mt-1" />
            <p>info@me-tech.id</p>
          </div>

          <div className="flex items-start gap-3">
            <Image src="/image/contact/jam.png" alt="Jam Operasional" width={20} height={20} className="mt-1" />
            <p>Senin - Jumat, 10.00 - 18.00 WIB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
