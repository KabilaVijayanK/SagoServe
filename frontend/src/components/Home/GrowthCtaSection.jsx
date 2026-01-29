import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function GrowthCtaSection() {
  const ref = useRef(null);
  const contentRef = useRef(null);

  const inView = useInView(contentRef, { margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end","end start"]
  });

  /* 🎬 CINEMATIC PARALLAX */
  const bgY = useTransform(scrollYProgress,[0,1],[0,-250]);
  const bgScale = useTransform(scrollYProgress,[0,1],[1.4,1]);
  const textY = useTransform(scrollYProgress,[0,.4],[120,0]);
  const opacity = useTransform(scrollYProgress,[0,.3],[0,1]);
  const glowY = useTransform(scrollYProgress,[0,1],[100,-150]);

  return (
    <section ref={ref} className="relative h-[120vh] overflow-hidden bg-black">

      {/* 🎥 PARALLAX BACKGROUND */}
      <motion.div
        style={{ y:bgY, scale:bgScale }}
        className="absolute inset-0"
      >
        <img
          src="/hero1.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      </motion.div>

      {/* DARK CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 bg-black/60"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"/>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"/>

      {/* GOLD GLOW PARALLAX */}
      <motion.div
        style={{ y:glowY }}
        className="absolute -bottom-40 right-[-10%] w-[900px] h-[900px]
        bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,transparent_60%)]
        blur-[140px]"
      />

      {/* FLOATING PARTICLES */}
      {[...Array(10)].map((_,i)=>(
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-amber-400/40 rounded-full"
          style={{
            top:`${10+i*8}%`,
            left:`${5+i*9}%`
          }}
          animate={{
            y:[0,-40,0],
            opacity:[.2,1,.2]
          }}
          transition={{
            duration:6+i,
            repeat:Infinity
          }}
        />
      ))}

      {/* GRID TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
          "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px, transparent 1px)",
          backgroundSize:"100px 100px"
        }}
      />

      {/* 🎯 CONTENT */}
      <motion.div
        ref={contentRef}
        style={{ y:textY, opacity }}
        className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6"
      >

        {/* BADGE */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={inView && { opacity:1, y:0 }}
          className="flex items-center gap-2 px-6 py-2
          bg-amber-500/10 border border-amber-500/30
          rounded-full mb-10"
        >
          <Sparkles className="w-4 h-4 text-amber-400"/>
          <span className="text-amber-400 text-xs tracking-[0.3em]">
            GROW WITH SAGOSERVE
          </span>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity:0, y:60 }}
          animate={inView && { opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="text-4xl md:text-6xl lg:text-7xl
          font-bold text-white leading-tight"
        >
        STOP COMPROMISING.
          <br/>
          <span className="text-transparent bg-clip-text
          bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
            START SAGOSERVE.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity:0, y:40 }}
          animate={inView && { opacity:1, y:0 }}
          transition={{ delay:.3 }}
          className="mt-8 max-w-2xl text-white/60 text-lg"
        >
          Join the most trusted cooperative platform in the sago
          and starch industry. Transparency, trust and technology —
          all in one ecosystem.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          animate={inView && { opacity:1, y:0 }}
          transition={{ delay:.5 }}
          className="flex gap-6 mt-14"
        >

          {/* PRIMARY */}
          <a
            href="/registration"
            className="group relative px-10 py-5 rounded-xl
            bg-gradient-to-r from-amber-600 to-amber-700
            text-white font-semibold overflow-hidden"
          >
            <span className="flex items-center gap-3">
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition"/>
            </span>

            {/* shine */}
            <div className="absolute inset-0 bg-gradient-to-r
            from-transparent via-white/20 to-transparent
            -translate-x-full group-hover:translate-x-full
            transition duration-700"/>
          </a>

          {/* SECONDARY */}
          <a
            href="/contact"
            className="px-10 py-5 rounded-xl border border-white/30
            text-white hover:bg-white/10 transition"
          >
            Talk to Us
          </a>
        </motion.div>

        {/* TRUST LINE */}
        <div className="flex gap-10 mt-16 text-white/40 text-sm">
          {["Govt Regulated","Transparent Pricing","1000+ Members"]
            .map((t,i)=>(
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"/>
                {t}
              </div>
          ))}
        </div>

      </motion.div>

      {/* FADE EDGES */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent"/>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"/>

    </section>
  );
}
