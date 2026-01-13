import React, { useEffect, useRef, useState } from "react";

export default function TapiocaHighlightSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden"
    >
      {/* IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2500ms]"
        style={{
          backgroundImage: "url('/hero1.jpg')",
          transform: visible ? "scale(1)" : "scale(1.06)",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div
          className={`max-w-5xl text-center transition-all duration-1000
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* MAIN LINE */}
          <h2 className="text-white font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl">
            At the heart of our operations is{" "}
            <span className="text-green-400">Tapioca</span> and its finished products
          </h2>

          
          {/* SUPPORT TEXT */}
          <p className="mt-6 text-green-300 text-base md:text-lg font-semibold max-w-3xl mx-auto">
            We add value through efficient processing, transparent marketing,
            and large-scale distribution.
          </p>

          {/* ACCENT */}
          <div className="mt-10 mx-auto w-20 h-[3px] bg-green-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
