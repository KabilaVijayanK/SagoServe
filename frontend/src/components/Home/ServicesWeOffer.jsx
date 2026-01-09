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
    const items = sectionRef.current.querySelectorAll(".animate-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white pt-24 pb-28 overflow-hidden"
    >
      {/* LEFT IMAGE */}
      <div
        className="absolute left-0 top-0 h-full w-[40%] bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: "url('/hero1.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-16">
          Services We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="animate-item opacity-0 translate-y-12 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex gap-5 items-start">
                  <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center">
                    <Icon className="text-green-600" size={28} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
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
