import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StatsAmetecs() {
  const stats = [
    { label: "HAPPY CLIENTS", value: 1500, suffix: "+", icon: "/icons/clients.svg" },
    { label: "YEARS IN BUSINESS", value: 17, suffix: "+", icon: "/icons/years.svg" },
    { label: "INSTALLATIONS", value: 865, suffix: "+", icon: "/icons/install.svg" },
    { label: "CALLS PROCESSED", value: 10000000, suffix: "+", icon: "/icons/calls.svg" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const step = Math.ceil(end / (duration / 20));

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 20);
    });
  }, []);

  return (
    <section 
    className="relative w-full py-16 bg-gradient-to-r from-[#f6f9ff] to-[#eef3ff] dark:from-[#060b1a] dark:to-[#0a112b] overflow-hidden">

      {/* Ametecs floating soft glows */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 left-20 w-40 h-40 bg-blue-400/30 blur-[60px] rounded-full"
      />

      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-10 right-20 w-48 h-48 bg-purple-500/20 blur-[70px] rounded-full"
      />

      {/* Stats Wrapper */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 20px rgba(0,110,255,0.4)",
              }}
              className="
                relative p-6 rounded-xl 
                bg-white/50 dark:bg-white/10 backdrop-blur-2xl
                border border-blue-200/40 dark:border-blue-900/40
                shadow-lg transition-all duration-300
              "
            >
              {/* Divider Line (top) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

              {/* Icon */}
              <motion.img
                src={item.icon}
                className="h-10 mx-auto mb-3 opacity-90"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />

              {/* Number */}
              <motion.h3
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="
                  text-3xl md:text-4xl font-extrabold 
                  text-blue-700 dark:text-blue-400 drop-shadow-sm
                "
              >
                {counts[index].toLocaleString()}
                {item.suffix}
              </motion.h3>

              {/* Label */}
              <p className="
                mt-1 text-gray-700 dark:text-gray-300 
                text-sm font-semibold tracking-wide
              ">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
