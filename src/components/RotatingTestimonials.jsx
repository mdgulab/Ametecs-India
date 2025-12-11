import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jenn F.",
    role: "Marketing Director @ Square",
    text: "I feel like I’ve learned as much from Ametecs as I did completing my masters. It's the first thing I read every morning.",
    img: "src/assets/profile.jpg",
  },
  {
    id: 2,
    name: "Arun K.",
    role: "Team Lead @ Meta",
    text: "Ametecs CRM and automation changed how I manage my team. Couldn’t imagine scaling without it.",
    img: "src/assets/profile1.jpg",
  },
  {
    id: 3,
    name: "Priya S.",
    role: "Ops Manager @ Razorpay",
    text: "SmartDCM insights are next-level. Our collections improved dramatically.",
    img: "src/assets/profile4.jpg",
  },
  {
    id: 4,
    name: "Rahul M.",
    role: "Founder @ FinTechPro",
    text: "Super easy onboarding, amazing UI and the team support is unmatched.",
    img: "src/assets/profile3.jpg",
  },
  {
    id: 5,
    name: "Deepa L.",
    role: "Sales Head @ HDFC",
    text: "AI reports saved my team hours every single day. Game changer.",
    img: "src/assets/profile2.jpg",
  },
];

export default function RotatingTestimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    // ✅ mobile (<md) par hide, md+ par show
    <div className="hidden md:block absolute right-6 lg:right-1/4 top-10 lg:top-1/4 w-[320px] lg:w-[380px] pointer-events-none">
      <div className="relative w-full rounded-3xl bg-white/90 border border-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.12)] px-4 lg:px-5 py-4 lg:py-5 pointer-events-auto">
        {/* Top label */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#006699]">
              Customer voices
            </p>
            <p className="text-[11px] lg:text-xs text-slate-500">
              Real teams using Ametecs every day
            </p>
          </div>
          <div className="flex flex-col items-end text-[11px] text-slate-400">
            <span>
              {String(index + 1).padStart(2, "0")}/
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Chat bubble */}
        <div className="mt-1 mb-3 lg:mb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative inline-block max-w-full"
            >
              <div className="relative max-w-full rounded-2xl rounded-tl-sm bg-sky-50 border border-sky-100 px-3.5 lg:px-4 py-3">
                <div className="absolute -left-2 top-3 h-3 w-3 rotate-45 border-l border-t border-sky-100 bg-sky-50" />
                <p className="text-[13px] lg:text-sm leading-relaxed text-slate-700">
                  {active.text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Name / role */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <img
              src={active.img}
              alt={active.name}
              className="h-8 w-8 lg:h-9 lg:w-9 rounded-full object-cover border border-slate-100"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {active.name}
              </p>
              <p className="text-[10px] lg:text-[11px] text-slate-500">
                {active.role}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[9px] lg:text-[10px] text-amber-500">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        {/* Avatars row selector */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-[10px] lg:text-[11px] text-slate-400">
            Tap a face to read their story
          </p>
          <div className="flex items-center gap-1.5">
            {testimonials.map((item, i) => {
              const isActive = i === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`
                    relative h-6 w-6 lg:h-7 lg:w-7 rounded-full border
                    overflow-hidden transition-all duration-200
                    ${
                      isActive
                        ? "border-[#006699] scale-110"
                        : "border-slate-200 scale-100 opacity-70 hover:opacity-100"
                    }
                  `}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                  {isActive && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-offset-1 ring-[#006699] ring-offset-white pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
