import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ===== PRODUCT DATA ===== */
const products = [
  {
    id: "sago",
    name: "Sago",
    image: "/hero1.jpg",
    desc: "High quality sago produced and traded through SAGOSERVE regulated market.",
  },
  {
    id: "tapioca-starch",
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

/* ===== PREMIUM 3D PRODUCT CARD ===== */
function ProductCard({ product, index, cardRefs }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -12, y: (x - 0.5) * 12 });
    setMousePos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
    setMousePos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      className="product-card-wrapper"
      style={{ perspective: "1500px" }}
    >
      {/* Premium Mask Overlay */}
      <div className="card-mask absolute inset-0 z-20 pointer-events-none rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(145deg, rgba(15,15,20,0.95) 0%, rgba(10,10,15,0.98) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
      </div>
      
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="card-content relative h-full rounded-3xl overflow-hidden transition-all duration-500 ease-out flex flex-col"
        style={{
          transformStyle: "preserve-3d",
          transform: `
            rotateX(${tilt.x}deg) 
            rotateY(${tilt.y}deg) 
            translateZ(${isHovered ? 30 : 0}px)
            scale(${isHovered ? 1.02 : 1})
          `,
          background: "linear-gradient(145deg, #1a1a24 0%, #0d0d12 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: isHovered 
            ? `
                0 50px 100px -20px rgba(0, 0, 0, 0.8),
                0 30px 60px -15px rgba(0, 0, 0, 0.6),
                0 0 40px rgba(245, 158, 11, 0.15),
                inset 0 1px 0 rgba(255,255,255,0.1)
              `
            : `
                0 25px 50px -12px rgba(0, 0, 0, 0.5),
                0 15px 30px -10px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255,255,255,0.05)
              `,
        }}
      >
        {/* Dynamic spotlight effect */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(245, 158, 11, 0.08), transparent 40%)`,
          }}
        />

        {/* Image Container */}
        <div className="card-image relative h-56 md:h-60 overflow-hidden flex-shrink-0">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${isHovered ? 1.1 : 1}) translateZ(20px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/60 to-transparent" />
          
          {/* Ambient glow on image */}
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: isHovered ? 0.4 : 0,
              background: "radial-gradient(ellipse at center bottom, rgba(245, 158, 11, 0.2), transparent 70%)",
            }}
          />

          {/* Shine sweep effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0,
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.15) 50%, transparent 55%)",
              transform: isHovered ? "translateX(150%)" : "translateX(-150%)",
              transition: "transform 0.8s ease-out, opacity 0.3s ease",
            }}
          />

          {/* 3D floating particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + (i % 2) * 30}%`,
                  opacity: isHovered ? 0.6 : 0,
                  transform: isHovered 
                    ? `translateY(-${10 + i * 5}px) translateZ(${30 + i * 10}px)` 
                    : "translateY(0) translateZ(0)",
                  transition: `all 0.6s ease-out ${i * 0.1}s`,
                  boxShadow: "0 0 10px rgba(245, 158, 11, 0.5)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div 
          className="card-text relative p-6 flex-grow flex flex-col justify-between"
          style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
        >
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              {product.name}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {product.desc}
            </p>
          </div>

          <button 
            className="group relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden w-fit"
            onClick={() => window.location.href = "/contact"}
            style={{
              background: "gradient-to-r from-[#7A5C2E] to-[#8C6A36]",
              boxShadow: isHovered 
                ? "0 10px 30px -5px rgba(85, 63, 23, 0.5), 0 0 20px rgba(245, 158, 11, 0.2)"
                : "0 5px 20px -5px rgba(245, 158, 11, 0.3)",
            }}
          >
            <span className="relative z-10 text-white">Enquiry Now</span>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </button>
        </div>
        
        {/* Corner accent */}
        <div 
          className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
          style={{
            background: "radial-gradient(circle at top right, rgba(245, 158, 11, 0.1), transparent 70%)",
            opacity: isHovered ? 1 : 0.5,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Border glow effect */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            boxShadow: "inset 0 0 0 1px rgba(245, 158, 11, 0.2)",
          }}
        />
      </div>
    </div>
  );
}

/* ===== MAIN SECTION - PREMIUM BLACK ===== */
export default function ProductsShowcase() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const cards = cardRefs.current.filter(Boolean);

    const ctx = gsap.context(() => {
      const masks = cards.map(card => card?.querySelector('.card-mask'));
      const contents = cards.map(card => card?.querySelector('.card-content'));

      // Desktop: Premium 3D mask reveal
      mm.add("(min-width: 768px)", () => {
        cards.forEach((card, i) => {
          if (!card || !masks[i]) return;
          
          gsap.set(card, {
            y: 100,
            opacity: 0,
            rotateX: 15,
          });
          
          gsap.set(masks[i], {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
          });
          
          gsap.set(contents[i], {
            clipPath: "inset(100% 0% 0% 0%)",
          });
        });

        // Staggered 3D entrance with mask reveal
        cards.forEach((card, i) => {
          if (!card || !masks[i]) return;
          
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              end: "top 30%",
              scrub: 0.8,
            },
          });

          tl.to(card, {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.6,
            ease: "power3.out",
          }, i * 0.12);

          tl.to(masks[i], {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.7,
            ease: "power3.inOut",
          }, i * 0.12 + 0.1);

          tl.to(contents[i], {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.6,
            ease: "power2.out",
          }, i * 0.12 + 0.15);
        });
      });

      // Mobile: Clean reveal
      mm.add("(max-width: 767px)", () => {
        cards.forEach((card, i) => {
          if (!card || !masks[i]) return;
          
          gsap.set(card, { y: 60, opacity: 0 });
          gsap.set(masks[i], { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 });
          gsap.set(contents[i], { clipPath: "inset(100% 0% 0% 0%)" });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 50%",
              scrub: 0.5,
            },
          });

          tl.to(card, { y: 0, opacity: 1, duration: 0.5 }, 0);
          tl.to(masks[i], { clipPath: "inset(0% 0% 100% 0%)", duration: 0.5 }, 0.1);
          tl.to(contents[i], { clipPath: "inset(0% 0% 0% 0%)", duration: 0.5 }, 0.15);
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0a0a0f 50%, #0f0f14 100%)",
      }}
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient gradient orbs */}
        <div 
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full blur-[200px] opacity-30"
          style={{ background: "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)" }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[180px] opacity-25"
          style={{ background: "radial-gradient(circle, rgba(234, 88, 12, 0.12) 0%, transparent 70%)" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-[200px] opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.03) 0%, transparent 60%)" }}
        />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating 3D elements */}
        <div className="absolute top-20 left-10 w-4 h-4 border border-amber-500/20 rotate-45 animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-500/10 rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-orange-500/15 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 border border-white/5 rounded-full" />
      </div>

      {/* Cards Container */}
      <div 
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              cardRefs={cardRefs}
            />
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .product-card-wrapper {
          position: relative;
          width: 100%;
          transform-style: preserve-3d;
        }

        .card-mask {
          will-change: clip-path, opacity;
        }

        .card-content {
          will-change: transform, clip-path;
        }

        @media (max-width: 767px) {
          .product-card-wrapper {
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
