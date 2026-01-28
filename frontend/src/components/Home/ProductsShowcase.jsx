import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ===== DATA (UNCHANGED) ===== */
const products = [
  {
    id: "p1",
    name: "Indco's Mountain Rose Gold Tea",
    image: "/hero1.jpg",
    desc: "This hand-picked, premium tea is made from the finest carefully selected tea leaves. Every sip reminds you of the Nilgiris.",
    price: "₹140.00",
    featured: true,
  },
  {
    id: "p2",
    name: "Ooty Tea Gold",
    image: "/hero2.jpg",
    desc: "This premium blend of Ooty Tea is one of the finest blends from Indcoserve, known for its strong aroma and taste.",
    price: "₹130.00",
    featured: true,
  },
  {
    id: "p3",
    name: "Indco's Marlimund Premium Tea",
    image: "/hero3.jpg",
    desc: "Marlimund is a specialty tea from Gudalur region in the Nilgiris Biosphere Reserve.",
    price: "₹130.00",
    featured: true,
  },
];

/* ===== PRODUCT CARD ===== */
function ProductCard({ product, index, cardRefs }) {
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
    >
      {/* Featured */}
      {product.featured && (
        <div className="absolute mt-3 ml-3 z-10 bg-[#3b2a1a] text-white text-xs font-bold px-2 py-1 flex items-center gap-1">
          <Star size={12} className="fill-white" />
          Featured
        </div>
      )}

      {/* Image */}
      <div className="h-64 flex items-center justify-center bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3">
          {product.desc}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {product.price}
          </span>

          <button className="bg-[#8BC34A] hover:bg-[#7cb342] text-white px-4 py-2 text-xs font-bold transition">
            SHOP ONLINE
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===== MAIN SECTION ===== */
export default function ProductsShowcase() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f5f5f5] py-24"
    >
      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            cardRefs={cardRefs}
          />
        ))}
      </div>
    </section>
  );
}
