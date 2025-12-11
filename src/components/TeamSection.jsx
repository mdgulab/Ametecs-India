import { motion } from "framer-motion";

export default function TeamSection() {
  const mainMember = {
    img: "src/assets/profile3.jpg",
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
      img: "./profile.jpg",
      name: "Ravi Teja",
      role: "Engineering Lead",
      linkedin: "#",
    },
    {
      img: "./profile4.jpg",
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
      img: "./profile2.jpg",
      name: "Suresh",
      role: "Cloud & Infra",
      linkedin: "#",
    },
    {
      img: "./profile1.jpg",
      name: "Naresh",
      role: "Implementation",
      linkedin: "#",
    },
  ];

  return (
    <section
      id="teamsection"
      className="py-14 md:py-20 relative overflow-hidden bg-[#f3f8fc] text-gray-900"
    >
      {/* Subtle soft orbs for depth */}
      <div className="pointer-events-none absolute -top-20 -left-10 w-56 h-56 bg-[#006699]/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 w-60 h-60 bg-[#00A3C4]/8 blur-3xl rounded-full" />

      {/* Section heading */}
      <div className="relative text-center max-w-xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#006699] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#006699]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          People behind the platforms
        </div>

        <h2 className="mt-3 text-2xl md:text-3xl font-extrabold leading-snug text-[#0B3760]">
          Meet the team building{" "}
          <span className="bg-gradient-to-r from-[#006699] via-[#00A3C4] to-[#0B3760] bg-clip-text text-transparent">
            Ametecs
          </span>
        </h2>

        <p className="mt-2 text-[13px] md:text-sm text-gray-700 max-w-xl mx-auto">
          Product, engineering and operations experts turning complex customer
          journeys into predictable workflows.
        </p>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-[1.1fr,1.4fr] gap-8 md:gap-12 items-stretch">
        {/* LEFT — Founder / main card */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden shadow-[0_14px_36px_rgba(11,55,96,0.12)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#006699] to-transparent opacity-10 pointer-events-none" />
          <div className="relative m-[2px] rounded-[1.1rem] bg-white/95 px-5 py-6 md:px-7 md:py-7 flex flex-col gap-5">
            {/* Photo + info */}
            <div className="flex gap-4 md:gap-6 items-center md:items-start flex-col sm:flex-row">
              <div className="relative shrink-0">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-md border-2 border-[#006699]">
                  <img
                    src={mainMember.img}
                    alt={mainMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 rounded-xl bg-[#0B3760] text-[10px] text-white px-2.5 py-1 shadow-md">
                  <span className="font-semibold">Core leadership</span>
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left space-y-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0B3760]">
                    {mainMember.name}
                  </h3>
                  <p className="mt-0.5 text-xs md:text-sm font-semibold text-[#006699]">
                    {mainMember.role}
                  </p>
                </div>

                <p className="text-[13px] md:text-sm leading-relaxed text-gray-700">
                  {mainMember.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                  {[
                    "SmartDCM",
                    "Cloud telephony",
                    "CRM strategy",
                    "Enterprise rollouts",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] rounded-full bg-[#f4f9ff] px-2.5 py-0.5 text-[#0B3760] border border-[#e6f0fb]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LinkedIn button */}
                <div className="flex justify-center sm:justify-start pt-1">
                  <a
                    href={mainMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#0A66C2] bg-[#006699]/10 px-3 py-1 text-[11px] font-medium text-[#0A66C2] hover:bg-[#0A66C2]/12 transition-colors"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#0A66C2] text-[10px] font-bold text-white">
                      in
                    </span>
                    <span>View LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Founder stats row */}
            <div className="grid grid-cols-3 gap-2 border-t border-[#eef4fb] pt-4">
              {mainMember.stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center rounded-xl bg-[#fbfdff] px-2.5 py-2.5 border border-[#eef6ff]"
                >
                  <p className="text-[10px] uppercase tracking-[0.14em] text-gray-500">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-base md:text-lg font-semibold text-[#0B3760]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Team grid (compressed for mobile) */}
        <div className="flex flex-col gap-4 md:gap-5">
          {/* Intro strip */}
          <div className="rounded-2xl bg-white/95 border border-[#eef4fb] px-4 py-3 text-[12px] md:text-sm text-gray-700 shadow-sm flex items-start gap-2.5">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p>
              Cross-functional team across{" "}
              <span className="font-semibold text-[#006699]">
                product, engineering, CX & delivery
              </span>{" "}
              working as one squad with clients.
            </p>
          </div>

          {/* Grid of members */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
            {members.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="relative group rounded-2xl bg-white/95 border border-[#d6e5f5] px-2.5 pb-3 pt-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden"
              >
                <div className="relative flex flex-col items-center text-center gap-2">
                  <div className="w-16 h-16 md:w-18 md:h-18 rounded-full overflow-hidden shadow border border-[#006699]/70">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-[13px] md:text-sm font-bold text-[#0B3760]">
                      {m.name}
                    </h4>
                    <p className="text-[11px] md:text-xs font-semibold text-[#006699] mt-0.5">
                      {m.role}
                    </p>
                  </div>

                  {/* Bottom: chips + LinkedIn */}
                  <div className="mt-1 w-full flex items-center justify-between gap-1.5">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#f4f9ff] text-[#0B3760] border border-[#e6f0fb]">
                        Core team
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#ecf8f3] text-emerald-700 border border-emerald-100">
                        Hands-on
                      </span>
                    </div>

                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-[#0A66C2] bg-[#0A66C2]/6 h-7 w-7 text-[10px] font-bold text-[#0A66C2] hover:bg-[#0A66C2]/14 transition-colors"
                      aria-label={`${m.name} on LinkedIn`}
                    >
                      in
                    </a>
                  </div>

                  {/* subtle hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#006699]/6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
