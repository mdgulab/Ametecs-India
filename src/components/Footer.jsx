import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#050814] text-white pt-24 pb-10 overflow-hidden">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00a3c4] via-[#006699] to-[#6366f1]" />

         {/* ================= CTA STRIP ================= */}
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-slate-800 bg-[#020617] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-300 font-semibold">
              Let’s talk business
            </p>
            <h2 className="text-xl md:text-2xl font-bold mt-2">
              Software Services & AI Products for Growing Businesses
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Custom software services and scalable AI products for banks,
              NBFCs, collection agencies, and enterprises.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-sky-500 text-slate-950 font-semibold text-sm text-center"
            >
              Book a Demo
            </a>
            <a
              href="https://wa.me/919123456789"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-sky-400 text-sky-100 text-sm text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
        <br />
        <br />
      </div>
      {/* ================= MAIN FOOTER ================= */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold">Ametecs India Pvt. Ltd.</h3>
            <p className="mt-3 text-sm text-slate-300 max-w-sm">
              We provide enterprise software services and sell AI-powered
              products tailored for banking, finance and operations teams.
            </p>
          </div>

          {/* PRODUCTS & SERVICES */}
          <div className="grid grid-cols-2 gap-8 text-sm">

            {/* PRODUCTS */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3 font-semibold">
                Products
              </p>
              <ul className="space-y-2">
                <li><Link to="/products/smartdcm" className="hover:text-sky-300">SmartDCM</Link></li>
                <li><Link to="/products/leadger" className="hover:text-sky-300">LeadGER</Link></li>
                <li><Link to="/products/telozar" className="hover:text-sky-300">Telozar</Link></li>
                <li><Link to="/products/smartpayroll" className="hover:text-sky-300">SmartPayroll</Link></li>
                <li><Link to="/products/coreops-crm" className="hover:text-sky-300">CoreOps CRM</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3 font-semibold">
                Services
              </p>
              <ul className="space-y-2">
                <li><Link to="/services/app-development" className="hover:text-sky-300">App & Web Development</Link></li>
                <li><Link to="/services/ui-ux-design" className="hover:text-sky-300">UI/UX Design</Link></li>
                <li><Link to="/services/ai-solutions" className="hover:text-sky-300">AI Solutions</Link></li>
                <li><Link to="/services/digital-marketing" className="hover:text-sky-300">Digital Marketing</Link></li>
                <li><Link to="/services/cloud-solutions" className="hover:text-sky-300">Cloud Solutions</Link></li>
                <li><Link to="/services/staff-recruiting" className="hover:text-sky-300">Staff Recruiting</Link></li>
              </ul>
            </div>

          </div>

          {/* CONTACT & SOCIAL */}
          <div className="space-y-6">
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <FiMapPin className="text-sky-300 mt-1" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex gap-3">
                <FiMail className="text-sky-300 mt-1" />
                <span>support@ametecs.com</span>
              </div>
              <div className="flex gap-3">
                <FiPhone className="text-sky-300 mt-1" />
                <span>+91 91234 56789</span>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-3 flex-wrap">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social"><FaYoutube /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social"><FaXTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social"><FaFacebookF /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="mt-12 border-t border-slate-800 pt-5 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-3 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Ametecs India Private Limited</span>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-200">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-slate-200">Terms of Use</Link>
            <Link to="/refund-policy" className="hover:text-slate-200">Refund Policy</Link>
            <Link to="/disclaimer" className="hover:text-slate-200">Disclaimer</Link>
            <Link to="/data-protection" className="hover:text-slate-200">Data Protection</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
