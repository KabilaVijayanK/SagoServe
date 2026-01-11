import { useEffect, useRef, useState } from "react";

export default function GlassSection({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`
        relative transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        ${className}
      `}
    >
      <div
        className="
          bg-white/20 backdrop-blur-xl
          border border-white/30
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          rounded-3xl
          p-10
        "
      >
        {children}
      </div>
    </section>
  );
}
