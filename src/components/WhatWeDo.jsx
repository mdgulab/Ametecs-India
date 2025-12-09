import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const tracks = [
  {
    label: "SaaS & Platforms",
    title: "Launch-ready SaaS platforms built around your operations",
    short:
      "Smart products for collections, tele-calling and remote teams — shipped as ready platforms.",
    description:
      "We don’t just build apps, we ship full SaaS playbooks. From debt collection stacks to tele-sales and remote BPO control rooms — every module is designed for uptime, compliance and control.",
    highlights: [
      "Plug-and-play modules for collections, tele-sales & support",
      "Role-based dashboards for ops, QA and leadership",
      "Cloud telephony, IVR & call recording baked in",
    ],
  },
  {
    label: "Enterprise Workflows",
    title: "Automating the boring parts of large enterprises",
    short:
      "Payroll, attendance, workflows and approvals stitched into one single view.",
    description:
      "We streamline how your teams actually work — from HR to operations. Think of it as a control layer on top of your people, processes and tools so nothing slips through the cracks.",
    highlights: [
      "Smart workflows for HR, finance and operations teams",
      "Single source of truth for data and approvals",
      "Policy-driven automation with full audit trails",
    ],
  },
  {
    label: "Web, Apps & CX",
    title: "Websites, portals and apps that are built to convert",
    short:
      "Front-end experiences that feel fast, modern and engineered for revenue.",
    description:
      "Your website, dashboards and apps become one connected experience. We design journeys that turn traffic into leads, leads into customers and customers into loyal users.",
    highlights: [
      "Marketing sites, customer portals & admin consoles",
      "Analytics-ready funnels and tracking",
      "Pixel-perfect UI with performance at the core",
    ],
  },
  {
    label: "Modernization",
    title: "Taking legacy tools and rewiring them for 2025",
    short:
      "From spreadsheets and SMS gateways to cloud-native, API-first systems.",
    description:
      "We sit on top of your existing stack and upgrade it step-by-step. Legacy dialers, SMS tools and manual trackers become intelligent, cloud-ready and AI-assist friendly — without pausing business.",
    highlights: [
      "Gradual migration without downtime",
      "API-first architecture around your core tools",
      "Compliance, logging and observability from day one",
    ],
  },
];

const baseStats = {
  load: 68, // %
  callsPerMin: 320,
  successRate: 94, // %
};

const liveStatsStatic = [
  { label: "Active workflows", value: "124" },
  { label: "APIs / day", value: "1.2M" },
  { label: "Avg. uptime", value: "99.9%" },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(0);
  const [live, setLive] = useState(baseStats);

  // Auto-rotate tracks
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % tracks.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  // Live numbers updating effect for system snapshot
  useEffect(() => {
    const randomBetween = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const id = setInterval(() => {
      setLive((prev) => ({
        load: clamp(prev.load + randomBetween(-5, 5), 40, 95),
        callsPerMin: clamp(
          prev.callsPerMin + randomBetween(-30, 30),
          180,
          520
        ),
        successRate: clamp(
          prev.successRate + randomBetween(-2, 2),
          80,
          99
        ),
      }));
    }, 2000);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="whatwedo"
      className="relative py-20 overflow-hidden bg-[#f3f8fc] text-gray-900"
    >
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#f3f8fc] to-white" />

      <div className="relative container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#006699]/30 bg-[#006699]/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#006699]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Execution Layer
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-[#0B3760]">
            We turn{" "}
            <span className="bg-gradient-to-r from-[#006699] via-sky-500 to-[#0B3760] bg-clip-text text-transparent">
              ideas into operating systems
            </span>{" "}
            for your business.
          </h2>

          <p className="mt-3 max-w-xl text-sm md:text-base text-gray-600">
            One team, four lanes of impact — from SaaS products to workflow
            automation and modernization. Pick a lane on the right and see how
            we plug into your stack.
          </p>

          {/* Theme gradient line under heading */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.6 }}
            className="mt-5 h-[3px] rounded-full bg-gradient-to-r from-[#006699] via-sky-500 to-[#0B3760]"
          />
        </div>

        {/* Main layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr,1.1fr] items-stretch">
          {/* LEFT: Active track detail card */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-7 md:p-9 shadow-[0_16px_45px_rgba(11,55,96,0.16)] backdrop-blur-xl"
          >
            {/* Soft orbs */}
            <motion.div
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#006699]/10 blur-3xl"
              animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.08, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="pointer-events-none absolute -left-32 -bottom-24 h-56 w-56 rounded-full bg-sky-300/14 blur-3xl"
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1.04, 0.96, 1.04] }}
              transition={{ duration: 11, repeat: Infinity }}
            />

            {/* Card top */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f6f9ff] px-3 py-1 text-[11px] font-medium text-[#0B3760] border border-[#dde5f2]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(34,197,94,0.35)]" />
                {tracks[active].label}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                Focus track · {active + 1}/{tracks.length}
              </span>
            </div>

            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-[#0B3760]">
              {tracks[active].title}
            </h3>

            <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700">
              {tracks[active].description}
            </p>

            {/* Highlights */}
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {tracks[active].highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.06 }}
                  className="flex items-start gap-3 rounded-2xl bg-white px-3.5 py-3 border border-[#e3e9f2]"
                >
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#006699] to-sky-400 text-[11px] font-bold text-white shadow-sm">
                    {idx + 1}
                  </span>
                  <p className="text-xs md:text-sm text-gray-700">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Static live stats row */}
            <div className="mt-7 flex flex-wrap gap-4 border-t border-[#e2e7f0] pt-5">
              {liveStatsStatic.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="flex-1 min-w-[120px] rounded-2xl bg-[#f7faff] px-4 py-3 border border-[#dde5f2]"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
                    {stat.label}
                  </p>
                  <motion.div
                    initial={{ y: 4, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.12 + idx * 0.06 }}
                    className="mt-1 flex items-baseline gap-1"
                  >
                    <span className="text-lg md:text-xl font-semibold text-[#006699]">
                      {stat.value}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* Live system snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/95 p-5 backdrop-blur-xl shadow-[0_12px_32px_rgba(11,55,96,0.16)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3760]/80">
                    Live system snapshot
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Quick view of how your stack behaves when things are busy.
                  </p>
                </div>
                <div className="flex flex-col items-end text-[11px] text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Simulated live</span>
                  </div>
                  <span className="mt-1">Updates every 2 sec</span>
                </div>
              </div>

              {/* Live numbers rows */}
              <div className="mt-4 space-y-3">
                {/* Row 1 */}
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-[#f3f7fc] px-3.5 py-3 border border-[#dde5f2]">
                  <div>
                    <p className="text-xs font-medium text-[#0B3760]">
                      Current load on workflows
                    </p>
                    <p className="mt-0.5 text-[11px] text-gray-500">
                      Orchestrations, alerts & rules engine.
                    </p>
                  </div>
                  <motion.div
                    key={live.load}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-2xl font-semibold text-[#006699]">
                      {live.load}
                    </span>
                    <span className="text-sm text-gray-500">%</span>
                  </motion.div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-white px-3.5 py-3 border border-[#e2e7f0]">
                  <div>
                    <p className="text-xs font-medium text-[#0B3760]">
                      Calls processed per minute
                    </p>
                    <p className="mt-0.5 text-[11px] text-gray-500">
                      Blended inbound / outbound streams.
                    </p>
                  </div>
                  <motion.div
                    key={live.callsPerMin}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-2xl font-semibold text-[#006699]">
                      {live.callsPerMin}
                    </span>
                    <span className="text-sm text-gray-500">/min</span>
                  </motion.div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-white px-3.5 py-3 border border-[#e2e7f0]">
                  <div>
                    <p className="text-xs font-medium text-[#0B3760]">
                      Successful flows
                    </p>
                    <p className="mt-0.5 text-[11px] text-gray-500">
                      Completed journeys without manual intervention.
                    </p>
                  </div>
                  <motion.div
                    key={live.successRate}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-2xl font-semibold text-[#006699]">
                      {live.successRate}
                    </span>
                    <span className="text-sm text-gray-500">%</span>
                  </motion.div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-4 flex items-center justify-between gap-3 text-[11px] text-gray-500 border-t border-[#e2e7f0] pt-3">
                <span>Visual demo only – numbers are sample data.</span>
                <span className="h-1 w-16 rounded-full bg-gradient-to-r from-[#006699] to-sky-400" />
              </div>
            </motion.div>

            {/* Track selector list */}
            <div className="space-y-3">
              {tracks.map((track, idx) => {
                const isActive = idx === active;
                return (
                  <motion.button
                    key={track.label}
                    onClick={() => setActive(idx)}
                    whileHover={{ scale: 1.01, x: 3 }}
                    className={`group flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left transition-all ${
                      isActive
                        ? "border-[#006699] bg-white shadow-[0_0_28px_rgba(0,102,153,0.22)]"
                        : "border-[#dde5f2] bg-white/90 hover:border-[#006699]/60 hover:bg-white"
                    }`}
                  >
                    <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#f0f5fb] text-[11px] font-semibold text-[#0B3760] group-hover:bg-[#006699] group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-[#0B3760]">
                          {track.label}
                        </p>
                        {isActive && (
                          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-700 border border-emerald-100">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-gray-600">
                        {track.short}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
