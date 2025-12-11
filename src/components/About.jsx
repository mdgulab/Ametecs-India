import React from "react";
import { motion } from "framer-motion";

import {
  FiShield,
  FiUsers,
  FiClock,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

export default function AboutPage() {
  const stats = [
    { label: "Happy Clients", value: "1500+" },
    { label: "Years in Business", value: "17+" },
    { label: "Installations", value: "865+" },
    { label: "Calls Processed", value: "10M+" },
  ];

  const values = [
    {
      title: "Integrity",
      desc: "We act ethically and transparently in all our dealings.",
      icon: <FiShield size={26} />,
    },
    {
      title: "Connection",
      desc: "Building meaningful relationships with clients and partners.",
      icon: <FiUsers size={26} />,
    },
    {
      title: "Efficiency",
      desc: "Streamlined processes and smart automation for better outcomes.",
      icon: <FiClock size={26} />,
    },
    {
      title: "Excellence",
      desc: "Delivering high-quality solutions with measurable impact.",
      icon: <FiTrendingUp size={26} />,
    },
    {
      title: "Honesty",
      desc: "Open communication and accountability at every step.",
      icon: <FiCheckCircle size={26} />,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#0B3760] antialiased">
      {/* HERO — Enhanced with heavy blur, gradient waves, particles & blobs */}
      <section className="relative overflow-hidden">
        <div className="relative h-[68vh] md:h-[75vh] lg:h-[60vh]">
          {/* THEME GRADIENT BASE */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#006699] via-[#007ea8] to-[#00557c]" />

          {/* PATTERN OVERLAY */}
          <div className="absolute inset-0 opacity-28 mix-blend-overlay">
            <img
              src="/assets/23d30945-2392-4595-8894-a60ac39c2843.png"
              className="w-full h-full object-cover"
              alt="pattern"
            />
          </div>

          {/* DARK CONTRAST OVERLAY */}
          <div className="absolute inset-0 bg-black/6" />

          {/* FLOATING BLOBS */}
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -25, 0], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 14, repeat: Infinity }}
            className="absolute -left-20 top-10 w-[430px] h-[430px] bg-[#00557c] rounded-full blur-[120px]"
            aria-hidden
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 25, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 16, repeat: Infinity }}
            className="absolute right-0 bottom-16 w-[380px] h-[380px] bg-[#0090b5] rounded-full blur-[140px]"
            aria-hidden
          />

          {/* CENTER PULSE GLOW */}
          <motion.div
            animate={{ scale: [0.98, 1.04, 0.98] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute left-1/2 top-10 -translate-x-1/2 w-72 h-72 bg-white/12 rounded-full blur-2xl"
            aria-hidden
          />

          {/* WAVY LINE */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.14] pointer-events-none" aria-hidden>
            <motion.path
              d="M0 300 Q460 150 960 300 T1920 300"
              stroke="#a7caff"
              strokeWidth="1.6"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          {/* FLOATING PARTICLES */}
          {[...Array(22)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.12, 0.45, 0.12],
                y: [-18, 18, -18],
                x: [0, Math.random() * 60 - 30, 0],
              }}
              transition={{ duration: 6 + Math.random() * 6, repeat: Infinity }}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
              }}
              aria-hidden
            />
          ))}

          {/* HERO CONTENT */}
          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-8">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ x: -26, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-2xl text-white py-12"
            >
              <p className="text-sm uppercase tracking-widest text-[#d9f1f6] mb-3 font-semibold">
                Discover Our Story
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                We design communication platforms that scale
              </h1>

              <p className="mt-5 text-white/90 max-w-xl text-lg">
                From modular CRM systems and cloud telephony to AI-driven analytics —
                we build tools that reduce manual work, improve compliance and increase revenue.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-2 bg-white text-[#006699] px-5 py-3 rounded-full font-semibold shadow-lg text-sm"
                  href="/contact"
                >
                  Request Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded-full font-semibold hover:bg-white/8 text-sm"
                  href="#mission"
                >
                  Our Mission
                </motion.a>
              </div>
            </motion.div>

            {/* RIGHT STATS CARD */}
            <motion.aside
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[420px] p-6 rounded-3xl bg-white/12 backdrop-blur-md border border-white/20 text-white shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.06 }}
                    className="p-4 bg-white/8 rounded-lg flex flex-col items-center shadow-sm"
                  >
                    <div className="text-lg md:text-xl font-extrabold text-white">{s.value}</div>
                    <div className="text-xs text-white/80 mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>

          {/* SUPER SOFT BLUR BELOW HERO */}
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-white/75 backdrop-blur-[70px] blur-[80px]" />
        </div>

        {/* CURVED DIVIDER */}
        <svg className="absolute left-0 right-0 bottom-0 w-full" viewBox="0 0 1440 100" fill="none" aria-hidden>
          <path d="M0 40 C360 120 1080 -20 1440 40 L1440 100 L0 100 Z" fill="#ffffff" opacity="0.98" />
        </svg>
      </section>

      {/* ABOUT CONTENT */}
      <section className="container mx-auto px-6 py-20 -mt-10">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#004f71]">
              About Ametecs India Private Limited
            </h2>

            <p className="text-[#475569] mt-4 leading-relaxed text-base">
              Ametecs began with deep expertise in communication systems and has
              grown into a full-scale software, telephony and AI solutions
              provider serving enterprises across sectors.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "SKIP Tracing & SmartDCM",
                  desc: "Our innovations transformed collection workflows, compliance, and debtor tracing.",
                },
                {
                  title: "LeadGER & Telephony",
                  desc: "Automation-first telemarketing and CRM suite designed for high-volume operations.",
                },
                {
                  title: "Outcome-driven Partnership",
                  desc: "We stay involved end-to-end — discovery → implementation → optimization.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white border border-[#eef6ff] shadow-sm rounded-2xl"
                >
                  <h4 className="font-semibold text-[#0B3760]">{item.title}</h4>
                  <p className="text-[#475569] mt-2 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow-md border border-[#eef6ff] rounded-3xl p-6"
            >
              <h4 className="text-lg font-semibold text-[#006699]">Quick Facts</h4>
              <ul className="mt-4 text-[#475569] space-y-3 text-sm">
                <li><strong className="text-[#0B3760]">Incorporated:</strong> Jan 2, 2019</li>
                <li><strong className="text-[#0B3760]">Location:</strong> Hyderabad, India</li>
                <li><strong className="text-[#0B3760]">Products:</strong> SmartDCM, LeadGER, Telozar</li>
                <li><strong className="text-[#0B3760]">Focus:</strong> CRM, Telephony, AI Analytics</li>
              </ul>

              <a
                href="/contact"
                className="block mt-6 text-center py-3 rounded-xl bg-[#006699] text-white font-semibold shadow"
              >
                Talk to an Expert
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow border border-[#eef6ff] rounded-2xl p-4"
            >
              <h5 className="font-semibold text-[#0B3760]">Contact</h5>
              <p className="text-sm text-[#475569] mt-2">
                support@ametecs.com • +91 91234 56789
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION GRID */}
      <section id="mission" className="py-16 bg-gradient-to-r from-[#f6fbfd] to-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-2xl md:text-3xl font-extrabold text-[#006699]"
          >
            Mission • Vision • Delivery
          </motion.h3>

          <p className="text-[#475569] mt-3 max-w-2xl mx-auto">
            How we build, deliver and grow with our partners.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                icon: (
                  <svg width="36" height="36" aria-hidden>
                    <path d="M12 2L15 8H9L12 2Z" fill="#006699" />
                    <path d="M12 22V9" stroke="#006699" strokeWidth="1.5" />
                  </svg>
                ),
                title: "Mission",
                desc: "Deliver AI-driven platforms that free teams from manual work.",
              },
              {
                icon: (
                  <svg width="36" height="36" aria-hidden>
                    <circle cx="12" cy="12" r="8" stroke="#00A3C4" strokeWidth="1.5" />
                  </svg>
                ),
                title: "Vision",
                desc: "Become the trusted communication automation partner.",
              },
              {
                icon: (
                  <svg width="36" height="36" aria-hidden>
                    <rect x="4" y="4" width="16" height="16" rx="3" stroke="#FFB020" strokeWidth="1.5" />
                  </svg>
                ),
                title: "Delivery",
                desc: "Transparent SLAs and measurable KPIs.",
              },
              {
                icon: (
                  <svg width="36" height="36" aria-hidden>
                    <path d="M3 12H21" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: "Outcomes",
                desc: "Improved compliance, conversions and productivity.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl border border-[#eef6ff] shadow-sm p-6 text-left"
              >
                <div className="flex gap-3 items-start">
                  {item.icon}
                  <div>
                    <h4 className="font-semibold text-[#0B3760]">{item.title}</h4>
                    <p className="text-[#475569] text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#006699] mb-6">
            Our Core Values
          </h3>

          <p className="text-[#475569] max-w-xl mx-auto mb-10 text-sm md:text-base">
            Principles we follow when building products, serving customers and
            partnering with businesses.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <motion.div
                whileHover={{ scale: 1.04, y: -5 }}
                key={i}
                className="p-6 bg-white border border-[#eef6ff] shadow-sm rounded-xl"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-[#006699] text-white flex items-center justify-center shadow">
                    {v.icon}
                  </div>
                  <h4 className="font-semibold text-[#0B3760]">{v.title}</h4>
                  <p className="text-sm text-[#475569]">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
   

      <div className="h-20" />
    </main>
  );
}
