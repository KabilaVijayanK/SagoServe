import React from "react";
import { UserPlus, Gavel, Package, ArrowRight } from "lucide-react";

const links = [
  {
    title: "Register",
    desc: "Create your SAGOSERVE account and access market services.",
    icon: UserPlus,
    color: "from-green-500 to-emerald-600",
    link: "/registration",
  },
  {
    title: "Live Auctions",
    desc: "Participate in live & scheduled auctions with transparency.",
    icon: Gavel,
    color: "from-blue-500 to-indigo-600",
    link: "/auction",
  },
  {
    title: "Products",
    desc: "Browse sago, starch & by-products in the regulated market.",
    icon: Package,
    color: "from-slate-700 to-gray-900",
    link: "/products",
  },
];

export default function QuickLinksSection() {
  return (
    <section
      className="
        pt-20 pb-10
        bg-gradient-to-b from-emerald-300 via-green-300 to-green-00
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Start Using SAGOSERVE
          </h2>
          <p className="mt-3 text-gray-700 text-lg">
            Everything you need in one place
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {links.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.link}
                className="
                  group relative rounded-2xl overflow-hidden
                  bg-white
                  shadow-md hover:shadow-xl
                  transition-all duration-500 hover:-translate-y-1
                "
              >
                {/* TOP STRIP */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />

                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-800" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-5">
                    {item.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 text-green-700 font-semibold">
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
