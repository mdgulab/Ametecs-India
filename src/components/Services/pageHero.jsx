import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, points = [] }) {
  return (
    <section className="relative bg-[#006699] overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#00B4D8] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -left-32 w-[360px] h-[360px] bg-white/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {title}
        </motion.h1>

        <p className="text-xl text-white/85 max-w-3xl mb-8">
          {subtitle}
        </p>

        {/* VALUE POINTS */}
        <div className="flex flex-wrap gap-4">
          {points.map((p, i) => (
            <span
              key={i}
              className="bg-white/15 px-4 py-2 rounded-full text-sm"
            >
              ✓ {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
