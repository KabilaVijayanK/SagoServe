import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Being part of Sagoserve has expanded my business network significantly. The tender system is transparent and fair.",
    name: "Mohammed Ismail",
    role: "Trader, Namakkal",
  },
  {
    quote:
      "SAGOSERVE has ensured transparent pricing and reliable laboratory services. A game changer!",
    name: "Ramesh Kumar",
    role: "Producer, Salem",
  },
  {
    quote:
      "The cooperative model helped us access fair markets without middlemen.",
    name: "Lakshmi Devi",
    role: "Farmer, Dharmapuri",
  },
];

export default function UltraTestimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => next(), 5000);
    return () => clearInterval(t);
  }, [index]);

  const next = () => {
    setDir(1);
    setIndex((p) => (p + 1) % testimonials.length);
  };

  const prev = () => {
    setDir(-1);
    setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const slide = {
    enter: (d) => ({
      x: d > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
      rotateY: d > 0 ? 10 : -10,
    }),
    center: { x: 0, opacity: 1, scale: 1, rotateY: 0 },
    exit: (d) => ({
      x: d > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
      rotateY: d > 0 ? -10 : 10,
    }),
  };

  const t = testimonials[index];

  return (
    <section className="relative py-36 bg-black overflow-hidden">

      {/* GOLD AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(183,134,82,0.15)_0%,transparent_70%)] blur-3xl"/>

      {/* FLOATING PARTICLES */}
      {[...Array(12)].map((_,i)=>(
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#B78652]/40 rounded-full"
          style={{
            top:`${10+i*6}%`,
            left:`${5+i*8}%`
          }}
          animate={{ y:[0,-40,0], opacity:[0.3,1,0.3] }}
          transition={{ duration:6+i, repeat:Infinity }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* HEADER */}
        <p className="text-[#B78652] tracking-[0.3em] uppercase mb-4">
          TESTIMONIALS
        </p>

        <h2 className="text-5xl font-serif text-white mb-16">
          Voices of <span className="text-[#B78652]">Trust</span>
        </h2>

        {/* CARD */}
        <div className="relative p-12 bg-gradient-to-b from-[#151515] to-[#0b0b0b] border border-[#2a2a2a] rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.7)]">

          <Quote className="text-[#B78652] w-10 h-10 mb-6 mx-auto"/>

          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={index}
              variants={slide}
              custom={dir}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration:0.6 }}
            >
              <p className="text-xl text-gray-200 italic mb-8">
                "{t.quote}"
              </p>

              <h4 className="text-white text-xl font-semibold">
                {t.name}
              </h4>
              <p className="text-gray-500">{t.role}</p>
            </motion.div>
          </AnimatePresence>

          {/* PROGRESS BAR */}
          <motion.div
            key={index}
            className="h-1 bg-[#B78652] mt-10"
            initial={{ width:"0%" }}
            animate={{ width:"100%" }}
            transition={{ duration:5, ease:"linear" }}
          />
        </div>

        {/* NAV */}
        <div className="flex justify-center gap-8 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 border border-[#B78652]/40 rounded-full flex items-center justify-center text-[#B78652] hover:bg-[#B78652]/10"
          >
            <ChevronLeft/>
          </button>

          <button
            onClick={next}
            className="w-12 h-12 border border-[#B78652]/40 rounded-full flex items-center justify-center text-[#B78652] hover:bg-[#B78652]/10"
          >
            <ChevronRight/>
          </button>
        </div>

      </div>
    </section>
  );
}
