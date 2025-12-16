// Hero.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";


// -------------------------------------------------
// CONFIG
// -------------------------------------------------
const PRIMARY = "#27b7ffff"; // your theme color
const TEXT_DARK = "#ffffffff"; // dark heading color
const ILLUST_SRC = "/banner2s.jpg"; // <-- replace with your image path

// -------------------------------------------------
// ROTATING TEXT COMPONENT
// -------------------------------------------------
function RotatingWords() {
  const words = [
    "Digital Marketing",
    "Augmented Reality",
    "Virtual Reality",
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
    <div className="relative h-[90px] mt-3 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
          className="absolute left-0 top-0 block text-[40px] md:text-[40px] lg:text-[45px] font-extrabold leading-tight"
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
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat font-[Poppins] pt-[200px] pb-[100px]"
  style={{
    backgroundImage: "url('/banner.gif')", // your bg
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily: "Poppins, sans-serif",
  }}

>
  {/* Dark / blue overlay for readability */}
  <div className="absolute inset-0 bg-[#006699]/30 backdrop-blur-[3px] -z-3"></div>

  {/* OPTIONAL: animated slight zoom effect */}
  <motion.div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
    style={{
      backgroundImage: "url('/bg.jpg')", // same image
    }}
    animate={{ scale: [1, 1.04, 1] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  ></motion.div>


      {/* MAIN CONTAINER */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">

          {/* ------------------------------------------------- */}
          {/* LEFT SIDE TEXT */}
          {/* ------------------------------------------------- */}
          <div className="lg:col-span-7">
            <div className="max-w-3xl">

              {/* small tag */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-0.5 h-6"
                  style={{ background: PRIMARY, display: "inline-block", borderRadius: 2 }}
                />
                <div className="text-xs md:text-sm font-semibold text-[#ffffff]">
                  Digital Transformation Company
                </div>
              </div>

              {/* main heading */}
              <h1
                className="font-extrabold tracking-tight text-[35px] md:text-5xl lg:text-[46px] leading-tight"
                style={{ color: TEXT_DARK }}
              >
                Your Partner to Grow Your <br /> Business Digitally with
                <RotatingWords />
              </h1>

              {/* CTA button */}
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-block px-5 py-3 rounded-md text-white font-semibold shadow"
                  style={{ background: PRIMARY, boxShadow: "0 8px 24px #5db6ffbe" }}
                >
                  Let’s Discuss
                </a>
              </div>

              {/* ------------------------------------------------- */}
              {/* ICON FEATURES */}
              {/* ------------------------------------------------- */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-[#20343a]">

                {/* Quality Services */}
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center bg-white/100 shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 2L20 6v6c0 5-4 9-8 10-4-1-8-5-8-10V6l8-4z"
                        fill={PRIMARY} opacity="0.12" />
                      <path d="M9 12l2 2 4-4"
                        stroke={PRIMARY} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="text-sm font-medium text-white/100">Quality Services</div>
                </div>

                <span className="text-slate-300">|</span>

                {/* Customized Solutions */}
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center bg-white/100 shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z"
                        fill={PRIMARY} opacity="0.12" />
                      <path d="M19.4 15a7.5 7.5 0 0 0 0-6"
                        stroke={PRIMARY} strokeWidth="0.8" opacity="0.95" />
                    </svg>
                  </span>
                  <div className="text-sm font-medium text-white/100">Customized Solutions</div>
                </div>

                <span className="text-slate-300">|</span>

                {/* User-Centric Design */}
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center bg-white/100 shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <circle cx="12" cy="8" r="3" fill={PRIMARY} opacity="0.12" />
                      <path d="M4 20c1.6-4 6-6 8-6s6.4 2 8 6"
                        stroke={PRIMARY} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="text-sm font-medium text-white/100">User-Centric Design</div>
                </div>

              </div>
            </div>
          </div>

          {/* ------------------------------------------------- */}
          {/* RIGHT SIDE ILLUSTRATION CARD */}
          {/* ------------------------------------------------- */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{ width: 520, maxWidth: "92%" }}
            >
              {/* card */}
              <div
                className="relative rounded-3xl overflow-hidden bg-white shadow-xl"
                style={{
                  border: `10px solid ${PRIMARY}`,
                  borderRadius: 40,
                  backgroundClip: "padding-box"
                }}
              >
                <img
                  src={ILLUST_SRC}
                  alt="Illustration"
                  className="w-full h-auto object-cover block"
                />
              </div>

              {/* small floating badges */}
              <motion.div
                className="absolute -left-6 -top-6 bg-white rounded-md px-5 py-2 shadow-md flex items-center gap-2"
                animate={{ y: [ -6, 6, -6 ] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ minWidth: 120 }}
              >
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <svg width="28" height="18"><rect width="26" height="10" rx="3" fill="#006699"/></svg>
                </div>
                <div className="text-xs text-slate-700">
  Smart <span className="text-[#006699]">DCM</span>
</div>

              </motion.div>

              <motion.div
                className="absolute -right-6 top-20 bg-white rounded-full px-3 py-2 shadow-md flex items-center gap-2"
                animate={{ x: [ 6, -6, 6 ] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                 <svg width="18" height="18"><rect width="10" height="10" rx="3" fill="#006699"/></svg>
                <div className="text-xs text-slate-700">
  Lead <span className="text-[#006699]">GER</span>
</div>
              </motion.div>

              <motion.div
                className="absolute left-6 bottom-6 bg-white rounded-md px-3 py-2 shadow-md flex items-center gap-2"
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs"></div>
                <div className="text-xs text-slate-700">SmartRMI</div>
              </motion.div>

              <motion.div
                className="absolute -right-6 -bottom-6 bg-white rounded-md px-3 py-2 shadow-md flex items-center gap-2"
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-slate-700">SmartPayroll</div>
                <div className="text-xs font-bold"></div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
      
    </section>
    
  );
}
