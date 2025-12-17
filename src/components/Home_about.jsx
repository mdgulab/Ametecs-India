import { motion } from "framer-motion";

export default function AboutAmetecs() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#004e73] overflow-hidden">

      {/* SUBTLE BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] bg-white/10 rounded-full blur-[120px]"
          animate={{ y: [0, 20, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 -right-32 w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] bg-white/10 rounded-full blur-[140px]"
          animate={{ y: [0, -20, 0], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT – IMAGE COLLAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl sm:rounded-[40px] overflow-hidden shadow-xl">
              <img
                src="/Planning.gif"
                alt="Ametecs Team"
                className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
              />
            </div>

            {/* Floating images – desktop only */}
            <div className="hidden lg:block absolute -top-10 -left-10 w-36 h-36 rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white">
              <img
                src="/Development.gif"
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden lg:block absolute bottom-10 -left-12 w-40 h-40 rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white">
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
            className="lg:col-span-6 text-center lg:text-left"
          >
            {/* Small label */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="h-[2px] w-8 sm:w-10 bg-white" />
              <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide">
                About Ametecs
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5 sm:mb-6">
              About{" "}
              <span className="underline underline-offset-4">
                Ametecs Technology
              </span>
            </h2>

            {/* Paragraphs */}
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 sm:mb-5">
              Ametecs is a technology-driven company focused on building scalable,
              secure, and innovative digital solutions. We specialize in web
              development, mobile applications, AI-powered platforms, and
              enterprise-grade software tailored to business needs.
            </p>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6 sm:mb-8">
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
                px-6 sm:px-7 py-3 rounded-full
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
