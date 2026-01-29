import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function AboutSagoSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  
  const isInView = useInView(contentRef, { once: false, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 ULTRA SMOOTH PARALLAX */
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const glassY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const glassOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const glassScale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.7, 0.85]);

  const features = [
    "Direct connection between farmers and manufacturers",
    "Real-time market intelligence and price discovery",
    "Quality standardization and certification support",
    "Logistics and supply chain optimization",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden"
      style={{ perspective: "1600px" }}
    >
      {/* 🌿 BACKGROUND IMAGE - SMOOTH PARALLAX */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        <img
          src="/hero2.jpg"
          alt="Tapioca"
          className="w-full h-full object-cover"
          style={{ opacity: 0.4 }}
        />
      </motion.div>
      
      {/* Premium overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </motion.div>

      {/* Ambient orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[200px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      />

      {/* ✨ GLASS CONTENT CONTAINER */}
      <motion.div
        ref={contentRef}
        style={{ y: glassY, opacity: glassOpacity, scale: glassScale }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-[2.5rem] px-10 py-14 md:px-16 md:py-16 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 60px 150px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* ✨ GLASS SHINE ANIMATION */}
          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          />

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-5 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-[0.2em]"
            >
              SAGOSERVE
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              A Gift to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Tapioca Industry
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/70 text-base lg:text-lg leading-relaxed mb-4"
            >
              As a pioneer and a supportive pillar of the tapioca market industry,
              we at SAGOSERVE provide assistance for starting and existing markets
              to grow in the industry.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/50 text-base lg:text-lg leading-relaxed"
            >
              We provide them with market resources like live price information,
              tenders and connect to farmers and manufacturers in order to meet
              their demand.
            </motion.p>
          </div>

          {/* RIGHT FEATURES */}
          <ul className="relative z-10 space-y-4 lg:pl-8 lg:border-l border-white/10">
            {features.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 group"
              >
                <span className="mt-2.5 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-white/70 text-base lg:text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
          
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-[2.5rem]" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-[2.5rem]" />
        </motion.div>
      </motion.div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
