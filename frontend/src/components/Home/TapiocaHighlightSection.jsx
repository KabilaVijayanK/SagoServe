import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function TapiocaHighlightSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: false, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for smooth scroll
  const leftImageX = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rightImageX = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const leftImageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const rightImageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.85, 0.7]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] lg:min-h-[90vh] w-full overflow-hidden"
    >
      {/* THREE COLUMN LAYOUT: Left Image | Center Content | Right Image */}
      <div className="absolute inset-0 flex">
        
        {/* LEFT IMAGE - Tapioca Leaves */}
        <motion.div 
          className="relative w-1/4 lg:w-[22%] overflow-hidden"
          style={{ x: leftImageX }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero2.jpg')",
              scale: leftImageScale,
            }}
          />
          {/* Gradient fade to center */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a1a1a]" />
        </motion.div>

        {/* CENTER DARK AREA */}
        <div className="relative flex-1 bg-[#1a1a1a]">
          {/* Subtle texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* RIGHT IMAGE - Sago Bowl */}
        <motion.div 
          className="relative w-1/4 lg:w-[22%] overflow-hidden"
          style={{ x: rightImageX }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero3.jpg')",
              scale: rightImageScale,
            }}
          />
          {/* Gradient fade to center */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#1a1a1a]" />
        </motion.div>
      </div>

      {/* Dark overlay on entire section for cohesion */}
      <motion.div 
        className="absolute inset-0 bg-[#1a1a1a]/40 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* CONTENT */}
      <motion.div 
        ref={contentRef}
        className="relative z-10 h-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center px-6 lg:px-12"
        style={{ y: contentY }}
      >
        <div className="max-w-4xl text-center">
          
          {/* "Our Core Focus" Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-8"
          >
            <span className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#E07B4C] text-white text-sm font-semibold tracking-wide shadow-lg shadow-[#E07B4C]/30">
              Our Core Focus
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-serif text-white font-bold leading-[1.15] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            At the heart of our
            <br className="hidden sm:block" />
            {" "}operations is{" "}
            <span className="text-[#E07B4C]">Tapioca</span> and
            <br className="hidden sm:block" />
            {" "}its finished products
          </motion.h2>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-8 text-white/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-light"
          >
            We are committed to bridging the gap between farmers and industries,
            ensuring fair prices and sustainable practices throughout the tapioca
            value chain.
          </motion.p>

          {/* Bottom Accent Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-12 mx-auto w-24 h-1 bg-[#E07B4C] rounded-full origin-center"
          />
        </div>
      </motion.div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)'
      }} />
    </section>
  );
}
