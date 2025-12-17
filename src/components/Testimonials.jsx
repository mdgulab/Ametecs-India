import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Anonymous",
    role: "Executive, IT Services",
    text:
      "We’re impressed with their ability to communicate well and deliver the project on time.",
  },
  {
    name: "Tom Mangan",
    role: "President & Owner, Lead Orchard",
    text:
      "The most impressive thing about working with Ametecs is that they delivered exactly what they promised.",
  },
  {
    name: "Prashant Pandey",
    role: "Vineyard Mgmt Solution Company",
    text:
      "Ametecs provided us with very good developers who were able to adapt quickly.",
  },
  {
    name: "Lawson Ellinor",
    role: "CEO, Image API",
    text:
      "These improvements directly impacted our business, translating to more leads.",
  },
];

const PRIMARY = "#006699";

export default function Testimonials() {
  return (
    <section className="w-full bg-[#004e73] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Top Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start mb-12 sm:mb-16 lg:mb-20">

          {/* Left Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Hear what our clients <br className="hidden sm:block" /> say About us
            </h2>
            <p className="mt-3 sm:mt-4 text-white/70 max-w-lg text-sm sm:text-base leading-relaxed">
              Our core values are the heart of all that we do. They are integrated
              into our daily work lives and help us remember our customers always
              comes first.
            </p>
          </div>

          {/* Right Stat Box */}
          <div className="flex lg:justify-end">
            <div
              className="rounded-xl px-6 sm:px-8 py-5 sm:py-6 text-white font-bold text-sm sm:text-lg shadow-lg"
              style={{ background: PRIMARY }}
            >
              97% Customer <br />
              Satisfaction based <br />
              on 550+ reviews
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-xl shadow-lg px-5 sm:px-6 pt-12 sm:pt-14 pb-7 sm:pb-8"
            >
              {/* Avatar */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-4 bg-white"
                  style={{ borderColor: PRIMARY }}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d9edf6]" />
                </div>
              </div>

              {/* Name */}
              <h4 className="text-base sm:text-lg font-bold text-[#062a3a]">
                {item.name}
              </h4>

              <p className="text-xs sm:text-sm text-[#006699] font-medium mt-1">
                {item.role}
              </p>

              {/* Quote icon */}
              <FaQuoteRight
                className="absolute top-5 right-5 sm:top-6 sm:right-6 text-2xl sm:text-3xl opacity-20"
                style={{ color: PRIMARY }}
              />

              {/* Text */}
              <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.text}
              </p>

              {/* Read more */}
              <button
                className="mt-5 sm:mt-6 text-xs sm:text-sm font-semibold"
                style={{ color: PRIMARY }}
              >
                Read More
              </button>

              {/* Corner accent */}
              <div
                className="absolute bottom-0 left-0 w-9 h-9 sm:w-10 sm:h-10"
                style={{
                  background: PRIMARY,
                  clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
