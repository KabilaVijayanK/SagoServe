import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Settings,
  FlaskConical,
  Globe,
  Video,
  Layers,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Machines",
    desc: "Providing advanced machinery and equipment for sago and starch production with latest technology.",
    icon: Settings,
  },
  {
    title: "Laboratory",
    desc: "Quality testing and analysis services with modern laboratory facilities.",
    icon: FlaskConical,
  },
  {
    title: "Website",
    desc: "Online platform for members to access services, information, and digital tools for SAGOSERVE.",
    icon: Globe,
  },
  {
    title: "Workshops",
    desc: "Regular training workshops for farmers and members on best practices and new techniques.",
    icon: Video,
  },
  {
    title: "Stores",
    desc: "Well-stocked stores providing essential supplies and materials for tapioca farming and processing.",
    icon: Layers,
  },
  {
    title: "Programs",
    desc: "Various programs and initiatives to support farmers and enhance productivity.",
    icon: Users,
  },
];

const marqueeTexts = [
  "Understanding the Cooperative Framework",
  "Transparent Marketing & Member Support",
  "Supporting Members Across the Value Chain",
  "Your Growth Journey",
  "Sustainable Growth Through Cooperation",
];

export default function ServicesWeOffer() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: false, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 PREMIUM PARALLAX TRANSFORMS */
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [150, -80]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050505] py-32 lg:py-44 overflow-hidden"
      style={{ perspective: "1800px" }}
    >
      {/* PREMIUM BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/8 rounded-full blur-[200px]" 
          style={{ y: orb1Y }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[200px]" 
          style={{ y: orb2Y }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* HEADER - Smooth Reveal */}
      <motion.div
        ref={titleRef}
        style={{ opacity: headerOpacity }}
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        animate={
          isTitleInView
            ? { opacity: 1, y: 0, rotateX: 0 }
            : { opacity: 0, y: 100, rotateX: 20 }
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center mb-28"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium tracking-wide mb-6"
        >
          What We Provide
        </motion.span>
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
          Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">We Offer</span>
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
          Comprehensive services designed to support farmers and enhance the quality of tapioca production.
        </p>
      </motion.div>

      {/* 3D CARDS GRID - Premium Parallax */}
      <motion.div
        style={{ y: cardsY }}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-6"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 120, rotateX: 25, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="group"
            >
              <motion.div
                whileHover={{
                  y: -20,
                  rotateX: -6,
                  rotateY: index % 2 === 0 ? 6 : -6,
                  scale: 1.02,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-3xl p-10 border border-white/5 overflow-hidden"
                style={{ 
                  transformStyle: "preserve-3d",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
                }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-blue-500/0 group-hover:from-amber-500/10 group-hover:to-blue-500/5 transition-all duration-700 rounded-3xl" />
                
                {/* Spotlight Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* ICON with 3D depth */}
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-8 border border-amber-500/20 group-hover:border-amber-500/40 transition-colors duration-300"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <Icon className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
                </div>

                {/* TITLE */}
                <h3
                  className="text-2xl font-semibold text-white mb-4 group-hover:text-amber-50 transition-colors"
                  style={{ transform: "translateZ(40px)" }}
                >
                  {service.title}
                </h3>

                {/* DESC */}
                <p
                  className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {service.desc}
                </p>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* MARQUEE STRIP */}
      <div className="relative mt-32 overflow-hidden select-none">
        <div className="marquee-track">
          {[...marqueeTexts, ...marqueeTexts].map((text, i) => (
            <span
              key={i}
              className="marquee-item text-amber-400/80 font-medium text-lg"
            >
              <span className="mx-4 text-amber-600">✦</span>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* FADE EDGES */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
      
      <style>{`
        .marquee-track {
          display: flex;
          animation: marquee 40s linear infinite;
          white-space: nowrap;
        }
        .marquee-item {
          flex-shrink: 0;
          padding: 0 1rem;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
