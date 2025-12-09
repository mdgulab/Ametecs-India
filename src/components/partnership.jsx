import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiUsers, FiBriefcase, FiStar, FiShield, FiMail, FiPhone } from "react-icons/fi";

export default function PartnershipSection() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", type: "Reseller" });
  const [sent, setSent] = useState(false);
  const marqueeRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function openWhatsApp(text) {
    const phone = "919123456789"; // change to your partner inbox number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function submitPartner(e) {
    e.preventDefault();
    const text = `Partner inquiry - Name: ${form.name} | Company: ${form.company} | Email: ${form.email} | Phone: ${form.phone} | Type: ${form.type}`;
    openWhatsApp(text);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", company: "", email: "", phone: "", type: "Reseller" });
  }

  // partner logos — replace with real logos in /assets
  const partners = [
    "/assets/465e0e84-ec35-4eea-b4f8-cebc7879b18a.png",
    "/assets/b2a0e410-950a-4ab4-94f6-184617c4b9ab.png",
    "/assets/23d30945-2392-4595-8894-a60ac39c2843.png",
    "/assets/881d92f1-7d2b-4f58-be1f-737a8cc95d76.png",
    "/assets/17db0c3a-34ab-4d44-84a7-550513559236.png",
  ];

  // small auto-scroll for marquee
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let raf;
    let pos = 0;
    const step = 0.5; // speed
    function loop() {
      pos -= step;
      if (Math.abs(pos) >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const cardEnter = { hidden: { y: 12, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  return (
    <section id="partnership" 
    className="relative py-24 bg-gradient-to-b from-white to-[#eef8fb] overflow-hidden">
      {/* Decorative SVG background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#006699" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#00A3C4" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g1)" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* HERO/INTRO (left) */}
          <motion.div variants={cardEnter} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-lg bg-[#006699]/10 grid place-items-center text-[#006699] shadow"> <FiUsers size={22} /></div>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#003b54]">Partner with Ametecs — Grow Together</h2>
                <p className="mt-3 text-gray-700 max-w-2xl">We collaborate with resellers, integrators and strategic partners to deliver CRM, telephony and AI-powered automation. Join our partner program to access leads, training, marketing support and generous margins.</p>
              </div>
            </div>

            {/* Benefits with icons — large, graphic tiles */}
            <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 120 }} className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-[#006699]/10 text-[#006699] grid place-items-center"><FiBriefcase size={20} /></div>
                <div>
                  <div className="font-semibold">Market ready assets</div>
                  <div className="text-sm text-gray-500">Sales kits, landing pages and co-branded collateral.</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 120, delay: 0.03 }} className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-[#00a3c4]/10 text-[#00a3c4] grid place-items-center"><FiStar size={20} /></div>
                <div>
                  <div className="font-semibold">Priority support</div>
                  <div className="text-sm text-gray-500">Dedicated partner desk and technical onboarding.</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 120, delay: 0.06 }} className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-[#005580]/10 text-[#005580] grid place-items-center"><FiShield size={20} /></div>
                <div>
                  <div className="font-semibold">Comprehensive training</div>
                  <div className="text-sm text-gray-500">Enablement sessions, videos and sandbox environments.</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 120, delay: 0.09 }} className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-[#006699]/10 text-[#006699] grid place-items-center"><FiUsers size={20} /></div>
                <div>
                  <div className="font-semibold">Partner success program</div>
                  <div className="text-sm text-gray-500">Joint planning, quarterly reviews and incentive tiers.</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Tiers graphic */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.12 }} className="mt-10 bg-gradient-to-r from-white to-[#f8fbfc] p-6 rounded-2xl border border-gray-100 shadow">
              <h4 className="font-semibold text-[#003b54]">Partner Tiers</h4>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border shadow-sm text-center">
                  <div className="font-bold">Reseller</div>
                  <div className="text-xs text-gray-500 mt-2">Fast onboarding, sales enablement and starter margins.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border shadow-sm text-center">
                  <div className="font-bold">Integrator</div>
                  <div className="text-xs text-gray-500 mt-2">API access, implementation guides and integration support.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border shadow-sm text-center">
                  <div className="font-bold">Strategic</div>
                  <div className="text-xs text-gray-500 mt-2">Tailored GTM, co-selling and priority allocation.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* FORM + PARTNERS (right) */}
          <motion.aside variants={cardEnter} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5 space-y-6">

            {/* FEATURED ILLUSTRATION + CTA */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#006699]/10 grid place-items-center text-[#006699]"> <FiMail size={22} /></div>
                <div>
                  <div className="font-semibold">Partner Inquiries</div>
                  <div className="text-sm text-gray-500">Apply quickly — we'll follow up within 1 business day.</div>
                </div>
              </div>

              <div className="mt-4">
                <form onSubmit={submitPartner} className="space-y-3">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#006699]/40" />
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Company" required className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#006699]/40" />
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#006699]/40" />

                  <div className="grid grid-cols-2 gap-3">
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#006699]/40" />
                    <select name="type" value={form.type} onChange={handleChange} className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#006699]/40">
                      <option>Reseller</option>
                      <option>Integrator</option>
                      <option>Strategic</option>
                    </select>
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <button type="submit" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#006699] text-white px-4 py-2 rounded-lg font-semibold shadow">{sent ? 'Sent ✓' : 'Apply'}</button>
                    <button type="button" onClick={() => openWhatsApp(`Hi, I'm ${form.name || 'interested in partnership'}. Please contact me.`)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200">Message on WhatsApp</button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* PARTNER LOGOS — rich graphic strip with animated marquee */}
            <motion.div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
              <h5 className="font-semibold mb-3">Trusted by</h5>

              <div className="overflow-hidden">
                <div className="flex gap-6 items-center" style={{ alignItems: 'center' }}>
                  {/* duplicated list for smooth infinite marquee */}
                  <div className="flex gap-6 items-center" ref={marqueeRef} style={{ willChange: 'transform' }}>
                    {partners.concat(partners).map((p, i) => (
                      <div key={i} className="min-w-[110px] p-2 bg-[#f8fbfc] rounded-lg flex items-center justify-center">
                        <img src={p} alt={`partner-${i}`} className="h-8 object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* QUICK STATS and CTA */}
            <motion.div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white shadow border border-gray-100 text-center">
                <div className="text-2xl font-bold text-[#006699]">1500+</div>
                <div className="text-xs text-gray-500">Clients</div>
              </div>
              <div className="p-4 rounded-xl bg-white shadow border border-gray-100 text-center">
                <div className="text-2xl font-bold text-[#006699]">17+</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
            </motion.div>

            <motion.div className="mt-4">
              <a href="/contact?type=partner" className="w-full inline-flex items-center justify-center py-3 rounded-lg bg-[#006699] text-white font-semibold">Apply now</a>
            </motion.div>

          </motion.aside>
        </div>
      </div>

      {/* small inline styles for marquee responsiveness */}
      <style>{`
        @media (min-width: 1024px) {
          /* larger logos column spacing */
        }
        /* ensure marquee has no text selection and smooth display */
        .no-select { user-select: none; -webkit-user-select: none; }
      `}</style>
    </section>
  );
}
