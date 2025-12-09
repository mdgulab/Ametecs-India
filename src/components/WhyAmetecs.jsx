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
      icon: <FaPuzzlePiece className="text-white text-4xl" />,
      bg: "bg-blue-600",
      title: "One Ecosystem, Multiple Solutions",
      desc: "SmartDCM, LeadGER, Telozar — all connected with improved scalability, optimized UI and faster performance.",
    },
    {
      icon: <FaTools className="text-white text-4xl" />,
      bg: "bg-green-700",
      title: "Custom-Built, Never One-Size-Fits-All",
      desc: "Now with smoother animations, refined UI elements and modular feature blocks.",
    },
    {
      icon: <FaHandshake className="text-white text-4xl" />,
      bg: "bg-yellow-600",
      title: "Long-Term Support, Not Just Deployment",
      desc: "Enhanced with a cleaner layout and better readability across all screen sizes.",
    },
    {
      icon: <FaRocket className="text-white text-4xl" />,
      bg: "bg-red-600",
      title: "Growth-Focused, Client-Led Innovation",
      desc: "Boosted motion effects and unified design language for a premium experience.",
    },
    {
      icon: <FaShieldAlt className="text-white text-4xl" />,
      bg: "bg-cyan-700",
      title: "Ethical, Secure & Fully Compliant",
      desc: "Sharper visuals and responsive spacing for better structure.",
    },
    {
      icon: <FaStar className="text-white text-4xl" />,
      bg: "bg-green-600",
      title: "Proven Expertise Across Domains",
      desc: "Polished typography and enhanced color balance for stronger presentation.",
    },
  ];

  return (
    <section className="relative w-full py-32 bg-[#f5f9ff] text-gray-900 overflow-hidden">

      {/* Background gradient + pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        <motion.img
          src="/patterns/ametecs-light.svg"
          className="absolute top-0 right-0 w-[420px] opacity-20"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          className="absolute -left-20 top-10 w-[450px] h-[450px] bg-blue-300/30 blur-[160px] rounded-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE — Heading */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-7xl font-extrabold leading-tight text-blue-900"
          >
            Why Choose<br />
            <span className="text-blue-600">Ametecs</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-blue-500 mt-6 mb-10 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-gray-700 text-xl leading-relaxed"
          >
            Smart ecosystem, lightning-fast performance, AI-driven automation and secure scalable platforms.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE — Cards */}
        <div className="flex flex-col gap-14">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? 120 : -120, // alternate direction animation
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="
                flex items-start gap-6 
                group cursor-pointer 
                hover:scale-[1.03] 
                transition-all duration-500 relative
              "
            >
              {/* Neon border glow on hover */}
              <div className="
                absolute inset-0 rounded-2xl opacity-0 
                group-hover:opacity-100 
                transition-all duration-500 
                pointer-events-none
                blur-xl
                bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400
              "></div>

              {/* Icon Diamond */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.8, type: "spring" }}
                className={`
                  w-24 h-24 rounded-2xl shadow-xl z-10
                  flex items-center justify-center transform rotate-45 
                  ${item.bg}
                `}
              >
                <div className="transform -rotate-45">{item.icon}</div>
              </motion.div>

              {/* Text */}
              <div className="z-10">
                <h3 className="text-3xl font-bold mb-2 text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-lg max-w-md leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
