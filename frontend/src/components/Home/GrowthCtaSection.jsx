import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IdeaCtaSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* PARALLAX */
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] w-full overflow-hidden"
    >
      {/* BACKGROUND IMAGE – PARALLAX */}
      <motion.div
        style={{ y: bgY, backgroundImage: "url('/hero1.jpg')" }}
        className="absolute inset-0 bg-cover bg-center scale-110"
      />

      {/* CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/80" />

      {/* SUN / GOLD GLOW – FLOATING */}
      <motion.div
        style={{ y: glowY }}
        className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px]
        bg-[radial-gradient(circle,_rgba(218,165,32,0.35)_0%,_transparent_65%)]
        blur-[120px]"
      />

      {/* SUBTLE PARTICLES */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#d1a95b]/40"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* CONTENT */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8
        min-h-[90vh] flex flex-col items-center justify-center text-center"
      >
        {/* SUB TITLE */}
        <motion.p
          initial={{ letterSpacing: "0.6em", opacity: 0 }}
          whileInView={{ letterSpacing: "0.4em", opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xs tracking-[0.4em] text-[#d1a95b] mb-6"
        >
          JOIN THE MOVEMENT
        </motion.p>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white"
        >
          STOP COMPROMISING.
          <br />
          <span className="text-[#d1a95b]">START SAGOSERVE.</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-white/80"
        >
          Experience the difference of working with a cooperative
          that puts quality and community first.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {/* PRIMARY */}
          <a
            href="/registration"
            className="
              px-9 py-4
              bg-gradient-to-r from-[#2f6b3f] to-[#3f7f52]
              text-white
              font-semibold
              rounded-md
              tracking-wide
              shadow-xl shadow-black/40
              hover:scale-[1.04]
              hover:shadow-[#2f6b3f]/40
              transition-all
            "
          >
            BECOME A MEMBER
          </a>

          {/* SECONDARY */}
          <a
            href="/contact"
            className="
              px-9 py-4
              text-white
              font-semibold
              tracking-wide
              border border-white/20
              rounded-md
              hover:bg-white/10
              transition
            "
          >
            CONTACT US →
          </a>
        </motion.div>
      </motion.div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
