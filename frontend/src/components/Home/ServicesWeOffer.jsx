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

export default function ServicesWeOffer() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: false, margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 SCROLL DEPTH */
  const sectionZ = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#080808] py-28 lg:py-40 overflow-hidden"
      style={{ perspective: "1600px" }}
    >
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#8B5E3C]/15 rounded-full blur-[180px]" />
      </div>

      {/* HEADER */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 80, rotateX: 18 }}
        animate={
          isTitleInView
            ? { opacity: 1, y: 0, rotateX: 0 }
            : { opacity: 0, y: 80, rotateX: 18 }
        }
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center mb-24"
      >
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
          Services <span className="text-[#8B5E3C]">We Offer</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Comprehensive services designed to support farmers and enhance the quality of tapioca production.
        </p>
      </motion.div>

      {/* 3D STACK */}
      <motion.div
        style={{ y: cardsY, translateZ: sectionZ }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 120, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative"
            >
              <motion.div
                whileHover={{
                  y: -18,
                  rotateX: -8,
                  rotateY: index % 2 === 0 ? 8 : -8,
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="
                  relative h-full
                  bg-[#111]
                  rounded-3xl
                  p-10
                  border border-[#222]
                  shadow-[0_60px_120px_rgba(0,0,0,0.75)]
                  overflow-hidden
                "
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* DEPTH LAYER */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C]/0 to-blue-500/0 hover:from-[#8B5E3C]/15 hover:to-blue-500/15 transition-all duration-500 rounded-3xl" />

                {/* ICON */}
                <div
                  className="w-16 h-16 rounded-2xl bg-[#8B5E3C]/20 flex items-center justify-center mb-8"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <Icon className="w-8 h-8 text-[#C9A27A]" />
                </div>

                {/* TITLE */}
                <h3
                  className="text-2xl font-semibold text-white mb-4"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {service.title}
                </h3>

                {/* DESC */}
                <p
                  className="text-white/60 text-base leading-relaxed"
                  style={{ transform: "translateZ(22px)" }}
                >
                  {service.desc}
                </p>

                {/* EDGE LINE */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8B5E3C] to-blue-500 scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* FADE EDGES */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
