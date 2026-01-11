import React, { useEffect, useRef } from "react";
import Button from "../common/Button";

const products = [
  {
    id: "sago",
    name: "Sago",
    image: "/hero1.jpg",
    desc: "High quality sago produced and traded through SAGOSERVE regulated market.",
  },
  {
    id: "starch",
    name: "Tapioca Starch",
    image: "/hero2.jpg",
    desc: "Certified tapioca starch tested and approved by SAGOSERVE laboratory.",
  },
  {
    id: "broken-sago",
    name: "Broken Sago",
    image: "/hero3.jpg",
    desc: "By-product sago supplied to various industrial and food applications.",
  },
];

export default function ProductsShowcase() {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current.querySelectorAll(".product-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative pt-24 pb-32 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/hero2.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/65 z-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-10">
          Our Products
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="
                product-card opacity-0 translate-y-10
                transition-all duration-700
                bg-white/10 backdrop-blur-lg
                rounded-2xl overflow-hidden
                shadow-xl hover:bg-white/15
                flex flex-col
              "
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-white/80 flex-grow">
                  {p.desc}
                </p>
                <div className="mt-4">
                  <Button onClick={() => (window.location.href = "/products")}>
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
