import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
        transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-gradient-to-r from-[#5A3A22] to-[#8B5E3C] shadow-xl"
            : "bg-gradient-to-r from-[#8B5E3C] to-[#5A3A22]"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3 text-white">
          <img
            src="/header-logooo.png"
            alt="SagoServe Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-lg font-semibold tracking-wide">
            SAGOSERVE
          </span>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-8 text-white font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                relative transition-all duration-300
                ${
                  isActive
                    ? "text-white font-semibold after:w-full"
                    : "text-white/80"
                }
                hover:text-white
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-white after:w-0
                hover:after:w-full after:transition-all after:duration-300
              `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">

          {/* ENQUIRY CTA */}
          <NavLink
  to="/enquiry"
  className="
    relative flex items-center gap-2
    px-6 py-2.5 rounded-xl

    text-white text-sm font-semibold
    border-2 border-white/80
    bg-white/10 backdrop-blur-md

    shadow-[0_8px_24px_rgba(0,0,0,0.35)]

    transition-all duration-300 ease-out
    hover:bg-white
    hover:text-[#5A3A22]
    hover:shadow-[0_16px_40px_rgba(255,255,255,0.45)]
    hover:scale-[1.06]

    focus:outline-none
  "
>
  {/* ICON */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 10h8m-8 4h6m-9 6h14a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>

  <span>Enquiry Now</span>
</NavLink>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-[#5A3A22] px-6 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-white text-lg font-medium hover:text-white/80"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
