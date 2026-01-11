import React, { useEffect, useState } from "react";
import HeroRightWidget from "./HeroRightWidget";

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND SLIDER */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* CENTER CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center text-white">
        
        {/* TITLE */}
<div className="relative inline-block">
  

  {/* FILL TEXT */}
  <h1
    className="
      relative
      text-4xl md:text-7xl lg:text-8xl
      font-extrabold tracking-wide
      text-white
      drop-shadow-xl
    "
  >
    SAGOSERVE
  </h1>
</div>


        {/* SUB TITLE */}
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-green-300 drop-shadow-lg">
          Market & Laboratory Services
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-8 max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed tracking-wide font-medium">
          Salem Starch and Sago Manufacturers’ Service Industrial
          Co-operative Society Ltd.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-14 flex flex-wrap gap-6 justify-center">
          
          {/* PRIMARY CTA */}
          <button
            onClick={() => (window.location.href = "/registration")}
            className="
              px-10 py-5
              text-lg md:text-xl
              font-bold tracking-wide
              rounded-full
              bg-gradient-to-r from-green-500 via-emerald-500 to-green-600
              text-white
              shadow-[0_0_30px_rgba(34,197,94,0.65)]
              hover:shadow-[0_0_55px_rgba(34,197,94,0.95)]
              hover:scale-110
              focus:outline-none focus:ring-4 focus:ring-green-400/40
              transition-all duration-300
            "
          >
            Register Now
          </button>

          {/* SECONDARY CTA */}
          <button
            onClick={() => (window.location.href = "/auction")}
            className="
              px-8 py-4
              text-base md:text-lg
              font-semibold
              rounded-full
              border-2 border-white/70
              text-white
              backdrop-blur-sm
              hover:bg-white/15
              hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-white/40
              transition-all duration-300
            "
          >
            View Auctions
          </button>

        </div>
      </div>

      {/* RIGHT SIDE GLASS WIDGET */}
      <HeroRightWidget />
    </section>
  );
}
