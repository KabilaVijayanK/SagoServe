import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserPlus, ClipboardCheck, Boxes } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 120 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
            },
          }
        );
      });

      gsap.to(".bg-parallax", {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#070707] py-32 overflow-hidden"
    >
      {/* BACKGROUND PARALLAX */}
      <div className="bg-parallax absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute top-1/4 left-1/3 w-[520px] h-[520px] bg-[#22C55E]/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[420px] h-[420px] bg-[#E07B4C]/10 rounded-full blur-[180px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Start Using{" "}
            <span className="text-[#22C55E]">SAGOSERVE</span>
          </h2>
          <p className="mt-6 text-white/65 text-lg max-w-2xl mx-auto">
            Get started in three simple steps and experience seamless access to
            all our services.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#22C55E] via-[#E07B4C] to-[#22C55E] opacity-40 hidden md:block" />

          {/* STEPS */}
          <div className="space-y-28">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.id}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* CARD */}
                  <div
                    className="
                      relative
                      w-full md:w-[480px]
                      bg-white/5 backdrop-blur-md
                      border border-white/10
                      rounded-3xl
                      p-8 md:p-10
                      shadow-[0_40px_120px_rgba(0,0,0,0.85)]
                    "
                  >
                    {/* STEP BADGE */}
                    <span
                      className="absolute -top-4 left-6 text-xs tracking-widest"
                      style={{ color: step.color }}
                    >
                      STEP {step.id}
                    </span>

                    {/* ICON */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        backgroundColor: `${step.color}20`,
                        border: `1px solid ${step.color}60`,
                      }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{ color: step.color }}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-white/65 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* DOT */}
                  <div
                    className="hidden md:block absolute left-1/2 top-12 w-4 h-4 rounded-full -translate-x-1/2"
                    style={{ backgroundColor: step.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
