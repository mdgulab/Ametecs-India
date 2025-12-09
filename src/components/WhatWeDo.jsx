import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "SaaS Platforms for Smarter Business",
    description:
      "We design scalable SaaS platforms that simplify complex operations. From SmartDCM for debt collection, LeadGER for telemarketing, to Telozar for remote BPO teams — our platforms automate workflows, integrate with cloud telephony, and offer real-time tracking.",
    icon: "/icons/ai-1.svg",
  },
  {
    title: "Enterprise Consulting & Digital Transformation",
    description:
      "SmartPayroll & CoreOps CRM power HR, payroll and operational workflows. Ideal for businesses that need total ownership, compliance, automation and visibility.",
    icon: "/icons/ai-2.svg",
  },
  {
    title: "Web Development & Digital Enablement",
    description:
      "We create performance-driven websites, dashboards, mobile apps and digital pipelines. Designed for visibility, growth and conversion across every channel.",
    icon: "/icons/ai-3.svg",
  },
  {
    title: "Legacy System Modernization",
    description:
      "We upgrade traditional SMS, manual dialers and legacy communication systems into AI-driven, cloud-first communication ecosystems with full compliance.",
    icon: "/icons/ai-4.svg",
  },
];

export default function WhatWeDo() {
  
  const [active, setActive] = useState(0);

  return (
    <section id="whatwedo" className="relative py-28 bg-[#f6f9ff] overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white">

      {/* Floating Gradient Lights */}
      <motion.div
        animate={{ x: [0, 40, -40, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -right-20 top-10 w-[500px] h-[500px] bg-blue-300/40 blur-[160px] rounded-full"
      />

      <motion.div
        animate={{ x: [0, -40, 40, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -left-20 bottom-10 w-[450px] h-[450px] bg-purple-300/40 blur-[150px] rounded-full"
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            x: [0, Math.random() * 60 - 30, 0],
            y: [0, Math.random() * 60 - 30, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-blue-500/40 rounded-full blur-[2px]"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
        />
      ))}

      {/* Section Header */}
      <div className="relative text-center mb-16 ">
        <h2 className="text-4xl font-extrabold text-gray-900">What We Do</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-3">
          Scalable SaaS. AI-ready innovation. Digital transformation with impact.
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.8 }}
          className="h-[3px] bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-5 rounded-full"
        />
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:grid grid-cols-2 container mx-auto px-6 gap-14 relative">

        {/* LEFT — Animated Glass Cards */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className={`
                cursor-pointer p-6 rounded-xl backdrop-blur-2xl border relative overflow-hidden
                transition-all duration-300
                ${
                  active === index
                    ? "bg-white/50 border-blue-500 shadow-2xl"
                    : "bg-white/20 border-gray-300 hover:border-blue-300"
                }
              `}
              style={{
                boxShadow:
                  active === index
                    ? "0 0 25px rgba(70,110,255,0.25)"
                    : "0 0 15px rgba(0,0,0,0.05)",
              }}
            >
              {/* Neon border animation */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: active === index ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500"
              />

              <div className="flex items-center gap-4">
                <img src={service.icon} className="h-10 opacity-90" />
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT — Large AI Blur Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.45 }}
            className="
              p-10 rounded-3xl border backdrop-blur-3xl shadow-2xl
              bg-white/25 border-blue-200/40 relative overflow-hidden
            "
            style={{
              boxShadow:
                "0 30px 70px rgba(0,90,220,0.18), inset 0 0 60px rgba(255,255,255,0.3)",
            }}
          >
            {/* Animated mesh background */}
            <motion.div
              animate={{ opacity: [0.15, 0.28, 0.15], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute inset-0 bg-[url('/icons/mesh-grid.svg')] opacity-20"
            />

            <motion.img
              src={services[active].icon}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="h-16 mb-6 opacity-90 drop-shadow-xl"
            />

            <h3 className="text-3xl font-bold text-blue-700 mb-3">
              {services[active].title}
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              {services[active].description}
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="h-[3px] bg-gradient-to-r from-blue-600 to-purple-600 mt-8 rounded-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MOBILE — Accordion + Blur Cards */}
      <div className="lg:hidden container mx-auto px-6 space-y-6 mt-8">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="
              bg-white/40 border border-gray-300 rounded-xl
              backdrop-blur-xl p-5 shadow-lg relative overflow-hidden
            "
          >
            {/* Header */}
            <button
              className="w-full flex justify-between items-center"
              onClick={() => setActive(active === index ? -1 : index)}
            >
              <div className="flex gap-3 items-center">
                <img src={service.icon} className="h-8 opacity-90" />
                <span className="font-semibold text-gray-900">{service.title}</span>
              </div>
              <span className="text-xl text-gray-800">{active === index ? "−" : "+"}</span>
            </button>

            {/* Accordion Body */}
            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-gray-700 leading-relaxed"
                >
                  <p>{service.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
        
      </div>
    </section>
  );
}

