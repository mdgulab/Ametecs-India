import { motion } from "framer-motion";

export default function TeamSection() {
  const mainMember = {
    img: "/team/main.jpg",
    name: "Bharath",
    role: "Product Lead",
    desc: "Guiding Ametecs with 10+ years of experience across CRM, SmartDCM, cloud telephony and enterprise automation.",
    stats: [
      { label: "Years in product", value: "10+" },
      { label: "Platforms launched", value: "6+" },
      { label: "Teams scaled", value: "15+" },
    ],
    linkedin: "#", // change to real LinkedIn URL
  };

  const members = [
    {
      img: "/team/t1.jpg",
      name: "Ravi Teja",
      role: "Engineering Lead",
      linkedin: "#",
    },
    {
      img: "/team/t2.jpg",
      name: "Lakshmi",
      role: "Delivery & Ops",
      linkedin: "#",
    },
    {
      img: "/team/t3.jpg",
      name: "Keerthi",
      role: "Product & CX",
      linkedin: "#",
    },
    {
      img: "/team/t4.jpg",
      name: "Suresh",
      role: "Cloud & Infra",
      linkedin: "#",
    },
    {
      img: "/team/t5.jpg",
      name: "Naresh",
      role: "Implementation",
      linkedin: "#",
    },
  ];

  return (
    <section
      id="teamsection"
      className="py-24 relative overflow-hidden bg-[#f3f8fc] text-gray-900"
    >
      {/* Subtle soft orbs for depth */}
      <div className="pointer-events-none absolute -top-24 -left-10 w-72 h-72 bg-[#006699]/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 w-80 h-80 bg-[#00A3C4]/8 blur-3xl rounded-full" />

      {/* Section heading */}
      <div className="relative text-center max-w-2xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#006699] bg-white/80 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#006699]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          People behind the platforms
        </div>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight text-[#0B3760]">
          Meet the team building{" "}
          <span className="bg-gradient-to-r from-[#006699] via-[#00A3C4] to-[#0B3760] bg-clip-text text-transparent">
            Ametecs
          </span>
        </h2>

        <p className="mt-3 text-base text-gray-700 max-w-2xl mx-auto">
          A tight-knit crew of product, engineering and operations experts
          turning complex customer journeys into predictable workflows.
        </p>
      </div>

      <div className="relative container mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-[1.25fr,1.6fr] gap-12 lg:gap-16 items-stretch">
        {/* LEFT — Founder / main card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(11,55,96,0.12)]"
        >
          {/* Soft border/edge tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#006699] to-transparent opacity-15 pointer-events-none" />
          <div className="relative m-[2px] rounded-[1.45rem] bg-white/95 px-8 py-9 flex flex-col gap-6">
            {/* Photo + info */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-7 items-center md:items-start">
              <div className="relative shrink-0">
                <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-xl border-2 border-[#006699]">
                  <img
                    src={mainMember.img}
                    alt={mainMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 rounded-2xl bg-[#0B3760] text-xs text-white px-3 py-1.5 shadow-lg">
                  <span className="font-semibold text-sm">Core leadership</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left space-y-3">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0B3760]">
                    {mainMember.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#006699]">
                    {mainMember.role}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-gray-700">
                  {mainMember.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {[
                    "SmartDCM",
                    "Cloud telephony",
                    "CRM strategy",
                    "Enterprise rollouts",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="text-[12px] rounded-full bg-[#f4f9ff] px-3 py-1 text-[#0B3760] border border-[#e6f0fb]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LinkedIn button */}
                <div className="flex justify-center md:justify-start pt-1">
                  <a
                    href={mainMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#0A66C2] bg-[#006699]/20 px-3.5 py-1.5 text-xs font-medium text-[#0A66C2] hover:bg-[#0A66C2]/12 transition-colors"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#0A66C2] text-[11px] font-bold text-white">
                      in
                    </span>
                    <span>View LinkedIn profile</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Founder stats row */}
            <div className="grid grid-cols-3 gap-3 border-t border-[#eef4fb] pt-5">
              {mainMember.stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center rounded-2xl bg-[#fbfdff] px-3 py-3 border border-[#eef6ff]"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-gray-500">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#0B3760]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Team grid + intro strip */}
        <div className="flex flex-col gap-6">
          {/* Intro strip */}
          <div className="rounded-2xl bg-white/95 border border-[#eef4fb] px-5 py-4 text-sm text-gray-700 shadow-sm flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <p>
              Cross-functional team across{" "}
              <span className="font-semibold text-[#006699]">product, engineering, CX and delivery</span>{" "}
              working as one squad with clients.
            </p>
          </div>

          {/* Grid of members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {members.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative group rounded-2xl bg-white/95 border border-[#006699] px-1 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-250 overflow-hidden"
              >
                {/* subtle top tint */}
                <div className="absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-[#e8f7ff] to-transparent opacity-70 pointer-events-none" />

                <div className="relative px-5 pb-5 pt-7 flex flex-col items-center text-center gap-3">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow border-2 border-[#006699]">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#0B3760]">{m.name}</h4>
                    <p className="text-[13px] font-semibold text-[#006699] mt-1">{m.role}</p>
                  </div>

                  <div className="mt-1 text-[13px] text-gray-600">
                    <p className="hidden sm:block">
                      Keeps <span className="font-medium">releases on time</span> and{" "}
                      <span className="font-medium">systems stable</span> in production.
                    </p>
                  </div>

                  <div className="mt-2 w-full flex items-center justify-between gap-2">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#f4f9ff] text-[#0B3760] border border-[#e6f0fb]">
                        Core team
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#ecf8f3] text-emerald-700 border border-emerald-100">
                        Hands-on
                      </span>
                    </div>

                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-[#0A66C2] bg-[#0A66C2]/6 h-8 w-8 text-[11px] font-bold text-[#0A66C2] hover:bg-[#0A66C2]/12 transition-colors"
                      aria-label={`${m.name} on LinkedIn`}
                    >
                      in
                    </a>
                  </div>

                  {/* hover glass overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#006699]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
