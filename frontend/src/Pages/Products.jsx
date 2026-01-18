import React, { useState, useEffect } from "react";

export default function Products() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sago = [
    {
      id: "s1",
      name: "Pearl Sago",
      desc: "Uniform, high-quality pearls engineered for consistency, purity and visual appeal.",
      uses: "Desserts, beverages, confectionery",
      img: "/hero1.jpg",
    },
    {
      id: "s2",
      name: "White Sago",
      desc: "Premium-grade sago manufactured under strict quality and grading protocols.",
      uses: "Cooking, food industries",
      img: "/hero2.jpg",
    },
  ];

  const starch = [
    {
      id: "st1",
      name: "Food Grade Starch",
      desc: "Refined starch with controlled gelatinization and moisture standards.",
      uses: "Food processing, baking",
      img: "/hero3.jpg",
    },
    {
      id: "st2",
      name: "Industrial Starch",
      desc: "High-performance starch optimized for industrial manufacturing.",
      uses: "Paper, adhesives, textiles",
      img: "/hero2.jpg",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-black">

      {/* ================= HERO WITH PARALLAX ================= */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
          style={{ 
            backgroundImage: "url('/about.jpg')",
            transform: `scale(${1.1 + scrollY * 0.0002}) translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-emerald-900/80 to-black/95 animate-pulse" 
             style={{ animationDuration: '4s' }} />
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div 
          className="relative z-10 px-4 md:px-6 max-w-4xl w-full"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: Math.max(0, 1 - scrollY / 500)
          }}
        >
          <p className="text-green-400 tracking-[0.3em] mb-4 text-xs md:text-sm font-bold animate-pulse">
            PRODUCT 
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Engineered for{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent animate-pulse">
              Quality
            </span>
          </h1>
          <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-light px-2">
            Sago, starch and value-added by-products manufactured with
            uncompromised standards and laboratory-backed assurance.
          </p>
          
          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-green-400 rounded-full mx-auto flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ================= SAGO VARIETIES ================= */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">

          <div className="mb-16 md:mb-20 max-w-2xl text-center mx-auto">
            <p className="text-green-600 font-bold mb-3 tracking-widest text-xs md:text-sm">PRODUCT LINE</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
              Sago <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Varieties</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed px-2">
              Carefully processed tapioca pearls designed for food-grade
              applications and visual consistency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {sago.map((p, i) => (
              <div
                key={p.id}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                hover:shadow-[0_25px_80px_rgba(34,197,94,0.3)]
                transition-all duration-700 hover:-translate-y-3 md:hover:-translate-y-6"
                onMouseEnter={() => setActiveCard(p.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${i * 0.2}s backwards`
                }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-green-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                
                <div className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden">
                  <div className="relative h-48 md:h-60 overflow-hidden">
                    <img
                      src={p.img}
                      className="h-full w-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-transform duration-1000"
                      alt={p.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Overlay badge */}
                    <div className="absolute top-3 md:top-6 right-3 md:right-6 bg-green-500 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold
                    transform translate-x-32 group-hover:translate-x-0 transition-transform duration-500">
                      Premium
                    </div>
                  </div>

                  <div className="p-5 md:p-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 md:mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {p.name}
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-5 leading-relaxed text-sm md:text-base">{p.desc}</p>
                    <div className="mb-6 md:mb-8 p-3 md:p-4 bg-green-50 rounded-xl md:rounded-2xl border border-green-100">
                      <p className="text-xs md:text-sm text-green-800 leading-relaxed">
                        <strong className="font-bold">Applications:</strong> {p.uses}
                      </p>
                    </div>

                    <button className="group/btn relative overflow-hidden w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-sm md:text-base rounded-full
                    hover:shadow-[0_10px_40px_rgba(34,197,94,0.4)] transition-all duration-300">
                      <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                        Explore Details
                        <span className="group-hover/btn:translate-x-1 md:group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* ================= STARCH VARIETIES ================= */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white overflow-hidden">

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: 'linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}
        />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-16 md:mb-20 max-w-2xl text-center mx-auto">
            <p className="text-green-400 font-bold mb-3 tracking-widest text-xs md:text-sm">INDUSTRIAL RANGE</p>
            <h2 className="text-4xl md:text-gray-300 lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
              Starch <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Varieties</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed px-2">
              Precision-processed starch engineered for food and industrial performance.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {starch.map((p, i) => (
              <div
                key={p.id}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  i % 2 !== 0 ? "md:grid-flow-dense" : ""
                }`}
                style={{
                  animation: `slideIn 0.8s ease-out ${i * 0.3}s backwards`
                }}
              >
                <div className={i % 2 !== 0 ? "md:col-start-2" : ""}>
                  <div className="relative group">
                    <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl md:rounded-3xl blur-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-700" />
                    <img
                      src={p.img}
                      className="relative rounded-2xl md:rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.8)] md:shadow-[0_40px_120px_rgba(0,0,0,0.8)]
                      group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 w-full"
                      alt={p.name}
                    />
                    
                    {/* Corner accent */}
                    <div className="absolute -top-3 md:-top-4 -right-3 md:-right-4 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  </div>
                </div>

                <div className={i % 2 !== 0 ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="space-y-4 md:space-y-6">
                    <div className="inline-block px-4 md:px-5 py-1.5 md:py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-400 text-xs md:text-sm font-bold">
                      Industrial Grade
                    </div>
                    <h3 className="text-3xl md:text-gray-300 lg:text-5xl font-black leading-tight">{p.name}</h3>
                    <p className="text-green-300 text-sm md:text-base lg:text-lg leading-relaxed">{p.desc}</p>
                    <div className="p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10">
                      <p className="text-green-400 text-xs md:text-sm">
                        <strong className="font-bold">Applications:</strong> <span className="text-gray-300">{p.uses}</span>
                      </p>
                    </div>

                    <button className="group/btn mt-6 md:mt-8 w-full md:w-auto px-8 md:px-10 py-3 md:py-5 bg-transparent border-2 border-green-400 text-green-400 font-bold text-sm md:text-base rounded-full
                    hover:bg-green-400 hover:text-black transition-all duration-300 hover:shadow-[0_10px_40px_rgba(34,197,94,0.5)]">
                      <span className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
                        Learn More
                        <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </section>

      {/* ================= BROKEN SAGO ================= */}
      <section className="relative py-24 md:py-32 flex items-center bg-black text-white overflow-hidden">
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/30 via-transparent to-emerald-500/30 animate-pulse" style={{ animationDuration: '5s' }} />
        </div>

        {/* Radial gradient accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-96 md:h-[600px] bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10 w-full">
          <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-green-500/20 border border-green-400/30 rounded-full text-green-400 tracking-[0.3em] mb-6 md:mb-10 text-xs md:text-sm font-bold">
            VALUE ADDED
          </div>
          <h2 className="text-4xl md:text-gray-300 lg:text-6xl xl:text-7xl font-black mb-6 md:mb-10 leading-tight px-2">
            Broken Sago &<br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
              Buy-products
            </span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-3xl mx-auto font-light px-2">
            Processed by-products optimized for animal feed, industrial fillers
            and secondary applications — graded, tested and standardized for
            reliability.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-10 md:mt-14 px-2">
            {['Animal Feed', 'Industrial Fillers', 'Secondary Applications'].map((item, i) => (
              <div 
                key={i}
                className="px-4 md:px-6 md:px-8 py-2 md:py-3 md:py-4 text-xs md:text-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300 cursor-pointer"
                style={{ animation: `fadeIn 0.6s ease-out ${i * 0.2}s backwards` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </section>

      {/* ================= QUALITY ================= */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <p className="text-green-600 font-bold mb-3 tracking-widest text-xs md:text-sm">ASSURANCE</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
              Quality Standards &<br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Testing</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed px-2">
              Every batch is validated through rigorous laboratory protocols.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "Moisture & Purity Analysis", icon: "💧" },
              { title: "Particle Size & Texture", icon: "⚙️" },
              { title: "Color & Visual Inspection", icon: "👁️" },
              { title: "Laboratory Certified Reports", icon: "📋" },
              { title: "NABL & FSSAI Compliance", icon: "✓" },
              { title: "ISO Quality Procedures", icon: "🏆" },
            ].map((q, i) => (
              <div
                key={i}
                className="group relative p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-[2.5rem] bg-white border border-gray-200
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_60px_rgba(34,197,94,0.2)]
                hover:-translate-y-2 md:hover:-translate-y-4 hover:border-green-200
                transition-all duration-500"
                style={{
                  animation: `popIn 0.5s ease-out ${i * 0.1}s backwards`
                }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl md:rounded-2xl lg:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 lg:mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    {q.icon}
                  </div>
                  <h4 className="text-base md:text-lg lg:text-2xl font-bold mb-3 md:mb-4 lg:mb-5 text-gray-900 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                    {q.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm lg:text-base">
                    Controlled testing ensures compliance with international
                    quality benchmarks and market standards.
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 md:mt-5 lg:mt-6 h-1 w-0 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes popIn {
            from {
              opacity: 0;
              transform: scale(0.8) translateY(30px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}</style>
      </section>

    </main>
  );
}