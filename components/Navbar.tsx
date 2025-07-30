"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="px-8">
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="relative bg-cover bg-center px-6 py-4 flex justify-between items-center">
          {/* Background */}
          <div className="absolute inset-0 bg-white"></div>

          {/* Logo */}
          <div className="relative flex items-center gap-4 z-10">
            <Image src="/image/lg.png" alt="logo" width={96} height={96} className="w-24" />
          </div>

          {/* Mobile Menu Button */}
          <div className="relative lg:hidden z-10">
            <button
              onClick={toggleMenu}
              className="text-cyan-600 text-2xl focus:outline-none"
            >
              ☰
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg p-4 space-y-2 z-50">
                {["Home", "About", "Service", "Portfolio", "Team", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block !text-sky-500 hover:!text-sky-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Desktop Menu */}
          <ul className="relative hidden lg:flex items-center gap-6 font-semibold z-10">
            {["Home", "About", "Service", "Portfolio", "Team", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="!text-sky-500 hover:!text-sky-700 border-b border-transparent hover:border-sky-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
