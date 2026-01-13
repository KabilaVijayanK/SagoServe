import React from "react";

/* ---------------- ABOUT PAGE ---------------- */

export default function About() {
  return (
    <main className="overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{ backgroundImage: "url('/about.jpg')" }}
  />

  {/* DARK + GREEN OVERLAY (TEXT VISIBILITY FIX) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-green-900/70 to-black/80" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-5xl px-6">

    {/* TITLE */}
    <h1
      className="
        text-5xl md:text-6xl lg:text-7xl font-extrabold
        text-white tracking-widest
        drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]
        animate-fade-up
      "
    >
      ABOUT&nbsp;
      <span className="text-green-400">US</span>
    </h1>

    {/* DIVIDER LINE */}
    <div className="mx-auto mt-6 h-1 w-32 bg-green-400 rounded-full animate-width" />

    {/* SUB TEXT */}
    <p
      className="
        mt-8 text-lg md:text-xl
        text-white/90 leading-relaxed
        animate-fade-up delay-200
      "
    >
      Salem Starch and Sago Manufacturers’ Service Industrial
      Co-operative Society Ltd.
    </p>

   
  </div>
</section>
{/* ================= ABOUT CONTENT ================= */}
<section className="py-28 relative overflow-hidden
  bg-gradient-to-br from-slate-900 via-slate-800 to-black">

  {/* subtle background glow */}
  <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[140px]" />
  <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />

  <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* IMAGE WRAPPER */}
    <div className="relative group">

      {/* IMAGE */}
      <img
        src="/hero2.jpg"
        alt="Sago Industry"
        className="
          w-full h-[420px] object-cover
          rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.55)]
          transition-transform duration-700 ease-out
          group-hover:scale-[1.04]
        "
      />

      {/* RIBBON – RIGHT BOTTOM (CLEAR ON DARK BG) */}
      <div
        className="
          absolute -bottom-6 right-6
          px-6 py-2
          rounded-full
          text-sm font-semibold tracking-wide

          text-white
          bg-gradient-to-r from-green-500 to-emerald-600
          shadow-[0_15px_45px_rgba(34,197,94,0.6)]

          flex items-center gap-2
        "
      >
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        Since 1981
      </div>

    </div>

    {/* TEXT CONTENT */}
    <div>

      {/* ACCENT LINE */}
      <div className="w-24 h-1 bg-green-500 mb-6 rounded-full" />

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        A Gift to Tapioca Industry
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-300 text-lg leading-relaxed">
        Prior to the formation of{" "}
        <span className="font-semibold text-white">SAGOSERVE</span>, starch and
        sago manufacturers faced serious challenges in credit, marketing and
        fair pricing. To overcome these issues, the cooperative society was
        formed to empower manufacturers and ensure transparent market access.
      </p>

    </div>

  </div>
</section>



{/* ================= TIMELINE / JOURNEY ================= */}
<section className="py-32 relative overflow-hidden
  bg-gradient-to-b from-black via-slate-900 to-black">

  {/* ambient glow */}
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[160px]" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Our Journey
      </h2>
      <p className="text-gray-400 text-lg">
        Key milestones in SAGOSERVE history
      </p>
    </div>

    {/* TIMELINE WRAPPER */}
    <div className="relative">

      {/* CENTER LINE */}
      <div className="absolute left-1/2 top-0 h-full w-[2px]
        bg-gradient-to-b from-green-500/0 via-green-500/70 to-green-500/0
        -translate-x-1/2" />

      {/* ITEMS */}
      {[
        {
          year: "1981",
          text: "Registered under Tamil Nadu Co-operative Society Act",
        },
        {
          year: "1982",
          text: "Commenced market and operational activities",
        },
        {
          year: "2000+",
          text: "Expanded laboratory testing and e-auction services",
        },
        {
          year: "Today",
          text: "Trusted, transparent and technology-driven industry platform",
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`relative flex items-center mb-20
            ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
        >

          {/* DOT */}
          <div className="absolute left-1/2 -translate-x-1/2
            w-5 h-5 rounded-full
            bg-green-500
            shadow-[0_0_25px_rgba(34,197,94,0.9)]
            z-10"
          />

          {/* CARD */}
          <div
            className="
              w-full sm:w-[46%]
              bg-white/10 backdrop-blur-xl
              border border-white/15
              rounded-2xl p-8

              text-white
              shadow-[0_20px_60px_rgba(0,0,0,0.55)]

              transition-all duration-700
              hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(34,197,94,0.35)]
            "
          >
            <span className="text-green-400 font-bold text-xl block mb-2">
              {item.year}
            </span>
            <p className="text-gray-300 leading-relaxed">
              {item.text}
            </p>
          </div>

        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-3">Testimonials</h2>
            <p className="text-gray-600">
              What our members say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-8 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition"
              >
                <p className="text-gray-600 mb-6">
                  “SAGOSERVE has ensured transparent pricing and reliable
                  laboratory services for our products.”
                </p>
                <h4 className="font-semibold">SAGOSERVE Member</h4>
                <span className="text-green-600 text-sm">Producer</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
