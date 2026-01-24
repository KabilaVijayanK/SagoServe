import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden font-inter">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/hero-about.jpg')" }}
      />

      {/* DARK CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/80 to-black/95" />

      {/* PARTICLE GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-400/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 40,
              opacity: 0,
            }}
            animate={{
              y: -40,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 12,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 text-[11px] tracking-[0.35em] font-semibold text-amber-300 border border-amber-400/40 rounded-full bg-black/40 shadow-[0_0_25px_rgba(255,193,7,0.35)]">
              WELCOME TO SAGOSERVE
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="text-[32px] md:text-[40px] lg:text-[46px] font-semibold text-white leading-tight"
          >
            Salem Starch and Sago Manufacturers’
            <br />
            <span className="block mt-2 text-[#C9A27A] font-bold">
              Service Industrial Co-operative Society Ltd
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 max-w-4xl mx-auto space-y-4 text-[16px] leading-[1.85] text-white/85"
          >
            <p className="text-white/95 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
  <span className="text-[#8B5E3C] font-semibold">SAGOSERVE</span> is a
  cooperative society empowering starch and sago manufacturers of
  Salem through a transparent, structured, member-focused ecosystem.
</p>

<p className="text-white/95 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
  Founded in{" "}
  <span className="text-[#8B5E3C] font-semibold">1981</span>, the society
  emerged during a time of unfair pricing, limited institutional credit,
  and heavy dependency on intermediaries.
</p>

<p className="text-white/95 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
  Registered on{" "}
  <span className="text-[#8B5E3C] font-semibold">July 21, 1981</span> and
  commencing operations on{" "}
  <span className="text-[#8B5E3C] font-semibold">
    February 27, 1982
  </span>
  , SAGOSERVE has grown into a trusted pillar of progress.
</p>

          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto"
          >

            {/* LEFT CARD – BLUE */}
            <div className="relative rounded-2xl border border-blue-400/40 bg-black/40 backdrop-blur-md px-8 py-6 shadow-[0_0_35px_rgba(59,130,246,0.45)]">
              <p className="text-[36px] font-bold text-blue-300">
                28.61{" "}
                <span className="text-sm font-medium text-white/60">Million</span>
              </p>
              <p className="mt-1 text-white font-medium">
                Inward Bags Handled
              </p>
              <p className="mt-1 text-sm text-white/60">
                Since 2003 across sago, starch and broken sago
              </p>
            </div>

            {/* RIGHT CARD – GOLD */}
           <div
  className="
    relative rounded-2xl
    border border-[#8B5E3C]/60
    bg-black/45 backdrop-blur-md
    px-8 py-6

    shadow-[0_0_45px_rgba(139,94,60,0.6)]
  "
>

              <p className="text-[36px] font-bold text-amber-300">
                27.48{" "}
                <span className="text-sm font-medium text-white/60">Million</span>
              </p>
              <p className="mt-1 text-white font-medium">
                Bags Invoiced
              </p>
              <p className="mt-1 text-sm text-white/60">
                Demonstrating efficiency and operational scale
              </p>
            </div>

          </motion.div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
