import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#FFFFFF] to-[#E6F2FA] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Description */}
        <div className="text-center md:text-left space-y-4">
          <Link href="#">
            <Image
              src="/image/footer/metech.png"
              alt="Me-Tech"
              width={140}
              height={50}
              className="h-12 w-auto mx-auto md:mx-0"
            />
          </Link>
          <p className="text-sm text-[#666] leading-relaxed max-w-md mt-3">
            Percayakan bisnis Anda kepada kami demi menghasilkan produk yang baik dan berkualitas.
          </p>
        </div>

        {/* Social Media */}
        <div className="mt-8 md:mt-0 text-center md:text-right">
          <h3 className="font-bold text-[#01B3BF] text-sm mb-3 uppercase tracking-wide">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="#">
              <Image src="/image/footer/fb.png" alt="Facebook" width={28} height={28} className="hover:scale-110 transition" />
            </Link>
            <Link href="#">
              <Image src="/image/footer/ig.png" alt="Instagram" width={28} height={28} className="hover:scale-110 transition" />
            </Link>
            <Link href="#">
              <Image src="/image/footer/linkdin.png" alt="LinkedIn" width={28} height={28} className="hover:scale-110 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-xs font-semibold text-[#3D3D3D] border-t border-gray-200 pt-4">
        © {new Date().getFullYear()} PT. MILENIAL ELITE TECHNOLOGY. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;