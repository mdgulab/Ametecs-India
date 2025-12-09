import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function AppointmentSection() {
  return (
    <section
      className="relative py-24 bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/office-bg.jpg')", // change your BG here
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <div className="relative container mx-auto px-6 text-center text-white">
        
        {/* TOP ICON */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 
            rounded-xl flex items-center justify-center shadow-lg">
            <img src="/logo-icon.png" className="h-8 opacity-90" />
          </div>
        </motion.div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Visit us for appointment
        </h2>

        {/* Subtitle */}
        <p className="text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed">
          Need help with CRM, Telephony, Smart31, AI Speech Analytics or business
          automation? Connect with our team for consultation & onboarding support.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

          {/* ADDRESS */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              bg-white/10 backdrop-blur-xl border border-white/20 
              p-8 rounded-2xl text-left shadow-xl hover:shadow-blue-500/30 transition
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-600/20 border border-blue-500/40 
                flex items-center justify-center text-white text-2xl">
                <FiMapPin />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Lake City, AY37</h3>
                <p className="text-blue-300 text-sm">Office Address</p>
              </div>
            </div>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              bg-white/10 backdrop-blur-xl border border-white/20 
              p-8 rounded-2xl text-left shadow-xl hover:shadow-blue-500/30 transition
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-600/20 border border-blue-500/40 
                flex items-center justify-center text-white text-2xl">
                <FiMail />
              </div>
              <div>
                <h3 className="text-lg font-semibold">support@ametecs.com</h3>
                <p className="text-blue-300 text-sm">Mail Us</p>
              </div>
            </div>
          </motion.div>

          {/* PHONE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              bg-white/10 backdrop-blur-xl border border-white/20 
              p-8 rounded-2xl text-left shadow-xl hover:shadow-blue-500/30 transition
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-600/20 border border-blue-500/40 
                flex items-center justify-center text-white text-2xl">
                <FiPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold">+91 91234 56789</h3>
                <p className="text-blue-300 text-sm">Phone Number</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
