import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function WelcomeSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const isImageInView = useInView(imageRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 Multi Layer Parallax */
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const contentY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden py-28 lg:py-40"
    >
      {/* 🌌 Cinematic Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a120a]/70 via-black to-black" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-blue-500/10 blur-[180px] rounded-full" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* 🖼 IMAGE SIDE */}
        <motion.div
          ref={imageRef}
          style={{ y: imageY, scale: imageScale }}
          initial={{ opacity: 0, x: -80 }}
          animate={isImageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9)]">
            <motion.img
              src="/hero2.jpg"
              alt="Sago"
              className="w-full h-[520px] lg:h-[620px] object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1 }}
            />
          </div>

          {/* Floating Badge */}
          <motion.div
            style={{ y: badgeY }}
            className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-lg px-6 py-4 rounded-xl border border-amber-500/30"
          >
            <p className="text-4xl font-bold text-amber-400">50+</p>
            <p className="text-white/60 text-sm">Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* ✍️ CONTENT SIDE */}
        <motion.div
          ref={contentRef}
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 60 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <span className="inline-block px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6">
            Our Legacy
          </span>

          <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
            Excellence
            <span className="block text-amber-400 mt-2">
              in Every Grain
            </span>
          </h2>

          <p className="text-white/60 mb-10 max-w-lg">
            For over five decades, we have been at the forefront of the
            tapioca industry, delivering premium quality products that meet
            the highest standards of purity and taste.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mb-10">
            {[
              ["50+", "Years Experience"],
              ["100%", "Quality Assured"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-[#111] px-7 py-6 rounded-xl border border-white/5"
              >
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="text-white/50 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-9 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-xl"
          >
            Discover Our Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
