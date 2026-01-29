import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function GrowthCtaSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: false, margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 ULTRA SMOOTH PARALLAX */
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.1, 1]);
  const glowY = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 0.7, 0.7, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ perspective: "1600px" }}
    >
      {/* BACKGROUND IMAGE – ULTRA PARALLAX */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero1.jpg')" }}
        />
      </motion.div>

      {/* CINEMATIC OVERLAYS */}
      <motion.div 
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />

      {/* PREMIUM GOLD GLOW – PARALLAX */}
      <motion.div
        style={{ y: glowY }}
        className="absolute bottom-[-300px] right-[-200px] w-[900px] h-[900px]
        bg-[radial-gradient(circle,_rgba(218,165,32,0.25)_0%,_rgba(184,134,11,0.1)_40%,_transparent_70%)]
        blur-[150px]"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px]
        bg-[radial-gradient(circle,_rgba(139,90,43,0.15)_0%,_transparent_60%)]
        blur-[120px]"
      />

      {/* SUBTLE PARTICLES – ENHANCED */}
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-amber-400/30"
          style={{
            left: `${8 + i * 8}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [0, 10, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* CONTENT */}
      <motion.div
        ref={contentRef}
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8
        min-h-screen flex flex-col items-center justify-center text-center"
      >
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={contentInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs tracking-[0.3em] text-amber-400 font-medium">JOIN THE MOVEMENT</span>
        </motion.div>

        {/* HEADING - CINEMATIC REVEAL */}
        <motion.h1
          initial={{ opacity: 0, y: 80, rotateX: 15 }}
          animate={contentInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] text-white tracking-tight"
        >
          STOP COMPROMISING.
          <br />
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500"
          >
            START SAGOSERVE.
          </motion.span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed"
        >
          Experience the difference of working with a cooperative
          that puts quality and community first.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-wrap justify-center gap-6"
        >
          {/* PRIMARY */}
          <motion.a
            href="/registration"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 overflow-hidden rounded-xl"
          >
            {/* Button BG */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
            
            <span className="relative z-10 flex items-center gap-3 text-white font-semibold tracking-wide">
              BECOME A MEMBER
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          {/* SECONDARY */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 overflow-hidden rounded-xl border border-white/20 hover:border-white/40 transition-colors"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors rounded-xl" />
            <span className="relative z-10 flex items-center gap-3 text-white font-semibold tracking-wide">
              CONTACT US
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
        </motion.div>

        {/* TRUST INDICATORS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-white/30 text-sm"
        >
          {["Transparent Pricing", "Government Regulated", "1000+ Members"].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* FADE EDGES */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
}
