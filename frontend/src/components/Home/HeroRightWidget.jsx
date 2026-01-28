import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedNumber from "../common/AnimatedNumber";

const items = [
  { label: "Sago (Avg)", value: "42500" },
  { label: "Starch (Avg)", value: "25200" },
  { label: "Broken Sago", value: "12800" },
];

export default function HeroRightWidget() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex(p => (p + 1) % items.length);
    }, 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <div
      className="hidden xl:block absolute top-1/2 right-12 -translate-y-1/2 z-30"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        whileHover={{ rotateY: -8, rotateX: 6, translateZ: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="
          w-[320px]
          rounded-3xl
          bg-white/20 backdrop-blur-2xl
          p-5
          border border-white/30
          shadow-[0_45px_100px_rgba(0,0,0,0.55)]
          animate-[float_9s_ease-in-out_infinite]
        "
      >
        <div className="flex justify-between text-xs text-white/80 mb-5">
          <span>15:56 IST</span>
          <span>{new Date().toDateString()}</span>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-4">
          <p className="text-xs text-gray-400">Information</p>
          <p className="font-semibold text-gray-800">
            Check order status
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 mb-4">
          <div className="relative h-[110px] overflow-hidden">
            {items.map((item, i) => (
              <div
                key={item.label}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  i === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="text-2xl font-bold text-gray-900">
                  <AnimatedNumber value={item.value} />
                </p>
                <p className="text-xs text-gray-400">/ MT</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 flex gap-4 items-center">
          <img
            src="/hero1.jpg"
            alt="news"
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div>
            <p className="text-xs text-gray-400">Article</p>
            <p className="text-sm font-medium text-gray-800">
              Market demand steady this week
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
