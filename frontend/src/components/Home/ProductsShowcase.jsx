import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const products = [
  { name:"Premium Sago", image:"/hero1.jpg", price:"₹140" },
  { name:"Tapioca Starch", image:"/hero2.jpg", price:"₹130" },
  { name:"Broken Sago", image:"/hero3.jpg", price:"₹110" },
];

export default function ProductsReveal() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%","start 30%"] // smoother trigger
  });

  const y = useTransform(scrollYProgress,[0,1],[180,0]);
  const opacity = useTransform(scrollYProgress,[0,0.3,1],[0,0.7,1]);

  return (
    <section ref={ref} className="relative h-[100vh]">

      {/* Sticky Background */}
      <div className="sticky top-0 h-[85vh]">
        <img
          src="/hero2.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/40"/>
      </div>
      {/* STRONG CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-black/70"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30"/>
      

      {/* Cards */}
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-6 w-full"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {products.map((p,i)=>(
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="
                  group
                  relative
                  bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#080808]
                  rounded-2xl
                  overflow-hidden
                  border border-white/[0.08]
                  shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.03)_inset]
                  transition-all duration-500
                  hover:border-amber-700/30
                  hover:shadow-[0_30px_70px_rgba(0,0,0,0.6),0_0_40px_rgba(166,124,82,0.1)]
                "
              >
                {/* Premium corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-10">
                  <div className="absolute top-4 -right-8 w-32 bg-gradient-to-r from-amber-700 to-amber-600 text-white text-[10px] font-bold py-1 text-center rotate-45 shadow-lg">
                    PREMIUM
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />
                </div>

                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={p.name}
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  
                  {/* Floating price badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-md border border-white/10 rounded-full">
                    <span className="text-lg font-bold text-amber-400">{p.price}</span>
                    <span className="text-xs text-white/50 ml-1">/kg</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative p-6">
                  {/* Subtle separator */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-400 font-medium tracking-wider uppercase">In Stock</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-100 transition-colors duration-300">
                    {p.name}
                  </h3>
                  
                  <p className="text-sm text-white/40 mb-5 leading-relaxed">
                    Premium quality product sourced from the finest raw materials.
                  </p>

                  <button className="
                    w-full
                    relative
                    bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700
                    text-white
                    px-6 py-3.5
                    text-sm
                    font-semibold
                    rounded-xl
                    overflow-hidden
                    transition-all duration-300
                    hover:shadow-[0_0_30px_rgba(166,124,82,0.4)]
                    group/btn
                  ">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Shop Now
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </button>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-700/0 via-amber-600/50 to-amber-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}

          </div>

        </div>
      </motion.div>

    </section>
  );
}
