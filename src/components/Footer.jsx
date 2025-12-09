import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-[#070D1A] text-white pt-24 pb-10 overflow-hidden">

      {/* 🔵 Animated Background Graphics */}
      <motion.div
        className="absolute -top-20 left-0 w-96 h-96 bg-blue-700/20 blur-[150px] rounded-full"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute -bottom-20 right-0 w-[420px] h-[420px] bg-purple-600/20 blur-[150px] rounded-full"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* ---------- APPOINTMENT SECTION (MIXED WITH FOOTER) ---------- */}
      <div className="container mx-auto px-6 mb-20 relative z-20">
        <h2 className="text-center text-4xl font-bold mb-3">
          Visit us for appointment
        </h2>

        <p className="text-center text-gray-300 max-w-xl mx-auto mb-12">
          Need CRM, Telecalling, AI Insights or SmartDCM setup?  
          Connect with our Ametecs India team anytime.
        </p>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* India Address */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center text-2xl bg-blue-600/20 text-blue-300 border border-blue-500/40 rounded-full">
                <FiMapPin />
              </div>
              <div>
                <h3 className="text-lg font-bold">Hyderabad, India</h3>
                <p className="text-blue-300 text-sm">
                  PSR Prime Towers, DLF Cyber City,  
                  <br /> Gachibowli – 500032
                </p>
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center text-2xl bg-blue-600/20 text-blue-300 border border-blue-500/40 rounded-full">
                <FiMail />
              </div>
              <div>
                <h3 className="text-lg font-bold">support@ametecs.com</h3>
                <p className="text-blue-300 text-sm">Email Us</p>
              </div>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center text-2xl bg-blue-600/20 text-blue-300 border border-blue-500/40 rounded-full">
                <FiPhone />
              </div>
              <div>
                <h3 className="text-lg font-bold">+91 91234 56789</h3>
                <p className="text-blue-300 text-sm">Phone Number</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ---------- SOCIAL SECTION ---------- */}
      <div className="container mx-auto px-6 z-20 relative">
        <h3 className="text-sm tracking-widest text-gray-400">SOCIAL</h3>
        <h2 className="text-3xl font-bold mt-1 mb-10">
          Follow us for the latest updates
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { icon: <FaFacebookF size={26} />, name: "FACEBOOK" },
            { icon: <FaXTwitter size={26} />, name: "X" },
            { icon: <FaYoutube size={26} />, name: "YOUTUBE" },
            { icon: <FaInstagram size={26} />, name: "INSTAGRAM" },
            { icon: <FaLinkedin size={26} />, name: "LINKEDIN" },
          ].map((item, i) => (
            <motion.div
              whileHover={{ x: 6 }}
              key={i}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="text-blue-400">{item.icon}</div>
              <div>
                <p className="text-xs text-gray-400">{item.name}</p>
                <p className="text-sm font-medium">Ametecs</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------- QUICK LINKS ---------- */}
      <div className="container mx-auto px-6 mt-20 relative z-20">
        <h2 className="text-3xl font-bold mb-6">Quick Links</h2>

        <div className="grid md:grid-cols-4 gap-10 text-gray-300">
          {/* 1 */}
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-3 font-semibold text-white">
              Services
            </div>
            <p>SmartDCM</p>
            <p>LeadGER</p>
            <p>Telozar</p>
            <p>SmartPayroll</p>
          </div>

          {/* 2 */}
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-3 font-semibold text-white">
              Solutions
            </div>
            <p>AI Speech Solutions</p>
            <p>Cloud Telephony</p>
            <p>CRM Development</p>
            <p>Custom Integrations</p>
          </div>

          {/* 3 */}
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-3 font-semibold text-white">
              Company
            </div>
            <p>About Us</p>
            <p>Careers</p>
            <p>Support</p>
            <p>Contact Us</p>
          </div>

          {/* 4 */}
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-3 font-semibold text-white">
              Resources
            </div>
            <p>Blogs</p>
            <p>Case Studies</p>
            <p>Pricing</p>
            <p>Documentation</p>
          </div>
        </div>
      </div>

      {/* ---------- FOOTER BOTTOM ---------- */}
      <div className="border-t border-gray-700 mt-16 pt-6 text-center text-gray-400 text-sm">
        <div className="flex justify-center gap-5 flex-wrap mb-3">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Refund Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>

        <p className="text-gray-500">
          © {new Date().getFullYear()} Ametecs India Private Limited – All rights reserved.
        </p>
      </div>

    </footer>
  );
}
