import { useEffect, useState } from "react";

export default function AnimatedNumber({ value, duration = 1200 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Number(value.replace(/[^0-9]/g, ""));
    if (start === end) return;

    const increment = end / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(timer);
        setDisplay(end);
      } else {
        setDisplay(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      ₹ {display.toLocaleString("en-IN")}
    </span>
  );
}
