import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroRightWidget from "./HeroRightWidget";

const images = ["/home2.jpg", "/hero3.jpg", "/home4.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🔥 FULL HD BACKGROUND (NO BLUR) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url('${images[current]}')` }}
      />

     {/* CONTENT */}
<div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-end pb-32 md:pb-40">
  <div className="max-w-3xl">

    {/* TITLE */}
    <h1
      className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white"
      style={{
        letterSpacing: "0.12em",
        textShadow:
          "0 10px 28px rgba(0,0,0,0.9), 0 4px 10px rgba(0,0,0,0.7)",
      }}
    >
      SAGOSERVE
    </h1>

    {/* SUB TITLE */}
    <p
      className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-5 text-white"
      style={{
        textShadow: "0 4px 18px rgba(0,0,0,0.75)",
      }}
    >
      Your Trusted Source for{" "}
      <span className="font-semibold">Quality</span>{" "}
      <span className="font-semibold text-[#6FAF6A] border-b-2 border-[#5E9E5A] pb-1 inline-block">
  Sago and Starch
</span>

    </p>

    {/* DESCRIPTION LINE 1 */}
    <p
      className="text-white/90 text-sm md:text-base max-w-xl leading-relaxed mb-1"
      style={{
        textShadow: "0 3px 12px rgba(0,0,0,0.6)",
      }}
    >
      Salem Starch and Sago Manufacturers’ Service Industrial
    </p>

    {/* DESCRIPTION LINE 2 */}
    <p
  className="text-sm md:text-base font-medium text-[#6FAF6A] tracking-wide mb-10"
  style={{
    textShadow: "0 3px 10px rgba(0,0,0,0.6)",
  }}
>
  Co-operative Society Ltd.
</p>


    {/* CTA */}
    <div className="flex flex-wrap gap-5">
      <button
  onClick={() => navigate("/registration")}
  className="
    relative overflow-hidden
    px-8 py-4 rounded-full

    bg-[#5A3A22] text-white font-semibold

    shadow-[0_0_0_rgba(90,58,34,0)]
    transition-all duration-300 ease-out

    hover:shadow-[0_0_35px_rgba(90,58,34,0.65)]
    hover:scale-[1.04]
    active:scale-[0.98]
  "
>
  {/* ✨ COVER / SHINE EFFECT */}
  <span
    className="
      pointer-events-none
      absolute inset-0
      bg-gradient-to-r
      from-transparent via-white/25 to-transparent
      -translate-x-full
      hover:translate-x-full
      transition-transform duration-700
    "
  />

  <span className="relative z-10">
    Register Now
  </span>
</button>


      <button
        onClick={() => navigate("/auction")}
        className="px-8 py-4 rounded-full border border-white/80 text-white font-medium hover:bg-white/10 transition-all duration-300"
      >
        View Auctions
      </button>
    </div>

  </div>
</div>



      {/* RIGHT INFO WIDGET */}
      <HeroRightWidget />
    </section>
  );
}
