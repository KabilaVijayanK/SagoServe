import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { UserPlus, Gavel, Package, ArrowRight } from "lucide-react";

const items = [
  {
    title: "Register",
    desc: "Create your account and get verified access to SAGOSERVE.",
    icon: UserPlus,
    link: "/registration",
  },
  {
    title: "Live Auctions",
    desc: "Participate in transparent real-time and scheduled auctions.",
    icon: Gavel,
    link: "/auction",
  },
  {
    title: "Products",
    desc: "Explore sago, starch and by-products in the regulated market.",
    icon: Package,
    link: "/products",
  },
];

export default function QuickLinksSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const headerInView = useInView(headerRef, { once: false, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 PREMIUM PARALLAX */
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [100, -60]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-44 bg-[#050810] overflow-hidden"
      style={{ perspective: "1600px" }}
    >
      {/* PREMIUM BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#080d18] to-[#050810]"
      />

      {/* Ambient orbs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[200px]"
        style={{ y: orb1Y }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[180px]"
        style={{ y: orb2Y }}
      />

      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* HEADER */}
        <motion.div
          ref={headerRef}
          style={{ opacity: headerOpacity }}
          className="max-w-3xl mx-auto mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium tracking-[0.2em] mb-6"
          >
            PLATFORM ACCESS
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">SAGOSERVE</span> Works
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-white/50 text-lg max-w-xl mx-auto leading-relaxed"
          >
            A simple, transparent and powerful workflow built for the
            regulated market.
          </motion.p>
        </motion.div>

        {/* CARDS - 3D Parallax */}
        <motion.div
          style={{ y: cardsY }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.link}
                initial={{ opacity: 0, y: 100, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{
                  duration: 1,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group block"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div 
                  className="h-full rounded-3xl bg-gradient-to-br from-[#0c1220] to-[#080d16] border border-white/5 px-8 py-12 transition-all duration-500 group-hover:border-cyan-500/30 overflow-hidden relative"
                  style={{
                    boxShadow: "0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:to-teal-500/5 transition-all duration-700 rounded-3xl" />
                  
                  {/* Spotlight */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* ICON */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 mx-auto w-18 h-18 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/10 border border-cyan-500/20 flex items-center justify-center mb-8 group-hover:border-cyan-500/40 transition-colors"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </motion.div>

                  {/* TITLE */}
                  <h3 
                    className="relative z-10 text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-50 transition-colors"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p 
                    className="relative z-10 text-white/50 text-sm leading-relaxed mb-8 group-hover:text-white/70 transition-colors"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <div className="relative z-10 inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                  
                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* FADE EDGES */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050810] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />
    </section>
  );
}
