import { motion } from "framer-motion";

const PRIMARY = "#006699";

export default function AboutAmetecs() {
  return (
    <section className="relative w-full py-24 bg-[#006699] overflow-hidden">
      
      {/* SUBTLE BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-white/10 rounded-full blur-[120px]"
          animate={{ y: [0, 20, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-white/10 rounded-full blur-[140px]"
          animate={{ y: [0, -20, 0], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          {/* LEFT – IMAGE COLLAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Image */}
            <div className="relative rounded-[40px] overflow-hidden shadow-xl">
              <img
                src="/Planning.gif"
                alt="Ametecs Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Small Image */}
            <div className="absolute -top-10 -left-10 w-36 h-36 rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white">
              <img
                src="/Development.gif"
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Small Image */}
            <div className="absolute bottom-10 -left-12 w-40 h-40 rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white">
              <img
                src="/Development code.gif"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT – CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            {/* Small label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wide">
                About Ametecs
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              About{" "}
              <span className="underline underline-offset-4">
                Ametecs Technology
              </span>
            </h2>

            {/* Paragraphs */}
            <p className="text-white/90 leading-relaxed mb-5">
              Ametecs is a technology-driven company focused on building scalable,
              secure, and innovative digital solutions. We specialize in web
              development, mobile applications, AI-powered platforms, and
              enterprise-grade software tailored to business needs.
            </p>

            <p className="text-white/85 leading-relaxed mb-8">
              Our mission is to empower businesses through modern technology,
              intelligent automation, and user-centric design. From startups to
              large enterprises, we partner with clients to deliver measurable
              growth and long-term digital success.
            </p>

            {/* CTA */}
            <a
              href="/about"
              className="
                inline-flex items-center gap-2
                px-7 py-3 rounded-full
                bg-white text-[#006699] font-semibold
                hover:bg-white/90
                transition-colors duration-300
              "
            >
              Explore More
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
