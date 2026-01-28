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

export default function StartUsingSectionBlue() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const headerInView = useInView(headerRef, { margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 PARALLAX */
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-[#0B1220] overflow-hidden"
    >
      {/* BACKGROUND PARALLAX */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0E1628] to-[#0B1220]"
      />

      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* HEADER */}
        <motion.div
          ref={headerRef}
          style={{ opacity }}
          initial={{ y: 50 }}
          animate={headerInView ? { y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#4FD1C5] mb-5">
            Platform Access
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            How <span className="text-[#4FD1C5]">SAGOSERVE</span> Works
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            A simple, transparent and powerful workflow built for the
            regulated market.
          </p>
        </motion.div>

        {/* CARDS */}
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
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                className="group"
              >
                <div className="h-full rounded-3xl bg-[#111827] border border-white/10 px-8 py-10 transition-all duration-300 hover:border-[#4FD1C5]/50 hover:-translate-y-2">

                  {/* ICON */}
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-[#4FD1C5]/15 flex items-center justify-center mb-7">
                    <Icon className="w-7 h-7 text-[#4FD1C5]" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-[#4FD1C5] font-medium">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1220] to-transparent pointer-events-none" />
    </section>
  );
}
