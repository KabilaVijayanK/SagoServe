import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SAGOSERVE has ensured transparent pricing and reliable laboratory services for our products.",
    name: "SAGOSERVE Member",
    role: "Producer",
  },
  {
    quote:
      "The cooperative model has helped us access fair markets and consistent pricing without middlemen.",
    name: "SAGOSERVE Member",
    role: "Producer",
  },
  {
    quote:
      "Laboratory testing and auction transparency have improved trust and stability in our business.",
    name: "SAGOSERVE Member",
    role: "Producer",
  },
];

export default function HomeTestimonialsSection() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* 🌿 BACKGROUND GLOWS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-white">
            What Our <span className="text-green-400">Members Say</span>
          </h2>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Real experiences from SAGOSERVE members reflecting transparency,
            trust, and cooperative growth.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                relative group
                bg-white/10 backdrop-blur-xl
                border border-white/10
                rounded-2xl p-8
                shadow-xl
                hover:-translate-y-2 hover:shadow-2xl
                transition-all duration-500
              "
            >
              {/* QUOTE ICON */}
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center shadow-lg">
                <Quote className="text-white" size={22} />
              </div>

              {/* TEXT */}
              <p className="text-white/90 leading-relaxed text-base">
                “{t.quote}”
              </p>

              {/* FOOTER */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-green-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
