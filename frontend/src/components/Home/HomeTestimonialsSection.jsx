import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const quoteIconRef = useRef(null);
  const dotsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    setIsAnimating(true);
    
    gsap.to(cardRef.current, {
      opacity: 0,
      x: -100,
      rotateY: -15,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: 100, rotateY: 15 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    gsap.to(cardRef.current, {
      opacity: 0,
      x: 100,
      rotateY: 15,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: -100, rotateY: -15 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    
    const direction = index > currentIndex ? 1 : -1;
    
    gsap.to(cardRef.current, {
      opacity: 0,
      x: -100 * direction,
      rotateY: -15 * direction,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(index);
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: 100 * direction, rotateY: 15 * direction },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Quote icon floating animation
      gsap.to(quoteIconRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Card entrance animation
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80, rotateX: 15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Dots stagger animation
      const dots = dotsRef.current?.children;
      if (dots) {
        gsap.fromTo(
          dots,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: dotsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* ========== BACKGROUND EFFECTS ========== */}
      
      {/* Gradient orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#E07B4C]/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-[#8B5E3C]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E07B4C]/3 rounded-full blur-[200px] pointer-events-none" />

      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#E07B4C 1px, transparent 1px), linear-gradient(90deg, #E07B4C 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#E07B4C]/40 rounded-full pointer-events-none animate-pulse"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

        {/* ========== HEADER ========== */}
        <div ref={headerRef} className="text-center mb-16">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E07B4C]/10 text-[#E07B4C] text-sm font-bold border border-[#E07B4C]/20 shadow-lg shadow-[#E07B4C]/10">
            Testimonials
          </span>

          {/* Heading */}
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-white italic">
            What Our <span className="text-[#E07B4C] not-italic font-bold">Members Say</span>
          </h2>

          {/* Subheading */}
          <p className="mt-5 text-[#888] text-base md:text-lg max-w-2xl mx-auto">
            Discover how SAGOSERVE is transforming businesses across the tapioca industry
          </p>
        </div>

        {/* ========== TESTIMONIAL CARD ========== */}
        <div 
          ref={cardRef}
          className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-3xl border border-[#2a2a2a] shadow-2xl shadow-black/50 p-10 md:p-14 will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Quote icon - floating */}
          <div 
            ref={quoteIconRef}
            className="absolute -top-6 left-10 md:left-14"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E07B4C] to-[#8B5E3C] flex items-center justify-center shadow-xl shadow-[#E07B4C]/30 rotate-6">
              <Quote className="w-7 h-7 text-white fill-white/20" />
            </div>
          </div>

          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E07B4C]/5 to-transparent rounded-3xl pointer-events-none" />

          {/* Quote text */}
          <p className="relative z-10 text-xl md:text-2xl lg:text-3xl text-white/90 font-serif italic leading-relaxed mb-10">
            "{currentTestimonial.quote}"
          </p>

          {/* Author info */}
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-lg md:text-xl font-bold text-white">
                {currentTestimonial.name}
              </p>
              <p className="text-[#888] text-sm md:text-base mt-1">
                {currentTestimonial.role}
              </p>
            </div>

            {/* Pagination dots inside card */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? "bg-[#E07B4C] w-6"
                      : "bg-[#444] hover:bg-[#666]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#E07B4C]/5 to-transparent rounded-tr-3xl pointer-events-none" />
        </div>

        {/* ========== NAVIGATION ========== */}
        <div ref={dotsRef} className="flex items-center justify-center gap-4 mt-10">
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="group w-12 h-12 rounded-full border-2 border-[#333] bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#E07B4C] hover:border-[#E07B4C] transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          {/* Page indicators */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === i
                    ? "w-10 h-3 bg-[#E07B4C]"
                    : "w-3 h-3 bg-[#444] hover:bg-[#666]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="group w-12 h-12 rounded-full border-2 border-[#333] bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#E07B4C] hover:border-[#E07B4C] transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
