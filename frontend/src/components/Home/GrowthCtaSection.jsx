import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function IdeaCtaSection() {
  return (
    <section className="relative bg-[#f7f6f2] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Quality matters?
            </p>

            
             <h2 className="mt-3 text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.05]">
  STOP <span className="text-yellow-600">COMPROMISING</span>
</h2>

            <h2 className="mt-3 text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.05]">
  START <span className="text-green-600">SAGOSERVE.</span>
</h2>


            {/* CTA */}
            <div className="mt-12">
              <a
                href="/contact"
                className="
                  inline-flex items-center gap-4
                  bg-green-400 hover:bg-yellow-500
                  text-black font-semibold
                  px-10 py-5 rounded-full
                  transition-all duration-300
                "
              >
                Contact Us
                <span className="w-10 h-10 rounded-full bg-black text-yellow-400 flex items-center justify-center">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            {/* soft glow */}
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-green-200/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-yellow-300/40 rounded-full blur-3xl" />

            <img
  src="/hero1.jpg"
  alt="Business Growth"
  className="
    relative z-10
    w-full max-w-md
    h-[420px]
    object-cover
    rounded-3xl
    shadow-2xl
    transition-transform duration-500
    hover:scale-[1.02]
  "
/>

          </div>

        </div>
      </div>
    </section>
  );
}
