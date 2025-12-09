import { motion } from "framer-motion";
import RotatingTestimonials from "./RotatingTestimonials";
import { useEffect } from "react";
import ProjectSlider from "./ProductSlider";

export default function Hero() {
useEffect(() => {
  const hash = window.location.hash;

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 500);
  }

  if (hash === "#teamsection") {
    scrollToId("teamsection");
  }

  if (hash === "#partnership") {
    scrollToId("partnership");
  }
}, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F6F8FF]"
    >
       
   <RotatingTestimonials />
  

        {/* THEME GRADIENT BASE */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#9cdeff] to-[#ffffff]" /> */}
    
        {/* PATTERN OVERLAY */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img
            src="/assets/23d30945-2392-4595-8894-a60ac39c2843.png"
            className="w-full h-full object-cover"
          />
        </div>
    
        {/* DARK CONTRAST OVERLAY */}
        <div className="absolute inset-0 bg-white/5" />
    
        {/* 🔵 FLOATING BLOB 1 */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -25, 0], opacity: [0.25, 0.25, 0.25] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute - left-1 top-2 w-[250px] h-[250px] bg-[#006699] rounded-full blur-[120px]"
        />
    
        {/* 🔵 FLOATING BLOB 2 */}
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 25, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="absolute right-0 bottom-16 w-[380px] h-[380px] bg-[#006699] rounded-full blur-[140px]"
        />
    
        {/* CENTER PULSE GLOW
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute left-1/2 top-2 -translate-x-1/2 w-72 h-72 bg-[#006699] rounded-full blur-[180px]"
        />
     */}
        {/* ⭐ AI WAVY BACKGROUND LINE */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.16] pointer-events-none">
          <motion.path
            d="M0 300 Q460 150 960 300 T1920 300"
            stroke="#529dffff"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
    
        {/* FLOATING PARTICLES */}
        {[...Array(28)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#006699]/100 rounded-full blur-[2px]"
            initial={{ opacity: 5 }}
            animate={{
              opacity: [0.15, 0.5, 0.15],
              y: [-20, 20, -20],
              x: [0, Math.random() * 60 - 30, 0],
            }}
            transition={{ duration: 6 + Math.random() * 5, repeat: Infinity }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      {/* CONTENT */}
      <div className="container mx-auto px-6 relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-blue-600 font-semibold tracking-wider mb-4">
            EMPOWERING BUSINESS PERFORMANCE
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.15] text-gray-900">
            AI-Enhanced CRM & Automation  
            <span className="block bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
              For High-Scale Growth.
            </span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 max-w-xl leading-relaxed">
            Powering SmartDCM, LeadGER, Telozar, SmartPayroll & enterprise
            telephony with real-time AI data and automation.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-10 py-3 rounded-xl bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800"
            >
              Contact Us
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-10 py-3 rounded-xl border border-blue-700 text-blue-700 font-semibold hover:bg-blue-50"
            >
              Our Services →
            </motion.button>
          </div>
        </motion.div>

        {/* FEATURE CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            {
              icon: "💼",
              title: "Finance Management",
              desc: "Automated workflows, compliance tools & accounting precision.",
            },
            {
              icon: "📊",
              title: "Business Consulting",
              desc: "Business optimization with deep data insights & analytics.",
            },
            {
              icon: "📄",
              title: "On-Time Reporting",
              desc: "AI-driven reports, dashboards & real-time performance logs.",
            },
            {
              icon: "⚙️",
              title: "Technology Solutions",
              desc: "Telephony, CRMs, cloud infra & enterprise-grade automation.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="
                p-6 rounded-xl bg-white/30 border border-gray-200
                backdrop-blur-xl shadow-lg hover:shadow-2xl
              "
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
