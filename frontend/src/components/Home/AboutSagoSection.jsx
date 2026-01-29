import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSagoSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // cinematic depth
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const features = [
    "Direct connection between farmers and manufacturers",
    "Real-time market intelligence and price discovery",
    "Quality standardization and certification support",
    "Logistics and supply chain optimization",
  ];

  return (
    <section ref={ref} className="relative h-[140vh] bg-black overflow-hidden">

      {/* 🎥 Background */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0"
      >
        <img src="/hero-about.jpg" className="w-full h-full object-cover" />

        {/* cinematic layers */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </motion.div>

      {/* 🎬 Sticky Content */}
      <motion.div
        style={{ y: textY }}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto text-center px-6">

          {/* badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block mb-8 px-6 py-2 border border-amber-400/40 text-amber-400 rounded-full text-sm tracking-widest"
          >
            SAGOSERVE
          </motion.div>

          {/* headline word reveal */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-bold leading-tight mb-8"
          >
            A Gift to{" "}
            <span className="text-amber-400 relative">
              Tapioca Industry
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                className="absolute left-0 -bottom-2 h-[2px] bg-amber-400"
              />
            </span>
          </motion.h2>

          {/* description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
          >
            As a pioneer and a supportive pillar of the tapioca market industry,
            we at SAGOSERVE provide assistance for starting and existing markets
            to grow in the industry. We provide them with market resources like
            live price information, tenders and connect to farmers and manufacturers
            in order to meet their demand.
          </motion.p>

          {/* features grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-amber-400" />
                <p className="text-white/70 text-lg">{item}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
