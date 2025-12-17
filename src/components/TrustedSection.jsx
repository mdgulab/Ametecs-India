import React, { useEffect, useRef, useState } from "react";

/* ================= DATA ================= */

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

/* ================= COUNT ================= */

function useCountUp(target, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const inc = Math.max(1, Math.ceil(target / 40));

    const timer = setInterval(() => {
      current += inc;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, 22);

    return () => clearInterval(timer);
  }, [start, target]);

  return count;
}

/* ================= COMPONENT ================= */

export default function TrustedStrip() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

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
    <section ref={ref} className="bg-[#F8FCFE] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {STATS.map((s, i) => {
            const count = useCountUp(s.value, start);
            return (
              <div
                key={i}
                className="
                  relative bg-white rounded-2xl
                  px-6 py-6 sm:p-8
                  text-center
                  shadow-sm hover:shadow-md transition
                "
              >
                {/* top accent */}
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-[#00B4D8]" />

                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#006699]">
                  {count}
                  {s.suffix}
                </div>

                <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#5B7280]">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= TEXT ================= */}
        <p className="text-center text-sm sm:text-base text-[#5B7280] mb-8 sm:mb-12 px-2">
          Trusted by{" "}
          <span className="font-semibold text-[#006699]">Startups</span>{" "}
          and{" "}
          <span className="font-semibold text-[#006699]">
            Fortune 500
          </span>{" "}
          companies worldwide
        </p>

        {/* ================= LOGOS ================= */}
        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div className="absolute left-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-r from-[#F8FCFE] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-l from-[#F8FCFE] to-transparent z-10" />

          <div className="flex items-center gap-6 sm:gap-10 w-max mx-auto animate-marquee">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={i}
                className="
                  bg-white rounded-full
                  px-4 py-2 sm:px-6 sm:py-3
                  shadow-sm hover:shadow transition
                "
              >
                <img
                  src={logo}
                  alt="trusted logo"
                  className="h-5 sm:h-6 md:h-8 object-contain opacity-80"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
