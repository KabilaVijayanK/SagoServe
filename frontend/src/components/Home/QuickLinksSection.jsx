import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { UserPlus, Gavel, Package, ArrowRight } from "lucide-react";

const items = [
  {
    title: "Register",
    desc: "Create your account and get verified access to SAGOSERVE.",
    icon: UserPlus,
    link: "/registration",
  },
  {
    title: "Live Auctions",
    desc: "Participate in real-time transparent auctions.",
    icon: Gavel,
    link: "/auction",
  },
  {
    title: "Products",
    desc: "Explore premium sago & starch products.",
    icon: Package,
    link: "/products",
  },
];

export default function QuickLinksSection() {

  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const headerInView = useInView(headerRef,{ once:true });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset:["start end","end start"]
  });

  /* Cinematic parallax */
  const bgY = useTransform(scrollYProgress,[0,1],[0,-200]);
  const cardsY = useTransform(scrollYProgress,[0,1],[120,-60]);
  const glowY = useTransform(scrollYProgress,[0,1],[0,-150]);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 bg-black overflow-hidden"
      style={{ perspective:"2000px" }}
    >

      {/* ===== CINEMATIC BACKGROUND ===== */}

      {/* Gold gradient glow */}
      <motion.div
        style={{ y:glowY }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px]
        bg-[radial-gradient(circle,rgba(183,134,82,0.25)_0%,transparent_70%)]
        blur-[140px]"
      />

      {/* Dark texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"/>

      {/* Moving vignette */}
      <motion.div
        style={{ y:bgY }}
        className="absolute inset-0 bg-gradient-to-b
        from-black via-[#0e0e0e] to-black"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <motion.div
          ref={headerRef}
          initial={{opacity:0,y:60}}
          animate={headerInView && {opacity:1,y:0}}
          transition={{duration:1}}
          className="text-center mb-24"
        >

          <p className="text-[#B78652] tracking-[0.3em] uppercase text-sm">
            QUICK ACCESS
          </p>

          <h2 className="text-5xl md:text-6xl font-serif text-white mt-6 leading-tight">
            Seamless Access to <br/>
            <span className="text-[#B78652]">SAGOSERVE</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            A premium gateway to the regulated tapioca marketplace.
          </p>

        </motion.div>

        {/* ===== FLOATING CINEMATIC CARDS ===== */}

        <motion.div
          style={{ y:cardsY }}
          className="grid md:grid-cols-3 gap-12"
        >

          {items.map((item,i)=>{
            const Icon = item.icon;

            return(
              <motion.a
                key={i}
                href={item.link}
                initial={{opacity:0,y:120,rotateX:25}}
                whileInView={{opacity:1,y:0,rotateX:0}}
                viewport={{once:true}}
                transition={{duration:1,delay:i*0.2}}
                whileHover={{
                  y:-20,
                  scale:1.03,
                }}
                className="group"
                style={{transformStyle:"preserve-3d"}}
              >

                <div className="
                  relative p-12 h-full
                  bg-gradient-to-b from-[#151515] to-[#0c0c0c]
                  border border-[#2a2a2a]
                  hover:border-[#B78652]/50
                  rounded-xl
                  overflow-hidden
                  transition
                ">

                  {/* shine sweep */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-transparent via-white/10 to-transparent
                  -translate-x-full group-hover:translate-x-full
                  duration-1000"/>

                  {/* icon */}
                  <div className="
                    w-20 h-20 mb-10
                    bg-[#B78652]/10
                    border border-[#B78652]/40
                    rounded-xl
                    flex items-center justify-center
                  ">
                    <Icon size={32} className="text-[#B78652]"/>
                  </div>

                  {/* title */}
                  <h3 className="text-3xl font-semibold text-white mb-6">
                    {item.title}
                  </h3>

                  {/* desc */}
                  <p className="text-gray-400 mb-10">
                    {item.desc}
                  </p>

                  {/* cta */}
                  <div className="flex items-center gap-3 text-[#B78652] font-medium">
                    Discover
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-3 transition"
                    />
                  </div>

                  {/* bottom glow */}
                  <div className="
                    absolute -bottom-20 -right-20 w-60 h-60
                    bg-[#B78652]/20 blur-3xl opacity-0
                    group-hover:opacity-100 transition
                  "/>

                </div>
              </motion.a>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}
