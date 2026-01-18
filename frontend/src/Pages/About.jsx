import React from "react";

export default function About() {
  const sections = [
    {
      title: "About SAGOSERVE",
      text:
        "SAGOSERVE was established to organize producers and provide fair market access through cooperative auctions and shared infrastructure, empowering the tapioca industry since 1981.",
      image: "/hero2.jpg",
      bg: "bg-white",
      reverse: false,
    },
    {
      title: "Mission",
      text:
        "To create transparent, fair and efficient marketplaces for agricultural commodities while uplifting members through quality control, training and digital platforms.",
      image: "/hero1.jpg",
      bg: "bg-black",
      reverse: true,
      textColor: "text-white",
    },
    {
      title: "Vision",
      text:
        "To become a trusted cooperative platform connecting local producers to national buyers with integrity, sustainability and long-term growth.",
      image: "/hero2.jpg",
      bg: "bg-green-50",
      reverse: false,
    },
  ];

  return (
    <main className="overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-green-900/70 to-black/90" />
        <div className="relative z-10 px-6">
          <h1 className="text-6xl font-extrabold text-white tracking-widest animate-fade-up">
            ABOUT <span className="text-green-400">US</span>
          </h1>
          <div className="mx-auto mt-6 h-1 w-32 bg-green-400 rounded-full" />
          <p className="mt-8 text-white/90 text-lg">
            Salem Starch and Sago Manufacturers’ Cooperative Society
          </p>
        </div>
      </section>

      {/* ================= ABOUT / MISSION / VISION ================= */}
      {sections.map((sec, i) => (
        <section key={i} className={`py-28 ${sec.bg}`}>
          <div
            className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center`}
          >
            {/* IMAGE */}
            <div
              className={`${
                sec.reverse ? "lg:order-2" : ""
              } group animate-fade-up`}
            >
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-[420px] object-cover rounded-3xl shadow-xl group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* CONTENT */}
            <div
              className={`${sec.reverse ? "lg:order-1" : ""} animate-fade-up`}
            >
              <div className="w-24 h-1 bg-green-500 mb-6 rounded-full" />
              <h2
                className={`text-4xl font-bold mb-6 ${
                  sec.textColor || "text-black"
                }`}
              >
                {sec.title}
              </h2>
              <p
                className={`text-lg leading-relaxed ${
                  sec.textColor ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {sec.text}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* ================= MANAGEMENT TEAM ================= */}
<section className="relative py-32 overflow-hidden
  bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">

  {/* BACKGROUND GLOW ORBS */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[140px]" />
  <div className="absolute bottom-0 -right-32 w-[450px] h-[450px] bg-emerald-400/20 rounded-full blur-[140px]" />

  <div className="relative max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-20 animate-fade-up">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Management Team
      </h2>
      <p className="text-green-200 text-lg">
        Leadership driving SAGOSERVE forward
      </p>
    </div>

    {/* TEAM CARDS */}
    <div className="grid md:grid-cols-3 gap-10">
      {[
        { role: "Chairman", img: "/hero1.jpg" },
        { role: "General Manager", img: "/hero2.jpg" },
        { role: "Head – Auctions", img: "/hero3.jpg" },
      ].map((member, i) => (
        <div
          key={i}
          className="
            group relative
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-3xl p-10 text-center

            shadow-[0_25px_70px_rgba(0,0,0,0.5)]
            transition-all duration-700

            hover:-translate-y-3
            hover:shadow-[0_35px_90px_rgba(34,197,94,0.45)]
          "
        >
          {/* IMAGE */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="
              absolute inset-0 rounded-full
              bg-gradient-to-tr from-green-400 to-emerald-500
              blur-md opacity-70
              group-hover:opacity-100 transition
            " />
            <img
              src={member.img}
              alt={member.role}
              className="
                relative w-32 h-32 rounded-full
                object-cover border-4 border-white
                shadow-lg
              "
            />
          </div>

          {/* NAME */}
          <h4 className="text-xl font-semibold text-white mb-1">
            Name Here
          </h4>

          {/* ROLE */}
          <p className="text-green-300 text-sm tracking-wide uppercase">
            {member.role}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
{/* ================= CERTIFICATIONS & QUALITY (PREMIUM WHITE) ================= */}
<section className="relative py-36 bg-white overflow-hidden">

  {/* BACKGROUND GRID + LIGHT */}
  <div className="absolute inset-0 bg-[radial-gradient(#22c55e15_1px,transparent_1px)] [background-size:22px_22px]" />
  <div className="absolute inset-0 bg-gradient-to-r from-white via-green-50/60 to-white" />

  <div className="relative max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-24">
      <h2 className="text-5xl font-extrabold text-green-900 mb-4 tracking-tight">
        Certifications & Quality
      </h2>
      <p className="text-green-700 text-lg max-w-2xl mx-auto">
        International standards and certifications that ensure trust,
        transparency and uncompromised quality
      </p>
    </div>

    {/* SCROLL CONTAINER */}
    <div className="relative overflow-hidden">

      <div className="flex gap-14 w-max animate-cert-scroll-premium
        hover:[animation-play-state:paused]">

        {[
          "NABL Accreditation",
          "FSSAI Certification",
          "ISO Certified",
          "Quality Assurance",
          "Laboratory Approved",
          "Government Recognized",
        ].concat([
          "NABL Accreditation",
          "FSSAI Certification",
          "ISO Certified",
          "Quality Assurance",
          "Laboratory Approved",
          "Government Recognized",
        ]).map((cert, i) => (
          <div
            key={i}
            className="
              group relative
              min-w-[360px] h-[240px]
              rounded-[28px] p-10

              bg-white
              border border-green-100

              shadow-[0_30px_80px_rgba(0,0,0,0.12)]
              transition-all duration-700 ease-out

              hover:-translate-y-4
              hover:shadow-[0_45px_120px_rgba(34,197,94,0.35)]
            "
          >
            {/* TOP ACCENT BAR */}
            <div className="
              absolute top-0 left-0 w-full h-1.5
              bg-gradient-to-r from-green-400 via-emerald-500 to-green-400
              rounded-t-[28px]
            " />

            {/* FLOATING GLOW */}
            <div className="
              absolute inset-0 rounded-[28px]
              bg-gradient-to-br from-green-400/10 to-transparent
              opacity-0 group-hover:opacity-100
              transition duration-700
            " />

            {/* LOGO */}
            <div className="relative z-10 w-24 h-24 mx-auto mb-6">
              <div className="
                absolute inset-0 rounded-full
                bg-green-300 blur-2xl opacity-70
              " />
              <img
                src="/logo-png.png"
                className="
                  relative w-24 h-24 rounded-full
                  bg-white p-4
                  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                "
              />
            </div>

            {/* TEXT */}
            <h4 className="relative z-10 text-xl font-semibold text-gray-900 mb-1 text-center">
              {cert}
            </h4>
            <p className="relative z-10 text-green-600 text-sm text-center tracking-wide">
              Verified & Trusted Standard
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* ================= TESTIMONIALS ================= */}
<section className="relative py-32 bg-black overflow-hidden">

  {/* GREEN GLOW */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/20 blur-[160px]" />

  <div className="relative max-w-6xl mx-auto px-6">

    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Testimonials
      </h2>
      <p className="text-gray-400 text-lg">
        What our members say about SAGOSERVE
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-xl border border-white/15
            p-10 rounded-3xl
            shadow-[0_25px_70px_rgba(0,0,0,0.6)]
            hover:-translate-y-2 transition-all duration-500"
        >
          <p className="text-gray-300 leading-relaxed mb-6">
            “SAGOSERVE has ensured transparent pricing, reliable lab services
            and strong cooperative support for producers.”
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">
              S
            </div>
            <div>
              <h4 className="text-white font-semibold">SAGOSERVE Member</h4>
              <span className="text-green-400 text-sm">Producer</span>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


  {/* ================= PHOTO & MEDIA GALLERY ================= */}
<section className="relative py-32 bg-white overflow-hidden">

  {/* HEADING */}
  <div className="max-w-7xl mx-auto px-6 mb-16">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
      Photo & Media Gallery
    </h2>
    <p className="text-center text-gray-600 text-lg">
      Inside SAGOSERVE facilities & operations
    </p>
  </div>

  {/* SCROLL WRAPPER */}
  <div className="relative overflow-hidden">

    {/* TRACK */}
    <div className="flex gap-8 w-max animate-gallery-scroll hover:[animation-play-state:paused]">

      {[
        "/home1.jpg",
        "/home2.jpg",
        "/home3.jpg",
        "/hero1.jpg",
        "/hero2.jpg",
        "/hero3.jpg",
      ].concat([
        "/home1.jpg",
        "/home2.jpg",
        "/home3.jpg",
        "/hero1.jpg",
        "/hero2.jpg",
        "/hero3.jpg",
      ]).map((img, i) => (
        <div
          key={i}
          className="
            w-[360px] h-[240px]
            rounded-3xl overflow-hidden
            shadow-[0_20px_50px_rgba(0,0,0,0.25)]
            transition duration-500
            hover:scale-105
          "
        >
          <img
            src={img}
            alt="Gallery"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

    </div>
  </div>
</section>


    </main>
  );
}
