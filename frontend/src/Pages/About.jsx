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
      bg: "bg-[#0F0F0F]",
      reverse: true,
      textColor: "text-white",
      subText: "text-gray-300",
    },
    {
      title: "Vision",
      text:
        "To become a trusted cooperative platform connecting local producers to national buyers with integrity, sustainability and long-term growth.",
      image: "/hero3.jpg",
      bg: "bg-[#F4F9FF]",
      reverse: false,
    },
  ];

  return (
    <main className="">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl font-extrabold tracking-widest text-white">
            ABOUT <span className="text-[#8B5E3C]">US</span>
          </h1>
          <div className="mx-auto mt-6 h-1 w-32 bg-[#8B5E3C] rounded-full" />
          <p className="mt-8 text-white/90 text-lg max-w-2xl mx-auto">
            Salem Starch and Sago Manufacturers’ Cooperative Society
          </p>
        </div>
      </section>

      {/* ================= ABOUT / MISSION / VISION ================= */}
      {sections.map((sec, i) => (
        <section key={i} className={`py-28 ${sec.bg}`}>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${sec.reverse ? "lg:order-2" : ""}`}>
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-[420px] object-cover rounded-3xl shadow-xl hover:scale-105 transition duration-700"
              />
            </div>

            <div className={`${sec.reverse ? "lg:order-1" : ""}`}>
              <div className="w-24 h-1 bg-[#8B5E3C] mb-6 rounded-full" />
              <h2 className={`text-4xl font-bold mb-6 ${sec.textColor || "text-gray-900"}`}>
                {sec.title}
              </h2>
              <p className={`text-lg leading-relaxed ${sec.subText || "text-gray-600"}`}>
                {sec.text}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* ================= MANAGEMENT TEAM ================= */}
      <section className="relative py-32 bg-gradient-to-br from-[#3F2A20] via-[#5A3A22] to-[#8B5E3C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-white mb-4">
              Management Team
            </h2>
            <p className="text-white/80 text-lg">
              Leadership driving SAGOSERVE forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {["Chairman", "General Manager", "Head – Auctions"].map((role, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center
                shadow-[0_25px_70px_rgba(0,0,0,0.5)]
                hover:-translate-y-3 transition-all duration-700"
              >
                <img
                  src={`/hero${i + 1}.jpg`}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-lg mb-6"
                />
                <h4 className="text-xl font-semibold text-white">Name Here</h4>
                <p className="text-[#EAD9C7] text-sm uppercase tracking-wide mt-1">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* ================= CERTIFICATIONS – PREMIUM AUTO SCROLL ================= */}
<section className="relative py-36 bg-[#FAF7F4] overflow-hidden">

  {/* SECTION HEADER */}
  <div className="text-center mb-24">
    <h2 className="text-5xl font-extrabold text-[#5A3A22] mb-4">
      Certifications & Quality
    </h2>
    <p className="text-gray-600 text-lg">
      Trusted international standards
    </p>
  </div>

  {/* SCROLLER */}
  <div className="overflow-hidden">
    <div className="flex gap-14 w-max animate-cert-scroll hover:[animation-play-state:paused]">

      {[
        { title: "NABL Accreditation", img: "/public/logo.png" },
        { title: "FSSAI Certification",  img: "/public/logo.png" },
        { title: "ISO Certified", img: "/public/logo.png" },
        { title: "Government Recognized", img: "/public/logo.png" },
        { title: "Laboratory Approved", img: "/public/logo.png" },
      ]
        .concat([
          { title: "NABL Accreditation", img: "/public/logo.png" },
          { title: "FSSAI Certification", img: "/public/logo.png" },
          { title: "ISO Certified", img: "/public/logo.png" },
          { title: "Government Recognized", img: "/public/logo.png" },
          { title: "Laboratory Approved", img: "/public/logo.png" },
        ])
        .map((cert, i) => (

          <div
            key={i}
            className="
              min-w-[360px] h-[240px]
              rounded-[28px]
              bg-white
              border border-[#E6D6C6]

              shadow-[0_30px_80px_rgba(90,58,34,0.18)]
              p-10 text-center

              transition-all duration-500
              hover:-translate-y-4
              hover:shadow-[0_40px_110px_rgba(90,58,34,0.28)]
            "
          >
            {/* ICON HOLDER */}
            <div className="
              w-24 h-24 mx-auto mb-6
              rounded-2xl
              bg-[#F7EFE8]
              flex items-center justify-center
              shadow-inner
            ">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            <h4 className="text-xl font-semibold text-[#2C1B12]">
              {cert.title}
            </h4>

            <p className="text-[#8B5E3C] text-sm mt-2 tracking-wide">
              Verified & Trusted
            </p>
          </div>

        ))}
    </div>
  </div>
</section>


      {/* ================= PHOTO & MEDIA – AUTO SCROLL ================= */}
      <section className="py-32 bg-[#F4F9FF] overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Photo & Media Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Inside SAGOSERVE facilities & operations
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-8 w-max animate-gallery-scroll hover:[animation-play-state:paused]">
            {[
              "/home1.jpg",
              "/home2.jpg",
              "/home3.jpg",
              "/hero1.jpg",
              "/hero2.jpg",
              "/hero3.jpg",
            ]
              .concat([
                "/home1.jpg",
                "/home2.jpg",
                "/home3.jpg",
                "/hero1.jpg",
                "/hero2.jpg",
                "/hero3.jpg",
              ])
              .map((img, i) => (
                <div
                  key={i}
                  className="w-[360px] h-[240px] rounded-3xl overflow-hidden
                  shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                  hover:scale-105 transition"
                >
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ================= CSS KEYFRAMES ================= */}
      <style>{`
        @keyframes certScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-cert-scroll {
          animation: certScroll 30s linear infinite;
        }

        @keyframes galleryScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-gallery-scroll {
          animation: galleryScroll 35s linear infinite;
        }
      `}</style>

    </main>
  );
}
