import React from "react";
import GlassSection from "../common/GlassSection";

export default function AboutSagoSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* 🔮 DARK BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black" />

      {/* 🌿 FLOATING GREEN GLOWS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] animate-floatSlow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[120px] animate-floatSlow delay-500" />

      {/* 🧊 GLASS CARD */}
      <GlassSection className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="
            grid gap-14 lg:grid-cols-2 items-center
            bg-white/90 backdrop-blur-2xl
            rounded-[2.5rem]
            p-10 md:p-14
            shadow-[0_40px_140px_rgba(0,0,0,0.65)]
          "
        >
          {/* 🖼️ LEFT – ANIMATED IMAGE */}
          <div
            className="
              relative overflow-hidden rounded-3xl
              bg-black
              shadow-[0_25px_80px_rgba(0,0,0,0.7)]
              transition-all duration-700
              hover:-translate-y-2
            "
          >
            <img
              src="/hero1.jpg"
              alt="Sagoserve Facility"
              className="
                w-full h-[220px] md:h-[320px]
                object-cover
                animate-kenburns
              "
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* play icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
              </div>
            </div>
          </div>

          {/* ✍️ RIGHT – CONTENT */}
          <div className="space-y-6 animate-fadeUp">
            <h2 className="text-4xl lg:text-5xl font-light tracking-wide text-green-600">
              Sagoserve
            </h2>

            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
              A Gift to Tapioca Industry
            </h3>

            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              Prior to the formation of Sagoserve, starch and sago manufacturers
              faced severe challenges in credit facilities and fair market
              access. Middlemen exploitation and lack of organized warehousing
              affected growth and transparency.
            </p>

            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              Established in 1981 under the Tamil Nadu Co-operative Society Act,
              Sagoserve empowers manufacturers with structured marketing,
              laboratory services and transparent auction mechanisms.
            </p>

            <a
              href="/about"
              className="
                inline-flex items-center gap-2
                text-green-700 font-semibold
                hover:gap-4
                transition-all duration-300
              "
            >
              Learn More →
            </a>
          </div>
        </div>
      </GlassSection>
    </section>
  );
}
