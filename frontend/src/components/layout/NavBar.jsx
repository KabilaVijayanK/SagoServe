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
        ? "bg-gradient-to-r from-green-800 to-emerald-700 shadow-xl"
        : "bg-gradient-to-r from-green-700 to-green-600"
    }
  `}
>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3 text-white font-bold text-xl">
          <div className="w-10 h-10 rounded-lg bg-white text-green-700 flex items-center justify-center">
            S
          </div>
          SAGOSERVE
        </NavLink>

        {/* DESKTOP LINKS */}
        <nav className="hidden lg:flex gap-8 text-white font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                  relative transition-all duration-300
                  ${isActive ? "text-white font-semibold after:w-full" : "text-white/80"}
                  hover:text-white after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-white after:w-0 hover:after:w-full
                  after:transition-all after:duration-300
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">

         {/* CART */}
<div className="relative group">
  <NavLink
    to="/cart"
    className="
      relative flex items-center gap-2
      px-5 py-2.5 rounded-xl

      bg-white text-green-700
      text-sm font-semibold

      border border-green-200
      shadow-md

      transition-all duration-300 ease-out
      hover:bg-green-600 hover:text-white
      hover:shadow-[0_12px_30px_rgba(16,185,129,0.45)]
      hover:scale-[1.03]
    "
  >
    {/* Cart Icon */}
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
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13l1.5 6M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>

    <span>Cart</span>
  </NavLink>

  {/* CART COUNT */}
  <span
    className="
      absolute -top-2 -right-2
      w-5 h-5 rounded-full

      bg-green-600 text-white
      text-xs font-bold

      flex items-center justify-center
      shadow-lg
      ring-2 ring-white
    "
  >
    2
  </span>
</div>

          

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
        <div className="lg:hidden bg-green-700 px-6 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-white text-lg font-medium hover:text-green-200"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
