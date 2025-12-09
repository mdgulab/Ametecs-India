import { motion } from "framer-motion";
import {
  FaPuzzlePiece,
  FaTools,
  FaHandshake,
  FaRocket,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

export default function WhyAmetecs() {
  const items = [
    {
      icon: <FaPuzzlePiece className="text-white text-2xl" />,
      color: "from-[#006699] to-[#00A3C4]",
      title: "One Ecosystem, Multiple Solutions",
      desc: "SmartDCM, LeadGER, Telozar — all connected with improved scalability, optimized UI and faster performance.",
    },
    {
      icon: <FaTools className="text-white text-2xl" />,
      color: "from-emerald-500 to-green-600",
      title: "Custom-Built, Never One-Size-Fits-All",
      desc: "Now with smoother animations, refined UI elements and modular feature blocks.",
    },
    {
      icon: <FaHandshake className="text-white text-2xl" />,
      color: "from-amber-500 to-yellow-600",
      title: "Long-Term Support, Not Just Deployment",
      desc: "Enhanced with a cleaner layout and better readability across all screen sizes.",
    },
    {
      icon: <FaRocket className="text-white text-2xl" />,
      color: "from-rose-500 to-red-600",
      title: "Growth-Focused, Client-Led Innovation",
      desc: "Boosted motion effects and unified design language for a premium experience.",
    },
    {
      icon: <FaShieldAlt className="text-white text-2xl" />,
      color: "from-cyan-600 to-sky-500",
      title: "Ethical, Secure & Fully Compliant",
      desc: "Sharper visuals and responsive spacing for better structure.",
    },
    {
      icon: <FaStar className="text-white text-2xl" />,
      color: "from-green-500 to-emerald-600",
      title: "Proven Expertise Across Domains",
      desc: "Polished typography and enhanced color balance for stronger presentation.",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-28 bg-[#f3f8fc] text-gray-900 overflow-hidden">
      {/* Background gradient / orbs (subtle) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f3f8fc] to-[#eaf6ff]" />
        <motion.div
          className="absolute -left-32 top-0 w-[360px] h-[360px] bg-[#006699]/10 blur-[110px] rounded-full"
          animate={{ opacity: [0.16, 0.5, 0.16], y: [0, 16, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-20 bottom-0 w-[320px] h-[320px] bg-[#00A3C4]/10 blur-[110px] rounded-full"
          animate={{ opacity: [0.14, 0.5, 0.14], y: [0, -16, 0] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#d6eafe] bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#006699]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Why Ametecs
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.06 }}
            className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-[#0B3760]"
          >
            A connected{" "}
            <span className="bg-gradient-to-r from-[#006699] via-[#00A3C4] to-[#0B3760] bg-clip-text text-transparent">
              communication & ops stack
            </span>{" "}
            built for scale.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="mt-3 text-sm md:text-base text-gray-700 max-w-2xl mx-auto"
          >
            From collections to tele-sales and remote BPO control rooms, Ametecs
            gives you one ecosystem instead of scattered tools and manual hacks.
          </motion.p>
        </div>

        {/* DESKTOP / LARGE — STEPPED JOURNEY TIMELINE */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Center line */}
            <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#cfe2ff] via-[#b9d8ff] to-[#e0f1ff]" />

            <div className="grid grid-cols-6 gap-6">
              {items.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: index * 0.07 }}
                    className={`relative flex flex-col items-center ${
                      isEven ? "translate-y-[-35px]" : "translate-y-[35px]"
                    }`}
                  >
                    {/* Top card (for even) */}
                    {isEven && (
                      <div className="mb-6 w-full">
                        <div className="rounded-2xl bg-white/95 border border-[#e7f1ff] shadow-[0_10px_30px_rgba(11,55,96,0.08)] px-4 py-4 text-center">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#006699] mb-1">
                            STEP {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="text-sm font-semibold text-[#0B3760] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-[12px] text-gray-700 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Node + icon */}
                    <div className="relative flex flex-col items-center">
                      {/* small circle on main line */}
                      <div className="h-3 w-3 rounded-full bg-white border border-[#b5d6ff] shadow-sm" />
                      {/* gradient diamond */}
                      <div className="mt-2 h-12 w-12 rotate-45 rounded-2xl bg-gradient-to-br shadow-md flex items-center justify-center">
                        <div
                          className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center -rotate-45`}
                        >
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    {/* Bottom card (for odd) */}
                    {!isEven && (
                      <div className="mt-6 w-full">
                        <div className="rounded-2xl bg-white/95 border border-[#e7f1ff] shadow-[0_10px_30px_rgba(11,55,96,0.08)] px-4 py-4 text-center">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#006699] mb-1">
                            STEP {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="text-sm font-semibold text-[#0B3760] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-[12px] text-gray-700 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom note strip */}
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-white/95 border border-dashed border-[#dbe9ff] px-5 py-4 text-sm text-gray-700 shadow-sm text-center">
            Each step builds on the previous one — from unifying tools to
            customising workflows, supporting you long term and scaling safely
            across industries.
          </div>
        </div>

        {/* MOBILE / TABLET — STACKED CARDS (same content) */}
        <div className="lg:hidden mt-8 space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative rounded-2xl bg-white/95 border border-[#e7f1ff] shadow-[0_10px_24px_rgba(11,55,96,0.06)] px-4 py-4 flex gap-4"
            >
              {/* Icon on left */}
              <div className="flex-shrink-0 flex items-start pt-1">
                <div
                  className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#006699] mb-1">
                  STEP {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#0B3760] mb-1">
                  {item.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

          <div className="mt-4 rounded-2xl bg-[#f7fbff] border border-dashed border-[#dbe9ff] px-4 py-3 text-[13px] text-gray-700 text-center">
            One journey from “scattered tools” to “single connected Ametecs
            stack” — tuned for high-volume ops floors.
          </div>
        </div>
      </div>
    </section>
  );
}
