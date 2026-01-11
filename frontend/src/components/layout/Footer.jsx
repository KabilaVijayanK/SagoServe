import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 🔥 Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
  ref={footerRef}
  className={`bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300
    transition-all duration-700 ease-out
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
  `}
>

      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold">
              S
            </div>
            <h3 className="text-xl font-semibold text-white">SAGOSERVE</h3>
          </div>

          <p className="text-sm leading-relaxed">
            Excellence in service delivery, empowering businesses with
            innovative solutions for the modern marketplace.
          </p>

          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-green-600 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" onClick={scrollToTop} className="hover:text-green-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop} className="hover:text-green-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={scrollToTop} className="hover:text-green-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/registration" onClick={scrollToTop} className="hover:text-green-500">
                Registration
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={scrollToTop} className="hover:text-green-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>E-Auction Solutions</li>
            <li>Member Management</li>
            <li>Laboratory Testing</li>
            <li>Analytics & Reporting</li>
            <li>24/7 Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-green-500" />
              <span>
                Jagirammalayam Post,<br />
                Omalur Main Road,<br />
                Salem – 636302
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-green-500" />
              <span>
                +91 94899 05440<br />
                +91 94899 05441
              </span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-green-500" />
              <span>slm_mdsago@yahoo.co.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} SAGOSERVE. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" onClick={scrollToTop} className="hover:text-green-500">
              Privacy Policy
            </Link>
            <Link to="/terms" onClick={scrollToTop} className="hover:text-green-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
