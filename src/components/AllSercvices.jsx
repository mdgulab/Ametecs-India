import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBullhorn,
  FaPaintBrush,
  FaCloud,
  FaCogs,
  FaGlobe,
  FaBrain,
  FaUsers,
} from "react-icons/fa";

const services = [
  {
    title: "Digital Marketing",
    icon: FaBullhorn,
    desc:
      "Data-driven digital marketing strategies to increase visibility, engagement and conversions across all channels.",
    points: [
      "SEO, SEM & performance marketing",
      "Social media growth & branding",
      "Lead generation & campaign management",
      "Analytics, tracking & optimization",
    ],
    image: "/services/digital-marketing.gif",
  },
  {
    title: "UI/UX Design",
    icon: FaPaintBrush,
    desc:
      "Human-centric interface designs focused on usability, clarity and visual excellence.",
    points: [
      "UX research & user journey mapping",
      "Wireframing & interactive prototyping",
      "UI design systems & branding",
      "Usability testing & optimization",
    ],
    image: "/Services/UI.gif",
  },
  {
    title: "Cloud Solutions",
    icon: FaCloud,
    desc:
      "Secure, scalable cloud architectures designed for performance and reliability.",
    points: [
      "Cloud migration & modernization",
      "AWS, Azure & GCP solutions",
      "DevOps & cloud automation",
      "High availability & security",
    ],
    image: "/Services/cloud.gif",
  },
  {
    title: "Product Engineering",
    icon: FaCogs,
    desc:
      "End-to-end product engineering from concept to scalable production systems.",
    points: [
      "Product strategy & architecture",
      "MVP & rapid prototyping",
      "Scalable system development",
      "Continuous improvement & support",
    ],
    image: "/Services/product.gif",
  },
  {
    title: "Web Development",
    icon: FaGlobe,
    desc:
      "Fast, secure and modern web applications tailored to business needs.",
    points: [
      "Custom web application development",
      "Responsive & high-performance UI",
      "API & backend integration",
      "Security & performance optimization",
    ],
    image: "/Services/fullstack.gif",
  },
  {
    title: "Artificial Intelligence",
    icon: FaBrain,
    desc:
      "AI-powered solutions that automate processes and unlock actionable insights.",
    points: [
      "Machine learning & data modeling",
      "AI automation & intelligent workflows",
      "Predictive analytics & insights",
      "AI-powered business solutions",
    ],
    image: "/Services/ai.gif",
  },
  {
    title: "Staff Recruiting",
    icon: FaUsers,
    desc:
      "Dedicated hiring solutions to build skilled teams quickly and efficiently.",
    points: [
      "Technical & non-technical hiring",
      "Dedicated resource deployment",
      "Contract & full-time staffing",
      "Talent screening & onboarding",
    ],
    image: "/Services/Staff.gif",
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-14 sm:py-20 bg-[#F4FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0A2540] mb-8 sm:mb-12">
          Empowering Your Business with{" "}
          <span className="text-[#006699]">Innovative Tech Solutions</span>
        </h2>

        {/* TABS (mobile scroll) */}
        <div className="flex gap-3 mb-10 sm:mb-14 overflow-x-auto scrollbar-hide justify-start sm:justify-center">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isActive = i === active;

            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`
                  shrink-0 flex items-center gap-3
                  px-4 py-2.5 rounded-full
                  border transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#006699] text-white border-[#006699] shadow-sm"
                      : "bg-white border-[#D9EAF0] text-[#006699]"
                  }
                `}
              >
                <span
                  className={`
                    w-9 h-9 flex items-center justify-center rounded-full
                    ${
                      isActive
                        ? "bg-white text-[#006699]"
                        : "bg-[#006699]/10 text-[#006699]"
                    }
                  `}
                >
                  <Icon className="text-base" />
                </span>

                {isActive && (
                  <span className="text-sm font-semibold whitespace-nowrap">
                    {service.title}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          >
            {/* IMAGE */}
            <div>
              <div className="rounded-3xl overflow-hidden border border-[#D9EAF0] shadow-sm">
                <img
                  src={services[active].image}
                  alt={services[active].title}
                  className="w-full h-[220px] sm:h-[280px] md:h-[360px] object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-3 sm:mb-4">
                {services[active].title}
              </h3>

              <p className="text-sm sm:text-base text-[#425466] mb-5 sm:mb-6 leading-relaxed">
                {services[active].desc}
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
                {services[active].points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#425466]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00B4D8]" />
                    {point}
                  </li>
                ))}
              </ul>

              <button
                className="
                  w-full sm:w-auto
                  px-6 py-3 rounded-md font-semibold text-white
                  bg-[#006699] hover:bg-[#005580]
                  transition
                "
              >
                Explore More →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
