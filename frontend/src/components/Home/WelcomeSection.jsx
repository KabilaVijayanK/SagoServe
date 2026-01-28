import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function WelcomeSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const isImageInView = useInView(imageRef, { once: false, margin: "-15%" });
  const isContentInView = useInView(contentRef, { once: false, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 SMOOTH CINEMATIC PARALLAX */
  const imageY = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.98]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  const contentY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#141414] overflow-hidden py-20 lg:py-32"
      style={{ perspective: "1400px" }}
    >
      {/* BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b1d12]/40 via-black to-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            ref={imageRef}
            style={{ y: imageY, scale: imageScale, rotateY: imageRotate }}
            className="relative transform-gpu"
          >
            <motion.div
              initial={{ opacity: 0, x: -80, rotateY: 8 }}
              animate={
                isImageInView
                  ? { opacity: 1, x: 0, rotateY: 0 }
                  : { opacity: 0, x: -80, rotateY: 8 }
              }
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="bg-[#241a13] p-4 rounded-3xl shadow-[0_40px_90px_rgba(0,0,0,0.7)]">
                <div className="relative rounded-2xl overflow-hidden">
                  <motion.img
                    src="/hero2.jpg"
                    alt="Sago Excellence"
                    className="w-full h-[450px] lg:h-[560px] object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* 50+ BADGE */}
              <motion.div
                style={{ y: badgeY }}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isImageInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute bottom-8 right-8 bg-[#1d1a16]/95 backdrop-blur-xl px-6 py-4 rounded-xl border border-[#3a2b1f]"
              >
                <p className="text-4xl font-bold text-[#C9A46A]">
                  50<span>+</span>
                </p>
                <p className="text-white/60 text-sm mt-1">
                  Years of Excellence
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            ref={contentRef}
            style={{ y: contentY }}
            className="lg:pl-6 transform-gpu"
          >
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium">
                Our Legacy
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] mb-8"
            >
              Excellence
              <span className="block text-[#C9A46A] mt-1">
                in Every Grain
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60 text-base lg:text-lg leading-relaxed mb-10 max-w-lg"
            >
              For over five decades, we have been at the forefront of the tapioca
              industry, delivering premium quality products that meet the highest
              standards of purity and taste.
            </motion.p>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex gap-4 mb-10"
            >
              {[["50+", "Years Experience"], ["100%", "Quality Assured"]].map(
                ([value, label]) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 bg-[#1b1b1b] rounded-2xl p-6 border border-[#2f2f2f] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A46A]/10 rounded-full blur-3xl" />
                    <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                      {value.replace("+", "")}
                      <span className="text-[#C9A46A]">
                        {value.includes("+") ? "+" : "%"}
                      </span>
                    </p>
                    <p className="text-white/50 text-sm">{label}</p>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
            >
              Discover Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
