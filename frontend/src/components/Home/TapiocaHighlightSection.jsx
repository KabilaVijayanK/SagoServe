import React, { useEffect, useRef, useState } from "react";

export default function TapiocaHighlightSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 will-change-transform"
        style={{
          backgroundImage: "url('/hero1.jpg')",
          transform: visible ? "scale(1)" : "scale(1.12)",
          transition: "transform 2s ease-out",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <h2
          className={`text-center text-white font-extrabold leading-tight
          text-3xl md:text-5xl lg:text-6xl max-w-5xl
          transition-all duration-1000 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        >
          Tapioca and its Finished Products are at the <br />
          <span className="text-green-400">Center of Our Activities!</span>
        </h2>
      </div>
    </section>
  );
}
