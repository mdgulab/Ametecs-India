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
      icon: <FaPuzzlePiece className="text-white text-lg" />,
      title: "Planning & Strategy",
      short:
        "Clear goals, market research and strategic alignment before execution.",
      full:
        "From the initial idea to final delivery, our planning phase defines business goals, brand positioning, target audience and success metrics.",
      gif: "/Planning.gif",
    },
    {
      icon: <FaTools className="text-white text-lg" />,
      title: "Design & User Experience",
      short:
        "User-centric design focused on clarity, usability and brand identity.",
      full:
        "Our design process covers UX research, UI design, wireframing and visual storytelling.",
      gif: "/Design.gif",
    },
    {
      icon: <FaHandshake className="text-white text-lg" />,
      title: "Development & Engineering",
      short:
        "Robust, scalable and performance-driven development execution.",
      full:
        "We build secure, scalable solutions using clean architecture and modern technologies.",
      gif: "/Development.gif",
    },
    {
      icon: <FaShieldAlt className="text-white text-lg" />,
      title: "Testing & Quality Assurance",
      short:
        "Rigorous testing to ensure stability, security and performance.",
      full:
        "Each solution undergoes functional testing, performance optimization and security audits.",
      gif: "/Testing2.gif",
    },
    {
      icon: <FaRocket className="text-white text-lg" />,
      title: "Launch & Growth Optimization",
      short:
        "Strategic deployment with analytics and growth tracking.",
      full:
        "Post-launch optimization ensures continuous performance improvements.",
      gif: "/Launch.gif",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f4f9fc] dark:bg-[#060c12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#006699] uppercase mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3760] dark:text-white">
            Our Proven Process for{" "}
            <span className="text-[#006699]">Digital Success</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            A structured, scalable journey from idea to launch.
          </p>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                bg-white dark:bg-[#0b1621]
                rounded-2xl shadow-md p-6 text-center
                border border-transparent
                hover:border-[#006699]
                hover:shadow-[0_0_0_2px_rgba(0,102,153,0.35)]
                transition
              "
            >
              <div
                className="mx-auto mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: PRIMARY }}
              >
                {item.icon}
              </div>

              <h3 className="font-semibold text-[#0B3760] dark:text-white mb-2">
                {item.title}
              </h3>

              <img
                src={item.gif}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {item.short}
              </p>

              <button
                onClick={() => setOpenIndex(i)}
                className="text-sm font-semibold text-[#006699]"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP ZIG-ZAG ================= */}
        <div className="hidden lg:block relative">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#006699]/25" />

          <div className="grid grid-cols-5 gap-10">
            {items.map((item, index) => {
              const offset =
                index % 2 === 0 ? "-translate-y-8" : "translate-y-8";

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center ${offset}`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="
                      bg-white dark:bg-[#0b1621]
                      rounded-2xl p-6 w-[240px] text-center
                      border border-transparent
                      shadow-lg
                      hover:border-[#006699]
                      hover:shadow-[0_0_0_2px_rgba(0,102,153,0.35)]
                      transition-all
                    "
                  >
                    <span
                      className="text-[10px] font-bold text-white px-3 py-1 rounded-full"
                      style={{ background: PRIMARY }}
                    >
                      STEP {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-sm font-semibold text-[#0B3760] dark:text-white mt-3 mb-2">
                      {item.title}
                    </h3>

                    <img
                      src={item.gif}
                      alt={item.title}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />

                    <p className="text-[13px] text-gray-600 dark:text-gray-400 mb-3">
                      {item.short}
                    </p>

                    <button
                      onClick={() => setOpenIndex(index)}
                      className="text-xs font-semibold text-[#006699]"
                    >
                      Read More
                    </button>
                  </motion.div>

                  <div
                    className="mt-4 w-12 h-12 rounded-xl flex items-center justify-center shadow"
                    style={{ background: PRIMARY }}
                  >
                    {item.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MODAL ================= */}
        <AnimatePresence>
          {openIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white dark:bg-[#0b1621] rounded-2xl shadow-2xl w-full max-w-xl p-6 relative"
              >
                <button
                  onClick={() => setOpenIndex(null)}
                  className="absolute top-3 right-4 text-gray-500 dark:text-gray-400 hover:text-black"
                >
                  ✕
                </button>

                <h3 className="text-lg font-bold text-[#0B3760] dark:text-white mb-3">
                  {items[openIndex].title}
                </h3>

                <img
                  src={items[openIndex].gif}
                  alt=""
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                  {items[openIndex].full}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
