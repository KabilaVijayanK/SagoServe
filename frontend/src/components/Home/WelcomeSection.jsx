import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ---------- COUNT UP ---------- */
function useCountUp(end, duration = 1600) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start;
    const animate = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount((ease * end).toFixed(2));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return { count, ref };
}

export default function WelcomeSection() {
  return (
    <section className="bg-black py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TAG */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 text-xs font-semibold text-green-400 border border-green-500/40 rounded-full">
            WELCOME TO SAGOSERVE
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl lg:text-5xl
          font-bold text-white
          leading-tight
          mb-8
        ">
          Salem Starch and Sago Manufacturers’
          <br />
          <span className="text-green-500">
            Service Industrial Co-operative Society Ltd
          </span>
        </h2>

        {/* CONTENT – MORE WIDTH + BETTER VISIBILITY */}
        <div className="
          max-w-5xl mx-auto
          space-y-5
          text-base md:text-lg
          text-gray-200
          leading-relaxed
        ">
         <p className="text-white/90">
  <span className="text-green-400 font-semibold">SAGOSERVE</span>{" "}
  is a cooperative society established to empower starch and sago
  manufacturers of Salem.
</p>


          <p className="text-white/90">
            Founded in <span className="text-green-400 font-semibold">1981</span>{" "},
            the society emerged when manufacturers faced unfair pricing,
            limited credit access, and dependency on middlemen.
          </p>

          <p className="text-white/90">
            Registered on{" "}
            <span className="text-green-400 font-semibold">July 21, 1981</span>{" "}
            and commencing operations on{" "}
            <span className="text-green-400 font-semibold">February 27, 1982</span>,
            SAGOSERVE became a pillar of progress for the local industry.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="w-24 h-[2px] bg-green-500 mx-auto my-14" />

        {/* NUMBERS – SAME VIEW, NO SCROLL */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2
          gap-10
          max-w-4xl mx-auto
        ">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-green-500">
              28.61 <span className="text-base text-gray-300">Million</span>
            </p>
            <p className="text-white font-medium mt-2">
              Inward Bags Handled
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Since 2003 across sago, starch and broken sago
            </p>
          </div>

          <div>
            <p className="text-3xl md:text-4xl font-bold text-green-500">
              27.48 <span className="text-base text-gray-300">Million</span>
            </p>
            <p className="text-white font-medium mt-2">
              Bags Invoiced
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Demonstrating efficiency and operational scale
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
