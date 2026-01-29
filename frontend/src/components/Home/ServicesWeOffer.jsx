import React from "react";
import { motion } from "framer-motion";
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
    desc: "Online platform for members to access services, information, and digital tools.",
    icon: Globe,
  },
  {
    title: "Workshops",
    desc: "Regular training workshops for farmers on best practices and new techniques.",
    icon: Video,
  },
  {
    title: "Stores",
    desc: "Well-stocked stores providing essential supplies and materials.",
    icon: Layers,
  },
  {
    title: "Programs",
    desc: "Initiatives designed to support farmers and increase productivity.",
    icon: Users,
  },
];

const marqueeTexts = [
  "Understanding the Cooperative Framework",
  "Transparent Marketing",
  "Supporting Members Across the Value Chain",
  "Your Growth Journey",
  "Sustainable Growth",
];

export default function ServicesWeOffer() {
  return (
    <section className="relative bg-[#050505] py-32 overflow-hidden">

      {/* CINEMATIC BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-500/10 blur-[160px] rounded-full"/>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-700/10 blur-[140px] rounded-full"/>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-24 px-6 relative z-10"
      >
        <span className="px-6 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm tracking-wider">
          WHAT WE PROVIDE
        </span>

        <h2 className="text-4xl lg:text-6xl text-white font-serif mt-8 leading-tight">
          Services{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
            We Offer
          </span>
        </h2>

        <p className="text-white/40 max-w-2xl mx-auto mt-6 text-lg">
          Premium cooperative services crafted for quality,
          transparency and farmer success.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 relative z-10">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -18, scale: 1.02 }}
              className="
                group relative
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-amber-400/40
                rounded-3xl p-10
                transition-all duration-500
                overflow-hidden
              "
            >
              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-amber-500/15 to-transparent transition duration-500"/>

              {/* icon */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="
                  w-16 h-16 mb-6
                  bg-amber-500/10
                  rounded-2xl
                  flex items-center justify-center
                  group-hover:bg-amber-500/20
                  transition
                "
              >
                <Icon size={30} className="text-amber-450 text-amber-400"/>
              </motion.div>

              <h3 className="text-2xl text-white font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-white/45 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* PREMIUM MARQUEE */}
      <div className="mt-28 border-y border-white/10 py-8">
        <div className="flex whitespace-nowrap animate-marquee gap-16 text-amber-400/80 text-xl font-medium">
          {[...marqueeTexts, ...marqueeTexts].map((text, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="text-amber-600 text-2xl">✦</span>
              {text}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
