import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WelcomeSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <section ref={sectionRef} className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* ANIMATED BACKGROUND */}
      <motion.div
        style={{ scale: imageScale }}
        className="absolute inset-0 bg-cover bg-center"
        initial={{ scale: 1.1 }}
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-about.jpg')" }}
        />
      </motion.div>

      {/* DYNAMIC OVERLAYS */}
      <div className="absolute inset-0 bg-black/70" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/75 to-black/90" 
      />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 20,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: -20,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        {/* TAG WITH GLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <motion.span
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(34, 197, 94, 0.3)",
                "0 0 30px rgba(34, 197, 94, 0.5)",
                "0 0 20px rgba(34, 197, 94, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="px-5 py-2 text-[11px] tracking-widest font-semibold text-green-400 border border-green-500/40 rounded-full backdrop-blur-sm bg-green-500/5"
          >
            WELCOME TO SAGOSERVE
          </motion.span>
        </motion.div>

        {/* TITLE WITH STAGGER EFFECT */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.03, delayChildren: 0.15 }
              }
            }}
            className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-white leading-snug"
          >
            {"Salem Starch and Sago Manufacturers'".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {char}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-green-500 font-bold inline-block"
            >
              Service Industrial Co-operative Society Ltd
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* SUBTITLE WITH REVEAL ANIMATION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-7xl mx-auto mt-8 space-y-8 text-[18px] md:text-[20px] lg:text-[22px] text-white/95 leading-[1.9] tracking-[0.02em]"
        >
          {[
            {
              text: "is a cooperative society established to empower starch and sago manufacturers of Salem through a transparent, structured, and member-focused ecosystem.",
              highlight: "SAGOSERVE"
            },
            {
              text: ", the society emerged at a time when manufacturers faced unfair pricing, limited access to institutional credit, and heavy dependency on intermediaries.",
              highlight: "1981",
              prefix: "Founded in "
            },
            {
              text: " and commencing operations on ",
              highlight: "July 21, 1981",
              prefix: "Registered on ",
              highlight2: "February 27, 1982",
              suffix: ", SAGOSERVE has grown into a trusted pillar of progress for the local industry."
            }
          ].map((item, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 + i * 0.2 }}
              className="text-white/90"
            >
              {item.prefix}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.2 }}
                className="text-green-400 font-semibold"
              >
                {item.highlight}
              </motion.span>
              {item.text}
              {item.highlight2 && (
                <>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + i * 0.2 }}
                    className="text-green-400 font-semibold"
                  >
                    {item.highlight2}
                  </motion.span>
                  {item.suffix}
                </>
              )}
            </motion.p>
          ))}
        </motion.div>

        {/* ANIMATED DIVIDER */}
        <motion.div className="my-14 flex justify-center">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="relative w-24 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent"
          >
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-8 h-full bg-green-400 blur-sm"
            />
          </motion.div>
        </motion.div>

        {/* STATS WITH COUNTER ANIMATION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 2
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-14 max-w-4xl mx-auto"
        >
          {[
            {
              value: 28.61,
              label: "Inward Bags Handled",
              desc: "Since 2003 across sago, starch and broken sago"
            },
            {
              value: 27.48,
              label: "Bags Invoiced",
              desc: "Demonstrating efficiency and operational scale"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    type: "spring",
                    damping: 12,
                    stiffness: 100
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-green-500/10 rounded-2xl blur-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="relative">
                <motion.p 
                  className="text-3xl md:text-4xl font-bold text-green-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.3 + i * 0.3 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 + i * 0.3 }}
                  >
                    {item.value}
                  </motion.span>
                  {" "}
                  <span className="text-sm font-normal text-white/70">
                    Million
                  </span>
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.7 + i * 0.3 }}
                  className="text-white font-medium mt-2"
                >
                  {item.label}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.9 + i * 0.3 }}
                  className="text-white/60 text-sm mt-1"
                >
                  {item.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* BOTTOM GRADIENT FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}