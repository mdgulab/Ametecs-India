// Hero.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// -------------------------------------------------
// CONFIG (SAME)
// -------------------------------------------------
const PRIMARY = "#00A3C4";
const TEXT_DARK = "#006699";
const ILLUST_SRC = "/banner2s.jpg";

// -------------------------------------------------
// ROTATING TEXT COMPONENT (LOGIC SAME)
// -------------------------------------------------
function RotatingWords() {
  const words = [
    "Digital Marketing",
    "UI/UX Design",
    "Cloud Solutions",
    "Product Engineering",
    "Web Development",
    "Artificial Intelligence",
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[52px] sm:h-[70px] md:h-[90px] mt-1 sm:mt-3 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
          className="
            absolute left-0 top-0 block
            text-[26px] sm:text-[32px] md:text-[40px] lg:text-[45px]
            font-extrabold leading-tight
          "
          style={{ color: PRIMARY }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// -------------------------------------------------
// MAIN HERO SECTION
// -------------------------------------------------
export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden bg-cover bg-center bg-no-repeat font-[Poppins]
        pt-28 sm:pt-40 md:pt-48 lg:pt-[250px]
        pb-16 sm:pb-24 md:pb-32 lg:pb-[150px]
      "
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Dark / blue overlay */}
      <div className="absolute inset-0 bg-[#006699]/5 backdrop-blur-[4px]" />

      {/* Animated background zoom (SAME) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{ backgroundImage: "url('/bg.jpg')" }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* MAIN CONTAINER */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">

          {/* ---------------- LEFT TEXT ---------------- */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="max-w-3xl mx-auto lg:mx-0">

              {/* small tag */}
              <div className="flex justify-center lg:justify-start items-center gap-3 mb-4">
                <span className="w-0.5 h-6 bg-[#00A3C4] rounded" />
                <div className="text-xs sm:text-sm font-semibold text-[#006699]">
                  Digital Transformation Company
                </div>
              </div>

              {/* main heading */}
              <h1
                className="
                  font-extrabold tracking-tight leading-tight
                  text-[26px] sm:text-[32px] md:text-5xl lg:text-[46px]
                "
                style={{ color: TEXT_DARK }}
              >
                Your Partner to Grow Your <br className="hidden sm:block" />
                Business Digitally with
                <RotatingWords />
              </h1>

              {/* CTA */}
              <div className="mt-6 flex justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="
                    inline-block w-full sm:w-auto
                    px-6 py-3 rounded-md
                    text-white font-semibold shadow
                    text-center
                  "
                  style={{
                    background: PRIMARY,
                    boxShadow: "0 8px 24px #87d7ffff",
                  }}
                >
                  Let’s Discuss
                </a>
              </div>

              {/* ICON FEATURES (SAME CONTENT) */}
              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-[#20343a]">
                <div className="flex items-center gap-2 text-[#006699]/60">
                  ● Quality Services
                </div>
                <div className="flex items-center gap-2 text-[#006699]/60">
                  ● Customized Solutions
                </div>
                <div className="flex items-center gap-2 text-[#006699]/60">
                  ● User-Centric Design
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT IMAGE ---------------- */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mt-6 lg:mt-0 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]"
            >
              {/* card */}
              <div
                className="relative rounded-3xl overflow-hidden bg-white shadow-xl"
                style={{
                  border: `3px solid ${PRIMARY}`,
                  borderRadius: 35,
            }}
              >
                <img
                  src={ILLUST_SRC}
                  alt="Illustration"
                  className="w-full h-auto object-cover block"
                />
              </div>

              {/* ---------------- FLOATING BADGES ---------------- */}
              {/* MOBILE: hidden | DESKTOP: visible (NO CHANGE IN CONTENT) */}

              <motion.div
                className="absolute -left-6 -top-6 hidden lg:flex bg-white rounded-md px-5 py-2 shadow-md items-center gap-2"
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ minWidth: 120 }}
              >
                <div className="text-xs text-slate-700">
                  Smart <span className="text-[#006699]">DCM</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-6 top-20 hidden lg:flex bg-white rounded-full px-3 py-2 shadow-md items-center gap-2"
                animate={{ x: [6, -6, 6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-slate-700">
                  Lead <span className="text-[#006699]">GER</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute left-6 bottom-6 hidden lg:flex bg-white rounded-md px-3 py-2 shadow-md items-center gap-2"
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-slate-700">SmartRMI</div>
              </motion.div>

              <motion.div
                className="absolute -right-6 -bottom-6 hidden lg:flex bg-white rounded-md px-3 py-2 shadow-md items-center gap-2"
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-slate-700">SmartPayroll</div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
