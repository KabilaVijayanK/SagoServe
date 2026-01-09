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
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

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
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-green-700 py-20 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {statsData.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-extrabold">
                {visible ? (
                  <Counter value={stat.value} suffix={stat.suffix} />
                ) : (
                  "0"
                )}
              </div>
              <div className="mt-3 text-sm md:text-base text-white/90 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
