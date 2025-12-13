import { motion } from "framer-motion";
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
  { title: "Digital Marketing", icon: FaBullhorn },
  { title: "Augmented Reality", icon: FaCube },
  { title: "Virtual Reality", icon: FaVrCardboard },
  { title: "UI/UX Design", icon: FaPaintBrush },
  { title: "Cloud Solutions", icon: FaCloud },
  { title: "Product Engineering", icon: FaCogs },
  { title: "Web Development", icon: FaGlobe },
  { title: "Artificial Intelligence", icon: FaBrain },
  { title: "Staff Recruiting", icon: FaUsers },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-24 bg-[#f6fbff]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3760] mb-14">
          Empowering Your Business with Innovative{" "}
          <span className="text-[#006699] underline underline-offset-4">
            Tech Solutions
          </span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="
                  group relative rounded-2xl bg-white p-8 shadow-lg
                  border border-[#006699]/15
                  hover:bg-[#006699]
                  transition-colors duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14 rounded-full mb-5 flex items-center justify-center
                    bg-[#006699]/10 text-[#006699]
                    group-hover:bg-white
                    group-hover:text-[#006699]
                    transition-all duration-300
                  "
                >
                  <Icon className="text-2xl" />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-lg font-semibold mb-3 text-[#0B3760]
                    group-hover:text-white
                    transition-colors
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-sm text-gray-600 leading-relaxed
                    group-hover:text-white/90
                    transition-colors
                  "
                >
                  We deliver scalable, future-ready solutions tailored to your
                  business goals.
                </p>

                {/* CTA */}
                <div
                  className="
                    mt-4 text-sm font-semibold text-[#006699]
                    group-hover:text-white
                    transition-colors
                  "
                >
                  Read More →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
