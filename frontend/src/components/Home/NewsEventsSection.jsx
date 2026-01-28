import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Bell, Clock, ArrowRight, Sparkles } from "lucide-react";

const news = [
  { title: "Market opens steady after rains", time: "2 hrs ago", tag: "New" },
  { title: "New warehouse in Chennai becomes operational", time: "1 day ago", tag: "New" },
  { title: "Buyer interest rises for Broken grade", time: "2 days ago", tag: "New" },
];

const events = [
  { title: "Daily auction at 11:00 AM", status: "Happening", day: "Today" },
  { title: "Member training session – Online", status: "Scheduled", day: "Tomorrow" },
];

// 3D Card Component with tilt effect
const Card3D = ({ children, delay = 0, className = "" }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-10%" });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 80, rotateX: 15 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`will-change-transform transition-all duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

// Animated News Item
const NewsItem = ({ item, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, margin: "-5%" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      whileHover={{ 
        x: 8, 
        transition: { duration: 0.2 } 
      }}
      className="group relative flex gap-4 p-5 rounded-xl bg-[#1a1a1a]/80 hover:bg-[#252525] border border-[#333] hover:border-[#E07B4C]/50 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Animated border line */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E07B4C] via-[#8B5E3C] to-[#E07B4C]"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
        style={{ originY: 0 }}
      />
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E07B4C]/0 via-[#E07B4C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex-1 relative z-10">
        <div className="flex justify-between items-start gap-3">
          <p className="text-sm font-medium text-white group-hover:text-[#E07B4C] transition-colors duration-300">
            {item.title}
          </p>
          <motion.span 
            className="flex-shrink-0 text-xs bg-gradient-to-r from-[#E07B4C] to-[#8B5E3C] text-white px-3 py-1 rounded-full font-bold shadow-lg shadow-[#E07B4C]/20"
            whileHover={{ scale: 1.1 }}
          >
            {item.tag}
          </motion.span>
        </div>
        <p className="text-xs text-[#888] mt-2">{item.time}</p>
      </div>
    </motion.div>
  );
};

// Animated Event Item
const EventItem = ({ event, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, margin: "-5%" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      whileHover={{ 
        x: -8, 
        transition: { duration: 0.2 } 
      }}
      className="group relative flex items-center gap-4 p-5 rounded-xl bg-[#1a1a1a]/80 hover:bg-[#252525] border border-[#333] hover:border-[#E07B4C]/50 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#E07B4C]/0 via-[#E07B4C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Status indicator with pulse */}
      <div className="relative">
        <span
          className={`relative z-10 block w-3 h-3 rounded-full ${
            event.status === "Happening"
              ? "bg-[#E07B4C]"
              : "bg-[#666]"
          }`}
        />
        {event.status === "Happening" && (
          <>
            <span className="absolute inset-0 w-3 h-3 rounded-full bg-[#E07B4C] animate-ping opacity-75" />
            <span className="absolute -inset-1 w-5 h-5 rounded-full bg-[#E07B4C]/30 blur-sm" />
          </>
        )}
      </div>
      
      <div className="flex-1 relative z-10">
        <p className="text-sm font-medium text-white group-hover:text-[#E07B4C] transition-colors duration-300">
          {event.title}
        </p>
        <p className="text-xs text-[#888] mt-1">{event.day}</p>
      </div>
      
      <motion.span
        className={`relative z-10 text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-300 ${
          event.status === "Happening"
            ? "bg-[#E07B4C]/10 text-[#E07B4C] border-[#E07B4C]/30 group-hover:bg-[#E07B4C] group-hover:text-white"
            : "bg-[#333] text-[#999] border-[#444] group-hover:border-[#666]"
        }`}
        whileHover={{ scale: 1.05 }}
      >
        {event.status}
      </motion.span>
    </motion.div>
  );
};

export default function NewsEventsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* ========== ANIMATED BACKGROUND ========== */}
      
      {/* Parallax gradient orbs */}
      <motion.div 
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#E07B4C]/10 rounded-full blur-[180px] pointer-events-none"
        style={{ y: orb1Y }}
      />
      <motion.div 
        className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-[#8B5E3C]/15 rounded-full blur-[160px] pointer-events-none"
        style={{ y: orb2Y }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E07B4C]/5 rounded-full blur-[200px] pointer-events-none"
        style={{ y: orb3Y }}
      />

      {/* Grid pattern overlay */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          y: bgY,
          backgroundImage: `linear-gradient(#E07B4C 1px, transparent 1px), linear-gradient(90deg, #E07B4C 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#E07B4C]/40 rounded-full pointer-events-none"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ========== SECTION HEADER ========== */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Sparkles className="w-5 h-5 text-[#E07B4C]" />
            <span className="text-[#E07B4C] font-semibold tracking-wider uppercase text-sm">
              Stay Updated
            </span>
            <Sparkles className="w-5 h-5 text-[#E07B4C]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white"
          >
            News & <span className="text-[#E07B4C]">Events</span>
          </motion.h2>
        </motion.div>

        {/* ========== CARDS GRID ========== */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* 📰 LATEST NEWS CARD */}
          <Card3D delay={0.1}>
            <div className="relative h-full bg-gradient-to-br from-[#151515] to-[#0d0d0d] rounded-3xl border border-[#2a2a2a] shadow-2xl shadow-black/50 p-7 lg:p-8 overflow-hidden">
              {/* Card inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E07B4C]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E07B4C]/10 to-transparent rounded-bl-full" />
              
              {/* Header */}
              <div className="relative z-10 flex items-center justify-between mb-7">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E07B4C] to-[#8B5E3C] flex items-center justify-center shadow-lg shadow-[#E07B4C]/25"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Bell className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">
                    Latest News
                  </h3>
                </div>
                <motion.a 
                  href="/news" 
                  className="group flex items-center gap-2 text-sm text-[#E07B4C] hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  All news
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* News Items */}
              <div className="relative z-10 space-y-4">
                {news.map((item, i) => (
                  <NewsItem key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          </Card3D>

          {/* ⏰ TODAY'S EVENTS CARD */}
          <Card3D delay={0.25}>
            <div className="relative h-full bg-gradient-to-br from-[#151515] to-[#0d0d0d] rounded-3xl border border-[#2a2a2a] shadow-2xl shadow-black/50 p-7 lg:p-8 overflow-hidden">
              {/* Card inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E07B4C]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#8B5E3C]/10 to-transparent rounded-br-full" />
              
              {/* Header */}
              <div className="relative z-10 flex items-center gap-3 mb-7">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5E3C] to-[#5A3A22] flex items-center justify-center shadow-lg shadow-[#8B5E3C]/25"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Clock className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">
                  Today's Events
                </h3>
              </div>

              {/* Event Items */}
              <div className="relative z-10 space-y-4">
                {events.map((event, i) => (
                  <EventItem key={i} event={event} index={i} />
                ))}
              </div>
              
              {/* Empty state decoration */}
              <motion.div
                className="mt-8 pt-6 border-t border-[#333]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-xs text-[#666] text-center">
                  More events coming soon...
                </p>
              </motion.div>
            </div>
          </Card3D>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
