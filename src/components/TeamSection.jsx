import { motion } from "framer-motion";

export default function TeamSection() {
  const mainMember = {
    img: "/team/main.jpg",
    name: "Bharath",
    role: "*****",
    desc: "Leading Ametecs with 10+ years of expertise in CRM, SmartDCM, cloud telephony and enterprise automation.",
  };

  const members = [
    { img: "/team/t1.jpg", name: "Ravi Teja", role: "*****" },
    { img: "/team/t2.jpg", name: "Lakshmi", role: "*****" },
    { img: "/team/t3.jpg", name: "Keerthi", role: "*****" },
    { img: "/team/t4.jpg", name: "Suresh", role: "*****" },
    { img: "/team/t5.jpg", name: "Naresh", role: "*****" },
  ];

  return (
    <section 
     id="teamsection"
    className="py-24 relative overflow-hidden 
      bg-gradient-to-b from-[#F8FBFF] to-[#E9F1FF] dark:from-[#0A0F1F] dark:to-[#0E1628]">

      {/* Ametecs floating blur orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/20 blur-[110px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <h2 className="text-5xl font-extrabold text-center 
        text-[#0A2540] dark:text-white mb-20">
        Meet Our Team
      </h2>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* LEFT — GLASSMORPHISM CEO CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative p-10 rounded-3xl shadow-xl 
            backdrop-blur-xl bg-white/10 dark:bg-white/5
            border border-white/30 dark:border-white/10
            flex flex-col items-center text-center
            hover:shadow-blue-500/40 hover:-translate-y-1
            transition-all duration-500
          "
        >
          {/* Gradient Border Glow */}
          <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br 
            from-blue-400 to-cyan-400 opacity-40"></div>

          <div className="relative z-10">
            <div className="w-44 h-44 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/70 dark:border-white/20 mb-6">
              <img src={mainMember.img} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-3xl font-bold text-[#0A2540] dark:text-white">
              {mainMember.name}
            </h3>

            <p className="text-[#0066FF] dark:text-[#4ABEFF] font-semibold text-lg mt-1">
              {mainMember.role}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
              {mainMember.desc}
            </p>
          </div>
        </motion.div>

        {/* RIGHT — TEAM GRID */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
                text-center bg-white dark:bg-[#111827]
                p-6 rounded-2xl shadow-md
                hover:shadow-xl hover:shadow-blue-300/30
                dark:hover:shadow-blue-600/20
                transition-all duration-300 cursor-pointer
              "
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md border-4 border-[#E2ECFF] dark:border-gray-700">
                <img src={m.img} className="w-full h-full object-cover" />
              </div>

              <h4 className="text-xl font-bold mt-4 text-[#0A2540] dark:text-white">
                {m.name}
              </h4>

              <p className="text-[#0066FF] dark:text-[#4ABEFF] font-semibold text-sm mt-1">
                {m.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
