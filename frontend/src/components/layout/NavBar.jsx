import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "E-Auction", path: "/auction" },
    { name: "Registration", path: "/registration" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"}
      `}
    >
      {/* CENTERED BAR */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/header-logooo.png"
              alt="SAGOSERVE"
              className="h-9 w-auto object-contain"
            />
            <span className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}>
              SAGOSERVE
            </span>
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                  transition-colors duration-200
                  ${scrolled
                    ? isActive
                      ? "text-black font-semibold"
                      : "text-black/60 hover:text-black"
                    : isActive
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }
                `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA + MOBILE */}
          <div className="flex items-center gap-4">

            {/* TALK TO US */}
            <NavLink
              to="/contact"
              className="
                hidden sm:inline-flex items-center gap-1.5
                px-4 py-2 rounded-md text-sm font-semibold
                bg-[#7fdca3] text-black
                hover:bg-gradient-to-r from-[#7A5C2E] to-[#8C6A36]
                transition
              "
            >
              Enquiry Now
              <ArrowUpRight className="w-4 h-4" />
            </NavLink>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className="lg:hidden overflow-hidden bg-white border-t"
      >
        <div className="px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-black/70 hover:text-black"
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-black"
          >
           Enquiry Now <ArrowUpRight className="w-4 h-4" />
          </NavLink>
        </div>
      </motion.div>
    </header>
  );
}
