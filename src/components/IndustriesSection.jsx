import { motion } from "framer-motion";
import {
  FaIndustry,
  FaBook,
  FaGem,
  FaBuilding,
  FaFlask,
  FaShoppingBag,
} from "react-icons/fa";
import { useState } from "react";

export default function IndustriesWeServe() {
  const items = [
    {
      icon: <FaIndustry />,
      title: "Industrial & Corporate",
      chipLabel: "Industrial & Corporate",
      desc:
        "Centralise telecalling, ticketing and on-ground coordination for plants, HO and regional teams – with auditable workflows.",
      rollout:
        "Start with one plant or business unit, then standardise SOPs across locations while keeping local variations intact.",
      integrations:
        "Connect to ERPs, HRMS, service CRMs and ticketing tools so ops teams don’t have to jump between 5 different systems.",
      outcomes:
        "Better SLA adherence, clean audit trails, lower leakages and more predictable operations for leadership.",
      sidePoints: [
        "Design approval workflows for purchase, maintenance or customer service that match your existing SOPs.",
        "Set up escalation trees for delayed tasks, high-risk tickets or VIP accounts without manual chasing.",
        "Give HO a single view of what is happening at plants, branches and partner locations in real time.",
        "Track every call, follow-up and field action with timestamps, recordings and ownership.",
      ],
    },
    {
      icon: <FaBook />,
      title: "Publishers",
      chipLabel: "Publishers",
      desc:
        "Bring inbound leads, subscriber communication and renewal follow-ups into one place across channels.",
      rollout:
        "Begin with 1–2 flagship brands or regions, then extend to the rest of your portfolio and language editions.",
      integrations:
        "Plug into landing pages, marketing tools, payment gateways and subscription CRMs without rebuilding everything.",
      outcomes:
        "Higher subscription renewals, better lead-to-sale conversion and sharper campaign reporting.",
      sidePoints: [
        "Auto-route inbound leads from forms, ads and landing pages to the right inside sales team.",
        "Send timely nudges for trials, renewals and abandoned payments over WhatsApp, SMS and email.",
        "Give editors, marketing and sales a shared view of audience segments and campaign performance.",
        "Measure ROI per campaign, channel and sales team in one consolidated dashboard.",
      ],
    },
    {
      icon: <FaGem />,
      title: "Jewellery & Fashion",
      chipLabel: "Jewellery & Fashion",
      desc:
        "Help retail and D2C teams run personalised outreach, store follow-ups and drop campaigns that actually convert.",
      rollout:
        "Launch with top stores or online leads first, then roll out to franchise, SIS and multi-brand outlets.",
      integrations:
        "Connect POS, website, marketplaces and WhatsApp so customer data doesn’t sit in silos.",
      outcomes:
        "Better repeat purchase, higher basket size and more footfalls from the same marketing budget.",
      sidePoints: [
        "Segment customers by ticket size, occasion, purchase history and recency – not just city and age.",
        "Send highly contextual WhatsApp messages for new launches, collections and events.",
        "Give store teams a ready call list for anniversaries, festivals and high-value dormant customers.",
        "Track which campaign, store or stylist is driving the highest repeat revenue.",
      ],
    },
    {
      icon: <FaBuilding />,
      title: "Real Estate",
      chipLabel: "Real Estate",
      desc:
        "Manage enquiries, channel partners, site visits and bookings with a single, transparent funnel.",
      rollout:
        "Start with 1–2 key projects, streamline the funnel, then roll out to the entire project portfolio.",
      integrations:
        "Integrate portals, call tracking numbers, landing pages and your existing CRM if you already use one.",
      outcomes:
        "Higher visit-to-booking ratio, fewer missed callbacks and clear visibility on channel partner performance.",
      sidePoints: [
        "Capture enquiries from portals, walk-ins and ads in one place with auto-source tagging.",
        "Set reminders for follow-ups, document collection, site visits and token payments.",
        "Give channel partners and internal teams separate, clean dashboards with the right level of access.",
        "Predict monthly closures based on funnel health instead of only relying on gut feel.",
      ],
    },
    {
      icon: <FaFlask />,
      title: "Pharma",
      chipLabel: "Pharma",
      desc:
        "Digitise MR reporting, doctor coverage and sample visibility while staying compliant with regulations.",
      rollout:
        "Pilot with one therapy or region, refine the reports you need, then expand to all field teams.",
      integrations:
        "Connect with existing CRM, HRMS and compliance tools so you don’t duplicate data entry.",
      outcomes:
        "Better coverage, more disciplined reporting and clear visibility into MR productivity.",
      sidePoints: [
        "Plan MR routes, visits and coverage targets with clear expectations and daily tracking.",
        "Collect structured feedback from doctors, chemists and stockists in a consistent format.",
        "Automate reminders for call reports, samples, literature and event invites.",
        "Generate management-ready reports without chasing teams for Excel sheets every month.",
      ],
    },
    {
      icon: <FaShoppingBag />,
      title: "FMCG",
      chipLabel: "FMCG",
      desc:
        "Create a connected layer between distributors, retailers and internal teams for faster execution.",
      rollout:
        "Start with priority territories or a new launch, then roll out across zones and states.",
      integrations:
        "Integrate DMS, SFA and scheme management tools to avoid conflicting or duplicate data.",
      outcomes:
        "Faster execution of schemes, cleaner visibility on secondary sales and stronger retailer relationships.",
      sidePoints: [
        "Digitise onboarding, KYC and activation journeys for distributors and retailers.",
        "Communicate schemes, product updates and targets over WhatsApp, SMS and in-app notifications.",
        "Capture outlet-level feedback, OOS issues and competitor activity in real time.",
        "Give sales leaders a live picture of coverage, execution and collections by beat and territory.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.06 },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full py-20 md:py-24 bg-[#f3f8fc] text-gray-900 overflow-hidden">
      {/* decorative orbs */}
      <div className="pointer-events-none absolute -top-20 right-[-40px] h-52 w-52 rounded-full bg-[#00A3C4]/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-40px] left-[-40px] h-60 w-60 rounded-full bg-[#6C5CE7]/8 blur-3xl" />

      <div className="relative container mx-auto px-5 md:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dbeeff] bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#006699] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Industries we work with
          </span>

          {/* Heading sized to match previous sections */}
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B3760]">
            One platform for <span className="text-[#006699]">very different teams</span>
          </h2>

          {/* Body copy tuned to previous components (15-16px on md+) */}
          <p className="mt-3 md:mt-4 text-sm md:text-[15px] text-[#475569] max-w-2xl mx-auto">
            Choose your industry to see how we plug into your workflows and make day-to-day operations more predictable.
          </p>
        </motion.div>

        {/* chips */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 md:mt-12"
        >
          <div className="flex items-center justify-center">
            <div className="inline-flex flex-wrap justify-center gap-3 md:gap-3.5 bg-white/90 backdrop-blur rounded-full px-3 py-2 md:px-4 md:py-2.5 border border-[#e6f4ff] shadow-sm">
              {items.map((item, i) => {
                const isActive = i === activeIndex;
                return (
                  <motion.button
                    key={i}
                    type="button"
                    variants={chipVariants}
                    onClick={() => setActiveIndex(i)}
                    className={`inline-flex items-center gap-2 rounded-full px-3.5 md:px-4 py-1.5 text-xs md:text-[13px] font-medium transition-all duration-200 border ${
                      isActive
                        ? "bg-gradient-to-r from-[#006699] via-[#00A3C4] to-[#38bdf8] text-white border-transparent shadow-md"
                        : "bg-white text-[#11303b] border-[#e6f0fb] hover:border-[#006699]/50 hover:text-[#006699]"
                    }`}
                  >
                    <span className="hidden sm:inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm text-white font-semibold">
                      {i + 1}
                    </span>
                    <span className="line-clamp-1">{item.chipLabel}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* active card + side points */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="mt-10 md:mt-12 grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.05fr)] items-stretch"
        >
          {/* main card */}
          <div className="rounded-3xl bg-white/95 backdrop-blur-sm border border-[#e6f4ff] shadow-[0_14px_40px_rgba(11,55,96,0.08)] px-5 py-6 md:px-7 md:py-7 flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#006699] via-[#00A3C4] to-[#38bdf8] text-white text-2xl shadow-md shrink-0">
                {activeItem.icon}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#006699] font-semibold">Focus industry</p>
                <h3 className="mt-1.5 text-xl md:text-2xl font-semibold text-[#0B3760]">{activeItem.title}</h3>
                <p className="mt-2 text-sm md:text-[15px] text-[#475569]">{activeItem.desc}</p>
              </div>
            </div>

            <div className="mt-6 md:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <div className="rounded-2xl bg-sky-50/90 border border-[#eaf6ff] px-3.5 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B3760]">Rollout</p>
                <p className="mt-1.5 text-xs md:text-[13px] text-[#475569]">{activeItem.rollout}</p>
              </div>
              <div className="rounded-2xl bg-white border border-[#f1f7fb] px-3.5 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B3760]">Integrations</p>
                <p className="mt-1.5 text-xs md:text-[13px] text-[#475569]">{activeItem.integrations}</p>
              </div>
              <div className="rounded-2xl bg-emerald-50/90 border border-emerald-100 px-3.5 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">Outcomes</p>
                <p className="mt-1.5 text-xs md:text-[13px] text-[#475569]">{activeItem.outcomes}</p>
              </div>
            </div>

            <div className="mt-6 md:mt-6 flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#006699] via-[#00A3C4] to-[#38bdf8] px-5 md:px-6 py-2.5 text-sm font-semibold text-white shadow-md"
              >
                Talk to an expert →
              </motion.button>

              <button className="text-xs md:text-sm text-[#475569] underline-offset-4 hover:underline">
                See {activeItem.title.toLowerCase()} playbook
              </button>
            </div>
          </div>

          {/* side points */}
          <div className="rounded-3xl border border-[#eaf6ff] bg-white/90 backdrop-blur-sm px-5 py-5 md:px-6 md:py-6 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B3760]">
              How we help {activeItem.title.toLowerCase()}
            </p>

            <ul className="mt-4 space-y-3.5 text-sm md:text-[15px] text-[#475569]">
              {activeItem.sidePoints.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#006699] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
