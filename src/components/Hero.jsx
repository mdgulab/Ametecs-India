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
  className="
    relative
    flex
    items-center
    overflow-hidden
    bg-[#F6F8FF]
    min-h-[80vh]
    pt-16 pb-14
    sm:pt-18 sm:pb-16
    lg:pt-24 lg:pb-20
  "
>

      <div className="hidden lg:block">
  <RotatingTestimonials />
</div>


      {/* PATTERN OVERLAY */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <img
          src="/assets/23d30945-2392-4595-8894-a60ac39c2843.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      {/* SOFT WHITE OVERLAY */}
      <div className="absolute inset-0 bg-white/6" />

      {/* FLOATING BLOB 1 */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -25, 0], opacity: [0.28, 0.28, 0.28] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-6 top-4 w-[160px] h-[160px] md:w-[220px] md:h-[220px] bg-[#006699] rounded-full blur-[120px] opacity-80 pointer-events-none"
        aria-hidden
      />

      {/* FLOATING BLOB 2 */}
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 25, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute right-0 bottom-6 md:bottom-16 w-[220px] h-[220px] md:w-[360px] md:h-[360px] bg-[#006699] rounded-full blur-[140px] opacity-70 pointer-events-none"
        aria-hidden
      />

      {/* AI WAVY BACKGROUND LINE */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" aria-hidden>
        <motion.path
          d="M0 300 Q460 150 960 300 T1920 300"
          stroke="#529dff"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* FLOATING PARTICLES */}
      {[...Array(22)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#006699] rounded-full blur-[1px] opacity-60"
          initial={{ opacity: 0.15 }}
          animate={{
            opacity: [0.12, 0.45, 0.12],
            y: [-18, 18, -18],
            x: [0, Math.random() * 60 - 30, 0],
          }}
          transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, delay: i * 0.2 }}
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
          }}
          aria-hidden
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
          <p className="text-[#006699] font-semibold tracking-wider mb-4 text-xs md:text-sm">
            EMPOWERING BUSINESS PERFORMANCE
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-[1.06] text-[#0B3760]">
            AI-Enhanced CRM & Automation
            <span className="block bg-gradient-to-r from-[#006699] via-[#00A3C4] to-[#6C5CE7] text-transparent bg-clip-text">
              For High-Scale Growth.
            </span>
          </h1>

        <p className="text-[#475569] text-[14px] md:text-lg mt-3 md:mt-5 max-w-xl leading-relaxed">

            Powering SmartDCM, LeadGER, Telozar, SmartPayroll & enterprise
            telephony with real-time AI data and automation — built for scale,
            compliance and predictable ops.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6 md:mt-8 flex-wrap">

            <motion.a
              whileHover={{ scale: 1.03 }}
              className="px-8 md:px-10 py-3 rounded-xl bg-[#006699] text-white font-semibold shadow-md hover:bg-[#00557f] inline-block"
              href="#contact"
            >
              Contact Us
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              className="px-8 md:px-10 py-3 rounded-xl border border-[#006699] text-[#006699] font-semibold hover:bg-[#f0fbff] inline-block"
              href="#services"
            >
              Our Services →
            </motion.a>
          </div>
        </motion.div>
{/* FEATURE CARDS – HIDDEN ON MOBILE */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.28 }}
  className="hidden lg:grid grid-cols-4 gap-6 mt-14"
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
      desc: "Optimization with deep data insights & actionable analytics.",
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
      whileHover={{ scale: 1.03, translateY: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="p-6 rounded-xl bg-white/90 border border-[#e8f4ff] backdrop-blur-md shadow-lg hover:shadow-2xl"
    >
      <div className="text-3xl md:text-4xl mb-4">{item.icon}</div>
      <h3 className="font-bold text-lg md:text-xl text-[#0B3760] mb-2">
        {item.title}
      </h3>
      <p className="text-[#475569] text-sm md:text-[15px] leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  ))}
</motion.div>

      </div>
      
    </section>
  );
}
