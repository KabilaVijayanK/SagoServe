import React from "react";
import { UserPlus, Gavel, Package, ArrowRight } from "lucide-react";

const links = [
  {
    title: "Register",
    desc: "Create your SAGOSERVE account and access market services.",
    icon: UserPlus,
    color: "from-[#8B5E3C] to-[#5A3A22]",
    link: "/registration",
  },
  {
    title: "Live Auctions",
    desc: "Participate in live & scheduled auctions with transparency.",
    icon: Gavel,
    color: "from-[#7A4A2E] to-[#4A2E1D]",
    link: "/auction",
  },
  {
    title: "Products",
    desc: "Browse sago, starch & by-products in the regulated market.",
    icon: Package,
    color: "from-[#6B4F3F] to-[#3F2A20]",
    link: "/products",
  },
];

export default function QuickLinksSection() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">

      {/* 🌊 LIGHT BLUE PREMIUM BACKGROUND */}
     <div className="absolute inset-0 -z-10 bg-gradient-to-b 
from-[#BBD6FF] via-[#DCEBFF] to-white" />


      {/* soft blur accents */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-sky-200/40 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-blue-200/40 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Start Using <span className="text-[#5A3A22]">SAGOSERVE</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need in one place
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {links.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.link}
                className="
                  group relative rounded-2xl
                  bg-white/80 backdrop-blur-xl
                  border border-white/60
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                  transition-all duration-500
                  hover:-translate-y-2
                "
              >
                {/* TOP STRIP */}
                <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${item.color}`} />

                <div className="p-7">
                  <div className="w-14 h-14 rounded-xl bg-[#F6EFEA] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#5A3A22]" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 text-[#8B5E3C] font-semibold">
                    Explore
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
