// =======================
// Ametecs Mega Header (FINAL)
// =======================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

/* =======================
   WHO WE ARE
======================= */

const whoWeAre = [
  {
    id: "about",
    label: "About Us",
    title: "About Ametecs India Pvt Ltd",
    description:
      "We build enterprise software, AI products and digital solutions for businesses, banks and agencies.",
    image: "/images/about.jpg",
    link: "/about",
    buttonText: "About Us",
  },
  {
    id: "partners",
    label: "Partnership",
    title: "Strategic Partnerships",
    description:
      "Partner with Ametecs for software, AI products and technology integrations.",
    image: "/images/partners.jpg",
    link: "#partnership",
    buttonText: "Explore Partnership",
  },
  {
    id: "blogs",
    label: "Blogs",
    title: "Insights & Updates",
    description:
      "Product, AI and software insights from real-world enterprise experience.",
    image: "/images/blogs.jpg",
    link: "/blogs",
    buttonText: "Read Blogs",
  },
  {
    id: "team",
    label: "Our Team",
    title: "Leadership & Management",
    description:
      "Experienced leaders driving scalable software and AI platforms.",
    image: "/images/team.jpg",
    link: "#teamsection",
    buttonText: "Meet Leadership",
  },
];

/* =======================
   WHAT WE DO
======================= */

const whatWeDo = [
  {
    id: "services",
    label: "Services",
    items: [
      {
        title: "App Development",
        subtitle: "Android, iOS & cross-platform apps",
        link: "/services/app-development",
      },
      {
        title: "Web Development",
        subtitle: "Business & enterprise websites",
        link: "/services/web-development",
      },
      {
        title: "UI / UX Design",
        subtitle: "User-centric product design",
        link: "/services/ui-ux-design",
      },
      {
        title: "Digital Marketing",
        subtitle: "SEO, PPC & growth marketing",
        link: "/services/digital-marketing",
      },
      {
        title: "Cloud Solutions",
        subtitle: "Cloud setup, migration & DevOps",
        link: "/services/cloud-solutions",
      },
      {
        title: "AI Solutions",
        subtitle: "Custom AI & automation systems",
        link: "/services/ai-solutions",
      },
      {
        title: "Product Engineering",
        subtitle: "Scalable SaaS product development",
        link: "/services/product-engineering",
      },
      {
        title: "Staff Recruiting",
        subtitle: "Tech & non-tech hiring",
        link: "/services/staff-recruiting",
      },
    ],
  },
  {
    id: "products",
    label: "Products",
    items: [
      {
        title: "SmartDCM",
        subtitle: "AI collection CRM & dialer",
        link: "https://ametecsindia.com/smartdcm.html",
      },
      {
        title: "LeadGER",
        subtitle: "Telecalling & lead management CRM",
        link: "https://ametecsindia.com/leadger.html",
      },
      {
        title: "Telozar",
        subtitle: "Remote staff & BPO control",
        link: "https://ametecsindia.com/telozar.html",
      },
      {
        title: "SmartPayroll",
        subtitle: "HR & payroll automation",
        link: "https://ametecsindia.com/smartpayroll.html",
      },
      {
        title: "CoreOps CRM",
        subtitle: "Enterprise workflow CRM",
        link: "https://ametecsindia.com/coreops-crm.html",
      },
    ],
  },
];

/* =======================
   SCROLL HELPER
======================= */

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 120;
  window.scrollTo({ top: y, behavior: "smooth" });
}

/* =======================
   HEADER
======================= */

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [openMega, setOpenMega] = useState(null);
  const [whoIndex, setWhoIndex] = useState(0);
  const [whatIndex, setWhatIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMega = () => setOpenMega(null);

  const handleLogoClick = () => {
    closeMega();
    location.pathname === "/"
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : navigate("/");
  };

  const handleWhoItemClick = (item) => {
    closeMega();

    if (item.id === "team") {
      location.pathname === "/"
        ? scrollToId("teamsection")
        : navigate("/#teamsection");
      return;
    }

    if (item.id === "partners") {
      location.pathname === "/"
        ? scrollToId("partnership")
        : navigate("/#partnership");
      return;
    }

    navigate(item.link);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow">
      {/* TOP BAR */}
      <div className="container mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
        {/* LOGO */}
        <div className="cursor-pointer" onClick={handleLogoClick}>
          <img src="/logo.png" alt="Ametecs" className="h-12 lg:h-14" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          <div onMouseEnter={() => setOpenMega("who")} className="cursor-pointer">
            <span className="flex items-center gap-1">
              Who We Are <FiChevronDown />
            </span>
          </div>

          <div onMouseEnter={() => setOpenMega("what")} className="cursor-pointer">
            <span className="flex items-center gap-1">
              What We Do <FiChevronDown />
            </span>
          </div>

          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex bg-blue-600 text-white px-5 py-2 rounded-full text-sm"
        >
          Get in touch
        </Link>

        {/* MOBILE */}
        <button className="lg:hidden text-2xl" onClick={() => setMobileOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* WHO WE ARE MEGA */}
      <AnimatePresence>
        {openMega === "who" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onMouseLeave={closeMega}
            className="hidden lg:block absolute w-full bg-white shadow-lg border-t"
          >
            <div className="container mx-auto px-6 py-8 flex gap-8">
              <div className="w-64 border-r">
                {whoWeAre.map((item, i) => (
                  <button
                    key={item.id}
                    onMouseEnter={() => setWhoIndex(i)}
                    onClick={() => handleWhoItemClick(item)}
                    className={`block w-full text-left px-4 py-3 rounded-lg ${
                      i === whoIndex
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 flex gap-6">
                <img
                  src={whoWeAre[whoIndex].image}
                  className="w-[40%] h-64 object-cover rounded-xl"
                  alt=""
                />
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {whoWeAre[whoIndex].title}
                  </h3>
                  <p className="text-sm mb-4">
                    {whoWeAre[whoIndex].description}
                  </p>
                  <button
                    onClick={() => handleWhoItemClick(whoWeAre[whoIndex])}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm"
                  >
                    {whoWeAre[whoIndex].buttonText}
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WHAT WE DO MEGA */}
      <AnimatePresence>
        {openMega === "what" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onMouseLeave={closeMega}
            className="hidden lg:block absolute w-full bg-white shadow-lg border-t"
          >
            <div className="container mx-auto px-6 py-8 flex gap-8">
              <div className="w-64 border-r">
                {whatWeDo.map((item, i) => (
                  <button
                    key={item.id}
                    onMouseEnter={() => setWhatIndex(i)}
                    className={`block w-full text-left px-4 py-3 rounded-lg ${
                      i === whatIndex
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-6">
                {whatWeDo[whatIndex].items.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    onClick={closeMega}
                    className="flex gap-3 p-3 rounded-lg hover:bg-blue-50"
                  >
                    <div className="w-10 h-10 border rounded-full flex items-center justify-center text-blue-700 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {item.subtitle}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
