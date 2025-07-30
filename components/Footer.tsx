import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#F5F5F5] to-[#F0F0F0] text-gray-700 pt-10 pb-4 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Description */}
        <div>
          <p className="mb-4 text-[#888888]">
            Percayakan bisnis Anda kepada kami demi menghasilkan produk yang baik dan berkualitas.
          </p>
          <div className="flex space-x-4">
            <Link href="#">
              <Image src="/image/footer/metech.png" alt="Me-Tech" width={100} height={40} className="h-10 w-auto" />
            </Link>
          </div>
        </div>

        {/* Our Service */}
        <div>
          <h3 className="font-bold text-[#01B3BF] mb-2">OUR SERVICE</h3>
          <ul className="space-y-2 text-[#19656B]">
            <li>Software Development</li>
            <li>Online Ticketing</li>
            <li>Digital Payment</li>
            <li>Umrah & Haji Apps</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-[#01B3BF] mb-2">CONTACT US</h3>
          <ul className="space-y-2 text-[#19656B]">
            <li>Jln. Kawaluyaan Indah XXI no.8</li>
            <li>Kota Bandung - Jawa Barat</li>
          </ul>
          <p className="mt-2 text-[#19656B]">
            <strong>Phone</strong> : +62 878-2323-7339
          </p>
          <p className="mt-2 text-[#19656B]">
            <strong>Email</strong> : info@me-tech.id
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-[#01B3BF] mb-2">SOCIAL MEDIA</h3>
          <div className="flex space-x-4">
            <Link href="#">
              <Image src="/image/footer/fb.png" alt="Facebook" width={24} height={24} className="h-6 w-6" />
            </Link>
            <Link href="#">
              <Image src="/image/footer/ig.png" alt="Instagram" width={24} height={24} className="h-6 w-6" />
            </Link>
            <Link href="#">
              <Image src="/image/footer/linkdin.png" alt="LinkedIn" width={24} height={24} className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-left text-xs font-bold text-[#3D3D3D] border-t border-gray-200 pt-4">
        © 2020 PT. MILENIAL ELITE TECHNOLOGY
      </div>
    </footer>
  );
};

export default Footer;
