import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TapiocaHighlightSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] bg-black overflow-hidden flex items-center"
    >
      {/* LEFT IMAGE */}
      <motion.div
        style={{ y: leftY }}
        className="absolute left-0 top-0 w-1/2 h-full hidden md:block"
      >
        <img
          src="/hero2.jpg"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        style={{ y: rightY }}
        className="absolute right-0 top-0 w-1/2 h-full hidden md:block"
      >
        <img
          src="/hero3.jpg"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent" />
      </motion.div>

      {/* CENTER CONTENT */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-6 px-6 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm"
        >
          Our Core Focus
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-white font-serif font-bold leading-tight text-3xl md:text-5xl"
        >
          At the heart of our operations is{" "}
          <span className="text-amber-400">Tapioca</span>{" "}
          and its finished products
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          We are committed to bridging the gap between farmers and industries,
          ensuring fair prices and sustainable practices throughout the tapioca
          value chain.
        </motion.p>

        {/* Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 mx-auto w-24 h-[3px] bg-amber-400 rounded-full"
        />
      </motion.div>
    </section>
  );
}
