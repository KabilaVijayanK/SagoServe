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
      className="relative pt-24 pb-32 overflow-hidden bg-black"
    >
      {/* 🌑 PREMIUM DARK BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#06140f]" />

        {/* soft green glows */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-14">
          Our <span className="text-green-400">Products</span>
        </h2>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="
                product-card opacity-0 translate-y-10
                transition-all duration-700 ease-out
                bg-white/10 backdrop-blur-xl
                rounded-2xl overflow-hidden
                border border-white/10
                shadow-xl hover:shadow-2xl hover:-translate-y-2
                flex flex-col
              "
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* TEXT */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white">
                  {p.name}
                </h3>

                <p className="mt-2 text-sm text-white/80 flex-grow leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-5">
                  <Button onClick={() => (window.location.href = "/products")}>
                    Purchase Now
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
