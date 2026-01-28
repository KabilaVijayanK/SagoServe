import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroRightWidget from "./HeroRightWidget";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 🎥 VIDEO DEPTH PARALLAX
      gsap.fromTo(
        videoRef.current,
        { scale: 1.05, y: 0 },
        {
          scale: 1.18,
          y: 180,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.6,
          },
        }
      );

      // OVERLAY DEPTH
      gsap.fromTo(
        overlayRef.current,
        { y: 0 },
        {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      // TITLE – REAL 3D DEPTH
      gsap.fromTo(
        titleRef.current,
        { y: 0, opacity: 1, z: 0 },
        {
          y: -120,
          opacity: 0.25,
          z: -200,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.3,
          },
        }
      );

      // SUBTITLE
      gsap.fromTo(
        subtitleRef.current,
        { y: 0, opacity: 1, z: 0 },
        {
          y: -80,
          opacity: 0.2,
          z: -120,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      // BUTTONS
      gsap.fromTo(
        buttonsRef.current,
        { y: 0, opacity: 1 },
        {
          y: -60,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        }
      );
    }, containerRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      style={{ perspective: "1400px" }}
    >
      {/* 🎥 VIDEO */}
      <video
        ref={videoRef}
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => ScrollTrigger.refresh()}
        className="absolute inset-0 w-full h-full object-cover"
      />

     {/* 🟤 OVERLAY */}
      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-[#2a1c0f]/40 via-black/60 to-black/90 z-10" />
       <div className="absolute inset-0 shadow-[inset_0_0_240px_rgba(0,0,0,0.9)] z-10" />

      {/* CONTENT */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 90, rotateX: 14 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl transform-gpu"
        >
          <p
            ref={subtitleRef}
            className="text-sm tracking-[0.35em] text-[#C9A46A] mb-4"
          >
            SINCE 1965
          </p>

          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{
              color: "#F5EDE3",
              textShadow: "0 30px 70px rgba(0,0,0,0.95)",
            }}
          >
            SAGOSERVE
          </h1>

          <p className="text-lg md:text-xl text-[#E7D8C2] mb-10 italic">
            Your Trusted Source for Quality Sago and Starch
          </p>

          {/* CTA */}
          <div ref={buttonsRef} className="flex justify-center gap-6 flex-wrap">
            <motion.button
              onClick={() => navigate("/registration")}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.4 }}
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
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="
                px-10 py-4 rounded-md font-semibold
                text-[#F5EDE3] border border-[#C9A46A]/70
                bg-[#2a1c0f]/40 backdrop-blur-md
                shadow-[0_16px_36px_rgba(0,0,0,0.4)]
              "
            >
              View Auctions →
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-[#C9A46A] text-xs tracking-widest animate-pulse">
        SCROLL
      </div>

      <HeroRightWidget />
    </section>
  );
}
