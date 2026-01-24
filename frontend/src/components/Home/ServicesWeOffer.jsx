import React, { useEffect, useRef } from "react";
import {
  Users,
  FlaskConical,
  Store,
  Warehouse,
  FileText,
  Leaf,
} from "lucide-react";

const services = [
  {
    title: "Members",
    desc: "Efficient services to members with a ready-made marketing floor for starch and sago.",
    icon: Users,
  },
  {
    title: "Laboratory",
    desc: "Sago samples tested in 5:1 ratio with 9 tests as per SAGOSERVE by-laws.",
    icon: FlaskConical,
  },
  {
    title: "Merchant",
    desc: "Reliable services to merchants with transparent auction and trading support.",
    icon: Store,
  },
  {
    title: "Warehouse",
    desc: "Registered manufacturers store and sell tapioca starch and sago products.",
    icon: Warehouse,
  },
  {
    title: "Tender",
    desc: "Buyers registered as dealers through tender deposit system.",
    icon: FileText,
  },
  {
    title: "Tapioca",
    desc: "Tapioca (Manihot Esculenta Crantz) introduced in India during late 18th century.",
    icon: Leaf,
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

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-white">
      {/* 🤎 SOFT BACKGROUND (NO GREEN) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F7F4EF] to-white" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8B5E3C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#8B5E3C] mb-20 reveal">
          Services We Offer
        </h2>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="reveal"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="group p-7 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="flex gap-5 items-start">
                    {/* ICON */}
                    <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Icon
                        size={28}
                        className="text-blue-600 group-hover:text-white"
                      />
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-gray-700 leading-relaxed text-sm">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔁 MOVING VALUE STRIP (NO GREEN) */}
        <div className="relative mt-28 overflow-hidden select-none">
          <div className="marquee-track">
            {[...marqueeTexts, ...marqueeTexts].map((text, i) => (
              <span
                key={i}
                className="marquee-item text-[#5A3A22] font-medium"
              >
                <span className="mx-3 text-blue-600">•</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
