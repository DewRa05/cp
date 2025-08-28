"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = ["Hero", "About", "Services", "Portfolio", "Review", "Contact"];

  return (
    <div className="px-8">
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-white transition-all">
        <div className="relative bg-cover bg-center px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="relative flex items-center gap-4 z-10">
            <Image src="/image/lg.png" alt="logo" width={96} height={96} className="w-24" />
          </div>

          {/* Mobile Menu Button */}
          <div className="relative lg:hidden z-10">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="text-cyan-600 text-2xl focus:outline-none"
            >
              ☰
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
              <ul
                ref={menuRef}
                className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg p-4 space-y-2 z-50"
              >
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`block transition ${
                        activeSection === item.toLowerCase()
                          ? "text-cyan-600 font-bold"
                          : "text-sky-500 hover:text-sky-700"
                      }`}
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
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`transition border-b-2 ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-600 border-cyan-600"
                      : "text-sky-500 border-transparent hover:text-sky-700 hover:border-sky-300"
                  }`}
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
