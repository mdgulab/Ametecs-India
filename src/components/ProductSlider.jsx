import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

// ✅ Yahan apna WhatsApp number daalo (country code + number, bina +)
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const SLIDES = [
  {
    id: "smartdcm",
    tag: "SmartDCM",
    title: "SmartDCM — SPAM-Free, AI-Driven Debt Collection",
    subtitle: "For banks, NBFCs & collection agencies",
    description:
      "SPAM-free, compliant debt collection stack with AI checks and bucket-wise strategies. Built for regulated, high-volume collections.",
    highlights: [
      "SPAM / DND compliant calling",
      "AI script & call compliance",
      "Bucket / strategy based workflows",
    ],
    bestFor: ["Banks", "NBFCs", "Collections agencies"],
    meta: { deploy: "Cloud / VPC", goLive: "< 4 weeks" },
    stats: [
      { label: "Live queues", base: 12, format: "int" },
      { label: "Agents online", base: 86, format: "int" },
      { label: "Today’s connects", base: 3400, format: "kplus" },
    ],
  },
  {
    id: "leadger",
    tag: "LeadGER",
    title: "LeadGER — Telemarketing & Lead Ops",
    subtitle: "Lead capture • Telecalling • Analytics",
    description:
      "Central lead hub to capture, route and track every call outcome so marketing & sales work on the same truth.",
    highlights: [
      "Multi-source lead capture",
      "Smart routing to callers",
      "Connect / not-connect analytics",
    ],
    bestFor: ["Marketing", "Inside sales", "Agencies"],
    meta: { deploy: "Cloud", goLive: "1–2 weeks" },
    stats: [
      { label: "New leads today", base: 980, format: "intplus" },
      { label: "Leads in dialer", base: 4100, format: "k" },
      { label: "Contact rate", base: 62, format: "percent" },
    ],
  },
  {
    id: "telozar",
    tag: "Telozar",
    title: "Telozar — Managed Calling Workforce",
    subtitle: "On-demand Remote Telecallers",
    description:
      "Managed remote telecalling teams where hiring, training, monitoring and payouts are handled for you.",
    highlights: [
      "Fully managed telecallers",
      "Quality monitoring & scorecards",
      "Payouts & attendance handled",
    ],
    bestFor: ["BFSI", "Edtech", "Consumer brands"],
    meta: { deploy: "Managed service", goLive: "10–15 days" },
    stats: [
      { label: "Active callers", base: 230, format: "int" },
      { label: "Campaigns running", base: 17, format: "int" },
      { label: "Avg. QA score", base: 92, format: "percent" },
    ],
  },
  {
    id: "smartpayroll",
    tag: "SmartPayroll",
    title: "SmartPayroll — Payroll Automation",
    subtitle: "Payroll • Payslip • Compliance",
    description:
      "End-to-end payroll for multi-location teams with payslips and statutory compliance built-in.",
    highlights: [
      "Complex salary structures",
      "Automated PF / ESI / TDS",
      "Employee self-service portal",
    ],
    bestFor: ["SMBs", "Enterprises", "Staffing firms"],
    meta: { deploy: "On-prem / Cloud", goLive: "4–6 weeks" },
    stats: [
      { label: "Employees in cycle", base: 3200, format: "k" },
      { label: "Entities", base: 14, format: "int" },
      { label: "Payroll status", base: 1, format: "status" },
    ],
  },
  {
    id: "coreops",
    tag: "CoreOps CRM",
    title: "CoreOps CRM — Sales & Ops CRM",
    subtitle: "CRM • Telephony • Automations",
    description:
      "Lightweight CRM focused on operations and inside sales, with telephony and workflows baked in.",
    highlights: [
      "Unified lead & customer view",
      "Inbuilt telephony & notes",
      "Workflows & nudges",
    ],
    bestFor: ["Inside sales", "Ops teams", "Founder-led sales"],
    meta: { deploy: "Cloud / VPC", goLive: "2–3 weeks" },
    stats: [
      { label: "Open deals", base: 540, format: "intplus" },
      { label: "Tasks due today", base: 120, format: "int" },
      { label: "Win rate", base: 28, format: "percent" },
    ],
  },
];

function formatStat(stat, tickOffset) {
  const base = stat.base ?? 0;
  const v = base + tickOffset;

  switch (stat.format) {
    case "k":
      return `${(v / 1000).toFixed(1)}K`;
    case "kplus":
      return `${(v / 1000).toFixed(1)}K+`;
    case "percent":
      return `${Math.min(99, v)}%`;
    case "intplus":
      return `${v}+`;
    case "status":
      return v % 2 === 0 ? "On track" : "In review";
    case "int":
    default:
      return `${v}`;
  }
}

export default function ProductShowcaseSlider({
  slides = SLIDES,
  autoplay = true,
  autoplayDelay = 6000,
}) {
  const [index, setIndex] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [liveTick, setLiveTick] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const len = slides.length;
  const autoRef = useRef(null);
  const touchStart = useRef(null);
  const visualRef = useRef(null);

  // autoplay
  useEffect(() => {
    if (!autoplay || len <= 1) return;
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, autoplayDelay, len]);

  function startAutoplay() {
    stopAutoplay();
    autoRef.current = setInterval(
      () => setIndex((i) => (i + 1) % len),
      autoplayDelay
    );
  }

  function stopAutoplay() {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  }

  // keyboard
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setModalOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // "live" tick for numbers
  useEffect(() => {
    const id = setInterval(() => {
      setLiveTick((t) => (t + 1) % 1000000);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + len) % len);
  }
  function next() {
    setIndex((i) => (i + 1) % len);
  }
  function goTo(i) {
    setIndex(i % len);
  }

  // touch (slider)
  function onTouchStart(e) {
    touchStart.current = e.touches ? e.touches[0].clientX : e.clientX;
    stopAutoplay();
  }
  function onTouchEnd(e) {
    const end = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = (touchStart.current || 0) - end;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    touchStart.current = null;
    startAutoplay();
  }

  // parallax (left card)
  function handleMouseMove(e) {
    const el = visualRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const rx = (e.clientX - rect.left) / rect.width;
    const ry = (e.clientY - rect.top) / rect.height;
    const x = (rx - 0.5) * 14;
    const y = (ry - 0.5) * 10;
    setParallax({ x, y });
  }
  function handleMouseLeave() {
    setParallax({ x: 0, y: 0 });
  }

  // modal
  function openModal(product) {
    setModalProduct(product);
    setModalOpen(true);
    setSent(false);
  }
  function closeModal() {
    setModalOpen(false);
    setForm({ name: "", email: "", phone: "", message: "" });
    setSending(false);
    setSent(false);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    const productName = modalProduct?.tag || slides[index]?.tag || "Product";

    const msgLines = [
      `Product: ${productName}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
      form.message ? `Message: ${form.message}` : "",
      "",
      "Source: Website product slider demo request",
    ].filter(Boolean);

    const text = msgLines.join("\n");

    try {
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        text
      )}`;
      window.open(waUrl, "_blank");
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  const currentSlide = slides[index];

  return (
    <section 
    id="Products" 
    className="relative py-16 md:py-20 bg-gradient-to-b from-[#f3f8fc] to-white overflow-hidden">
      {/* subtle background circles */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#006699]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#00A3C4]/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* section header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#006699] uppercase">
              Product suite
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#0B3760]">
              Telephony, collections & ops products that work together
            </h2>
          </div>
          <p className="text-[11px] text-gray-500">
        
          </p>
        </div>

        {/* main two-column layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">
          {/* LEFT: slider card */}
          <div className="md:w-[42%]">
            <div className="relative h-full">
              {/* niche blur card removed as requested */}

              <div
                ref={visualRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                className="relative"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0, x: -24, scale: 0.97 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 24, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <motion.div
                      animate={{ x: parallax.x, y: parallax.y }}
                      transition={{ type: "spring", stiffness: 120, damping: 18 }}
                      className="relative rounded-3xl bg-white/90 border border-white shadow-[0_18px_45px_rgba(8,45,80,0.25)] px-5 py-6 md:px-6 md:py-7"
                      style={{
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      }}
                    >
                      {/* top row with LIVE badge + green glow */}
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-[#006699]/80">
                            Product
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[#0B3760]">
                            {currentSlide.tag}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-2 text-[11px] px-2.5 py-1 rounded-full bg-[#ecfdf5] text-emerald-700 border border-emerald-100">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                          </span>
                          Live overview
                        </span>
                      </div>

                      <p className="mt-3 text-xs text-gray-600 leading-relaxed line-clamp-4">
                        {currentSlide.description}
                      </p>

                      {/* LIVE-LIKE STATS (different per product + slight movement) */}
                      <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                        {currentSlide.stats?.map((s, idx) => {
                          const offset = (liveTick % (idx + 3)) - 1; // -1..+1 / -1..+2
                          const displayValue = formatStat(s, offset);
                          return (
                            <div
                              key={s.label}
                              className="rounded-xl bg-[#f5f8fb] px-3 py-2 border border-gray-100"
                            >
                              <p className="text-[10px] text-gray-500">
                                {s.label}
                              </p>
                              <motion.p
                                key={displayValue}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="mt-1 font-semibold text-[#0B3760]"
                              >
                                {displayValue}
                              </motion.p>
                            </div>
                          );
                        })}
                      </div>

                      {/* NEW mini live pulse card instead of old system activity bar */}
                      <div className="mt-4 rounded-xl bg-[#f0f7ff] px-3 py-2 flex items-center justify-between gap-3 border border-[#d6e6f7]">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-medium text-[#0B3760]">
                            Live pulse
                          </span>
                          <span className="text-[10px] text-gray-500">
                            Auto-refreshing every few seconds
                          </span>
                        </div>
                        <div className="relative h-6 w-20 overflow-hidden rounded-md bg-white/70 border border-white">
                          <motion.div
                            className="absolute inset-0 bg-[linear-gradient(90deg,#006699_0%,#00A3C4_50%,#006699_100%)] mix-blend-multiply"
                            initial={{ x: "-60%" }}
                            animate={{ x: "60%" }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          />
                          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.7),transparent_55%)]" />
                        </div>
                      </div>

                      {/* arrows + dots row */}
                      <div className="mt-5 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={prev}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#006699]/20 text-[#006699] text-sm hover:bg-[#006699]/5 transition"
                            aria-label="Previous product"
                          >
                            <FiChevronLeft />
                          </button>
                          <button
                            onClick={next}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#006699]/20 text-[#006699] text-sm hover:bg-[#006699]/5 transition"
                            aria-label="Next product"
                          >
                            <FiChevronRight />
                          </button>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {slides.map((s, i) => (
                            <button
                              key={s.id}
                              onClick={() => goTo(i)}
                              className={`h-1.5 rounded-full transition ${
                                i === index ? "w-5 bg-[#006699]" : "w-2 bg-gray-300"
                              }`}
                              aria-label={`Go to ${s.tag}`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT: main content (same as pehle) */}
          <div className="md:flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id + "-content"}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full flex flex-col gap-6"
              >
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#006699]/8 px-3 py-1 border border-[#006699]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3C4]" />
                    <span className="text-[11px] font-medium text-[#006699]">
                      {currentSlide.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-bold text-[#0B3760]">
                    {currentSlide.title}
                  </h3>
                  {currentSlide.subtitle && (
                    <p className="mt-1 text-xs text-gray-500">
                      {currentSlide.subtitle}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-[#0B3760]/80 uppercase tracking-[0.16em]">
                      Highlights
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-gray-700">
                      {currentSlide.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#006699]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-[#0B3760]/80 uppercase tracking-[0.16em]">
                        Best suited for
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {currentSlide.bestFor.map((b) => (
                          <span
                            key={b}
                            className="text-[11px] px-2.5 py-1 rounded-full bg-[#006699]/8 text-[#006699] border border-[#006699]/20"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-[11px] text-gray-600">
                      <div className="rounded-xl bg-white/60 border border-gray-200 px-3 py-2">
                        <p className="text-[10px] text-gray-500">Deployment</p>
                        <p className="mt-1 font-semibold text-[#0B3760]">
                          {currentSlide.meta.deploy}
                        </p>
                      </div>
                      <div className="rounded-xl bg-white/60 border border-gray-200 px-3 py-2">
                        <p className="text-[10px] text-gray-500">Typical go-live</p>
                        <p className="mt-1 font-semibold text-[#0B3760]">
                          {currentSlide.meta.goLive}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`/products/${currentSlide.id}`}
                    className="inline-flex items-center px-5 py-2.5 rounded-md bg-[#006699] text-white text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                  >
                    View full product page
                  </a>
                  <button
                    onClick={() => openModal(currentSlide)}
                    className="px-5 py-2.5 rounded-md border border-[#006699]/50 text-[#006699] text-sm font-semibold bg-white hover:bg-[#006699]/5 transition"
                  >
                    Request WhatsApp demo
                  </button>
                  <span className="text-[11px] text-gray-500">
                    Form submit → WhatsApp message auto-fill.
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* MODAL: Request Demo (WhatsApp redirect) */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="absolute inset-0 bg-black/40" onClick={closeModal} />
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative bg-white rounded-xl shadow-xl max-w-xl w-full p-6 z-10"
            >
              <button
                className="absolute right-4 top-4 p-2 text-gray-500 hover:text-gray-800"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FiX />
              </button>

              <h3 className="text-xl font-semibold text-[#0B3760]">
                Request a Demo — {modalProduct?.tag}
              </h3>
           
              {sent ? (
                <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded text-sm text-green-800">
                 Successfully Submitted.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                      placeholder="Full name"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#006699]/40"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleFormChange}
                      placeholder="Email"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#006699]/40"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleFormChange}
                      placeholder="Phone (optional)"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#006699]/40"
                    />
                    <input
                      name="message"
                      value={form.message}
                      onChange={handleFormChange}
                      placeholder="Short message (optional)"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#006699]/40"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center gap-2 bg-[#006699] text-white px-4 py-2 rounded-md font-semibold text-sm disabled:opacity-70"
                    >
                      {sending ? "Opening WhatsApp..." : "Send & Open WhatsApp"}
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-md border text-sm"
                      onClick={() =>
                        setForm({ name: "", email: "", phone: "", message: "" })
                      }
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* accessibility */}
      <div aria-live="polite" className="sr-only">
        {sent ? "WhatsApp opened" : ""}
      </div>
    </section>
  );
}
