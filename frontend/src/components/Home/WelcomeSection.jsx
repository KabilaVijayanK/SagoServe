import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function WelcomeSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const isImageInView = useInView(imageRef, { once: false, margin: "-10%" });
  const isContentInView = useInView(contentRef, { once: false, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 ULTRA SMOOTH CINEMATIC PARALLAX */
  const imageY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const imageBrightness = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  const contentY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  
  const bgGradientY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] overflow-hidden py-24 lg:py-40"
      style={{ perspective: "1600px" }}
    >
      {/* PREMIUM BACKGROUND */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: bgGradientY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a120a]/60 via-black to-black/95" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[180px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* IMAGE SIDE - 3D PARALLAX */}
          <motion.div
            ref={imageRef}
            style={{ 
              y: imageY, 
              scale: imageScale, 
              rotateY: imageRotate,
              filter: `brightness(${imageBrightness})`,
            }}
            className="relative transform-gpu"
          >
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: 12 }}
              animate={
                isImageInView
                  ? { opacity: 1, x: 0, rotateY: 0 }
                  : { opacity: 0, x: -100, rotateY: 12 }
              }
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden"
            >
              {/* Image Frame with Premium Border */}
              <div className="bg-gradient-to-br from-[#2a1f15] to-[#1a1410] p-3 rounded-3xl shadow-[0_60px_120px_rgba(0,0,0,0.8)]">
                <div className="relative rounded-2xl overflow-hidden">
                  <motion.img
                    src="/hero2.jpg"
                    alt="Sago Excellence"
                    className="w-full h-[480px] lg:h-[600px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* 50+ BADGE - Floating */}
              <motion.div
                style={{ y: badgeY }}
                initial={{ opacity: 0, scale: 0.8, y: 60 }}
                animate={
                  isImageInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.8, y: 60 }
                }
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -right-6 lg:bottom-10 lg:right-10"
              >
                <div className="bg-[#0f0d0a]/95 backdrop-blur-xl px-8 py-5 rounded-2xl border border-amber-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    50<span className="text-amber-500">+</span>
                  </p>
                  <p className="text-white/60 text-sm mt-1 tracking-wide">
                    Years of Excellence
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE - SMOOTH REVEAL */}
          <motion.div
            ref={contentRef}
            style={{ y: contentY, opacity: contentOpacity }}
            className="lg:pl-8 transform-gpu"
          >
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.9 }
              }
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium tracking-wide">
                Our Legacy
              </span>
            </motion.div>

            {/* TITLE - Staggered Reveal */}
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 60 }
              }
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-6"
            >
              Excellence
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mt-2"
                initial={{ opacity: 0, x: -40 }}
                animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                in Every Grain
              </motion.span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/60 text-base lg:text-lg leading-relaxed mb-12 max-w-lg"
            >
              For over five decades, we have been at the forefront of the tapioca
              industry, delivering premium quality products that meet the highest
              standards of purity and taste.
            </motion.p>

            {/* STATS - 3D Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-5 mb-12"
            >
              {[["50+", "Years Experience"], ["100%", "Quality Assured"]].map(
                ([value, label], idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 30, rotateX: 15 }}
                    animate={isContentInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.5 + idx * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="flex-1 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 border border-white/5 relative overflow-hidden group"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-3xl lg:text-4xl font-bold text-white mb-2 relative z-10">
                      {value.replace(/[+%]/g, "")}
                      <span className="text-amber-500">
                        {value.includes("+") ? "+" : "%"}
                      </span>
                    </p>
                    <p className="text-white/50 text-sm relative z-10">{label}</p>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.7, delay: 0.55 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:shadow-[0_25px_60px_rgba(59,130,246,0.4)] transition-shadow duration-300"
            >
              Discover Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
