import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
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
      "SAGOSERVE has ensured transparent pricing and reliable laboratory services for our products. A game changer!",
    name: "Ramesh Kumar",
    role: "Producer, Salem",
  },
  {
    quote:
      "The cooperative model has helped us access fair markets and consistent pricing without middlemen.",
    name: "Lakshmi Devi",
    role: "Farmer, Dharmapuri",
  },
  {
    quote:
      "Laboratory testing and auction transparency have improved trust and stability in our business.",
    name: "Suresh Babu",
    role: "Manufacturer, Erode",
  },
  {
    quote:
      "Thanks to SAGOSERVE, we now have access to real-time market information and better pricing.",
    name: "Priya Sharma",
    role: "Trader, Coimbatore",
  },
];

export default function HomeTestimonialsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[direction, isAnimating], setAnimState] = useState([0, false]);

  const headerInView = useInView(headerRef, { once: false, margin: "-15%" });
  const cardInView = useInView(cardRef, { once: false, margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🔥 PREMIUM PARALLAX */
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const cardY = useTransform(scrollYProgress, [0, 1], [80, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const goToNext = () => {
    if (isAnimating) return;
    setAnimState([1, true]);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setAnimState([0, false]), 600);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setAnimState([-1, true]);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimState([0, false]), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setAnimState([index > currentIndex ? 1 : -1, true]);
    setCurrentIndex(index);
    setTimeout(() => setAnimState([0, false]), 600);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      rotateY: dir > 0 ? 15 : -15,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
      rotateY: dir > 0 ? -15 : 15,
      scale: 0.9,
    }),
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 lg:py-44 bg-[#040404] overflow-hidden"
      style={{ perspective: "1600px" }}
    >
      {/* PREMIUM BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-[#040404] via-[#0a0808] to-[#040404]"
      />

      {/* Ambient orbs */}
      <motion.div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[200px]"
        style={{ y: orb1Y }}
      />
      <motion.div 
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[180px]"
        style={{ y: orb2Y }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/3 rounded-full blur-[250px]" />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 22}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <motion.div 
          ref={headerRef} 
          style={{ opacity: headerOpacity }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium tracking-[0.2em] border border-orange-500/20 mb-6"
          >
            TESTIMONIALS
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            What Our <span className="text-transparent bg-clip-text bg-[#E07B4C]">Members Say</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-white/40 text-lg max-w-xl mx-auto"
          >
            Discover how SAGOSERVE is transforming businesses across the tapioca industry
          </motion.p>
        </motion.div>

        {/* TESTIMONIAL CARD - 3D PARALLAX */}
        <motion.div
          ref={cardRef}
          style={{ y: cardY }}
          initial={{ opacity: 0, y: 100, rotateX: 15 }}
          animate={cardInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div 
            className="relative bg-gradient-to-br from-[#121210] to-[#080808] rounded-3xl border border-white/5 shadow-2xl shadow-black/60 p-8 md:p-10 overflow-hidden"
            style={{ 
              transformStyle: "preserve-3d",
              boxShadow: "0 50px 120px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03)"
            }}
          >
            {/* Quote icon - floating */}
            <motion.div 
              className="absolute -top-6 left-10 md:left-14"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-xl shadow-orange-500/30 rotate-6">
                <Quote className="w-7 h-7 text-white fill-white/20" />
              </div>
            </motion.div>

            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl pointer-events-none" />

            {/* Quote text - animated */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
                style={{ transformStyle: "preserve-3d" }}
              >
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light italic leading-relaxed mb-8">
                  "{currentTestimonial.quote}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg md:text-xl font-semibold text-white">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-white/40 text-sm md:text-base mt-1">
                      {currentTestimonial.role}
                    </p>
                  </div>

                  {/* Inline dots */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`transition-all duration-300 rounded-full ${
                          currentIndex === i
                            ? "bg-orange-500 w-6 h-2"
                            : "bg-white/20 hover:bg-white/40 w-2 h-2"
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-tr-3xl pointer-events-none" />
          </div>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrev}
            className="group w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Page indicators */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`transition-all duration-400 rounded-full ${
                  currentIndex === i
                    ? "w-12 h-3 bg-gradient-to-r from-orange-500 to-amber-500"
                    : "w-3 h-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            className="group w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* FADE EDGES */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#040404] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#040404] to-transparent pointer-events-none" />
    </section>
  );
}
