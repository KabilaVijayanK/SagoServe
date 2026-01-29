import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroRightWidget from "./HeroRightWidget";

export default function Hero() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* 🔥 SMOOTH PARALLAX TRANSFORMS */
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      style={{ perspective: "1400px" }}
    >
      {/* 🎥 VIDEO - PARALLAX */}
      <motion.video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ 
          scale: videoScale, 
          y: videoY,
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

     {/* 🟤 OVERLAY */}
      <motion.div 
        style={{ y: overlayY }} 
        className="absolute inset-0 bg-gradient-to-b from-[#2a1c0f]/40 via-black/60 to-black/90 z-10" 
      />
      <div className="absolute inset-0 shadow-[inset_0_0_240px_rgba(0,0,0,0.9)] z-10" />

      {/* CONTENT */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute inset-0 z-20 flex items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 90, rotateX: 14 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl transform-gpu"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm tracking-[0.35em] text-[#C9A46A] mb-4"
          >
            SINCE 1965
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              y: titleY,
              color: "#F5EDE3",
              textShadow: "0 30px 70px rgba(0,0,0,0.95)",
            }}
          >
            SAGOSERVE
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-[#E7D8C2] mb-10 italic"
          >
            Your Trusted Source for Quality Sago and Starch
          </motion.p>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <motion.button
              onClick={() => navigate("/registration")}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="
                px-10 py-4 rounded-md font-semibold text-white
                bg-gradient-to-r from-[#7A5C2E] to-[#8C6A36]
                shadow-[0_20px_45px_rgba(0,0,0,0.5)]
              "
            >
              Register Now →
            </motion.button>

            <motion.button
              onClick={() => navigate("/auction")}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="
                px-10 py-4 rounded-md font-semibold
                text-[#F5EDE3] border border-[#C9A46A]/70
                bg-[#2a1c0f]/40 backdrop-blur-md
                shadow-[0_16px_36px_rgba(0,0,0,0.4)]
              "
            >
              View Auctions →
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* SCROLL */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-[#C9A46A] text-xs tracking-widest animate-pulse"
      >
        SCROLL
      </motion.div>

      <HeroRightWidget />
    </section>
  );
}
