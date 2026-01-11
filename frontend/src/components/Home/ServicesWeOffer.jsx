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

export default function ServicesWeOffer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* 🌿 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-100 animate-gradientSlow" />

        {/* floating shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-300/20 rounded-full blur-3xl animate-floatSlow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-floatSlow delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-20 reveal">
          Services We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="reveal"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className="
                    group p-7 rounded-2xl
                    bg-white/65 backdrop-blur-xl
                    border border-white/40
                    shadow-lg
                    hover:shadow-2xl hover:-translate-y-2
                    transition-all duration-500
                  "
                >
                  <div className="flex gap-5 items-start">
                    <div
                      className="
                        h-14 w-14 rounded-xl
                        bg-green-100
                        flex items-center justify-center
                        group-hover:bg-green-600
                        transition-colors duration-300
                      "
                    >
                      <Icon
                        size={28}
                        className="text-green-600 group-hover:text-white transition-colors"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
