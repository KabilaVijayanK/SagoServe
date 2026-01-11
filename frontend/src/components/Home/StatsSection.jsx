import React, { useEffect, useRef, useState } from "react";

const statsData = [
  { label: "Years of Service", value: 40, suffix: "+" },
  { label: "Registered Members", value: 1200, suffix: "+" },
  { label: "Daily Auctions", value: 25, suffix: "+" },
  { label: "Lab Tests / Day", value: 90, suffix: "+" },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1600;
    const step = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section
  ref={ref}
  className="relative pt-40 pb-28 overflow-hidden"
>



      {/* 🌄 IMAGE BACKGROUND */}
      <div
  className="absolute inset-0 bg-cover bg-center scale-110 "
  style={{ backgroundImage: "url('/stats-bg.jpg')" }}
/>


      {/* 🖤 IMAGE BLEND (important for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/80" />

      {/* 🌿 SOFT GREEN GLOW */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-green-500/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-emerald-400/20 rounded-full blur-[160px]" />

      {/* 📊 CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {statsData.map((stat, i) => (
            <div
              key={stat.label}
              className="
                bg-white/10 backdrop-blur-xl
                rounded-2xl
                py-10 px-4
                shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                transition-all duration-700
                hover:-translate-y-2 hover:bg-white/15
              "
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white">
                {visible ? (
                  <Counter value={stat.value} suffix={stat.suffix} />
                ) : (
                  "0"
                )}
              </div>

              <div className="mt-3 text-sm md:text-base text-white/80 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
