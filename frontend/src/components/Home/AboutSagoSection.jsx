import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSagoSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 PARALLAX VALUES */
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const glassY = useTransform(scrollYProgress, [0, 1], ["14%", "-14%"]);
  const glassOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const glassScale = useTransform(scrollYProgress, [0, 0.3], [0.97, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] bg-black overflow-hidden"
    >
      {/* 🌿 BACKGROUND IMAGE (SLOW PARALLAX) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <img
          src="/hero2.jpg"
          alt="Tapioca"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </motion.div>

      {/* ✨ GLASS CONTENT CONTAINER */}
      <motion.div
        style={{ y: glassY, opacity: glassOpacity, scale: glassScale }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20"
      >
        <div
          className="
            relative
            grid grid-cols-1 lg:grid-cols-2 gap-10
            rounded-3xl
            px-8 py-10 md:px-12 md:py-12
            bg-white/5 backdrop-blur-md
            border border-white/10
            shadow-[0_40px_120px_rgba(0,0,0,0.75)]
            overflow-hidden
          "
        >
          {/* ✨ GLASS SHINE ANIMATION */}
          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
            "
          />

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#8B5E3C]/25 text-[#C9A27A] text-xs font-semibold tracking-widest">
              SAGOSERVE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-white leading-tight mb-4">
              A Gift to{" "}
              <span className="text-[#8B5E3C]">Tapioca Industry</span>
            </h2>

            <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-3">
              As a pioneer and a supportive pillar of the tapioca market industry,
              we at sagoserve provide assistance for starting and existing markets
              to grow in the industry.
            </p>

            <p className="text-white/60 text-base lg:text-lg leading-relaxed">
              We provide them with market resources like live price information,
              tenders and connect to farmers and manufacturers in order to meet
              their demand.
            </p>
          </div>

          {/* RIGHT FEATURES */}
          <ul className="relative z-10 space-y-3 lg:pl-6">
            {[
              "Direct connection between farmers and manufacturers",
              "Real-time market intelligence and price discovery",
              "Quality standardization and certification support",
              "Logistics and supply chain optimization",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-white/75 text-sm lg:text-base"
              >
                <span className="mt-2 w-2 h-2 rounded-full bg-[#8B5E3C]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
