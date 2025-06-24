import { useState, useEffect, useRef } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import Button from "../ui/Button";
import Logo from "./Logo";
import gsap from "gsap";

const navLinks = ["Home", "Explore", "Maketplace", "Artists", "News"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const mobileMenuRef = useRef();

  // Desktop nav animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.3,
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  // Animate mobile menu links on open
  useEffect(() => {
    if (menuOpen) {
      gsap.from(".mobile-link", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });
    }
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 z-50 w-full bg-transparent shadow-md backdrop-blur-xs"
      ref={navRef}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Logo />

        {/* Desktop NavLinks */}
        <ul className="hidden space-x-5 text-white/90 md:flex lg:space-x-16">
          {navLinks.map((link, index) => (
            <li
              key={link}
              className="nav-item group font-poppins relative cursor-pointer font-medium"
            >
              <span>{link}</span>
              <span className="from-pink to-purple absolute -bottom-1 left-0 h-1 w-0 bg-gradient-to-l transition-all duration-300 group-hover:w-[60%]"></span>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <button className="hover:border-pink font-poppins flex cursor-pointer items-center gap-2 rounded-md border border-gray-400 px-4 py-2 text-sm text-white/90 transition">
            <FiSearch />
            <span>Search</span>
          </button>
          <Button>Register</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl text-white/90 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile NavLinks Slide Menu */}
      <div
        ref={mobileMenuRef}
        className={`bg-deep-navy fixed top-0 right-0 z-40 h-screen w-full transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Blur effect */}
        {menuOpen && (
          <>
            <div
              className="bg-purple/50 absolute -right-56 bottom-1 z-40 h-96 w-52 rounded-full blur-2xl"
              style={{
                boxShadow: "0 0 200px 100px rgba(128, 0, 255, 0.4)",
              }}
            ></div>

            <div
              className="bg-purple/50 absolute top-24 -left-56 z-40 h-56 w-52 rounded-full blur-2xl md:-left-40 lg:-left-36 lg:h-96"
              style={{
                boxShadow: "0 0 200px 100px rgba(128, 0, 255, 0.4)",
              }}
            ></div>
          </>
        )}

        <div className="flex h-full flex-col items-center justify-center space-y-6 p-6">
          <button
            className="absolute top-6 right-6 text-2xl text-white/90 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>

          {navLinks.map((link) => (
            <div
              key={link}
              className="mobile-link group font-poppins relative cursor-pointer text-2xl font-semibold text-white/90 hover:text-white"
            >
              <span>{link}</span>
              <span className="from-pink to-purple absolute -bottom-1 left-0 h-1 w-0 bg-gradient-to-l transition-all duration-300 group-hover:w-[60%]"></span>
            </div>
          ))}

          <div className="mobile-link">
            <button className="hover:border-pink flex items-center gap-2 rounded-md border border-gray-400 px-4 py-2 text-sm text-white/90 transition">
              <FiSearch />
              <span>Search</span>
            </button>
          </div>

          <div className="mobile-link">
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
