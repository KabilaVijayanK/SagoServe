import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "E-Auction", path: "/auction" },
  { name: "Registration", path: "/registration" },
  { name: "News", path: "/news" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">SAGOSERVE</h1>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                  isActive 
                    ? "bg-green-100 text-green-700 border-l-4 border-green-600" 
                    : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
