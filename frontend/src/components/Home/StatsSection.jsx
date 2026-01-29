import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { UserPlus, ClipboardCheck, Boxes } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Register",
    desc: "Join SAGOSERVE as a member by completing the simple registration process.",
    icon: UserPlus,
    color: "#22C55E",
  },
  {
    id: "02",
    title: "Get Approved",
    desc: "Our team reviews your application and provides approval within 48 hours.",
    icon: ClipboardCheck,
    color: "#E07B4C",
  },
  {
    id: "03",
    title: "Start Using",
    desc: "Access all services, place orders, and enjoy member benefits immediately.",
    icon: Boxes,
    color: "#22C55E",
  },
];

export default function StatsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: false, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 PREMIUM PARALLAX */
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const lineY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#030303] py-36 lg:py-48 overflow-hidden"
      style={{ perspective: "1600px" }}
    >
      {/* PREMIUM BACKGROUND */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <motion.div 
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#22C55E]/8 rounded-full blur-[200px]" 
          style={{ y: orb1Y }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#E07B4C]/8 rounded-full blur-[180px]" 
          style={{ y: orb2Y }}
        />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div 
          ref={headerRef}
          style={{ opacity: headerOpacity }}
          className="text-center mb-32"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium tracking-wide mb-6"
          >
            Getting Started
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            Start Using{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">SAGOSERVE</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Get started in three simple steps and experience seamless access to
            all our services.
          </motion.p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE - Animated */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-[2px] hidden md:block"
            style={{ y: lineY }}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#22C55E] via-[#E07B4C] to-[#22C55E] opacity-30" />
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#22C55E] to-[#E07B4C]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </motion.div>

          {/* STEPS */}
          <div className="space-y-32">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 100, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ 
                    duration: 1, 
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* CARD */}
                  <motion.div
                    whileHover={{ 
                      y: -15, 
                      scale: 1.02,
                      rotateY: isLeft ? 5 : -5,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full md:w-[520px] group"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-12 overflow-hidden"
                      style={{
                        boxShadow: "0 50px 120px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
                      }}
                    >
                      {/* Hover glow */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                        style={{
                          background: `radial-gradient(600px circle at 50% 50%, ${step.color}15, transparent 50%)`,
                        }}
                      />

                      {/* STEP BADGE */}
                      <span
                        className="absolute -top-4 left-8 text-xs tracking-[0.3em] font-bold"
                        style={{ color: step.color }}
                      >
                        STEP {step.id}
                      </span>

                      {/* ICON */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative"
                        style={{
                          backgroundColor: `${step.color}15`,
                          border: `1px solid ${step.color}40`,
                          transform: "translateZ(40px)",
                        }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: step.color }}
                          strokeWidth={1.5}
                        />
                        {/* Icon glow */}
                        <div 
                          className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                          style={{ backgroundColor: step.color }}
                        />
                      </motion.div>

                      <h3 
                        className="text-xl lg:text-2xl font-semibold text-white mb-3"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        {step.title}
                      </h3>

                      <p 
                        className="text-white/60 leading-relaxed text-lg"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        {step.desc}
                      </p>

                      {/* Corner accent */}
                      <div 
                        className="absolute bottom-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity"
                        style={{
                          background: `radial-gradient(circle at bottom right, ${step.color}, transparent 70%)`,
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* DOT with pulse */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="hidden md:block absolute left-1/2 top-14 -translate-x-1/2"
                  >
                    <div
                      className="w-5 h-5 rounded-full relative"
                      style={{ backgroundColor: step.color }}
                    >
                      <div 
                        className="absolute inset-0 rounded-full animate-ping opacity-40"
                        style={{ backgroundColor: step.color }}
                      />
                      <div 
                        className="absolute -inset-2 rounded-full blur-md opacity-50"
                        style={{ backgroundColor: step.color }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
}
