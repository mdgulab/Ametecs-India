import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";

const items = [
  {
    title: "Languages & Frameworks",
    desc: "Python, PHP, Laravel, React, Angular, Node.js",
    icon: <FaCode className="text-4xl text-blue-700" />,
  },
  {
    title: "Mobile Development",
    desc: "Android (Kotlin, Java), React Native",
    icon: <FaMobileAlt className="text-4xl text-purple-700" />,
  },
  {
    title: "Cloud & Web Technologies",
    desc: "AWS, HTML5, CSS3, Bootstrap, JavaScript",
    icon: <FaCloud className="text-4xl text-indigo-700" />,
  },
];

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="relative py-28 bg-[#f8faff] overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      {/* Background Glow */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-20 -left-10 w-[350px] h-[350px] bg-blue-200/40 blur-[130px] rounded-full"
      />

      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-200/40 blur-[130px] rounded-full"
      />

      <div className="text-center relative mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Expertise Across Leading Technologies
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-3">
          Modern, scalable technology crafted for enterprise-level performance.
        </p>
        <div className="w-16 h-[3px] bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Items */}
      <div className="relative container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -6 }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="
              backdrop-blur-xl bg-white/40
              border border-white/60
              shadow-lg hover:shadow-2xl 
              rounded-3xl p-8 text-center
              transition-all
            "
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">{item.icon}</div>

            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-3">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
