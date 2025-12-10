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
    <footer className="relative bg-[#050814] text-white pt-24 pb-10 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00a3c4] via-[#006699] to-[#8b5cf6]" />

      {/* Soft background grid + glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,150,255,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(76,0,255,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,transparent_0,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:100%_46px,52px_100%] opacity-25" />
      </div>

      {/* ================== TOP STRIP: CTA ================== */}
      <div className="relative container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-[#020617] via-[#020817] to-[#020617] border border-[#1e293b] shadow-[0_22px_60px_rgba(15,23,42,0.8)] px-6 py-6 md:px-10 md:py-8 -mt-10 mb-14 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="flex-1 space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300">
              Ready to see Ametecs in action?
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Book a 30-minute strategy call with our product team.
            </h2>
            <p className="text-sm md:text-[15px] text-slate-300 max-w-xl">
              Walk through SmartDCM, LeadGER and Telozar on a live session with
              our specialists. No slides, only real flows and dashboards.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-sky-500 text-slate-950 font-semibold text-sm shadow-lg shadow-sky-500/30 text-center cursor-pointer"
              href="#contact"
            >
              Book a Demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-sky-400/70 text-sky-100 font-semibold text-sm text-center cursor-pointer bg-sky-500/5"
              href="https://wa.me/919123456789"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Our Team
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ================== MAIN FOOTER GRID ================== */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1.2fr,1.1fr] gap-12 lg:gap-10">
          {/* COLUMN 1: Brand + mini stats */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-sky-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Ametecs · India
              </div>
              <h3 className="mt-4 text-2xl font-bold">A connected ops & CX stack.</h3>
              <p className="mt-3 text-sm text-slate-300 max-w-sm">
                SaaS platforms, cloud telephony and CRM automation for teams
                that run high-volume floors and need predictable outcomes.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-2xl bg-slate-900/80 border border-sky-500/20 px-3 py-3">
                <p className="uppercase tracking-[0.16em] text-slate-400">
                  Platforms
                </p>
                <p className="mt-1 text-lg font-semibold text-sky-300">3+</p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 border border-emerald-500/20 px-3 py-3">
                <p className="uppercase tracking-[0.16em] text-slate-400">
                  Teams
                </p>
                <p className="mt-1 text-lg font-semibold text-emerald-300">
                  50+
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 border border-indigo-500/20 px-3 py-3">
                <p className="uppercase tracking-[0.16em] text-slate-400">
                  Uptime
                </p>
                <p className="mt-1 text-lg font-semibold text-indigo-300">
                  99.9%
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Links (grouped differently) */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                Products
              </p>
              <ul className="space-y-2 text-slate-200">
                <li className="hover:text-sky-300 cursor-pointer">SmartDCM</li>
                <li className="hover:text-sky-300 cursor-pointer">LeadGER</li>
                <li className="hover:text-sky-300 cursor-pointer">Telozar</li>
                <li className="hover:text-sky-300 cursor-pointer">SmartPayroll</li>
              </ul>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                Solutions
              </p>
              <ul className="space-y-2 text-slate-200">
                <li className="hover:text-sky-300 cursor-pointer">
                  Collections & Recoveries
                </li>
                <li className="hover:text-sky-300 cursor-pointer">
                  Tele-sales & CX floors
                </li>
                <li className="hover:text-sky-300 cursor-pointer">
                  Remote BPO teams
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                Company
              </p>
              <ul className="space-y-2 text-slate-200">
                <li className="hover:text-sky-300 cursor-pointer">About Ametecs</li>
                <li className="hover:text-sky-300 cursor-pointer">Careers</li>
                <li className="hover:text-sky-300 cursor-pointer">Partner with us</li>
                <li className="hover:text-sky-300 cursor-pointer">Support</li>
              </ul>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                Resources
              </p>
              <ul className="space-y-2 text-slate-200">
                <li className="hover:text-sky-300 cursor-pointer">Case studies</li>
                <li className="hover:text-sky-300 cursor-pointer">Product updates</li>
                <li className="hover:text-sky-300 cursor-pointer">API docs</li>
              </ul>
            </div>
          </div>

          {/* COLUMN 3: Contact + Social in tiles */}
          <div className="space-y-6">
            {/* Contact card */}
            <div className="rounded-2xl bg-slate-900/80 border border-sky-500/20 px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                Contact
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="mt-0.5 text-sky-300">
                    <FiMapPin />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">
                      Hyderabad, India
                    </p>
                    <p className="text-slate-400 text-xs">
                      PSR Prime Towers, Gachibowli · 500032
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 text-sky-300">
                    <FiMail />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">
                      support@ametecs.com
                    </p>
                    <p className="text-slate-400 text-xs">
                      Sales & implementation queries
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 text-sky-300">
                    <FiPhone />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">
                      +91 91234 56789
                    </p>
                    <p className="text-slate-400 text-xs">
                      Mon–Fri · 9:00–18:00 IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social row – pill buttons */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                Stay in the loop
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <FaLinkedin />, label: "LinkedIn" },
                  { icon: <FaInstagram />, label: "Instagram" },
                  { icon: <FaYoutube />, label: "YouTube" },
                  { icon: <FaXTwitter />, label: "X" },
                  { icon: <FaFacebookF />, label: "Facebook" },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-100 cursor-pointer"
                  >
                    <span className="text-sky-300">{item.icon}</span>
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== FOOTER BOTTOM ================== */}
      <div className="mt-12 border-t border-slate-800/80 pt-5 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Ametecs India Private Limited</span>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <button className="hover:text-slate-200">Privacy Policy</button>
            <span className="text-slate-600">|</span>
            <button className="hover:text-slate-200">Terms</button>
            <span className="text-slate-600">|</span>
            <button className="hover:text-slate-200">SLA & Refunds</button>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Platform status: All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
