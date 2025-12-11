import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rohit Mehra",
    role: "Director – Operations",
    company: "Leading NBFC",
    text:
      "Ametecs helped us streamline our complete collection workflow. SmartDCM boosted efficiency by 40% and removed all manual reporting.",
    logo: "./demo logo/logo1.jpg",
  },
  {
    name: "Srinivas Rao",
    role: "Founder",
    company: "BPO & Telecalling Firm",
    text:
      "LeadGER enabled us to scale from 15 to 120 agents with ease. AI analytics and SmartPing telephony transformed our operations.",
    logo: "./logo2.jpg",
  },
  {
    name: "Priya Varma",
    role: "HR Head",
    company: "Staffing & HR Solutions",
    text:
      "Telozar made remote operations seamless. Monitoring, attendance and performance visibility improved drastically.",
    logo: "./demo logo/logo3.jpg",
  },
  {
    name: "Arjun Patel",
    role: "CEO",
    company: "Real Estate Group",
    text:
      "Ametecs automation and CRM workflows helped improve customer engagement and lead conversions significantly.",
    logo: "./demo logo/logo4.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-[#F5F7FF] overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-300/40 blur-[180px] rounded-full -top-10 left-5"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[450px] h-[450px] bg-purple-300/40 blur-[180px] rounded-full bottom-0 right-5"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Heading */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Trusted by NBFCs, BPOs, Enterprises & Growing Businesses.
        </p>
        <div className="w-20 h-[3px] bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Slider */}
      <div className="relative container mx-auto px-6 max-w-4xl">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row gap-10 items-center md:items-start"
          >
            {/* Left: Logo / Avatar */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 flex items-center justify-center rounded-2xl 
                         bg-white/30 backdrop-blur-xl shadow-md"
            >
              <img
                src={current.logo}
                alt="company"
                className="w-20 h-20 object-contain opacity-90"
              />
            </motion.div>

            {/* Right: Text Section */}
            <div className="flex-1 text-center md:text-left">
              {/* Testimonial */}
              <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed">
                "{current.text}"
              </p>

              {/* Person Info */}
              <div className="mt-6">
                <h4 className="text-xl font-bold text-gray-900">
                  {current.name}
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  {current.role}
                </p>
                <p className="text-blue-700 text-sm font-semibold">
                  {current.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Dots */}
      <div className="mt-10 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-blue-700 scale-110" : "bg-gray-400"
            }`}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </div>
    </section>
  );
}
