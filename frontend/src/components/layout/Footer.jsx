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
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

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
      className={`
        relative overflow-hidden
        bg-[#050505] text-white/70
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      {/* CINEMATIC GLOW BG */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-green-600/10 blur-[160px] rounded-full"/>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[160px] rounded-full"/>

      {/* TOP GRID */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/header-logooo.png"
              alt="logo"
              className="h-12 object-contain"
            />
            <h3 className="text-xl font-semibold text-white">
              SAGOSERVE
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-white/50">
            Empowering the tapioca industry through transparent
            marketing, quality assurance and cooperative strength.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Twitter, Instagram, Linkedin].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    p-2 rounded-xl
                    bg-white/5
                    hover:bg-green-600
                    transition-all duration-300
                  "
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-6">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Registration", "/registration"],
              ["Contact", "/contact"],
            ].map(([name, path]) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={scrollToTop}
                  className="
                    hover:text-green-400
                    transition
                    flex items-center gap-2 group
                  "
                >
                  {name}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-6">
            Our Services
          </h4>

          <ul className="space-y-3 text-sm text-white/50">
            <li>E-Auction Solutions</li>
            <li>Member Management</li>
            <li>Laboratory Testing</li>
            <li>Analytics & Reporting</li>
            <li>24/7 Support</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-6">
            Contact Info
          </h4>

          <ul className="space-y-4 text-sm text-white/50">
            <li className="flex gap-3">
              <MapPin className="text-green-500" size={18}/>
              <span>
                Jagirammalayam Post,<br/>
                Omalur Main Road,<br/>
                Salem – 636302
              </span>
            </li>

            <li className="flex gap-3">
              <Phone className="text-green-500" size={18}/>
              <span>
                +91 94899 05440<br/>
                +91 94899 05441
              </span>
            </li>

            <li className="flex gap-3">
              <Mail className="text-green-500" size={18}/>
              <span>slm_mdsago@yahoo.co.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} SAGOSERVE.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" onClick={scrollToTop}
              className="hover:text-green-400">
              Privacy Policy
            </Link>
            <Link to="/terms" onClick={scrollToTop}
              className="hover:text-green-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
