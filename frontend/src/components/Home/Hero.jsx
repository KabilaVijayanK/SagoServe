import React, { useEffect, useState } from "react";
import Button from "../common/Button";

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* STRONG overlay for text visibility */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* CENTER CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center text-white">
        
        {/* MAIN TITLE */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white/95 tracking-wide drop-shadow-xl">
          SAGOSERVE
        </h1>

        {/* SUB TITLE */}
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl 
               font-semibold text-green-300 
               drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
  Market & Laboratory Services
</h2>


        {/* DESCRIPTION */}
       <p className="mt-8 max-w-3xl text-lg md:text-xl text-white/90 
               leading-[1.75] tracking-wider font-semibold text-center">
  Salem Starch and Sago Manufacturers’ Service Industrial
  Co-operative Society Ltd.
</p>


        {/* CTA BUTTONS */}
        <div className="mt-12 flex gap-6 flex-wrap justify-center">
          <Button onClick={() => (window.location.href = "/registration")}>
            Register
          </Button>

          <Button
            variant="ghost"
            onClick={() => (window.location.href = "/auction")}
          >
            View Auctions
          </Button>
        </div>
      </div>

      {/* RIGHT TOP INFO CARD */}
      <div className="hidden lg:block absolute top-10 right-10 z-30">
        <div className="w-[330px] rounded-3xl bg-white/20 backdrop-blur-2xl p-6 shadow-2xl space-y-5">

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Sago (Avg)", price: "₹ 42,500" },
              { label: "Starch (Avg)", price: "₹ 25,200" },
              { label: "Broken Sago", price: "₹ 12,800" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-3 text-center"
              >
                <div className="text-xs text-gray-500 mb-1">
                  {item.label}
                </div>
                <div className="text-sm font-bold text-gray-900">
                  {item.price}
                </div>
                <div className="text-xs text-gray-500">/ MT</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-4">
            <div className="text-xs text-gray-500 mb-1">
              Latest News
            </div>
            <div className="text-sm font-semibold text-gray-800">
              Market update: steady domestic demand
            </div>
            <a
              href="/news"
              className="inline-block mt-2 text-green-700 text-sm font-semibold"
            >
              Read →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
