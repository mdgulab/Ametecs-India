import { motion } from "framer-motion";
import { FaIndustry, FaBook, FaGem, FaBuilding, FaFlask, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

export default function IndustriesWeServe() {
  const [hovered, setHovered] = useState(null);

  const items = [
    {
      icon: <FaIndustry />,
      title: "Industrial & Corporate",
      desc: "Enterprise-grade workflow automation, telecalling & operations systems.",
    },
    {
      icon: <FaBook />,
      title: "Publishers",
      desc: "Lead management, campaign automation & subscriber communication.",
    },
    {
      icon: <FaGem />,
      title: "Jewellery + Lifestyle + Fashion",
      desc: "Retail CRM, customer engagement, WhatsApp automation & analytics.",
    },
    {
      icon: <FaBuilding />,
      title: "Real Estate Developers",
      desc: "End-to-end CRM for sales, site visits, funnel tracking & automation.",
    },
    {
      icon: <FaFlask />,
      title: "Pharmaceutical",
      desc: "MR Reporting, agent tracking, telecalling & compliance workflows.",
    },
    {
      icon: <FaShoppingBag />,
      title: "FMCG",
      desc: "Distributor management, retailer onboarding & communication suite.",
    },
  ];

  return (
    <section className="relative w-full py-28 bg-[#F9FBFF] dark:bg-gray-900 overflow-hidden">
      
      {/* subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 opacity-60" />

      <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT SIDE LIST */}
        <div className="space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
                w-full bg-white dark:bg-gray-800 
                shadow-lg hover:shadow-2xl rounded-2xl px-6 py-5 cursor-pointer
                flex items-center gap-5 border border-transparent 
                hover:border-blue-500 transition-all duration-300
              "
            >
              {/* Icon */}
              <div className="
                w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 
                dark:from-blue-500 dark:to-blue-300 
                flex items-center justify-center text-white text-2xl shadow-md
              ">
                {item.icon}
              </div>

              {/* Title + Hover Description */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Show description ONLY on hover */}
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hovered === i ? 1 : 0,
                    height: hovered === i ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 dark:text-gray-300 text-sm mt-1 overflow-hidden"
                >
                  {item.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Industries We Serve
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-xl">
            We help organisations across multiple industry verticals with scalable,
            automated & AI-enabled communication systems designed for growth.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-8 px-7 py-3 rounded-full text-white font-semibold text-lg
              bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg 
              hover:shadow-blue-500/40 transition-all
            "
          >
            Let’s Talk →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
