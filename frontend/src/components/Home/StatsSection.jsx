import React from "react";
import { motion } from "framer-motion";
import { UserPlus, ClipboardCheck, Boxes, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Register",
    desc: "Join SAGOSERVE as a member by completing the simple registration process.",
    icon: UserPlus,
  },
  {
    id: "02",
    title: "Get Approved",
    desc: "Our team reviews your application and provides approval within 48 hours.",
    icon: ClipboardCheck,
  },
  {
    id: "03",
    title: "Start Using",
    desc: "Access all services, place orders, and enjoy member benefits immediately.",
    icon: Boxes,
  },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-b from-[#0c0a09] via-black to-[#0c0a09] py-28">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="px-6 py-2 border border-[#8B5E3C]/40 text-[#c8a27a] rounded-full text-sm tracking-wider">
            Getting Started
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Start Your Journey
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Experience seamless onboarding in three simple steps.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B5E3C] to-transparent origin-left"
          />

          <div className="grid md:grid-cols-3 gap-12">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="text-center relative"
                >

                  {/* number circle */}
                  <div className="relative mb-6">

                    <div className="w-16 h-16 mx-auto rounded-full bg-[#1a1410] border border-[#8B5E3C]/40 flex items-center justify-center text-[#c8a27a] font-bold text-lg shadow-[0_0_25px_rgba(139,94,60,0.35)]">
                      {step.id}
                    </div>

                    {/* glow */}
                    <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-[#8B5E3C]/20 blur-xl" />
                  </div>

                  {/* card */}
                  <div className="bg-gradient-to-b from-[#1a1410] to-[#0f0b08] border border-[#8B5E3C]/20 rounded-2xl p-8 hover:border-[#8B5E3C]/40 transition">

                    <Icon
                      className="mx-auto mb-4 text-[#c8a27a]"
                      size={30}
                    />

                    <h3 className="text-xl text-white font-semibold mb-3">
                      {step.title}
                    </h3>

                    <p className="text-white/60 leading-relaxed">
                      {step.desc}
                    </p>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-[#8B5E3C] to-[#c8a27a] text-black font-semibold rounded-full flex items-center gap-3 mx-auto hover:scale-105 transition shadow-[0_10px_30px_rgba(139,94,60,0.5)]">
            Get Started Now
            <ArrowRight size={18} />
          </button>

          <p className="mt-4 text-white/40 text-sm">
            Join thousands of trusted members
          </p>
        </motion.div>

      </div>
    </section>
  );
}
