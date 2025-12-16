// TrustedStrip.jsx
import React, { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 700, suffix: "+", label: "Experts Worldwide" },
  { value: 4500, suffix: "+", label: "Projects Delivered" },
  { value: 97, suffix: "%", label: "Client Satisfaction" },
];

const LOGOS = [
  "/demo logo/logo1.jpg",
  "/demo logo/logo2.jpg",
  "/demo logo/logo3.jpg",
  "/demo logo/logo4.jpg",
  "/demo logo/logo1.jpg",
];

/* ---------- Count Hook (Scroll Triggered) ---------- */
function useCountUp(target, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 40));

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 30);

    return () => clearInterval(interval);
  }, [start, target]);

  return count;
}

export default function TrustedStrip() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  /* ---------- Scroll Detect ---------- */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="
        relative bg-white dark:bg-[#050b12]
        pt-15 md:pt-16
        pb-20
      "
    >
      {/* ================= CARDS ================= */}
      {/* Mobile: normal flow | Desktop: floating */}
      <div className="md:absolute md:-top-20 left-0 right-0 z-20">
        <div
          className="
            max-w-6xl mx-auto px-4 sm:px-6
            grid grid-cols-3 md:grid-cols-3
            gap-4 md:gap-8
          "
        >
          {STATS.map((s, i) => {
            const count = useCountUp(s.value, start);
            return (
              <div
                key={i}
                className="
                  rounded-xl md:rounded-2xl
                  p-4 md:p-10
                  text-center
                  bg-[#006699]/80 backdrop-blur-md
                  border border-white/70
                  shadow-[0_5px_25px_rgba(0,0,0,0.25)]
                "
              >
                <div className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white">
                  {count}
                  {s.suffix}
                </div>
                <div className="mt-1 text-[11px] sm:text-xs md:text-sm text-white/90">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= TEXT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mt-8 md:mt-32">
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-10">
          Trusted by{" "}
          <span className="font-semibold text-[#006699]">Startups</span>{" "}
          and{" "}
          <span className="font-semibold text-[#006699]">
            Fortune 500
          </span>{" "}
          companies worldwide
        </p>
      </div>

      {/* ================= LOGOS ================= */}
      <div className="relative overflow-hidden">
        {/* fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-[#050b12] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-[#050b12] to-transparent z-10" />

        <div className="flex gap-8 sm:gap-12 w-max animate-marquee mx-auto">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="trusted logo"
              className="
                h-6 sm:h-8 md:h-11
                object-contain
                opacity-70 hover:opacity-100
                transition
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}
