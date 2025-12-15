import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBullhorn,
  FaVrCardboard,
  FaCube,
  FaPaintBrush,
  FaCloud,
  FaCogs,
  FaGlobe,
  FaBrain,
  FaUsers,
} from "react-icons/fa";

const PRIMARY = "#006699";

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
    image: "/Services/digital_Marketing.gif",
  },
  {
    title: "Augmented Reality",
    icon: FaCube,
    desc:
      "Immersive AR experiences that bridge the gap between physical and digital worlds.",
    points: [
      "AR product visualization",
      "Interactive brand experiences",
      "WebAR & mobile AR applications",
      "Enterprise-grade AR solutions",
    ],
    image: "/Services/AR.gif",
  },
  {
    title: "Virtual Reality",
    icon: FaVrCardboard,
    desc:
      "High-impact VR solutions for training, simulations and interactive experiences.",
    points: [
      "VR training & simulations",
      "Virtual tours & demonstrations",
      "Metaverse-ready experiences",
      "Custom VR application development",
    ],
    image: "/Services/vr.gif",
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
    image: "/services/cloud.jpg",
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
    image: "/services/product.jpg",
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
    image: "/services/web.jpg",
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
    image: "/services/ai.jpg",
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
    image: "/services/recruiting.jpg",
  },
];


export default function ServicesTabs() {
  const [active, setActive] = useState(0);
  const ActiveIcon = services[active].icon;

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3760] mb-10">
          Empowering Your Business with Innovative{" "}
          <span className="text-[#006699] underline underline-offset-4">
            Tech Solutions
          </span>
        </h2>

        {/* TOP ICON TABS */}
       {/* TOP ICON TABS */}
<div className="flex flex-wrap justify-center gap-4 mb-14">
  {services.map((service, i) => {
    const Icon = service.icon;
    const isActive = i === active;

    return (
      <button
        key={i}
        onClick={() => setActive(i)}
        className={`
          flex items-center gap-3 px-4 py-3 rounded-full border
          transition-all duration-300
          ${
            isActive
              ? "bg-[#006699] text-white border-[#006699] shadow-md"
              : "bg-white border-gray-200 hover:border-[#006699]"
          }
        `}
      >
        {/* ICON */}
        <span
          className={`
            w-10 h-10 flex items-center justify-center rounded-full
            transition-colors duration-300
            ${
              isActive
                ? "bg-white text-[#006699]"
                : "bg-[#006699]/10 text-[#006699]"
            }
          `}
        >
          <Icon className="text-lg" />
        </span>

        {/* TEXT (ONLY WHEN ACTIVE) */}
        {isActive && (
          <span className="text-sm font-semibold whitespace-nowrap">
            {service.title}
          </span>
        )}
      </button>
    );
  })}
</div>


   <AnimatePresence mode="wait">
  <motion.div
    key={active}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.35 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
  >
    {/* IMAGE */}
    <img
      src={services[active].image}
      alt={services[active].title}
      className="w-full rounded-3xl shadow-lg"
    />

  {/* CONTENT */}
<div>
  <h3 className="text-2xl font-bold text-[#0B3760] mb-3">
    {services[active].title}
  </h3>

  <p className="text-gray-600 leading-relaxed mb-5">
    {services[active].desc}
  </p>

  {/* KEY POINTS */}
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
    {services[active].points.map((point, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#006699]" />
        <span className="text-sm text-gray-700">{point}</span>
      </li>
    ))}
  </ul>

  <button className="px-6 py-3 bg-[#006699] text-white rounded-md font-semibold">
    Explore More →
  </button>
</div>

  </motion.div>
</AnimatePresence>

      </div>
    </section>
  );
}
