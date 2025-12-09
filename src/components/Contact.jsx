import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiMessageSquare,
} from "react-icons/fi";

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
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
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
      setTimeout(() => setStatus("sent"), 1000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-white text-gray-900 antialiased selection:bg-[#006699]/40">
      
{/* ============================================================
   NEW CONTACT HERO — EXACT MATCH TO PROVIDED DESIGN
   ============================================================ */}
<section className="relative overflow-hidden">
  <div className="relative h-[70vh] md:h-[74vh] flex items-center">

    {/* Deep Blue Gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#006699] via-[#0277a3] to-[#8ac9e3]" />

    {/* Floating Particles */}
    {[...Array(35)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.8,
        }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.9, 0.3]
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity
        }}
      />
    ))}

    {/* Soft Glow Left */}
    <div className="absolute top-[10%] left-[5%] w-[380px] h-[380px] bg-[#ffffff22] rounded-full blur-[160px]" />

    {/* Soft Glow Right */}
    <div className="absolute bottom-[8%] right-[5%] w-[380px] h-[380px] bg-[#d4eefc33] rounded-full blur-[170px]" />

    {/* Curved Wave Divider at Bottom */}
    <svg
      className="absolute bottom-0 left-0 right-0 w-full"
      viewBox="0 0 1440 160"
      fill="white"
    >
      <path d="M0 80 C300 140 1140 20 1440 90 V160 H0 Z" />
    </svg>

    {/* ===========================
         CONTENT
       =========================== */}
    <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT TEXT */}
      <div className="text-white max-w-xl">
        <p className="text-sm uppercase tracking-wider text-blue-100">
          CONTACT OUR TEAM
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
          We’re here to help you  
          <span className="block">connect, grow & scale.</span>
        </h1>

        <p className="mt-5 text-white/90 leading-relaxed">
          Whether you need a product demo, onboarding assistance or technical help —
          our specialists are ready to support you.
        </p>

        <div className="mt-8 flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact-form"
            className="px-8 py-3 rounded-full bg-white text-[#006699] font-semibold shadow-lg"
          >
            Send a Message
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#info"
            className="px-8 py-3 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold border border-white/30"
          >
            Contact Info
          </motion.a>
        </div>
      </div>

      

    </div>
  </div>
</section>

      
      {/* ================================================================== */}
      {/* MAIN CONTACT + INFO SECTION (GLASS / THEME MATCHED)                */}
      {/* ================================================================== */}
      <section className="container mx-auto px-6 py-20 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* FORM */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white/70 backdrop-blur-xl border border-[#00669920] shadow-xl p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-extrabold text-[#003b54]">
              Request a Demo or Contact Sales
            </h3>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-gray-700">Full Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-[#006699]/40"
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-gray-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-[#006699]/40"
                  />
                </label>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-gray-700">Phone</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-[#006699]/40"
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-gray-700">Preferred Time</span>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-[#006699]/40"
                  >
                    <option>Morning (9am–12pm)</option>
                    <option>Afternoon (12pm–4pm)</option>
                    <option>Evening (4pm–7pm)</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-sm text-gray-700">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-[#006699]/40"
                />
              </label>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-[#006699] text-white px-6 py-3 rounded-lg shadow font-semibold"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                    ? "Sent ✓"
                    : "Send"}
                </button>

                <a
                  href={`https://wa.me/919123456789?text=Hi, I'm ${encodeURIComponent(
                    form.name
                  )}, Email: ${encodeURIComponent(
                    form.email
                  )}, Message: ${encodeURIComponent(form.message)}`}
                  target="_blank"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg shadow font-semibold"
                >
                  WhatsApp
                </a>
              </div>
            </form>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.aside
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Contact Card */}
            <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-[#00669920]">
              <h4 className="text-lg font-semibold text-[#006699]">
                Contact Information
              </h4>

              <div className="mt-4 space-y-4 text-gray-700">
                <div className="flex gap-3">
                  <FiMapPin className="text-[#006699] mt-1" />
                  <div>
                    <strong>Hyderabad, India</strong>
                    <p className="text-sm text-gray-500">
                      PSR Prime Towers, Gachibowli – 500032
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FiMail className="text-[#006699] mt-1" />
                  <div>
                    <strong>support@ametecs.com</strong>
                    <p className="text-sm text-gray-500">
                      Email our sales & support teams
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FiPhone className="text-[#006699] mt-1" />
                  <div>
                    <strong>+91 91234 56789</strong>
                    <p className="text-sm text-gray-500">Mon–Fri, 9am–6pm IST</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FiClock className="text-[#006699] mt-1" />
                  <div>
                    <strong>Support Hours</strong>
                    <p className="text-sm text-gray-500">
                      Mon–Fri, 9am–18:00 IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a className="block bg-[#006699] text-white text-center px-5 py-3 rounded-lg font-semibold">
                  Email Support
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-2 border border-[#00669920]">
              <iframe
                className="w-full h-48 rounded-xl"
                src="https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-[#006699] text-white py-14">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">Need assistance?</h3>
            <p className="opacity-90 text-sm">
              Our support and sales teams are ready to help within 1 business day.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/contact"
              className="bg-white text-[#006699] px-6 py-3 rounded-lg font-semibold shadow"
            >
              Request Demo
            </a>
            <a
              href="mailto:support@ametecs.com"
              className="border border-white/40 px-6 py-3 rounded-lg font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
