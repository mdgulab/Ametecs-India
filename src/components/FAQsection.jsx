import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const PRIMARY = "#006699";

const faqs = [
  {
    q: "What is Ametecs?",
    a: "Ametecs is a technology-driven digital solutions company specializing in software development, AI-powered platforms, enterprise applications, and digital transformation services for global businesses.",
  },
  {
    q: "What services does Ametecs offer?",
    a: "Ametecs offers Web Development, Mobile App Development, Artificial Intelligence solutions, Digital Marketing, Cloud Solutions, Product Engineering, UI/UX Design, Virtual & Augmented Reality, and Staff Recruiting services.",
  },
  {
    q: "Which industries does Ametecs serve?",
    a: "We serve industries including Banking & NBFCs, FinTech, Healthcare, Real Estate, E-commerce, Education, Logistics, BPOs, Startups, and Enterprises.",
  },
  {
    q: "Where is Ametecs located?",
    a: "Ametecs is headquartered in India and works with global clients across the US, Middle East, Europe, and Asia.",
  },
  {
    q: "How can I contact Ametecs?",
    a: "You can contact us through our website contact form, email, or by requesting a callback from our team.",
  },
  {
    q: "Why choose Ametecs for digital solutions?",
    a: "We combine strong technical expertise, scalable architecture, security-first practices, and a client-focused approach to deliver future-ready digital solutions.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-24 bg-[#f6fbff]">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-18">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3760]">
            Frequently Asked Questions{" "}
            <span className="text-[#006699]">(FAQs)</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Clear answers to common questions about our services, process, and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT – FAQ LIST */}
          <div className="lg:col-span-8 space-y-5">
            {faqs.map((item, i) => {
              const isOpen = active === i;

              return (
                <motion.div
                  key={i}
                  layout
                  transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                  className="rounded-2xl bg-[#006699] shadow-md border border-[#006699]/10"
                >
                  {/* Question */}
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#006699]" />
                      <span className="font-semibold text-[#ffffff]">
                        {item.q}
                      </span>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#ffffff]"
                    >
                      <FiChevronDown size={20} />
                    </motion.span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="px-6 pb-6"
                      >
                        <div className="rounded-xl bg-[#ffffff]/90 px-5 py-4 text-gray-700 leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT – INFO BLOCK */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="rounded-3xl bg-gradient-to-br from-[#006699] to-[#00557a] p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-3">
                Still have questions?
              </h3>
              <p className="text-sm text-white/80 mb-6">
                If you didn’t find your answer here, our team is always ready to help you.
              </p>

              <a
                href="#contact"
                className="inline-block rounded-full bg-white text-[#006699]
                           px-6 py-3 text-sm font-semibold shadow hover:bg-white/90"
              >
                Contact Our Team →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
