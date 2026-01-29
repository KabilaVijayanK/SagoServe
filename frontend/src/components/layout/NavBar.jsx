import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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
    <>
      {/* FLOATING NAVBAR */}
      <header className="fixed top-4 left-0 w-full z-50 px-4">
        <div className="max-w-7xl mx-auto">

          <div
            className={`
              flex items-center justify-between
              px-6 h-16 rounded-2xl
              transition-all duration-300
              ${scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-lg"
                : "bg-white/10 backdrop-blur-md"}
            `}
          >

            {/* LOGO */}
            <NavLink to="/" className="flex items-center gap-2">
              <img src="/header-logooo.png" alt="" className="h-8"/>
              <span className={`font-semibold tracking-wide ${
                scrolled ? "text-black" : "text-white"
              }`}>
                SAGOSERVE
              </span>
            </NavLink>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <NavLink key={item.name} to={item.path} className="relative group">
                  {({ isActive }) => (
                    <>
                      <span className={`
                        transition-colors
                        ${scrolled
                          ? isActive ? "text-black" : "text-black/60 group-hover:text-black"
                          : isActive ? "text-white" : "text-white/70 group-hover:text-white"
                        }
                      `}>
                        {item.name}
                      </span>

                      {/* animated underline */}
                      <span className={`
                        absolute -bottom-1 left-0 h-[2px] bg-green-500
                        transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}/>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              {/* CTA */}
              <NavLink
                to="/contact"
                className="
                  hidden sm:flex items-center gap-2
                  px-4 py-2 rounded-xl
                  bg-gradient-to-r from-green-500 to-emerald-600
                  text-white text-sm font-semibold
                  hover:scale-105 transition
                "
              >
                Enquiry Now
                <ArrowUpRight size={16}/>
              </NavLink>

              {/* MOBILE BTN */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`
                  lg:hidden
                  ${scrolled ? "text-black" : "text-white"}
                `}
              >
                {menuOpen ? <X/> : <Menu/>}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className="
              fixed top-24 left-4 right-4
              bg-white rounded-2xl shadow-xl
              p-6 space-y-4 z-40
              lg:hidden
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block text-black/70 hover:text-black font-medium"
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 font-semibold"
            >
              Enquiry Now <ArrowUpRight size={16}/>
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
