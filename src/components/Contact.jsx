import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiMessageSquare,
} from "react-icons/fi";
import PartnershipSection from "./partnership";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    time: "Morning (9am–12pm)",
    message: "",
  });

  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function openWhatsApp(text) {
    const phone = "919123456789";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const message = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Preferred Time: ${form.time}
Message: ${form.message}
    `;
    setStatus("sending");

    try {
      openWhatsApp(message);
      setTimeout(() => setStatus("sent"), 900);
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-white text-[#0B3760] antialiased selection:bg-[#006699]/30">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] md:h-[74vh] flex items-center">
          {/* Deep Blue Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#006699] via-[#0277a3] to-[#8ac9e3]" />

          {/* Floating Particles */}
          {[...Array(28)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.2 + Math.random() * 0.6,
              }}
              animate={{ y: [0, -14, 0], opacity: [0.25, 0.9, 0.25] }}
              transition={{ duration: 4 + Math.random() * 5, repeat: Infinity }}
            />
          ))}

          {/* Soft glows */}
          <div className="absolute top-[10%] left-[5%] w-[360px] h-[360px] bg-white/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[8%] right-[5%] w-[360px] h-[360px] bg-[#d4eefc33] rounded-full blur-[160px]" />

          {/* Wave divider */}
          <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 160" fill="white" aria-hidden>
            <path d="M0 80 C300 140 1140 20 1440 90 V160 H0 Z" />
          </svg>

          {/* CONTENT */}
          <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT TEXT */}
            <div className="text-white max-w-xl">
              <p className="text-sm uppercase tracking-wider text-blue-100 font-semibold">
                CONTACT OUR TEAM
              </p>

              <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                We’re here to help you
                <span className="block">connect, grow & scale.</span>
              </h1>

              <p className="mt-5 text-white/90 leading-relaxed text-base">
                Whether you need a product demo, onboarding assistance or technical help —
                our specialists are ready to support you.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-white text-[#006699] font-semibold shadow-lg text-sm"
                >
                  Send a Message
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  href="#info"
                  className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold border border-white/30 text-sm"
                >
                  Contact Info
                </motion.a>
              </div>
            </div>

            {/* RIGHT - empty on hero; left for visual balance */}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      {/* CONTACT HUB */}
      <section id="contact" className="relative container mx-auto px-6 py-24 lg:py-28 -mt-16 z-10 text-[#0B3760]">
        {/* Background accents */}
        <div className="pointer-events-none absolute -z-10 inset-x-0 top-0 h-64">
          <div className="absolute inset-x-12 top-6 h-40 rounded-[40px] bg-gradient-to-r from-[#0066990f] via-[#00a3c41a] to-[#5b21ff14] blur-2xl" />
        </div>

        {/* Header row */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e6f3fa] px-3 py-1 border border-[#b8ddf0] text-[12px] font-semibold tracking-[0.18em] text-[#006699] uppercase">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Talk to Ametecs
            </div>

            <h3 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0B3760] leading-tight">
              Share what you need — we’ll reply with a{" "}
              <span className="bg-gradient-to-r from-[#006699] via-sky-500 to-[#006699] text-transparent bg-clip-text">
                tailored walkthrough
              </span>
              .
            </h3>

            <p className="mt-3 text-sm md:text-[15px] text-[#475569] max-w-xl">
              One form for demos, pricing and implementation queries across SmartDCM,
              LeadGER, Telozar, SmartPayroll & more.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:w-[360px]">
            <div className="rounded-2xl bg-white shadow-sm border border-[#d9e9f4] px-3 py-2">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#475569]">Avg. response</p>
              <p className="text-[15px] font-semibold text-[#006699] mt-1">&lt; 24 hours</p>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-[#d9e9f4] px-3 py-2">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#475569]">Channels</p>
              <p className="text-[15px] font-semibold text-[#0B3760] mt-1">Email & WhatsApp</p>
            </div>

            <div className="rounded-2xl bg-[#f5fbff] shadow-sm border border-[#cfeaf6] px-3 py-2 col-span-2 md:col-span-1">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#475569]">Time zones</p>
              <p className="text-[15px] font-semibold text-[#006699] mt-1">Global support</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* FORM PANEL */}
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/95 backdrop-blur-md border border-[#c7e1f1] shadow-[0_18px_48px_rgba(11,55,96,0.06)] rounded-3xl p-6 md:p-8 relative overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-x-0 -top-16 h-24 bg-gradient-to-b from-[#00669914] via-[#00a3c40f] to-transparent" />

            {/* mini steps */}
            <div className="relative flex flex-wrap gap-3 mb-6">
              {[
                "Tell us about your use case",
                "Pick a time window",
                "Get a live product walkthrough",
              ].map((label, i) => (
                <div key={label} className="flex items-center gap-2 rounded-full bg-[#f3f8fc] px-3 py-1 border border-[#d6e7f4]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#006699] text-[12px] text-white font-semibold">{i + 1}</span>
                  <span className="text-[12px] text-[#475569]">{label}</span>
                </div>
              ))}
            </div>

            <h4 className="relative text-base md:text-lg font-semibold text-[#0B3760]">Request a personalised demo</h4>
            <p className="relative mt-1 text-sm text-[#475569]">
              Our team will review your details and reply with a recommended flow, timeline and next steps.
            </p>

            <form className="relative mt-6 space-y-4" onSubmit={handleSubmit}>
              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block text-sm">
                  <span className="text-[#475569]">Full name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="mt-1 w-full rounded-lg border border-[#e6f4fb] px-4 py-2.5 text-sm text-[#0B3760] focus:outline-none focus:ring-2 focus:ring-[#006699]/25"
                  />
                </label>

                <label className="block text-sm">
                  <span className="text-[#475569]">Work email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="mt-1 w-full rounded-lg border border-[#e6f4fb] px-4 py-2.5 text-sm text-[#0B3760] focus:outline-none focus:ring-2 focus:ring-[#006699]/25"
                  />
                </label>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block text-sm">
                  <span className="text-[#475569]">Phone (optional)</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98xxxxxxx"
                    className="mt-1 w-full rounded-lg border border-[#e6f4fb] px-4 py-2.5 text-sm text-[#0B3760] focus:outline-none focus:ring-2 focus:ring-[#006699]/25"
                  />
                </label>

                <label className="block text-sm">
                  <span className="text-[#475569]">Preferred time</span>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-[#e6f4fb] px-4 py-2.5 text-sm bg-white text-[#0B3760] focus:outline-none focus:ring-2 focus:ring-[#006699]/25"
                  >
                    <option>Morning (9am–12pm)</option>
                    <option>Afternoon (12pm–4pm)</option>
                    <option>Evening (4pm–7pm)</option>
                  </select>
                </label>
              </div>

              {/* ROW 3 */}
              <label className="block text-sm">
                <span className="text-[#475569]">What would you like to explore?</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Share your current tools, team size, and what you want to improve…"
                  className="mt-1 w-full rounded-lg border border-[#e6f4fb] px-4 py-2.5 text-sm text-[#0B3760] focus:outline-none focus:ring-2 focus:ring-[#006699]/25"
                />
              </label>

              {/* CTAs */}
              <div className="mt-4 flex flex-wrap gap-4 items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#006699] text-white px-6 py-3 rounded-xl shadow-md text-sm font-semibold hover:bg-[#00547a] transition-colors"
                >
                  {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Send request"}
                </button>

                <a
                  href={`https://wa.me/919123456789?text=Hi, I'm ${encodeURIComponent(form.name || "")}, Email: ${encodeURIComponent(form.email || "")}, Message: ${encodeURIComponent(form.message || "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#22c55e] text-white px-5 py-3 rounded-xl shadow-md text-sm font-semibold hover:bg-[#16a34a] transition-colors"
                >
                  Chat on WhatsApp
                </a>

                <p className="text-[11px] text-[#6b7280] mt-1 w-full md:w-auto">
                  By submitting, you agree to be contacted by the Ametecs team.
                </p>
              </div>
            </form>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.aside
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Live status card */}
            <div className="rounded-3xl bg-[#022536] text-white p-6 shadow-[0_18px_40px_rgba(11,55,96,0.32)] relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#00a3c43a] blur-3xl" />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-sky-200">Support status</p>
                  <h4 className="mt-2 text-lg md:text-xl font-semibold">We’re actively responding from Hyderabad</h4>
                  <p className="mt-2 text-xs md:text-sm text-slate-200 max-w-sm">Mon–Fri, 9am–6pm IST. Share your details and we’ll route it to the right product specialist.</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] text-emerald-200 border border-emerald-400/60">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    Typically replying today
                  </span>
                </div>
              </div>
            </div>

            {/* Contact info card */}
            <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-[#c7e1f1] shadow-[0_16px_36px_rgba(11,55,96,0.08)] p-6 space-y-4">
              <h4 className="text-lg font-semibold text-[#006699]">Contact information</h4>

              <div className="space-y-4 text-[#475569] text-sm">
                <div className="flex gap-3">
                  <FiMapPin className="text-[#006699] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#0B3760]">Hyderabad, India</p>
                    <p className="text-gray-500">PSR Prime Towers, Gachibowli – 500032</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FiMail className="text-[#006699] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#0B3760]">support@ametecs.com</p>
                    <p className="text-gray-500">Sales, product and implementation queries</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FiPhone className="text-[#006699] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#0B3760]">+91 91234 56789</p>
                    <p className="text-gray-500">Mon–Fri, 9am–6pm IST</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FiClock className="text-[#006699] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#0B3760]">Support hours</p>
                    <p className="text-gray-500">Response within one business day for most queries.</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e1edf6] flex flex-wrap gap-3">
                <button className="flex-1 min-w-[150px] bg-[#006699] text-white text-sm px-4 py-2.5 rounded-xl font-semibold hover:bg-[#00547a] transition-colors">
                  Email support
                </button>
                <button className="flex-1 min-w-[150px] border border-[#00669933] text-[#006699] text-sm px-4 py-2.5 rounded-xl font-semibold bg-white hover:bg-[#f1f7fb] transition-colors">
                  Book a 30-min call
                </button>
              </div>
            </div>

            {/* Map card */}
            <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-[#c7e1f1] shadow-[0_16px_36px_rgba(11,55,96,0.08)] p-3">
              <p className="text-xs font-medium text-[#475569] mb-2 px-1">Ametecs HQ – Hyderabad</p>
              <iframe
                className="w-full h-44 rounded-2xl border border-[#d6e7f4]"
                src="https://maps.google.com/maps?q=PSR%20Prime%20Towers%20Gachibowli%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                title="Ametecs HQ map"
              />
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Partnership section (kept as-is, inherits theme) */}
      <PartnershipSection />

      <div className="h-20" />
    </main>
  );
}
