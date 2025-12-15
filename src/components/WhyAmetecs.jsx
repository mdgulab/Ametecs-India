import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPuzzlePiece,
  FaTools,
  FaHandshake,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const PRIMARY = "#006699";

export default function WhyAmetecs() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      icon: <FaPuzzlePiece className="text-white text-xl" />,
      title: "Planning & Strategy",
      short:
        "Clear goals, market research and strategic alignment before execution.",
      full:
        "From the initial idea to final delivery, our planning phase defines business goals, brand positioning, target audience and success metrics. We perform deep competitor and market analysis to identify opportunities and create a roadmap that ensures long-term growth.",
      gif: "/Planning.gif",
    },
    {
      icon: <FaTools className="text-white text-xl" />,
      title: "Design & User Experience",
      short:
        "User-centric design focused on clarity, usability and brand identity.",
      full:
        "Our design process covers UX research, UI design, wireframing, visual storytelling and content structuring. Every interface is crafted to improve engagement and reduce friction.",
      gif: "/Design.gif",
    },
    {
      icon: <FaHandshake className="text-white text-xl" />,
      title: "Development & Engineering",
      short:
        "Robust, scalable and performance-driven development execution.",
      full:
        "We build secure, scalable solutions using clean architecture and modern technologies across web, mobile and enterprise platforms.",
      gif: "/Development.gif",
    },
    {
      icon: <FaShieldAlt className="text-white text-xl" />,
      title: "Testing & Quality Assurance",
      short:
        "Rigorous testing to ensure stability, security and performance.",
      full:
        "Each solution undergoes functional testing, performance optimization and security audits to guarantee reliability and compliance.",
      gif: "/Testing2.gif",
    },
    {
      icon: <FaRocket className="text-white text-xl" />,
      title: "Launch & Growth Optimization",
      short:
        "Strategic deployment with analytics and growth tracking.",
      full:
        "Post-launch optimization ensures continuous performance improvements, adoption growth and measurable business impact.",
      gif: "/Launch.gif",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#f4f9fc] overflow-hidden">
      <div className="container mx-auto px-10 relative">

        {/* HEADING */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs font-semibold tracking-widest text-[#006699] uppercase mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3760]">
            Our Proven Process for Digital Success
          </h2>
          <p className="mt-3 text-gray-600">
            A structured, scalable journey from idea to launch.
          </p>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {openIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-3xl shadow-2xl w-[680px] max-w-[92%] p-8 relative"
              >
                <button
                  onClick={() => setOpenIndex(null)}
                  className="absolute top-4 right-5 text-gray-500 hover:text-gray-900"
                >
                  ✕
                </button>

                <div className="text-xs font-bold text-[#006699] mb-2">
                  STEP {String(openIndex + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold text-[#0B3760] mb-4">
                  {items[openIndex].title}
                </h3>

                <img
                  src={items[openIndex].gif}
                  alt={items[openIndex].title}
                  className="w-full rounded-xl mb-4"
                />

                <p className="text-sm text-gray-700 leading-relaxed">
                  {items[openIndex].full}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ZIG-ZAG TIMELINE */}
        <div className="hidden lg:block relative max-w-7xl mx-auto">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#006699]/25" />

          <div className="grid grid-cols-5 gap-14">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center ${
                    isEven ? "-translate-y-16" : "translate-y-16"
                  }`}
                >
                  {/* CARD */}
                  <div className="relative bg-white border border-[#dbeaf3] rounded-2xl shadow-[0_12px_30px_rgba(11,55,96,0.12)] px-6 py-6 text-center w-[260px]">

                    {/* STEP BADGE */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-1 rounded-full text-white shadow"
                      style={{ background: PRIMARY }}
                    >
                      STEP {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-sm font-semibold text-[#0B3760] mt-3 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[13px] text-gray-700">
                      {item.short}
                    </p>

                    <img
                      src={item.gif}
                      alt={item.title}
                      className="w-full rounded-lg my-4"
                    />

                    <button
                      onClick={() => setOpenIndex(index)}
                      className="text-xs font-semibold text-[#006699] hover:underline"
                    >
                      Read More
                    </button>
                  </div>

                  {/* ICON NODE */}
                  <div className="mt-5">
                    <div
                      className="h-12 w-12 rounded-2xl bg-[#006699] flex items-center justify-center shadow-md"
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
