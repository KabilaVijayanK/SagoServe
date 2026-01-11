import { useEffect, useState } from "react";
import AnimatedNumber from "../common/AnimatedNumber";

const items = [
  { label: "Sago (Avg)", value: "42500" },
  { label: "Starch (Avg)", value: "25200" },
  { label: "Broken Sago", value: "12800" },
];

export default function HeroRightWidget() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hidden lg:block absolute top-10 right-10 z-30">
      <div className="
  w-[280px]
  rounded-2xl
  bg-white/25 backdrop-blur-xl
  p-4
  shadow-xl
  border border-white/30
">

        {/* HEADER */}
        <div className="flex justify-between text-xs text-white/80 mb-4">
          <span>15:56 (IST)</span>
          <span>{new Date().toDateString()}</span>
        </div>

        {/* INFO CARD */}
        <div className="bg-white rounded-2xl p-4 mb-4">
          <p className="text-xs text-gray-400">Information</p>
          <p className="font-semibold text-gray-800">
            Check order status
          </p>
        </div>

        {/* SLIDING RATE CARD */}
        <div className="bg-white rounded-2xl p-4 mb-4">
        <div className="relative h-[90px] overflow-hidden mb-4">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`
                absolute inset-0 flex flex-col justify-center items-center
                transition-all duration-700
                ${i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"}
              `}
            >
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="text-xl font-bold text-gray-900">
                <AnimatedNumber value={item.value} />
              </p>
              <p className="text-xs text-gray-500">/ MT</p>
            </div>
          ))}
          </div>
        </div>

        {/* ARTICLE */}
        <div className="bg-white rounded-2xl p-3 flex gap-3 items-center">
          <img
            src="/hero1.jpg"
            alt="news"
            className="w-10 h-10 rounded-lg object-cover"
          />
          <div>
            <p className="text-xs text-gray-400">Article</p>
            <p className="text-sm font-medium text-gray-800 leading-tight">
              Market demand steady this week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
